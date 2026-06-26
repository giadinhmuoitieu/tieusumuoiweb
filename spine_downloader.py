import os
import re
import sys
import urllib.request
import urllib.parse

def log(msg):
    print(f"[*] {msg}")

def download_file(url, output_path):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            data = response.read()
            os.makedirs(os.path.dirname(output_path), exist_ok=True)
            with open(output_path, "wb") as f:
                f.write(data)
            print(f"    [+] Tải thành công: {url} -> {output_path} ({len(data)} bytes)")
            return True
    except Exception as e:
        print(f"    [-] Lỗi khi tải {url}: {e}")
        return False

def scrape_spine(target_url, output_dir):
    log(f"Đang phân tích trang web mục tiêu: {target_url}")
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
    
    # 1. Fetch main HTML page
    req = urllib.request.Request(target_url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
    except Exception as e:
        log(f"Không thể tải trang chính: {e}")
        return
        
    # 2. Tìm tất cả các file JavaScript
    js_files = re.findall(r'src="([^"]+\.js)"', html)
    js_links = re.findall(r'href="([^"]+\.js)"', html)
    all_js_paths = sorted(list(set(js_files + js_links)))
    
    log(f"Tìm thấy {len(all_js_paths)} file JS được nạp ban đầu.")
    
    # 3. Quét các file JS ban đầu để tìm các chunk JS khác hoặc các đường dẫn Spine trực tiếp
    spine_patterns = []
    
    # Một số đường dẫn Spine được định nghĩa sẵn mà chúng ta đã phân tích thành công:
    known_spines = [
        "spine/pc/dengluye",
        "spine/mb/dengluye"
    ]
    
    for js_path in all_js_paths:
        js_url = urllib.parse.urljoin(target_url, js_path)
        log(f"Đang quét file JS: {js_url}")
        
        try:
            req_js = urllib.request.Request(js_url, headers=headers)
            with urllib.request.urlopen(req_js) as resp_js:
                js_content = resp_js.read().decode('utf-8')
                
                # Tìm các liên kết JS được nạp động
                dyn_js_files = re.findall(r'["\']([^"\']+\.js)["\']', js_content)
                for dyn_js in dyn_js_files:
                    if dyn_js.startswith('static/js/') or '/static/js/' in dyn_js:
                        dyn_js_url = urllib.parse.urljoin(target_url, dyn_js)
                        log(f"  Phát hiện file JS động: {dyn_js_url}")
                        # Quét sâu thêm file JS động này
                        try:
                            req_dyn = urllib.request.Request(dyn_js_url, headers=headers)
                            with urllib.request.urlopen(req_dyn) as resp_dyn:
                                dyn_content = resp_dyn.read().decode('utf-8')
                                # Tìm kiếm patterns spine
                                matches = re.findall(r'spine/[a-zA-Z0-9_\-\/]+', dyn_content)
                                spine_patterns.extend(matches)
                        except Exception:
                            pass
                
                # Tìm trực tiếp trong file JS hiện tại
                matches = re.findall(r'spine/[a-zA-Z0-9_\-\/]+', js_content)
                spine_patterns.extend(matches)
        except Exception as e:
            log(f"Lỗi khi quét file JS {js_path}: {e}")
            
    # Hợp nhất các đường dẫn Spine tìm được
    spine_patterns = sorted(list(set(spine_patterns + known_spines)))
    log(f"Danh sách các đường dẫn Spine tiềm năng: {spine_patterns}")
    
    # Các đuôi mở rộng cần quét thử
    extensions = [".atlas", ".skel", ".json", ".png"]
    
    # 4. Thực hiện quét và tải về
    downloaded_count = 0
    for spine_base in spine_patterns:
        # Làm sạch đường dẫn
        spine_base = spine_base.strip("/")
        log(f"Bắt đầu thử tải bộ Spine: {spine_base}")
        
        # Quét và tải các file tương ứng
        for ext in extensions:
            file_url = urllib.parse.urljoin(target_url, f"{spine_base}{ext}")
            local_filename = os.path.join(output_dir, spine_base + ext)
            
            # Tải tệp tin
            success = download_file(file_url, local_filename)
            if success:
                downloaded_count += 1
                
    log(f"Hoàn tất! Tổng cộng đã tải xuống {downloaded_count} tệp tin vào thư mục '{output_dir}'.")

if __name__ == "__main__":
    target = "https://tutien.vsgame.vn/"
    out = "spine_assets"
    
    if len(sys.argv) > 1:
        target = sys.argv[1]
    if len(sys.argv) > 2:
        out = sys.argv[2]
        
    print("==================================================")
    print("      SPINE 2D SCROLLER & WEB ASSETS SCRAPER      ")
    print("==================================================")
    scrape_spine(target, out)
