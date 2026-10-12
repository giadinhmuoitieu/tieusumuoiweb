import json
import os

with open('/mnt/d/discordbot/uyensumuoi/YiXianPai_Discord_Game_Pack/data/all_cards.json', 'r', encoding='utf-8') as f:
    cards = json.load(f)

phase_names = {
    1: 'Luyện Khí (Giai 1)',
    2: 'Trúc Cơ (Giai 2)',
    3: 'Kim Đan (Giai 3)',
    4: 'Nguyên Anh (Giai 4)',
    5: 'Hóa Thần (Giai 5)',
    6: 'Linh Giới / Tiên Mệnh (Giai 6)'
}

optimized = []
for c in cards:
    levels = []
    card_category = 'VO_KY'
    tags = set()
    
    for lvl in c.get('levels', []):
        cost_qi = lvl.get('cost_qi', 0)
        gain_qi = lvl.get('gain_qi', 0)
        atk = lvl.get('attack', 0)
        defense = lvl.get('def', 0)
        is_chase = bool(lvl.get('is_chase'))
        jian_yi = lvl.get('jian_yi', 0)
        gua_xiang = lvl.get('gua_xiang', 0)
        physique = lvl.get('physique', 0)
        charge_qi = lvl.get('charge_qi', 0)
        atk_count = lvl.get('attack_count', 1)
        is_consume = bool(lvl.get('is_consume'))
        is_continuous = bool(lvl.get('is_continuous'))
        
        lvl_tags = []
        if is_chase:
            lvl_tags.append('Tái Động')
        if jian_yi:
            lvl_tags.append(f'Kiếm Ý +{jian_yi}')
        if gua_xiang:
            lvl_tags.append(f'Quẻ Tượng +{gua_xiang}')
        if physique:
            lvl_tags.append(f'Thể Phách +{physique}')
        if charge_qi:
            lvl_tags.append(f'Tụ Khí +{charge_qi}')
        if is_consume:
            lvl_tags.append('Tiêu Hao')
        if is_continuous:
            lvl_tags.append('Liên Vân/Liên Hoàn')
        if atk_count > 1:
            lvl_tags.append(f'{atk_count} Liên Kích')
            
        tags.update(lvl_tags)
        
        levels.append({
            'lvl': lvl.get('level', 1),
            'cost': cost_qi,
            'gain': gain_qi,
            'atk': atk,
            'def': defense,
            'tags': lvl_tags,
            'desc': (lvl.get('desc_vi') or lvl.get('desc_en') or lvl.get('desc_cn') or '').strip()
        })
    
    # Classify overall card category based on level 1
    if levels:
        l1 = levels[0]
        cost1 = l1['cost']
        atk1 = l1['atk']
        def1 = l1['def']
        if cost1 >= 3:
            card_category = 'THAN_THONG'
        elif cost1 >= 1:
            card_category = 'TUYET_KY'
        elif atk1 > 0:
            card_category = 'VO_KY'
        else:
            card_category = 'THAN_PHAP'
            
    # Map sect to school key
    sect_str = c.get('sect', '')
    school_key = 'neutral'
    school_name = 'Trung Lập / Phụ Nghề'
    if 'Vân Linh' in sect_str or 'Sword' in sect_str:
        school_key = 'kiem_tu'
        school_name = 'Vân Linh Kiếm Tông'
    elif 'Thất Tinh' in sect_str or 'Seven' in sect_str:
        school_key = 'tinh_tu'
        school_name = 'Thất Tinh Các'
    elif 'Ngũ Hành' in sect_str or 'Five' in sect_str:
        school_key = 'phap_tu'
        school_name = 'Ngũ Hành Đạo Minh'
    elif 'Đoán Huyền' in sect_str or 'Body' in sect_str:
        school_key = 'the_tu'
        school_name = 'Đoán Huyền Tông'
    
    phase_num = c.get('phase', 1)
    
    optimized.append({
        'id': str(c.get('base_id', '')),
        'name': c.get('name_vi') or c.get('name_cn') or 'Vô Danh Bí Tịch',
        'nameCn': c.get('name_cn', ''),
        'school': school_key,
        'sectName': school_name,
        'phase': phase_num,
        'phaseName': phase_names.get(phase_num, f'Giai {phase_num}'),
        'category': card_category,
        'tags': list(tags),
        'levels': levels
    })

out_path = '/mnt/d/discordbot/website/tieusumuoiweb/linh_gioi_all_cards.js'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write('window.LINH_GIOI_ALL_CARDS = ' + json.dumps(optimized, ensure_ascii=False) + ';\n')

size_kb = os.path.getsize(out_path) / 1024
print(f"Exported {len(optimized)} cards to {out_path} ({size_kb:.1f} KB)")
