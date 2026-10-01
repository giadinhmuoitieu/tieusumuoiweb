/**
 * UYÊN SƯ MUỘI - BÁCH KHOA TOÀN THƯ & CẨM NANG TU TIÊN
 * Dữ liệu chuẩn xác 100% trích xuất từ source code Uyên Sư Muội
 */

// =============================================================================
// 1. DỮ LIỆU CỐT LÕI (AUTHORITATIVE GAME DATABASE)
// =============================================================================

const TU_TIEN_DB = {
  // 5 Linh Căn Cơ Bản & Hiệu Ứng
  pureRoots: [
    { id: 'Kim', name: 'Kim Căn', elem: '⚔️', color: '#f59e0b', desc: 'Bắt sâu diện rộng (AOE) cho cây trồng trong Tông Môn Dược Viên.' },
    { id: 'Moc', name: 'Mộc Căn', elem: '🌿', color: '#10b981', desc: 'Gieo hạt & thu hoạch diện rộng (AOE), +25% tỉ lệ nhân đôi (x2) sản lượng thu hoạch.' },
    { id: 'Thuy', name: 'Thủy Căn', elem: '💧', color: '#00f0ff', desc: 'Tưới nước diện rộng (AOE), mỗi lần múc nước giếng được 10 gánh (hệ khác chỉ được 2 gánh).' },
    { id: 'Hoa', name: 'Hỏa Căn', elem: '🔥', color: '#ef4444', desc: '+10% tỉ lệ thành công khi luyện đan dược, luyện khí và luyện hóa pháp bảo.' },
    { id: 'Tho', name: 'Thổ Căn', elem: '⛰️', color: '#eab308', desc: 'Bón phân diện rộng (AOE) cho đất trồng trong Tông Môn Dược Viên.' }
  ],

  // Bảng Biến Dị Linh Căn (Mutated Roots)
  mutatedRoots: {
    // Song Linh Căn
    'Kim,Hoa': { name: 'Cửu Dương Linh Căn', tier: 'Song Linh Căn', mult: { attack: '+15%', crit_points: '+10%' }, desc: 'Kim hỏa tương sinh, sát khí bừng bừng, chuyên về công kích bạo liệt.' },
    'Thuy,Tho': { name: 'Sinh Mệnh Linh Căn', tier: 'Song Linh Căn', mult: { max_hp: '+15%', defense: '+10%' }, desc: 'Thủy thổ giao hòa, sinh cơ vô tận, tối ưu sinh mệnh và phòng thủ kiên cố.' },
    'Thuy,Hoa': { name: 'Lưỡng Nghi Linh Căn', tier: 'Song Linh Căn', mult: { attack: '+13%', max_hp: '+12%' }, desc: 'Thủy hỏa tề tế, âm dương hòa hợp, công thủ toàn diện.' },
    'Kim,Moc': { name: 'Thần Phong Linh Căn', tier: 'Song Linh Căn', mult: { speed: '+15%', dodge_points: '+10%' }, desc: 'Kiếm khí hóa phong, thân pháp phiêu dật, tăng mạnh tốc độ và né tránh.' },
    'Moc,Hoa': { name: 'Thiên Lôi Linh Căn', tier: 'Song Linh Căn', mult: { attack: '+15%', speed: '+10%' }, desc: 'Mộc sinh hỏa dẫn thiên lôi, sấm sét giáng lâm, bộc phá sát thương và tốc độ.' },
    'Moc,Thuy': { name: 'Âm Hàn Linh Căn', tier: 'Song Linh Căn', mult: { max_hp: '+15%', dodge_points: '+10%' }, desc: 'Băng hàn thấu xương, làm chậm kẻ địch, gia tăng lượng máu và né đòn.' },
    'Kim,Tho': { name: 'U Minh Linh Căn', tier: 'Song Linh Căn', mult: { attack: '+15%', max_hp: '+10%' }, desc: 'Chìm vào cõi u minh hoàng tuyền, công kích mang theo khí tức tử tịch.' },
    'Moc,Tho': { name: 'Thường Thanh Linh Căn', tier: 'Song Linh Căn', mult: { max_hp: '+13%', defense: '+12%' }, desc: 'Vạn mộc trường xuân, vững như bàn thạch, sinh mệnh bền bỉ.' },
    'Kim,Thuy': { name: 'Huyền Minh Linh Căn', tier: 'Song Linh Căn', mult: { attack: '+12%', max_hp: '+13%' }, desc: 'Kim thủy tương sinh nhu hòa sắc bén, linh lực dồi dào.' },
    'Hoa,Tho': { name: 'Càn Khôn Linh Căn', tier: 'Song Linh Căn', mult: { attack: '+13%', defense: '+12%' }, desc: 'Hỏa nung nham thạch, càn khôn vững chãi, công thủ đều mạnh.' },

    // Tam Linh Căn
    'Kim,Moc,Thuy': { name: 'Bích Hải Kim Phong', tier: 'Tam Linh Căn', mult: { speed: '+18%', dodge_points: '+13%', max_hp: '+10%' }, desc: 'Kế thừa Thần Phong, kết hợp sóng ngầm bích hải, tốc độ vượt trội.' },
    'Kim,Moc,Hoa': { name: 'Xích Lôi Thần Phong', tier: 'Tam Linh Căn', mult: { attack: '+18%', crit_points: '+13%', speed: '+10%' }, desc: 'Lôi hỏa cùng gió thét, bạo kích cuồng nộ.' },
    'Kim,Moc,Tho': { name: 'Hoàng Thổ Kim Phong', tier: 'Tam Linh Căn', mult: { speed: '+18%', dodge_points: '+13%', defense: '+10%' }, desc: 'Thần phong càn quét bình nguyên thổ nhưỡng.' },
    'Kim,Thuy,Hoa': { name: 'Thần Binh Luyện Thể', tier: 'Tam Linh Căn', mult: { attack: '+18%', crit_points: '+13%', max_hp: '+10%' }, desc: 'Lấy nước lạnh tôi lửa đỏ rèn binh khí, sát thương chí mạng.' },
    'Kim,Thuy,Tho': { name: 'Huyền Thiết Trọng Thủy', tier: 'Tam Linh Căn', mult: { max_hp: '+18%', defense: '+13%', attack: '+10%' }, desc: 'Trọng thủy vạn cân kết hợp huyền thiết, phòng ngự cực hạn.' },
    'Kim,Hoa,Tho': { name: 'Vạn Nhạc Dung Nham', tier: 'Tam Linh Căn', mult: { attack: '+16%', defense: '+15%', crit_points: '+10%' }, desc: 'Dung nham phun trào từ lòng núi sâu, thiêu đốt địch nhân.' },
    'Moc,Thuy,Hoa': { name: 'Tử Vi Thanh Lôi', tier: 'Tam Linh Căn', mult: { attack: '+18%', speed: '+13%', max_hp: '+10%' }, desc: 'Thanh lôi tím biếc của chòm sao Tử Vi, xuất kỳ bất ý.' },
    'Moc,Thuy,Tho': { name: 'Địa Linh Trường Thanh', tier: 'Tam Linh Căn', mult: { max_hp: '+18%', defense: '+13%', dodge_points: '+10%' }, desc: 'Thảo mộc địa linh bao phủ, né đòn linh hoạt và sinh mệnh cao.' },
    'Moc,Hoa,Tho': { name: 'Thần Nông Viêm Đế', tier: 'Tam Linh Căn', mult: { attack: '+16%', defense: '+15%', speed: '+10%' }, desc: 'Di sản của Thần Nông Viêm Đế, nắm rõ quy luật thảo mộc và đất đai.' },
    'Thuy,Hoa,Tho': { name: 'Lục Đạo Luân Hồi', tier: 'Tam Linh Căn', mult: { attack: '+16%', max_hp: '+15%', defense: '+10%' }, desc: 'Âm dương chuyển vận, luân hồi chi lực hộ thể.' },

    // Tứ Linh Căn
    'Kim,Moc,Thuy,Hoa': { name: 'Tứ Tượng Vô Hình', tier: 'Tứ Linh Căn', mult: { attack: '+22%', crit_points: '+17%', speed: '+13%' }, desc: 'Khuyết Thổ. Tứ tượng biến ảo, sát thương và bạo kích cực cao.' },
    'Kim,Moc,Thuy,Tho': { name: 'Huyền Băng Thần Phong', tier: 'Tứ Linh Căn', mult: { dodge_points: '+15%', defense: '+13%', max_hp: '+12%', attack: '+12%' }, desc: 'Khuyết Hỏa. Băng phong vạn dặm, thân pháp khôn lường.' },
    'Kim,Moc,Hoa,Tho': { name: 'Thiên Lôi Địa Hỏa', tier: 'Tứ Linh Căn', mult: { attack: '+22%', crit_points: '+17%', defense: '+13%' }, desc: 'Khuyết Thủy. Lôi đình rền vang, địa hỏa sôi trào tột độ.' },
    'Kim,Thuy,Hoa,Tho': { name: 'Cửu U Luyện Lục', tier: 'Tứ Linh Căn', mult: { defense: '+18%', max_hp: '+16%', attack: '+18%' }, desc: 'Khuyết Mộc. Nung luyện thần thể qua 9 tầng ngục sâu.' },
    'Moc,Thuy,Hoa,Tho': { name: 'Vạn Vật Linh Tiên', tier: 'Tứ Linh Căn', mult: { max_hp: '+15%', defense: '+12%', speed: '+13%', attack: '+12%' }, desc: 'Khuyết Kim. Tinh hoa sinh linh bốn cõi hội tụ.' },

    // Ngũ Linh Căn
    'Kim,Moc,Thuy,Hoa,Tho': { name: 'Ngũ Hành Hỗn Nguyên', tier: 'Ngũ Linh Căn', mult: { attack: '+25%', max_hp: '+25%', defense: '+25%', speed: '+25%', crit_points: '+25%', dodge_points: '+25%' }, desc: 'Đầy đủ Ngũ Hành, âm dương ngũ hành viên mãn tuần hoàn, tăng 25% toàn bộ thuộc tính!' },

    // Hỗn Độn Linh Căn (Endgame tối thượng)
    'HonDon': { name: 'Hỗn Độn Linh Căn (Tối Thượng)', tier: 'Thần Cấp (0.01%)', mult: { attack: '+35%', max_hp: '+35%', defense: '+35%', speed: '+35%', crit_points: '+35%', dodge_points: '+35%' }, desc: 'Bao gồm Hỗn Độn + Đủ Ngũ Hành bẩm sinh. Xác suất xuất hiện khởi đầu là 0.01% (1/10,000). Đạt đỉnh cao sức mạnh thiên địa!' }
  },

  // 8 Cảnh Giới Tu Chân (Nhân Giới ➔ Hợp Thể)
  realms: [
    { id: 1, name: 'Luyện Khí', tier: 'Nhân Giới', baseExp: 100, pills: 'Tụ Khí Đan / Ích Khí Đan / Trúc Cơ Đan', desc: 'Bước đầu cảm thụ thiên địa linh khí, rèn đúc kinh mạch.' },
    { id: 2, name: 'Trúc Cơ', tier: 'Nhân Giới', baseExp: 2500, pills: 'Bồi Nguyên Đan / Cố Bản Đan / Kết Đan Hoàn', desc: 'Thức tỉnh Thể Chất thường. Xây đắp đạo cơ, linh lực hóa lỏng.' },
    { id: 3, name: 'Kết Tinh', tier: 'Nhân Giới', baseExp: 15000, pills: 'Tử Kim Đan / Thiên Hữu Đan / Ngưng Kim Đan', desc: 'Ngưng tụ Kim Đan phôi thai, mở giới hạn 9 Đan Văn.' },
    { id: 4, name: 'Kim Đan', tier: 'Nhân Giới', baseExp: 45000, pills: 'Nguyên Hoàng Đan / Cực Phẩm Kim Đan Hoàn', desc: 'Nhất Phẩm Kim Đan viên mãn, một hạt kim đan nuốt vào bụng.' },
    { id: 5, name: 'Nguyên Anh', tier: 'Nhân Giới', baseExp: 120000, pills: 'Dưỡng Anh Đan / Thanh Tâm Liên', desc: 'Anh nhi phá đan xuất khiếu, dưỡng Thần Hồn tại Vạn Hồn Cốc.' },
    { id: 6, name: 'Hóa Thần', tier: 'Nhân Giới', baseExp: 350000, pills: 'Hóa Thần Đan / Đan Ngộ Đạo Nhất Phẩm', desc: 'Thức tỉnh Thánh Thể. Nghi thức 5 Thần Hồn + 200 Cực Phẩm Linh Thạch.' },
    { id: 7, name: 'Luyện Hư', tier: 'Nhân Giới', baseExp: 1000000, pills: 'Phá Hư Đan + Ngộ Đạo Đan', desc: 'Thức tỉnh Nguyên Thần Tầng 5, ngộ đạo ngũ hành pháp tắc bậc 10.' },
    { id: 8, name: 'Hợp Thể', tier: 'Đỉnh Phong Nhân Giới', baseExp: 3000000, pills: 'Hợp Thể Đan (Lục Đại Thiên Điều)', desc: 'Nguyên Anh và Thần Hồn hợp nhất. Đỉnh phong viên mãn Nhân Giới, mở khóa 5 Tiên Hiệu.' }
  ],

  // 7 Bí Cảnh Chính Thức
  secretRealms: [
    {
      id: 'luyen_khi_coc',
      name: 'Luyện Khí Cốc',
      realm: 'Luyện Khí',
      stamina: 10,
      bosses: 'Linh Hầu Vương / Hắc Xà Vương / Huyết Mãng Giao Long',
      drops: 'Mảnh Tụ Khí, Mảnh Ích Khí, Mảnh Trúc Cơ, Mảnh Thiên Linh Khí, Nhất Giai Yêu Đan',
      desc: 'Thung lũng linh khí mỏng manh. Ải Trung Tâm rơi Mảnh Thiên Linh Khí dùng để Thiên Đạo Trúc Cơ.'
    },
    {
      id: 'truc_co_dong',
      name: 'Trúc Cơ Động',
      realm: 'Trúc Cơ',
      stamina: 10,
      bosses: 'Độc Giác Tiên / Hắc Sát Quỷ Vương / Thiết Giáp Xà Vương',
      drops: 'Mảnh Kết Đan, Hoàng Thổ Tinh Thạch, Hỏa Tinh Chi, Huyền Thiết, Linh Thảo Quý',
      desc: 'Hang động u linh, rơi nguyên liệu rèn đúc pháp bảo sơ cấp và đan dược phá cảnh Kết Tinh.'
    },
    {
      id: 'loi_phat_thanh_dia',
      name: 'Lôi Phạt Thánh Địa',
      realm: 'Kết Tinh',
      stamina: 10,
      bosses: 'Thiên Lôi Xà / Cuồng Thiết Lôi Hổ / Lôi Thần Long',
      drops: 'Mảnh Ngưng Kim, Ngũ Sắc Linh Chi, Thiên Lôi Trúc, Cửu Thiên Tức Thổ',
      desc: 'Vùng đất sấm sét giáng rền. Ải lắng nghe sấm sét mang lại lượng lớn điểm tinh thông công pháp.'
    },
    {
      id: 'xich_dung_sa_mac',
      name: 'Xích Dũng Sa Mạc',
      realm: 'Kim Đan',
      stamina: 20,
      bosses: 'Xích Dũng Cự Cạp / Xích Linh Ma Lang / Xích Linh Cự Hiển',
      drops: 'Mảnh Thiên Đạo Chi Khí, Mảnh Nguyên Anh, 5 Hạt Giống Quý (Xích Huyết Bồ Đề, Dưỡng Hồn Liên, Tịch Tà Linh Trúc, Tĩnh Tâm Trà, Thanh Tâm Mộc)',
      desc: 'Sa mạc đỏ rực. Nơi duy nhất thu thập 5 loại hạt giống quý bắt buộc đem về Tông Môn trồng để phá cảnh Nguyên Anh.'
    },
    {
      id: 'van_hon_coc',
      name: 'Vạn Hồn Cốc',
      realm: 'Nguyên Anh',
      stamina: 30,
      bosses: 'Boss Ngoại Vi / Boss Nội Vi / Boss Trọng Minh',
      drops: 'Hạt Giống Quả Thần Hồn (Tử Linh Nha, Lam Ngọc Quả, Ngưng Huyết Quả, Xích Viêm Quả, Huyền Tử Quả)',
      desc: 'Hẻm núi vạn linh hồn. Thu hoạch quả thần hồn để bồi dưỡng 5 Đại Thần Hồn phục vụ nghi thức Hóa Thần.'
    },
    {
      id: 'ngu_hanh_dao_gioi',
      name: 'Ngũ Hành Đạo Giới',
      realm: 'Hóa Thần',
      stamina: 20,
      bosses: 'Thủ Hộ Kim/Mộc/Thủy/Hỏa/Thổ Đạo Giới & Vạn Cổ Ma Thần',
      drops: 'Hóa Thần Chi Khí, Đan Ngộ Đạo Nhất Phẩm, Tinh Thạch Ngũ Hành',
      desc: 'Phó bản 5 phân khu nguyên tố độc lập. Thách thức lớn nhất trước khi phá cảnh Luyện Hư.'
    },
    {
      id: 'thuong_co_bi_canh',
      name: 'Thượng Cổ Bí Cảnh',
      realm: 'Luyện Hư',
      stamina: 20,
      bosses: 'U Minh Cổ Mộ, Vạn Mộc Linh Cảnh, Kim Cương Thần Điện, Huyết Ma Uyên',
      drops: 'Cực Phẩm Linh Thạch (100% rơi tại động cổ), Thượng Cổ Tàn Quyển',
      desc: 'Di tích thượng cổ vạn năm còn sót lại, cội nguồn của các loại chí bảo và nguyên liệu Linh Giới.'
    }
  ],

  // 3 Đại Boss Thế Giới
  worldBosses: [
    {
      id: 'tram_lu',
      name: 'Kiếm Thánh - Trạm Lư',
      time: '20:00 Hằng Ngày',
      desc: 'Vị kiếm thánh ẩn cư vạn năm trước mang theo cổ kiếm Trạm Lư thử thách hậu bối tu sĩ.',
      damageCap: '0.015% HP Tối Đa mỗi lượt đánh',
      phases: [
        { phase: 1, name: 'Kiếm Khách (100% - 70% HP)', skills: 'Trạm Lư Kiếm Ý (Phá giáp 20%, Choáng 15%), Hộ Thể Kiếm Trận (Khiên x2 Def, Phản phệ 40%)' },
        { phase: 2, name: 'Ngự Kiếm Phi Tiên (70% - 30% HP)', skills: 'Vạn Kiếm Quy Tông (Kích nổ thiêu đốt, phá giáp), Đại Hồi Xuân Thuật (Hồi 30% HP & Thanh tẩy)' },
        { phase: 3, name: 'Tửu Túy Cuồng Kiếm (30% - 0% HP)', skills: 'Cuồng Kiếm Loạn Vũ (Giảm 30% hồi máu, Hút máu 20%), Tửu Khí Càn Khôn (Khiên x3 Def, Phản phệ 60%)' }
      ],
      rewards: 'BXH Cảnh Giới: Top 1 nhận tới 200 Cực Phẩm Linh Thạch (CPLT), Công Đức, Tu Vi. Đòn kết liễu thưởng 5,000 Linh Thạch.'
    },
    {
      id: 'ta_diem',
      name: 'Chân Ma - Tạ Diệm',
      time: '20:00 Hằng Ngày',
      desc: 'Ma tôn từ sâu thẳm Vô Biên Ma Vực mang theo Chân Ma ý chí tàn phá sinh linh.',
      damageCap: '0.015% HP Tối Đa mỗi lượt đánh',
      phases: [
        { phase: 1, name: 'Tạ Diệm Thường (100% - 70% HP)', skills: 'Vạn Cổ Độc Tôn (5 tầng độc), Ma Thần Huyết Giáp (Khiên x2 Def & Hút máu 30%)' },
        { phase: 2, name: 'Ma Thần Phụ Thể (70% - 30% HP)', skills: 'Ma Thần Nộ Hống (Giảm 20% Công/Thủ, giảm hồi máu), Đại Ma Phụ Thể Hồi Thuật (Hồi 40% HP & Phản phệ 50%)' },
        { phase: 3, name: 'Chân Ma Hàng Thế (30% - 0% HP)', skills: 'Chân Ma Vô Song Trảm (Hút máu 30% & Linh Bạo), Chân Ma Khai Thiên Hộ Trận (Khiên x3.5 Def, Phản phệ 70%)' }
      ],
      rewards: 'Hải Vực Triệu Lệnh, Công Pháp Địa Giai ngẫu nhiên, Linh Thạch Cực Phẩm, Danh Vọng Toàn Server.'
    },
    {
      id: 'tu_khuyet',
      name: 'Bức Thánh - Từ Khuyết (Tạc Thiên Bang)',
      time: '20:00 Hằng Ngày',
      desc: 'Bang chủ Tạc Thiên Bang bỉ ổi trứ danh. "Sinh tử xem nhẹ, không phục thì chiến!"',
      damageCap: '0.015% HP Tối Đa mỗi lượt đánh',
      phases: [
        { phase: 1, name: 'Thiên Kiếp Cuồng Ma (100% - 70% HP)', skills: 'Tam Thiên Lôi Động (+20% Né tránh), Hầu Tái Lôi (280% Sát thương, Tê liệt 30%), Gõ Hắc Côn (1%)' },
        { phase: 2, name: 'Minh Vương Trấn Ngục (70% - 30% HP)', skills: 'Diễm Phân Phệ Lãng Xích (Thiêu đốt & Phá giáp 30%), Phật Nộ Hỏa Liên (Kích nổ 400% Sát thương)' },
        { phase: 3, name: 'Phong Ma Kinh (30% - 10% HP)', skills: 'Nội tại Sát Nhân Thư (+10% Công mỗi mạng hạ gục), Bức Vương Quyền & Bức Vương Côn' },
        { phase: 4, name: 'Tổ Hợp Khuyết Đức Cẩu (10% - 0% HP)', skills: 'Từ Khuyết + Nhị Cẩu Tử + Đoạn Cửu Đức phối hợp; Né 50%; Chiêu ẩn Đào Mộ Tổ trảm sát ngay nếu dính 3 dị trạng!' }
      ],
      rewards: 'Hải Vực Triệu Lệnh, Công Pháp Địa Giai, Thưởng Cực Phẩm Linh Thạch theo bảng xếp hạng cảnh giới.'
    }
  ]
};

// =============================================================================
// 2. KHỞI TẠO GIAO DIỆN & TƯƠNG TÁC
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initSidebarAndNavigation();
  initSearchOmnibar();
  initSpiritualRootMatrix();
  initBreakthroughCalculator();
  initSecretRealms();
  initHuntingMaps();
  initSectBeasts();
  initTechniques();
  initCrafting();
  initMounts();
  initGacha();
  initBossWorld();
  initCopyButtons();
  initScrollSpy();
});

// Toast System
function showToast(msg, icon = '✨') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Sidebar Drawer & Mobile Navigation
function initSidebarAndNavigation() {
  const sidebar = document.getElementById('wiki-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  const mobileBtn = document.getElementById('mobile-toggle-btn');
  const navLinks = document.querySelectorAll('.sidebar-link');

  if (mobileBtn && sidebar && backdrop) {
    mobileBtn.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
      backdrop.classList.toggle('active');
    });

    backdrop.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      backdrop.classList.remove('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        backdrop.classList.remove('active');
      });
    });
  }
}

// Copy Buttons
function initCopyButtons() {
  document.querySelectorAll('.copy-cmd-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.dataset.cmd || '/tutien';
      navigator.clipboard.writeText(cmd).then(() => {
        showToast(`Đã sao chép lệnh: ${cmd}`, '📋');
      }).catch(() => {
        showToast(`Lệnh: ${cmd}`, '📋');
      });
    });
  });
}

// ScrollSpy: Cập nhật active sidebar link & breadcrumb
function initScrollSpy() {
  const articles = document.querySelectorAll('.wiki-article');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const breadcrumbCurrent = document.getElementById('breadcrumb-current');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    articles.forEach(article => {
      const top = article.offsetTop;
      const height = article.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = article.getAttribute('id');
      }
    });

    if (currentId) {
      sidebarLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === currentId) {
          sidebarLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          if (breadcrumbCurrent) {
            const titleEl = article.querySelector('.article-title');
            breadcrumbCurrent.innerText = link.innerText.trim();
          }
        }
      });
    }
  });
}

// =============================================================================
// 3. SEARCH MODAL ENGINE (CTRL + K / TÌM KIẾM)
// =============================================================================

function initSearchOmnibar() {
  const searchBtn = document.getElementById('sidebar-search-btn');
  const modal = document.getElementById('search-modal');
  const closeBtn = document.getElementById('search-modal-close');
  const input = document.getElementById('omni-search-input');
  const dropdown = document.getElementById('search-dropdown');
  if (!modal || !input || !dropdown) return;

  // Mở search modal
  function openSearchModal() {
    modal.classList.add('open');
    input.focus();
    input.select();
  }

  // Đóng search modal
  function closeSearchModal() {
    modal.classList.remove('open');
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearchModal);
  if (closeBtn) closeBtn.addEventListener('click', closeSearchModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearchModal();
  });

  // Hotkey Ctrl+K hoặc '/'
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== input)) {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeSearchModal();
    }
  });

  // Build Search Index
  const searchIndex = [
    { title: 'Mẹo Thiên Đạo Trúc Cơ (Luyện Khí lên Trúc Cơ)', badge: 'Mẹo Phá Cảnh', sectionId: 'breakthrough-tips', snippet: 'Bắt buộc chọn Thiên Đạo. Tháo họa cảnh công, lắp họa cảnh HP để tránh sét đánh chết.' },
    { title: 'Mẹo Trúc Cơ lên Kết Tinh (9 Đan Văn)', badge: 'Mẹo Phá Cảnh', sectionId: 'breakthrough-tips', snippet: 'Dùng Thượng Phẩm Kết Đan Hoàn để mở tối đa giới hạn 9 Đan Văn nuôi đan.' },
    { title: 'Mẹo Kết Tinh lên Kim Đan (Nhất Phẩm)', badge: 'Mẹo Phá Cảnh', sectionId: 'breakthrough-tips', snippet: 'CỰC KỲ QUAN TRỌNG: Bắt buộc chọn Nhất Tầng Nhất Phẩm Kim Đan, cấm chọn Cửu Tầng!' },
    { title: 'Mẹo Kim Đan lên Nguyên Anh (7 Cây Trồng)', badge: 'Mẹo Phá Cảnh', sectionId: 'breakthrough-tips', snippet: 'Tích 7 cây mỗi loại hạt quý Xích Dũng Sa Mạc về Tông Môn trồng + 2M linh thạch.' },
    { title: 'Mẹo Nguyên Anh lên Hóa Thần (Nghi Thức)', badge: 'Mẹo Phá Cảnh', sectionId: 'breakthrough-tips', snippet: '200 CPLT + Dưỡng Anh đạt 3/3 + 5 Thần Hồn + Đan thanh tâm chống Tâm Ma.' },
    { title: 'Tông Môn Dược Viên & Giếng Nước', badge: 'Tông Môn', sectionId: 'sect-section', snippet: 'Thủy căn múc 10 gánh nước (khác 2 gánh). Tỷ lệ x2/x3 giếng nước tăng theo kỹ thuật canh tác.' },
    { title: 'Đại Trận Tông Môn: Hộ Đạo Trận & Bảo Nguyên Trận', badge: 'Tông Môn', sectionId: 'sect-section', snippet: 'Hộ Đạo Trận bảo toàn nguyên liệu độ kiếp khi thất bại. Bảo Nguyên Trận hoàn nguyên liệu chế đan/rèn đồ.' },
    { title: 'Bảng Nhiệm Vụ Tông Môn Hằng Ngày', badge: 'Tông Môn', sectionId: 'sect-section', snippet: '3 nhiệm vụ/ngày, 3 lượt đổi miễn phí (sau đó 2,000 LT), thưởng Uy Danh, +100 Công trạng, +10 Danh vọng. Reset 7h sáng VN.' }
  ];

  TU_TIEN_DB.realms.forEach(r => {
    searchIndex.push({
      title: `Cảnh Giới: ${r.name} (${r.tier})`,
      badge: 'Cảnh Giới',
      sectionId: 'realms-section',
      snippet: `EXP: ${r.baseExp.toLocaleString()} | Đan dược: ${r.pills} | ${r.desc}`
    });
  });

  TU_TIEN_DB.secretRealms.forEach(sr => {
    searchIndex.push({
      title: `Bí Cảnh: ${sr.name} (${sr.realm})`,
      badge: 'Bí Cảnh',
      sectionId: 'secret-realms-section',
      snippet: `Thể lực: ${sr.stamina} | Quà rơi: ${sr.drops} | Boss: ${sr.bosses}`
    });
  });

  TU_TIEN_DB.worldBosses.forEach(b => {
    searchIndex.push({
      title: `Boss Thế Giới: ${b.name}`,
      badge: 'Boss 20h',
      sectionId: 'world-boss-section',
      snippet: `Damage Cap: ${b.damageCap} | Thưởng: ${b.rewards}`
    });
  });

  TU_TIEN_DB.pureRoots.forEach(r => {
    searchIndex.push({
      title: `Linh Căn: ${r.name} (${r.id})`,
      badge: 'Linh Căn',
      sectionId: 'roots-section',
      snippet: r.desc
    });
  });

  // Dynamic Indexing from BOT_DATA (Authentic Bot Source)
  if (window.BOT_DATA) {
    // 41 Techniques
    if (window.BOT_DATA.techniques) {
      for (const [rank, dict] of Object.entries(window.BOT_DATA.techniques)) {
        for (const [id, t] of Object.entries(dict)) {
          searchIndex.push({
            title: `Công Pháp: ${t.name.replace('Bí Kíp: ', '')}`,
            badge: `${t.rarity}`,
            sectionId: 'technique-section',
            snippet: t.description.replace(/\*\*/g, '').replace(/\*/g, '')
          });
        }
      }
    }
    // 31 Alchemy Recipes
    if (window.BOT_DATA.crafting && window.BOT_DATA.crafting.ALCHEMY_RECIPES) {
      for (const [id, r] of Object.entries(window.BOT_DATA.crafting.ALCHEMY_RECIPES)) {
        searchIndex.push({
          title: `Đan Phương: ${r.name} (${r.reqRealm})`,
          badge: r.category === 'BREAKTHROUGH' ? 'Đan Phá Cảnh' : 'Đan Dược',
          sectionId: 'crafting-section',
          snippet: `Nguyên liệu: ${Object.keys(r.ingredients || {}).map(k => k.replace(/_/g, ' ')).join(', ')} | Tỉ lệ: ${Math.round(r.successRate * 100)}%`
        });
      }
    }
    // 9 Smithing Recipes
    if (window.BOT_DATA.crafting && window.BOT_DATA.crafting.SMITHING_RECIPES) {
      for (const [id, r] of Object.entries(window.BOT_DATA.crafting.SMITHING_RECIPES)) {
        searchIndex.push({
          title: `Luyện Khí: ${r.name}`,
          badge: 'Luyện Khí',
          sectionId: 'crafting-section',
          snippet: `Rèn đúc trang bị ${r.reqRealm || ''}`
        });
      }
    }
    // 9 Mounts
    if (window.BOT_DATA.mountTiers) {
      window.BOT_DATA.mountTiers.forEach(m => {
        searchIndex.push({
          title: `Tọa Kỵ: ${m.name} (Bậc ${m.id})`,
          badge: 'Tọa Kỵ',
          sectionId: 'mount-section',
          snippet: `Cấp ${m.minLevel}-${m.maxLevel} | +${(m.id - 1) * 3}% All Stats Bonus`
        });
      });
    }
    // 5 Sect Beasts
    if (window.BOT_DATA.sectBeasts && window.BOT_DATA.sectBeasts.BEASTS) {
      for (const [id, b] of Object.entries(window.BOT_DATA.sectBeasts.BEASTS)) {
        searchIndex.push({
          title: `Thần Thú: ${b.name} (${b.role})`,
          badge: 'Trấn Tông Thần Thú',
          sectionId: 'sect-beast-section',
          snippet: `${b.skillName}: ${b.description}`
        });
      }
    }
    // 21 Gacha Paintings
    if (window.BOT_DATA.gacha && window.BOT_DATA.gacha.PAINTINGS) {
      window.BOT_DATA.gacha.PAINTINGS.forEach(p => {
        searchIndex.push({
          title: `Họa Cảnh: ${p.name} (${p.rarity})`,
          badge: 'Thiên Mệnh',
          sectionId: 'gacha-section',
          snippet: `Gia trì vĩnh viễn % thuộc tính`
        });
      });
    }
    // 6 Maps
    if (window.BOT_DATA.maps) {
      for (const [k, list] of Object.entries(window.BOT_DATA.maps)) {
        (list || []).forEach(m => {
          searchIndex.push({
            title: `Bản Đồ: ${m.name} (${m.minRealm})`,
            badge: 'Lịch Luyện',
            sectionId: 'hunt-section',
            snippet: `${m.description} | Quái: ${m.monsters.join(', ')}`
          });
        });
      }
    }
  }

  // Debounced Search Handler
  let debounceTimeout;
  input.addEventListener('input', (e) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        dropdown.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-muted); padding: 12px 6px;">Gợi ý tìm kiếm: <em>trúc cơ, xích dũng, boss, từ khuyết, hỗn độn, bổng lộc, đan văn</em></p>`;
        return;
      }
      renderSearchResults(q);
    }, 120);
  });

  function renderSearchResults(query) {
    const matches = searchIndex.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.snippet.toLowerCase().includes(query) ||
      item.badge.toLowerCase().includes(query)
    ).slice(0, 8);

    if (matches.length === 0) {
      dropdown.innerHTML = `
        <div style="padding: 20px; text-align: center; color: var(--text-muted);">
          <p>Không tìm thấy mục nào khớp với "<strong>${query}</strong>".</p>
        </div>
      `;
    } else {
      dropdown.innerHTML = matches.map(m => `
        <div class="search-result-item" data-target="${m.sectionId}" style="padding: 12px 14px; border-bottom: 1px solid var(--border-subtle); cursor: pointer; border-radius: var(--radius-sm); transition: background 0.2s ease;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <strong style="color: var(--text-primary); font-size: 0.95rem;">${m.title}</strong>
            <span class="article-badge badge-gold" style="font-size: 0.7rem;">${m.badge}</span>
          </div>
          <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.4;">${m.snippet}</p>
        </div>
      `).join('');

      dropdown.querySelectorAll('.search-result-item').forEach(el => {
        el.addEventListener('mouseenter', () => el.style.background = 'rgba(212, 175, 55, 0.1)');
        el.addEventListener('mouseleave', () => el.style.background = 'transparent');
        el.addEventListener('click', () => {
          const targetId = el.dataset.target;
          closeSearchModal();
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }
  }
}

// =============================================================================
// 4. LINH CĂN COMBINATOR (BỘ TRA CỨU BIẾN DỊ LINH CĂN)
// =============================================================================

function initSpiritualRootMatrix() {
  const container = document.getElementById('root-buttons-container');
  const resultName = document.getElementById('root-result-title');
  const resultTier = document.getElementById('root-result-tier');
  const resultDesc = document.getElementById('root-result-desc');
  const statBars = document.getElementById('root-stat-bars');
  if (!container || !resultName) return;

  const selectedRoots = new Set(['Kim', 'Hoa']); // Default: Cửu Dương

  container.innerHTML = TU_TIEN_DB.pureRoots.map(r => `
    <button class="root-btn ${selectedRoots.has(r.id) ? 'selected' : ''}" data-root="${r.id}">
      <span class="elem-icon">${r.elem}</span>
      <span>${r.name}</span>
    </button>
  `).join('');

  container.querySelectorAll('.root-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const root = btn.dataset.root;
      if (selectedRoots.has(root)) {
        if (selectedRoots.size > 1) {
          selectedRoots.delete(root);
          btn.classList.remove('selected');
        } else {
          showToast('Phải chọn tối thiểu 1 Linh Căn!', '⚠️');
        }
      } else {
        selectedRoots.add(root);
        btn.classList.add('selected');
      }
      evaluateRoots();
    });
  });

  function evaluateRoots() {
    const list = Array.from(selectedRoots);
    const order = ['Kim', 'Moc', 'Thuy', 'Hoa', 'Tho'];
    list.sort((a, b) => order.indexOf(a) - order.indexOf(b));

    const key = list.join(',');
    const found = TU_TIEN_DB.mutatedRoots[key];

    if (found) {
      resultName.innerText = found.name;
      resultTier.innerText = found.tier;
      resultDesc.innerText = found.desc;
      renderStatBars(found.mult);
    } else if (list.length === 1) {
      const p = TU_TIEN_DB.pureRoots.find(x => x.id === list[0]);
      resultName.innerText = p.name;
      resultTier.innerText = 'Đơn Linh Căn (Thuần Khiết)';
      resultDesc.innerText = p.desc;
      renderStatBars({ 'Căn Cơ Ban Đầu': '100% Căn cơ sơ cấp' });
    } else {
      resultName.innerText = `Tạp Căn (${list.length} Hệ)`;
      resultTier.innerText = 'Chưa Biến Dị';
      resultDesc.innerText = 'Sở hữu nhiều linh căn nhưng chưa đạt tới độ tương sinh của biến dị linh căn. Tu luyện chậm nhưng đa dụng.';
      renderStatBars({ 'Tốc Độ Tu Luyện': '-20%', 'Đa Dụng Tông Môn': '+20%' });
    }
  }

  function renderStatBars(mult) {
    statBars.innerHTML = Object.entries(mult).map(([key, val]) => `
      <div class="stat-bar-group">
        <div class="stat-bar-info">
          <span>${formatStatName(key)}</span>
          <strong style="color: var(--gold-light);">${val}</strong>
        </div>
        <div class="stat-bar-track">
          <div class="stat-bar-fill" style="width: ${parseInt(val) * 2.5 || 60}%"></div>
        </div>
      </div>
    `).join('');
  }

  function formatStatName(k) {
    const map = {
      attack: 'Tấn Công (ATK)',
      max_hp: 'Sinh Mệnh (HP)',
      defense: 'Phòng Ngự (DEF)',
      speed: 'Tốc Độ (SPD)',
      crit_points: 'Bạo Kích (Crit)',
      dodge_points: 'Né Tránh (Dodge)'
    };
    return map[k] || k;
  }

  evaluateRoots();
}

// =============================================================================
// 5. BREAKTHROUGH CALCULATOR (MÁY TÍNH ĐỘT PHÁ)
// =============================================================================

function initBreakthroughCalculator() {
  const selectRealm = document.getElementById('calc-realm-select');
  const selectPath = document.getElementById('calc-path-select');
  const targetBadge = document.getElementById('calc-target-realm-badge');
  const pillResult = document.getElementById('calc-result-pill');
  const matsResult = document.getElementById('calc-result-mats');
  const stonesResult = document.getElementById('calc-result-stones');
  const multResult = document.getElementById('calc-result-mult');
  const statsBonus = document.getElementById('calc-result-bonus');
  const noteResult = document.getElementById('calc-result-note');
  if (!selectRealm || !selectPath) return;

  const BREAKTHROUGH_DATA = {
    'Luyện Khí': {
      target: 'Trúc Cơ Kỳ',
      paths: [
        {
          id: 'thien_dao',
          name: 'Thiên Đạo Trúc Cơ (Khuyên Dùng - Tối Thượng)',
          pill: 'Trúc Cơ Đan (pill_luyenkhi_next)',
          mats: '1x Mảnh Thiên Linh Khí (Rơi tại trung tâm Luyện Khí Cốc)',
          stones: '5,000 Linh Thạch',
          mult: 'x1.40 Multiplier',
          bonus: '+1,200 HP, +250 Công, +120 Thủ, +25 Tốc, +80 Bạo, +100 Né',
          note: 'Thiên lôi đánh dựa trên % công kích bản thân! Tháo sạch họa cảnh công, lắp họa cảnh HP (Long Mạch Chân Thân) và cắn đan kiên cố để sống sót qua lôi kiếp.'
        },
        {
          id: 'dia_dao',
          name: 'Địa Đạo Trúc Cơ (Trung Bình)',
          pill: 'Trúc Cơ Đan',
          mats: '1x Địa Sát Khí',
          stones: '2,000 Linh Thạch',
          mult: 'x1.25 Multiplier',
          bonus: '+500 HP, +100 Công, +50 Thủ, +12 Tốc, +40 Bạo, +50 Né',
          note: 'Con đường thứ cấp, chỉ số thấp hơn Thiên Đạo đáng kể. Không khuyến khích nếu muốn cạnh tranh bảng xếp hạng.'
        },
        {
          id: 'nhan_dao',
          name: 'Nhân Đạo Trúc Cơ (Cơ Bản)',
          pill: 'Trúc Cơ Đan',
          mats: 'Không yêu cầu',
          stones: '500 Linh Thạch',
          mult: 'x1.15 Multiplier',
          bonus: '+150 HP, +30 Công, +15 Thủ, +5 Tốc, +10 Bạo, +10 Né',
          note: 'Yếu nhất trong 3 con đường. Đạo cơ bất toàn, bất lợi lâu dài về sau.'
        }
      ]
    },
    'Trúc Cơ': {
      target: 'Kết Tinh Kỳ',
      paths: [
        {
          id: 'thuong_pham',
          name: 'Thượng Phẩm Thai Đan (Cực Phẩm Thai Đan - Mở 9 Đan Văn)',
          pill: 'Thượng Phẩm Kết Đan Hoàn (pill_trucco_next_high)',
          mats: '20 Thái Âm Chân Thủy, 30 Hỏa Tinh Chi, 40 Hoàng Thổ Tinh Thạch, 200 Mảnh Kết Đan',
          stones: '15,000 Linh Thạch',
          mult: 'x1.35 Multiplier',
          bonus: '+3,500 HP, +450 Công, +180 Thủ, +50 Tốc, +120 Bạo, +120 Né',
          note: 'Cực kỳ quan trọng: Mở khóa tối đa 9 Đan Văn nuôi dưỡng kim đan. Đây là điều kiện tiên quyết để sau này ngưng kết Nhất Phẩm Kim Đan!'
        },
        {
          id: 'trung_pham',
          name: 'Trung Phẩm (Chân Đan - Mở 6 Đan Văn)',
          pill: 'Trung Phẩm Kết Đan Hoàn (pill_trucco_next_mid)',
          mats: '100 Mảnh Kết Đan',
          stones: '5,000 Linh Thạch',
          mult: 'x1.25 Multiplier',
          bonus: '+2,000 HP, +250 Công, +100 Thủ, +30 Tốc, +60 Bạo, +60 Né',
          note: 'Chỉ mở được tối đa 6 Đan Văn, giới hạn phẩm cấp Kim Đan sau này tối đa là Tam Phẩm.'
        },
        {
          id: 'ha_pham',
          name: 'Hạ Phẩm (Hư Đan / Ngưng Đan - Mở 3 Đan Văn)',
          pill: 'Hạ Phẩm Kết Đan Hoàn (pill_trucco_next_low)',
          mats: '50 Mảnh Kết Đan',
          stones: '2,000 Linh Thạch',
          mult: 'x1.15 Multiplier',
          bonus: '+1,000 HP, +120 Công, +50 Thủ, +15 Tốc, +30 Bạo, +30 Né',
          note: 'Chỉ mở được 3 Đan Văn, phẩm cấp Kim Đan yếu nhất.'
        }
      ]
    },
    'Kết Tinh': {
      target: 'Kim Đan Kỳ',
      paths: [
        {
          id: 'nhat_pham',
          name: 'Nhất Phẩm Kim Đan (Cực Phẩm Tối Thượng - Bắt Buộc Chọn)',
          pill: 'Kim Đan Phá Cảnh Đan (pill_kettinh_next)',
          mats: 'Đủ 9 Thiên Địa Chi Bảo (Linh Tuyết Liên, Địa Hỏa Chi, Thái Dương Tinh Thạch, Huyền Băng Phách, Cửu Thiên Tức Thổ, U Minh Chi Trà, Thiên Lôi Trúc, Ngũ Sắc Linh Chi, Vạn Năm Linh Nhũ)',
          stones: '200,000 Linh Thạch',
          mult: 'x1.60 Multiplier',
          bonus: '+12,000 HP, +1,300 Công, +600 Thủ, +80 Tốc, +200 Bạo, +200 Né',
          note: 'Khi giao diện bot hiện ra, BẮT BUỘC chọn Nhất Tầng! Cần có Cực Phẩm Thai Đan từ Trúc Cơ để đạt tỉ lệ tối đa.'
        },
        {
          id: 'nhi_pham',
          name: 'Nhị Phẩm Kim Đan',
          pill: 'Kim Đan Phá Cảnh Đan',
          mats: '8 Thiên Địa Chi Bảo',
          stones: '175,000 Linh Thạch',
          mult: 'x1.55 Multiplier',
          bonus: '+10,000 HP, +1,100 Công, +500 Thủ, +70 Tốc, +170 Bạo, +170 Né',
          note: 'Thiếu 1 loại chi bảo thiên địa so với Nhất Phẩm.'
        },
        {
          id: 'tam_pham',
          name: 'Tam Phẩm Kim Đan',
          pill: 'Kim Đan Phá Cảnh Đan',
          mats: '7 Thiên Địa Chi Bảo',
          stones: '150,000 Linh Thạch',
          mult: 'x1.50 Multiplier',
          bonus: '+8,500 HP, +950 Công, +420 Thủ, +60 Tốc, +145 Bạo, +145 Né',
          note: 'Cần ít nhất Chân Đan từ giai đoạn Trúc Cơ.'
        },
        {
          id: 'tu_pham',
          name: 'Tứ Phẩm Kim Đan',
          pill: 'Kim Đan Phá Cảnh Đan',
          mats: '6 Thiên Địa Chi Bảo',
          stones: '125,000 Linh Thạch',
          mult: 'x1.45 Multiplier',
          bonus: '+7,000 HP, +800 Công, +350 Thủ, +50 Tốc, +120 Bạo, +120 Né',
          note: 'Phẩm chất trung bình khá.'
        },
        {
          id: 'ngu_pham',
          name: 'Ngũ Phẩm Kim Đan',
          pill: 'Kim Đan Phá Cảnh Đan',
          mats: '5 Thiên Địa Chi Bảo',
          stones: '100,000 Linh Thạch',
          mult: 'x1.40 Multiplier',
          bonus: '+5,800 HP, +660 Công, +290 Thủ, +42 Tốc, +100 Bạo, +100 Né',
          note: 'Phẩm chất trung bình.'
        },
        {
          id: 'luc_pham',
          name: 'Lục Phẩm Kim Đan',
          pill: 'Kim Đan Phá Cảnh Đan',
          mats: '4 Thiên Địa Chi Bảo',
          stones: '75,000 Linh Thạch',
          mult: 'x1.35 Multiplier',
          bonus: '+4,700 HP, +540 Công, +230 Thủ, +35 Tốc, +80 Bạo, +80 Né',
          note: 'Phẩm chất trung hạ.'
        },
        {
          id: 'that_pham',
          name: 'Thất Phẩm Kim Đan',
          pill: 'Kim Đan Phá Cảnh Đan',
          mats: '3 Thiên Địa Chi Bảo',
          stones: '50,000 Linh Thạch',
          mult: 'x1.30 Multiplier',
          bonus: '+3,800 HP, +440 Công, +180 Thủ, +28 Tốc, +65 Bạo, +65 Né',
          note: 'Phẩm chất thấp.'
        },
        {
          id: 'bat_pham',
          name: 'Bát Phẩm Kim Đan',
          pill: 'Kim Đan Phá Cảnh Đan',
          mats: '2 Thiên Địa Chi Bảo',
          stones: '25,000 Linh Thạch',
          mult: 'x1.25 Multiplier',
          bonus: '+3,100 HP, +360 Công, +140 Thủ, +22 Tốc, +50 Bạo, +50 Né',
          note: 'Phẩm chất rất thấp.'
        },
        {
          id: 'cuu_pham',
          name: 'Cửu Phẩm Kim Đan (Yếu Nhất - Tuyệt Đối Tránh)',
          pill: 'Kim Đan Phá Cảnh Đan',
          mats: '1 Thiên Địa Chi Bảo bất kỳ',
          stones: '10,000 Linh Thạch',
          mult: 'x1.20 Multiplier',
          bonus: '+2,500 HP, +300 Công, +110 Thủ, +16 Tốc, +40 Bạo, +40 Né',
          note: 'Kim đan tạp chất nghiêm trọng, chỉ số cực kỳ thọt, tuyệt đối không chọn Cửu Tầng!'
        }
      ]
    },
    'Kim Đan': {
      target: 'Nguyên Anh Kỳ',
      paths: [
        {
          id: 'thien_dao',
          name: 'Thiên Đạo Nguyên Anh (Khuyên Dùng - Tối Thượng)',
          pill: 'Nguyên Anh Phá Cảnh Đan (pill_kimdan_next)',
          mats: 'Đủ 7 Dược Liệu Quý Dược Viên: Thiên Đạo Chi Khí, Thái Ất Dưỡng Hồn Liên, Ngộ Đạo Cổ Trà, Long Huyết Bồ Đề, Tịch Tà Thần Lôi Trúc, Thanh Tâm Phá Chướng Mộc, Cửu U Hoàng Tuyền Thảo',
          stones: '2,000,000 Linh Thạch',
          mult: 'x1.70 Multiplier',
          bonus: '+15,000 HP, +1,600 Công, +750 Thủ, +90 Tốc, +240 Bạo, +240 Né',
          note: 'Yêu cầu tích trữ hạt giống quý từ trung tâm Xích Dũng Sa Mạc về trồng tại Dược Viên tông môn. Tỉ lệ đột phá tăng mạnh theo số Đan Văn có sẵn.'
        },
        {
          id: 'dia_dao',
          name: 'Địa Đạo Nguyên Anh (Trung Bình)',
          pill: 'Nguyên Anh Phá Cảnh Đan',
          mats: '5 Dược Liệu Quý: Thiên Đạo Chi Khí, Dưỡng Hồn Liên, Ngộ Đạo Cổ Trà, Long Huyết Bồ Đề, Tịch Tà Thần Lôi Trúc',
          stones: '1,000,000 Linh Thạch',
          mult: 'x1.55 Multiplier',
          bonus: '+9,000 HP, +1,000 Công, +450 Thủ, +60 Tốc, +140 Bạo, +140 Né',
          note: 'Tiết kiệm nguyên liệu hơn nhưng chỉ số cộng thêm kém xa Thiên Đạo Nguyên Anh.'
        },
        {
          id: 'nhan_dao',
          name: 'Nhân Đạo Nguyên Anh (Cơ Bản)',
          pill: 'Nguyên Anh Phá Cảnh Đan',
          mats: '2 Dược Liệu: Thiên Đạo Chi Khí, Thái Ất Dưỡng Hồn Liên',
          stones: '500,000 Linh Thạch',
          mult: 'x1.45 Multiplier',
          bonus: '+5,000 HP, +600 Công, +250 Thủ, +35 Tốc, +80 Bạo, +80 Né',
          note: 'Nguyên Anh suy nhược, chỉ số thấp nhất trong 3 con đường.'
        }
      ]
    },
    'Nguyên Anh': {
      target: 'Hóa Thần Kỳ',
      paths: [
        {
          id: 'hoa_than_nghi_thuc',
          name: 'Nghi Thức Thần Hồn Hóa Thần (Cố Định Duy Nhất)',
          pill: 'Đan Thanh Tâm (Ngăn Tâm Ma) / Hộ Đạo Đan',
          mats: '5 Thần Hồn Vạn Hồn Cốc (Câu Trần, Giao Long, Huyền Quy, Lục Ngô, Trọng Minh) + 1 Hóa Thần Chi Khí',
          stones: '200 Cực Phẩm Linh Thạch (CPLT)',
          mult: 'x1.70 Multiplier',
          bonus: '+30,000 HP, +3,000 Công, +1,400 Thủ, +120 Tốc, +360 Bạo, +360 Né',
          note: 'Bắt buộc dưỡng Nguyên Anh đạt 3/3 (Anh Thành). Cần thu thập đủ 5 Thần Hồn tại Vạn Hồn Cốc. Uống Đan Thanh Tâm trước khi làm lễ để tránh Tâm Ma cắn trả!'
        }
      ]
    },
    'Hóa Thần': {
      target: 'Luyện Hư Kỳ',
      paths: [
        {
          id: 'nhat_pham',
          name: 'Phá Hư Đan + Ngộ Đạo Đan Nhất Phẩm (Hiệu Suất 100% - Khuyên Dùng)',
          pill: '1x Phá Hư Đan + 1x Ngộ Đạo Đan Nhất Phẩm',
          mats: 'Thức Tỉnh Nguyên Thần Tầng 5 (100%) + Ngũ Hành Pháp Tắc Bậc 10 (cả 5 hệ Kim, Mộc, Thủy, Hỏa, Thổ)',
          stones: '50,000 Linh Thạch',
          mult: 'x1.95 Multiplier',
          bonus: '+60,000 HP, +6,000 Công, +2,800 Thủ, +160 Tốc, +480 Bạo, +480 Né',
          note: 'Không có Lôi Kiếp, thành bại dựa hoàn toàn vào Tâm Ma! Nhất Phẩm Ngộ Đạo Đan bảo toàn 100% hiệu suất chỉ số. Kích hoạt Hộ Đạo Trận tông môn để bảo vệ nguyên liệu nếu thất bại.'
        },
        {
          id: 'tam_pham',
          name: 'Phá Hư Đan + Ngộ Đạo Đan Tam Phẩm (Hiệu Suất 90%)',
          pill: '1x Phá Hư Đan + 1x Ngộ Đạo Đan Tam Phẩm',
          mats: 'Nguyên Thần Tầng 5 (100%) + Ngũ Hành Pháp Tắc Bậc 10',
          stones: '50,000 Linh Thạch',
          mult: 'x1.86 Multiplier',
          bonus: '+54,000 HP, +5,400 Công, +2,520 Thủ, +144 Tốc, +432 Bạo, +432 Né',
          note: 'Hiệu suất giảm còn 90% so với Nhất Phẩm.'
        },
        {
          id: 'ngu_pham',
          name: 'Phá Hư Đan + Ngộ Đạo Đan Ngũ Phẩm (Hiệu Suất 80%)',
          pill: '1x Phá Hư Đan + 1x Ngộ Đạo Đan Ngũ Phẩm',
          mats: 'Nguyên Thần Tầng 5 (100%) + Ngũ Hành Pháp Tắc Bậc 10',
          stones: '50,000 Linh Thạch',
          mult: 'x1.76 Multiplier',
          bonus: '+48,000 HP, +4,800 Công, +2,240 Thủ, +128 Tốc, +384 Bạo, +384 Né',
          note: 'Hiệu suất đạt 80%.'
        },
        {
          id: 'cuu_pham',
          name: 'Phá Hư Đan + Ngộ Đạo Đan Cửu Phẩm (Hiệu Suất 60% - Thấp Nhất)',
          pill: '1x Phá Hư Đan + 1x Ngộ Đạo Đan Cửu Phẩm',
          mats: 'Nguyên Thần Tầng 5 (100%) + Ngũ Hành Pháp Tắc Bậc 10',
          stones: '50,000 Linh Thạch',
          mult: 'x1.57 Multiplier',
          bonus: '+36,000 HP, +3,600 Công, +1,680 Thủ, +96 Tốc, +288 Bạo, +288 Né',
          note: 'Hiệu suất tụt xuống 60%, mất 40% chỉ số tiềm năng! Không nên dùng đan phẩm cấp thấp.'
        }
      ]
    },
    'Luyện Hư': {
      target: 'Hợp Thể Kỳ (Phi Thăng Linh Giới)',
      paths: [
        {
          id: 'hop_the_thien_dieu',
          name: 'Lục Đại Thiên Điều Phi Thăng Hợp Thể (100% Thành Công)',
          pill: '1x Hợp Thể Đan (Đan Dược Phá Cảnh Luyện Hư)',
          mats: '1. Hỗn Độn Linh Căn • 2. Thể Chất Hỗn Độn • 3. Tọa Kỵ Cấp 100 • 4. Độ Thanh Tâm 100/100 • 5. 500 Mảnh 5 Minh Chủng',
          stones: '100,000 Linh Thạch',
          mult: 'x2.25 Multiplier',
          bonus: '+120,000 HP, +12,000 Công, +5,600 Thủ, +220 Tốc, +640 Bạo, +640 Né',
          note: 'Thỏa mãn đầy đủ 6 thiên điều nghiêm ngặt: Tỉ lệ đột phá là 100% THÀNH CÔNG! Chính thức phá vỡ giới hạn Nhân Giới, phi thăng vào Linh Giới mở khóa Tiên Hiệu Ngũ Giác.'
        }
      ]
    }
  };

  const realmKeys = Object.keys(BREAKTHROUGH_DATA);

  selectRealm.innerHTML = realmKeys.map(rk => `
    <option value="${rk}">${rk} ➔ ${BREAKTHROUGH_DATA[rk].target}</option>
  `).join('');

  function populatePaths() {
    const realm = selectRealm.value;
    const rData = BREAKTHROUGH_DATA[realm];
    if (!rData) return;

    if (targetBadge) {
      targetBadge.innerText = `Đích Đến: ${rData.target}`;
    }

    selectPath.innerHTML = rData.paths.map(p => `
      <option value="${p.id}">${p.name}</option>
    `).join('');

    updateDetails();
  }

  function updateDetails() {
    const realm = selectRealm.value;
    const rData = BREAKTHROUGH_DATA[realm];
    if (!rData) return;

    const pathId = selectPath.value;
    const pData = rData.paths.find(p => p.id === pathId) || rData.paths[0];
    if (!pData) return;

    pillResult.innerText = pData.pill;
    matsResult.innerText = pData.mats;
    stonesResult.innerText = pData.stones;
    multResult.innerText = pData.mult;
    statsBonus.innerText = pData.bonus;
    if (noteResult) {
      noteResult.innerText = pData.note;
    }
  }

  selectRealm.addEventListener('change', populatePaths);
  selectPath.addEventListener('change', updateDetails);

  populatePaths();
}

// =============================================================================
// 6. THƯ VIỆN BÍ CẢNH & BOSS THẾ GIỚI
// =============================================================================

function initSecretRealms() {
  const container = document.getElementById('secret-realms-container');
  if (!container) return;

  container.innerHTML = TU_TIEN_DB.secretRealms.map(sr => `
    <div class="wiki-box">
      <div class="wiki-box-header">
        <div class="wiki-box-icon" style="color: var(--cyan-light);">🏰</div>
        <div>
          <h3 class="wiki-box-title">${sr.name}</h3>
          <span style="font-size: 0.78rem; color: var(--cyan-light);">${sr.realm} • Tiêu hao: ${sr.stamina} Thể Lực</span>
        </div>
      </div>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.5;">${sr.desc}</p>
      <div style="font-size: 0.82rem; line-height: 1.6; border-top: 1px solid var(--border-subtle); padding-top: 10px;">
        <p><strong>👹 Boss:</strong> <span style="color: var(--crimson-light);">${sr.bosses}</span></p>
        <p style="margin-top: 4px;"><strong>🎁 Rơi Đồ:</strong> <span style="color: var(--gold-light);">${sr.drops}</span></p>
      </div>
    </div>
  `).join('');
}

function initBossWorld() {
  const container = document.getElementById('world-boss-container');
  if (!container) return;

  container.innerHTML = TU_TIEN_DB.worldBosses.map(b => `
    <div style="background: var(--bg-card); border: 1px solid var(--border-gold); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 24px;">
      <div style="padding: 24px; background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(15, 23, 42, 0.8)); border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div>
          <span class="article-badge badge-crimson">${b.time}</span>
          <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: #fff; margin: 4px 0 6px;">${b.name}</h3>
          <p style="color: var(--text-muted); font-size: 0.88rem;">${b.desc}</p>
        </div>
        <div style="background: rgba(0,0,0,0.4); padding: 10px 16px; border-radius: var(--radius-md); border: 1px solid var(--border-gold);">
          <span style="font-size: 0.72rem; color: var(--gold-light); text-transform: uppercase;">Cơ Chế Khống Chế ST</span>
          <p style="font-weight: 700; color: #fff; font-size: 0.95rem;">${b.damageCap}</p>
        </div>
      </div>
      <div class="grid-3" style="padding: 20px;">
        ${b.phases.map(p => `
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px;">
            <span class="article-badge badge-gold" style="font-size: 0.7rem;">Giai Đoạn ${p.phase}</span>
            <h4 style="font-size: 0.95rem; color: #fff; margin: 6px 0 8px;">${p.name}</h4>
            <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; background: rgba(0,0,0,0.3); padding: 8px; border-radius: var(--radius-sm); border-left: 3px solid var(--gold-primary);">${p.skills}</p>
          </div>
        `).join('')}
      </div>
      <div style="padding: 14px 20px; background: rgba(0,0,0,0.25); border-top: 1px solid var(--border-subtle); font-size: 0.85rem; color: var(--gold-lighter);">
        🏆 <strong>Phần Thưởng Toàn Server:</strong> ${b.rewards}
      </div>
    </div>
  `).join('');
}

// =============================================================================
// 7. BẢN ĐỒ LỊCH LUYỆN DÃ NGOẠI
// =============================================================================

function initHuntingMaps() {
  const container = document.getElementById('hunting-maps-container');
  if (!container || !window.BOT_DATA || !window.BOT_DATA.maps) return;

  const mapsList = [];
  for (const [key, list] of Object.entries(window.BOT_DATA.maps)) {
    if (Array.isArray(list)) mapsList.push(...list);
  }

  container.innerHTML = mapsList.map(m => `
    <div class="wiki-box map-card">
      <div class="wiki-box-header">
        <div class="wiki-box-icon" style="color: var(--crimson-light);">🏹</div>
        <div>
          <h3 class="wiki-box-title">${m.name}</h3>
          <span style="font-size: 0.78rem; color: var(--gold-light); font-weight: 600;">Cảnh Giới: ${m.minRealm}</span>
        </div>
      </div>
      <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 12px;">
        ${m.description}
      </p>
      <div style="border-top: 1px solid var(--border-subtle); padding-top: 10px;">
        <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Quái Vật & Thủ Lĩnh:</span>
        <div class="monster-badges-flex">
          ${(m.monsters || []).map(mon => `<span class="monster-badge">${mon.replace(/_/g, ' ')}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// =============================================================================
// 8. HỘ TÔNG THẦN THÚ TRẤN TÔNG
// =============================================================================

function initSectBeasts() {
  const container = document.getElementById('sect-beasts-container');
  if (!container || !window.BOT_DATA || !window.BOT_DATA.sectBeasts) return;

  const sb = window.BOT_DATA.sectBeasts;
  const beasts = Object.values(sb.BEASTS || {});

  container.innerHTML = `
    <div class="callout callout-info" style="margin-bottom: 16px;">
      <div class="callout-title">🥩 Chế Độ Nuôi Dưỡng & 4 Mốc Hảo Cảm:</div>
      <p style="font-size: 0.84rem; line-height: 1.6;">
        • <strong>Triệu Hồi / Đổi:</strong> 100,000 Linh Thạch từ Ngân Khố Tông Môn.<br>
        • <strong>Tương Tác Hằng Ngày:</strong> Mỗi thành viên được <em>Vuốt Ve 1 lần/ngày</em> (+10 Hảo Cảm). Cho ăn <em>Ngũ Giai Yêu Đan (+20)</em>, <em>Lục Giai Yêu Đan (+35)</em>, <em>Linh Thảo Chân Phẩm (+30)</em>, <em>U Minh Hàn Thiết (+15)</em>.<br>
        • <strong>Mốc Hảo Cảm:</strong> Sơ Sinh (0-200, x1.0) &rarr; Trưởng Thành (201-500, x1.2) &rarr; Uy Chấn (501-1000, x1.4) &rarr; Hóa Thần/Đỉnh Phong (1001+, x1.6 hiệu quả buff).
      </p>
    </div>
    <div class="grid-1" style="display: flex; flex-direction: column; gap: 16px;">
      ${beasts.map(b => `
        <div class="data-card beast-card">
          <div class="beast-img-wrap">
            <img src="${b.image}" alt="${b.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="beast-fallback-icon" style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; font-size: 2.8rem; background: rgba(0,0,0,0.5);">🐉</div>
          </div>
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 6px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.3rem; color: var(--gold-lighter);">${b.name}</h3>
              <span class="article-badge badge-gold" style="font-size: 0.75rem;">Vai Trò: ${b.role}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); border-left: 3px solid var(--gold-primary); padding: 10px 14px; border-radius: var(--radius-sm); margin: 8px 0;">
              <strong style="color: var(--cyan-light); font-size: 0.95rem;">⚡ Kỹ Năng Trấn Tông: ${b.skillName}</strong>
              <p style="font-size: 0.86rem; color: var(--text-secondary); margin-top: 4px; line-height: 1.5;">${b.description}</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// =============================================================================
// 9. TÀNG KINH CÁC (41 CÔNG PHÁP)
// =============================================================================

function initTechniques() {
  const container = document.getElementById('technique-grid-container');
  const tabs = document.querySelectorAll('#tech-rank-tabs .sub-tab-btn');
  if (!container || !window.BOT_DATA || !window.BOT_DATA.techniques) return;

  const allTechs = [];
  for (const [rankKey, dict] of Object.entries(window.BOT_DATA.techniques)) {
    for (const [tId, t] of Object.entries(dict)) {
      allTechs.push({ rankKey, ...t });
    }
  }

  function getElementBadge(desc) {
    if (desc.includes('Hệ Kim')) return '<span class="tech-element-badge element-kim">⚔️ Hệ Kim</span>';
    if (desc.includes('Hệ Mộc')) return '<span class="tech-element-badge element-moc">🌿 Hệ Mộc</span>';
    if (desc.includes('Hệ Thủy')) return '<span class="tech-element-badge element-thuy">💧 Hệ Thủy</span>';
    if (desc.includes('Hệ Hỏa')) return '<span class="tech-element-badge element-hoa">🔥 Hệ Hỏa</span>';
    if (desc.includes('Hệ Thổ')) return '<span class="tech-element-badge element-tho">⛰️ Hệ Thổ</span>';
    return '<span class="tech-element-badge" style="background: rgba(255,255,255,0.1); color: #cbd5e1;">Vô Hệ</span>';
  }

  function renderTechs(rankFilter) {
    const filtered = rankFilter === 'all' ? allTechs : allTechs.filter(t => t.rankKey === rankFilter);
    container.innerHTML = filtered.map(t => `
      <div class="data-card technique-card">
        <div>
          <div class="tech-header">
            <h4 class="tech-title">${t.name.replace('Bí Kíp: ', '')}</h4>
            ${getElementBadge(t.description)}
          </div>
          <p class="tech-desc">${t.description.replace(/\*\*/g, '').replace(/\*/g, '')}</p>
        </div>
        <div class="tech-footer">
          <span style="color: var(--gold-light); font-weight: 600;">${t.rarity}</span>
          <span>Giá: ${t.buyable ? t.price + ' LT' : 'Rơi Bí Cảnh / Thuyền'}</span>
        </div>
      </div>
    `).join('');
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTechs(btn.dataset.rank);
    });
  });

  renderTechs('all');
}

// =============================================================================
// 10. BÁCH NGHỆ LUYỆN ĐAN & LUYỆN KHÍ
// =============================================================================

function initCrafting() {
  const container = document.getElementById('crafting-recipes-container');
  const tabs = document.querySelectorAll('#craft-tabs .sub-tab-btn');
  if (!container || !window.BOT_DATA || !window.BOT_DATA.crafting) return;

  const alchemy = window.BOT_DATA.crafting.ALCHEMY_RECIPES || {};
  const smithing = window.BOT_DATA.crafting.SMITHING_RECIPES || {};

  const allRecipes = [];
  for (const [id, r] of Object.entries(alchemy)) {
    allRecipes.push({ id, type: 'ALCHEMY', ...r });
  }
  for (const [id, r] of Object.entries(smithing)) {
    allRecipes.push({ id, type: 'SMITHING', category: 'SMITHING', ...r });
  }

  function renderRecipes(filter) {
    let list = allRecipes;
    if (filter === 'BREAKTHROUGH') list = allRecipes.filter(r => r.category === 'BREAKTHROUGH');
    else if (filter === 'CONSUMABLE') list = allRecipes.filter(r => r.category === 'CONSUMABLE');
    else if (filter === 'SMITHING') list = allRecipes.filter(r => r.type === 'SMITHING');

    container.innerHTML = list.map(r => `
      <div class="recipe-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div>
            <h4 style="color: var(--gold-lighter); font-family: var(--font-serif); font-size: 1.05rem;">${r.name}</h4>
            <span style="font-size: 0.75rem; color: var(--cyan-light);">Cảnh Giới: ${r.reqRealm || 'Tự Do'}</span>
          </div>
          <span class="article-badge ${r.type === 'SMITHING' ? 'badge-blue' : 'badge-emerald'}" style="font-size: 0.7rem;">
            ${r.type === 'SMITHING' ? 'Luyện Khí' : (r.category === 'BREAKTHROUGH' ? 'Phá Cảnh' : 'Chiến Đấu')}
          </span>
        </div>
        <div style="margin: 8px 0;">
          <span style="font-size: 0.76rem; color: var(--text-muted); text-transform: uppercase;">Nguyên Liệu:</span>
          <div class="recipe-ingredients">
            ${Object.entries(r.ingredients || {}).map(([ing, qty]) => `
              <span class="ingredient-tag">${ing.replace(/_/g, ' ')} x${qty.toLocaleString()}</span>
            `).join('')}
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.78rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px; color: var(--text-muted);">
          <span>Tỉ Lệ: <strong style="color: ${r.successRate >= 0.8 ? '#2ecc71' : '#f1c40f'}">${Math.round(r.successRate * 100)}%</strong></span>
          <span>Exp Thợ: <strong style="color: var(--cyan-light);">+${r.expGain || 10}</strong></span>
        </div>
      </div>
    `).join('');
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRecipes(btn.dataset.cat);
    });
  });

  renderRecipes('all');
}

// =============================================================================
// 11. HỆ THỐNG TỌA KỴ (9 BẬC)
// =============================================================================

function initMounts() {
  const container = document.getElementById('mount-tiers-container');
  if (!container || !window.BOT_DATA || !window.BOT_DATA.mountTiers) return;

  const mounts = window.BOT_DATA.mountTiers;
  const MOUNT_ICONS = ['🐎', '🐺', '🐅', '🦅', '🐲', '🦁', '🐉', '🌟', '👑'];

  container.innerHTML = mounts.map(m => `
    <div class="data-card mount-card">
      <div class="mount-tier-badge">BẬC ${m.id} • CẤP ${m.minLevel} - ${m.maxLevel}</div>
      <div class="mount-img-box">
        <div class="mount-emblem-fallback" style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
          <span style="font-size: 2.4rem; filter: drop-shadow(0 0 10px rgba(212,175,55,0.6));">${MOUNT_ICONS[m.id - 1] || '🐎'}</span>
          <span style="font-size: 0.65rem; color: var(--gold-light); font-weight: 700; letter-spacing: 1px; margin-top: 4px;">BẬC ${m.id}</span>
        </div>
      </div>
      <h3 style="font-family: var(--font-serif); font-size: 1.15rem; color: #fff; margin-bottom: 4px;">${m.name}</h3>
      <div class="mount-all-stat">+${(m.id - 1) * 3}% All Stats Bonus</div>
      <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 10px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px; width: 100%;">
        ${m.evoItem ? `Đá Tiến Hóa: <strong style="color: var(--gold-light);">${m.evoItem.replace(/_/g, ' ')} x${m.evoQuantity}</strong>` : '<span style="color: var(--gold-primary); font-weight: 600;">👑 Đỉnh Phong Tối Cường</span>'}
      </div>
    </div>
  `).join('');
}

// =============================================================================
// 12. THIÊN MỆNH TRIỆU HOÁN (21 HỌA CẢNH GACHA)
// =============================================================================

function initGacha() {
  const container = document.getElementById('gacha-paintings-container');
  const tabs = document.querySelectorAll('#gacha-tabs .sub-tab-btn');
  if (!container || !window.BOT_DATA || !window.BOT_DATA.gacha) return;

  const g = window.BOT_DATA.gacha;
  const paintings = g.PAINTINGS || [];

  function formatBuff(buff) {
    const map = {
      max_hp: 'Sinh Mệnh',
      attack: 'Tấn Công',
      defense: 'Phòng Ngự',
      speed: 'Tốc Độ',
      crit_points: 'Bạo Kích',
      dodge_points: 'Né Tránh'
    };
    return Object.entries(buff || {}).map(([k, v]) => `+${Math.round(v * 100)}% ${map[k] || k}`).join(', ');
  }

  function renderPaintings(rarityFilter) {
    const filtered = rarityFilter === 'all' ? paintings : paintings.filter(p => p.rarity === rarityFilter);
    container.innerHTML = filtered.map(p => {
      const rarityData = g.RARITIES[p.rarity] || {};
      const borderColor = rarityData.color || 'var(--border-subtle)';
      return `
        <div class="data-card painting-card" style="border-left: 4px solid ${borderColor};">
          <div class="painting-thumb" style="border-color: ${borderColor}; background: radial-gradient(circle at 50% 30%, ${borderColor}25 0%, #0d131f 80%); display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <span style="font-size: 1.8rem; filter: drop-shadow(0 0 8px ${borderColor});">${rarityData.emoji || '📜'}</span>
            <span style="font-size: 0.65rem; color: #fff; font-weight: 700; margin-top: 3px; letter-spacing: 1px;">${p.rarity}</span>
          </div>
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <h4 style="font-family: var(--font-serif); font-size: 1.05rem; color: #fff;">${p.name}</h4>
              <span style="font-size: 0.75rem; font-weight: 700; color: ${borderColor};">${rarityData.emoji || ''} ${p.rarity}</span>
            </div>
            <p style="font-size: 0.85rem; color: #2ecc71; font-weight: 600; margin-bottom: 6px;">
              Buff: ${formatBuff(p.buff)}
            </p>
            <span style="font-size: 0.74rem; color: var(--text-muted);">
              Quy đổi Cảnh Vận: +${rarityData.convert || 10} điểm
            </span>
          </div>
        </div>
      `;
    }).join('');
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPaintings(btn.dataset.rarity);
    });
  });

  renderPaintings('all');
}
