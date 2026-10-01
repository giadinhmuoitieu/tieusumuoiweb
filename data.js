// Dữ liệu trích xuất chính thức từ bot Uyên Sư Muội (source: /mnt/d/discordbot/uyensumuoi)
window.BOT_DATA = {
  "mountTiers": [
    {
      "id": 1,
      "name": "Tiểu Diệp Thú",
      "minLevel": 1,
      "maxLevel": 10,
      "evoItem": "mount_blood_essence",
      "evoQuantity": 5,
      "imageUrl": "https://cdn.discordapp.com/attachments/1503280774580011008/1503280802690109570/1.png"
    },
    {
      "id": 2,
      "name": "Kỳ Văn Lệnh Quy",
      "minLevel": 11,
      "maxLevel": 20,
      "evoItem": "mount_evo_stone_high",
      "evoQuantity": 10,
      "imageUrl": "https://cdn.discordapp.com/attachments/1503280774580011008/1503282328389030029/13.png"
    },
    {
      "id": 3,
      "name": "Bạch Vũ Linh Hạc",
      "minLevel": 21,
      "maxLevel": 30,
      "evoItem": "mount_evo_stone_epic",
      "evoQuantity": 15,
      "imageUrl": "https://cdn.discordapp.com/attachments/1503280774580011008/1503282409397944350/6.png"
    },
    {
      "id": 4,
      "name": "Huyền Linh Miêu",
      "minLevel": 31,
      "maxLevel": 40,
      "evoItem": "mount_evo_stone_legendary",
      "evoQuantity": 10,
      "imageUrl": "https://cdn.discordapp.com/attachments/1503280774580011008/1503282429371088896/4.png"
    },
    {
      "id": 5,
      "name": "Vân Diễm Kỳ Lân",
      "minLevel": 41,
      "maxLevel": 50,
      "evoItem": "mount_evo_stone_legendary",
      "evoQuantity": 50,
      "imageUrl": "https://cdn.discordapp.com/attachments/1503280774580011008/1503282487307141151/5.png"
    },
    {
      "id": 6,
      "name": "Thái Cổ Kim Giác Lộc",
      "minLevel": 51,
      "maxLevel": 60,
      "evoItem": "mount_evo_stone_legendary",
      "evoQuantity": 200,
      "imageUrl": "https://cdn.discordapp.com/attachments/1503280774580011008/1503282666022113301/7.png"
    },
    {
      "id": 7,
      "name": "Tinh Hải Băng Côn",
      "minLevel": 61,
      "maxLevel": 70,
      "evoItem": "mount_evo_stone_legendary",
      "evoQuantity": 500,
      "imageUrl": "https://cdn.discordapp.com/attachments/1503280774580011008/1503282721818935296/11.png"
    },
    {
      "id": 8,
      "name": "Hồng Hoang Viêm Lân",
      "minLevel": 71,
      "maxLevel": 80,
      "evoItem": "mount_evo_stone_god",
      "evoQuantity": 100,
      "imageUrl": "https://cdn.discordapp.com/attachments/1503280774580011008/1503286587222528020/1773392899010.png"
    },
    {
      "id": 9,
      "name": "Hỗn Độn Càn Khôn Đạo Thú",
      "minLevel": 81,
      "maxLevel": 100,
      "evoItem": null,
      "evoQuantity": 0,
      "imageUrl": "https://cdn.discordapp.com/attachments/1503280774580011008/1503283626828234823/1692350109822.png"
    }
  ],
  "sectBeasts": {
    "SUMMON_COST": 100000,
    "DAILY_PET_LIMIT": 1,
    "PET_AFFINITY_GAIN": 10,
    "FEED_ITEMS": {
      "ngu_giai_yeu_dan": {
        "name": "Ngũ Giai Yêu Đan",
        "gain": 20
      },
      "luc_giai_yeu_dan": {
        "name": "Lục Giai Yêu Đan",
        "gain": 35
      },
      "linh_thao_chan_pham": {
        "name": "Linh Thảo Chân Phẩm",
        "gain": 30
      },
      "u_minh_han_thiet": {
        "name": "U Minh Hàn Thiết",
        "gain": 15
      }
    },
    "AFFINITY_LEVELS": [
      {
        "max": 200,
        "multiplier": 1,
        "label": "Sơ Sinh"
      },
      {
        "max": 500,
        "multiplier": 1.2,
        "label": "Trưởng Thành"
      },
      {
        "max": 1000,
        "multiplier": 1.4,
        "label": "Uy Chấn"
      },
      {
        "max": null,
        "multiplier": 1.6,
        "label": "Hóa Thần / Đỉnh Phong"
      }
    ],
    "BEASTS": {
      "thuong_hai_long_vuong": {
        "id": "thuong_hai_long_vuong",
        "name": "Thương Hải Long Vương",
        "role": "Khống chế",
        "skillName": "Long Ngâm Trấn Hải",
        "description": "Giảm 25 Linh Lực toàn bộ địch. 30% tỷ lệ gây Câm Lặng trong 2 hiệp.",
        "image": "icon/beast_ocean_dragon.jpg",
        "effects": {
          "manaDrain": 25,
          "silenceChance": 0.3,
          "silenceDuration": 2
        }
      },
      "thien_duc_thanh_long": {
        "id": "thien_duc_thanh_long",
        "name": "Thiên Dực Thanh Long",
        "role": "Hỗ trợ",
        "skillName": "Thanh Thiên Phù Hộ",
        "description": "Tăng 20% Tốc Độ toàn đội trong 2 hiệp. Hồi 50 Linh Lực cho toàn đội.",
        "image": "icon/beast_winged_dragon.jpg",
        "effects": {
          "speedBuff": 0.2,
          "manaHeal": 50,
          "duration": 2
        }
      },
      "kim_loi_to_long": {
        "id": "kim_loi_to_long",
        "name": "Kim Lôi Tổ Long",
        "role": "Công kích",
        "skillName": "Lôi Kiếp Giáng Thế",
        "description": "Giảm 20% Phòng Ngự toàn bộ địch trong 2 hiệp. Tăng 15% Sát Thương toàn đội trong 2 hiệp.",
        "image": "icon/beast_lightning_dragon.jpg",
        "effects": {
          "defenseDebuff": 0.2,
          "damageBuff": 0.15,
          "duration": 2
        }
      },
      "ty_huu_chieu_tai": {
        "id": "ty_huu_chieu_tai",
        "name": "Tỳ Hưu Chiêu Tài",
        "role": "Phòng thủ",
        "skillName": "Kim Quang Hộ Thể",
        "description": "Tạo Khiên bằng 20% Sinh Mệnh Tối Đa. Hồi 10% Sinh Mệnh Tối Đa cho toàn đội.",
        "image": "icon/beast_golden_pixiu.svg",
        "effects": {
          "shieldPercent": 0.2,
          "hpHealPercent": 0.1
        }
      },
      "huyet_ma_thu": {
        "id": "huyet_ma_thu",
        "name": "Huyết Ma Thú",
        "role": "Sinh tồn",
        "skillName": "Huyết Ngục Ma Uy",
        "description": "25% tỷ lệ gây Choáng trong 1 hiệp. Tăng 15% Hút Máu toàn đội trong 2 hiệp.",
        "image": "icon/beast_blood_fiend.svg",
        "effects": {
          "stunChance": 0.25,
          "stunDuration": 1,
          "vampireBuff": 0.15,
          "duration": 2
        }
      }
    }
  },
  "crafting": {
    "MASTERY_LEVELS": [
      {
        "rank": 0,
        "name": "Học Đồ",
        "minExp": 0,
        "maxExp": 499
      },
      {
        "rank": 1,
        "name": "Sơ Cấp",
        "minExp": 500,
        "maxExp": 1499
      },
      {
        "rank": 2,
        "name": "Trung Cấp",
        "minExp": 1500,
        "maxExp": 3999
      },
      {
        "rank": 3,
        "name": "Cao Cấp",
        "minExp": 4000,
        "maxExp": 9999
      },
      {
        "rank": 4,
        "name": "Đại Sư",
        "minExp": 10000,
        "maxExp": 24999
      },
      {
        "rank": 5,
        "name": "Tông Sư",
        "minExp": 25000,
        "maxExp": 999999999
      }
    ],
    "PROFESSIONS": {
      "ALCHEMY": "Luyện Đan",
      "SMITHING": "Luyện Khí",
      "REFINE": "Luyện Hóa"
    },
    "ALCHEMY_RECIPES": {
      "tu_khi_dan": {
        "name": "Tụ Khí Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Luyện Khí",
        "ingredients": {
          "manh_tu_khi": 50
        },
        "result": "pill_luyenkhi_mid",
        "expGain": 5,
        "masteryReq": 0,
        "successRate": 0.95,
        "requiresRecipe": true
      },
      "ich_khi_dan": {
        "name": "Ích Khí Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Luyện Khí",
        "ingredients": {
          "manh_ich_khi": 100
        },
        "result": "pill_luyenkhi_late",
        "expGain": 10,
        "masteryReq": 0,
        "successRate": 0.85,
        "requiresRecipe": true
      },
      "truc_co_dan": {
        "name": "Trúc Cơ Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Luyện Khí",
        "reqRealmStep": 7,
        "ingredients": {
          "manh_truc_co": 200
        },
        "result": "pill_luyenkhi_next",
        "expGain": 50,
        "masteryReq": 1,
        "successRate": 0.7,
        "requiresRecipe": true
      },
      "boi_nguyen_dan": {
        "name": "Bồi Nguyên Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Trúc Cơ",
        "ingredients": {
          "manh_boi_nguyen": 100
        },
        "result": "pill_trucco_mid",
        "expGain": 20,
        "masteryReq": 1,
        "successRate": 0.8,
        "requiresRecipe": true
      },
      "co_ban_dan": {
        "name": "Cố Bản Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Trúc Cơ",
        "ingredients": {
          "manh_co_ban": 150
        },
        "result": "pill_trucco_late",
        "expGain": 30,
        "masteryReq": 1,
        "successRate": 0.75,
        "requiresRecipe": true
      },
      "ket_dan_hoan": {
        "name": "Kết Đan Hoàn",
        "category": "BREAKTHROUGH",
        "reqRealm": "Trúc Cơ",
        "ingredients": {
          "thu_don_trung_cap": 50,
          "linh_thao_quy": 50,
          "thai_am_chan_thuy": 20,
          "hoa_tinh_chi": 30,
          "hoang_tho_tinh_thach": 40,
          "manh_ket_dan": 200
        },
        "result": "pill_trucco_next_low",
        "expGain": 100,
        "masteryReq": 2,
        "successRate": 0.6,
        "requiresRecipe": true
      },
      "tu_kim_dan_lo": {
        "name": "Tử Kim Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Kết Tinh",
        "ingredients": {
          "manh_tu_kim": 200,
          "thu_don_cao_cap": 30
        },
        "result": "pill_kettinh_mid",
        "expGain": 150,
        "masteryReq": 2,
        "successRate": 0.55,
        "requiresRecipe": true
      },
      "thien_huu_dan_lo": {
        "name": "Thiên Hữu Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Kết Tinh",
        "ingredients": {
          "manh_thien_huu": 200,
          "thu_don_cao_cap": 50
        },
        "result": "pill_kettinh_late",
        "expGain": 200,
        "masteryReq": 2,
        "successRate": 0.5,
        "requiresRecipe": true
      },
      "ngung_anh_dan_lo": {
        "name": "Ngưng Kim Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Kết Tinh",
        "ingredients": {
          "manh_ngung_anh": 1500,
          "thu_don_cao_cap": 150
        },
        "result": "pill_kettinh_next",
        "expGain": 300,
        "masteryReq": 2,
        "successRate": 0.45,
        "requiresRecipe": true
      },
      "nguyen_hoang_dan_lo": {
        "name": "Nguyên Hoàng Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Kim Đan",
        "ingredients": {
          "manh_nguyen_hoang": 300,
          "thu_don_thuong_co": 300
        },
        "result": "pill_kimdan_mid",
        "expGain": 400,
        "masteryReq": 2,
        "successRate": 0.5,
        "requiresRecipe": true
      },
      "huyen_thanh_dan_lo": {
        "name": "Huyền Thanh Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Kim Đan",
        "ingredients": {
          "manh_huyen_thanh": 300,
          "thu_don_thuong_co": 300
        },
        "result": "pill_kimdan_late",
        "expGain": 500,
        "masteryReq": 2,
        "successRate": 0.45,
        "requiresRecipe": true
      },
      "nguyen_anh_dan_lo": {
        "name": "Nguyên Anh Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Kim Đan",
        "ingredients": {
          "manh_nguyen_anh": 500,
          "thu_don_thuong_co": 500
        },
        "result": "pill_kimdan_next",
        "expGain": 800,
        "masteryReq": 3,
        "successRate": 0.4,
        "requiresRecipe": true
      },
      "ngung_anh_dan": {
        "name": "Ngưng Anh Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Nguyên Anh",
        "ingredients": {
          "tam_diep_thao": 100,
          "cuc_pham_linh_thach": 20,
          "manh_ngung_anh_dan": 200
        },
        "result": "pill_nguyenanh_mid",
        "expGain": 600,
        "masteryReq": 3,
        "successRate": 0.8,
        "requiresRecipe": true
      },
      "trang_anh_dan": {
        "name": "Tráng Anh Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Nguyên Anh",
        "ingredients": {
          "thanh_ling_thao": 100,
          "cuc_pham_linh_thach": 20,
          "manh_trang_anh": 200
        },
        "result": "pill_nguyenanh_late",
        "expGain": 800,
        "masteryReq": 3,
        "successRate": 0.8,
        "requiresRecipe": true
      },
      "khai_than_dan": {
        "name": "Khải Thần Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Hóa Thần",
        "ingredients": {
          "nguyen_than_tinh_thach": 5,
          "cuc_pham_linh_thach": 50,
          "manh_khai_than": 200
        },
        "result": "pill_hoathan_mid",
        "expGain": 1200,
        "masteryReq": 4,
        "successRate": 0.75,
        "requiresRecipe": true
      },
      "quy_nguyen_dan": {
        "name": "Quy Nguyên Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Hóa Thần",
        "ingredients": {
          "nguyen_than_tinh_thach": 8,
          "cuc_pham_linh_thach": 80,
          "manh_quy_nguyen": 200
        },
        "result": "pill_hoathan_late",
        "expGain": 1500,
        "masteryReq": 4,
        "successRate": 0.7,
        "requiresRecipe": true
      },
      "pha_hu_dan": {
        "name": "Phá Hư Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Hóa Thần",
        "ingredients": {
          "ngo_dao_hoa": 50,
          "cuc_pham_linh_thach": 100,
          "manh_khai_than": 200,
          "manh_quy_nguyen": 300,
          "manh_pha_hu": 300,
          "nguyen_than_tinh_thach": 10
        },
        "result": "pill_hoathan_next",
        "expGain": 2000,
        "masteryReq": 4,
        "successRate": 0.6,
        "requiresRecipe": true
      },
      "ngo_dao_dan_recipe": {
        "name": "Ngộ Đạo Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Hóa Thần",
        "ingredients": {
          "ngo_dao_hoa": 60,
          "cuc_pham_linh_thach": 100
        },
        "result": "pill_ngo_dao_cuu_pham",
        "expGain": 4000,
        "masteryReq": 4,
        "successRate": 0.8,
        "requiresRecipe": true
      },
      "hop_the_dan": {
        "name": "Hợp Thể Đan",
        "category": "BREAKTHROUGH",
        "reqRealm": "Luyện Hư",
        "ingredients": {
          "pill_luyenkhi_next": 1,
          "pill_trucco_next_high": 1,
          "pill_kettinh_next": 1,
          "pill_kimdan_next": 1,
          "pill_pham_tam_do_than": 1,
          "pill_hoathan_next": 1
        },
        "result": "pill_luyenhu_next",
        "expGain": 5000,
        "masteryReq": 4,
        "successRate": 0.3,
        "requiresRecipe": true
      },
      "hoi_huyet_dan_trung": {
        "name": "Hồi Huyết Đan (Trung)",
        "category": "CONSUMABLE",
        "reqRealm": "Luyện Khí",
        "ingredients": {
          "linh_thao_thuong": 10
        },
        "result": "hoi_huyet_dan_trung_pham",
        "expGain": 20,
        "masteryReq": 0,
        "successRate": 0.8,
        "requiresRecipe": true
      },
      "hoi_huyet_dan_thuong": {
        "name": "Hồi Huyết Đan (Thượng)",
        "category": "CONSUMABLE",
        "reqRealm": "Trúc Cơ",
        "ingredients": {
          "linh_thao_quy": 10
        },
        "result": "hoi_huyet_dan_thuong_pham",
        "expGain": 50,
        "masteryReq": 1,
        "successRate": 0.8,
        "requiresRecipe": true
      },
      "dan_cuong_luc": {
        "name": "Cuồng Lực Đan",
        "category": "CONSUMABLE",
        "reqRealm": "Luyện Khí",
        "ingredients": {
          "thu_don_so_cap": 10,
          "linh_thao_thuong": 20
        },
        "result": "dan_cuong_luc",
        "expGain": 40,
        "masteryReq": 0,
        "successRate": 0.8,
        "requiresRecipe": true
      },
      "dan_kien_co": {
        "name": "Kiên Cố Đan",
        "category": "CONSUMABLE",
        "reqRealm": "Luyện Khí",
        "ingredients": {
          "thu_don_so_cap": 10,
          "linh_thao_thuong": 20
        },
        "result": "dan_kien_co",
        "expGain": 40,
        "masteryReq": 0,
        "successRate": 0.8,
        "requiresRecipe": true
      },
      "dan_sinh_menh": {
        "name": "Sinh Mệnh Đan",
        "category": "CONSUMABLE",
        "reqRealm": "Trúc Cơ",
        "ingredients": {
          "thu_don_trung_cap": 10,
          "linh_thao_quy": 5
        },
        "result": "dan_sinh_menh",
        "expGain": 60,
        "masteryReq": 0,
        "successRate": 0.75,
        "requiresRecipe": true
      },
      "dan_than_phap": {
        "name": "Thần Pháp Đan",
        "category": "CONSUMABLE",
        "reqRealm": "Trúc Cơ",
        "ingredients": {
          "thu_don_trung_cap": 10,
          "linh_thao_quy": 5
        },
        "result": "dan_than_phap",
        "expGain": 60,
        "masteryReq": 0,
        "successRate": 0.75,
        "requiresRecipe": true
      },
      "dan_bao_kich": {
        "name": "Bạo Kích Đan",
        "category": "CONSUMABLE",
        "reqRealm": "Trúc Cơ",
        "ingredients": {
          "thu_don_trung_cap": 10,
          "linh_thao_quy": 5
        },
        "result": "dan_bao_kich",
        "expGain": 60,
        "masteryReq": 0,
        "successRate": 0.75,
        "requiresRecipe": true
      },
      "sinh_co_dan_recipe": {
        "name": "Sinh Cơ Thần Đan",
        "category": "CONSUMABLE",
        "reqRealm": "Luyện Hư",
        "ingredients": {
          "tinh_hoa_sinh_co": 30,
          "cuc_pham_linh_thach": 10000
        },
        "result": "pill_sinh_co_dan",
        "expGain": 5000,
        "masteryReq": 4,
        "successRate": 0.8,
        "requiresRecipe": true
      },
      "huyet_sat_dan_recipe": {
        "name": "Huyết Sát Thần Đan",
        "category": "CONSUMABLE",
        "reqRealm": "Luyện Hư",
        "ingredients": {
          "huyet_sat_chi_khi": 30,
          "cuc_pham_linh_thach": 10000
        },
        "result": "pill_huyet_sat_dan",
        "expGain": 5000,
        "masteryReq": 4,
        "successRate": 0.8,
        "requiresRecipe": true
      },
      "kim_cuong_dan_recipe": {
        "name": "Kim Cương Thần Đan",
        "category": "CONSUMABLE",
        "reqRealm": "Luyện Hư",
        "ingredients": {
          "kim_cuong_tinh_phach": 30,
          "cuc_pham_linh_thach": 10000
        },
        "result": "pill_kim_cuong_dan",
        "expGain": 5000,
        "masteryReq": 4,
        "successRate": 0.8,
        "requiresRecipe": true
      },
      "ma_nguyen_dan_recipe": {
        "name": "Ma Nguyên Thần Đan",
        "category": "CONSUMABLE",
        "reqRealm": "Luyện Hư",
        "ingredients": {
          "ma_nguyen": 30,
          "cuc_pham_linh_thach": 10000
        },
        "result": "pill_ma_nguyen_dan",
        "expGain": 5000,
        "masteryReq": 4,
        "successRate": 0.8,
        "requiresRecipe": true
      },
      "thai_duong_dan_recipe": {
        "name": "Thái Dương Thần Đan",
        "category": "CONSUMABLE",
        "reqRealm": "Luyện Hư",
        "ingredients": {
          "thai_duong_tinh_hoa": 1000,
          "cuc_pham_linh_thach": 10000
        },
        "result": "pill_thai_duong_dan",
        "expGain": 5000,
        "masteryReq": 4,
        "successRate": 0.8,
        "requiresRecipe": true
      }
    },
    "SMITHING_RECIPES": {
      "kiem_co_ban": {
        "name": "Kiếm Gỗ Linh Lực",
        "reqRealm": "Luyện Khí",
        "ingredients": {
          "manh_co_ban": 10
        },
        "result": "kiem_go",
        "expGain": 20,
        "masteryReq": 0,
        "successRate": 0.9,
        "requiresRecipe": true
      },
      "ring_storage_low": {
        "name": "Nhẫn Trữ Vật (Hạ Phẩm)",
        "category": "STORAGE",
        "reqRealm": "Luyện Khí",
        "ingredients": {
          "quang_thach": 100,
          "thu_don_so_cap": 100
        },
        "result": "ring_storage_low",
        "expGain": 50,
        "masteryReq": 0,
        "successRate": 0.8,
        "requiresRecipe": true
      },
      "ring_storage_mid": {
        "name": "Nhẫn Trữ Vật (Trung Phẩm)",
        "category": "STORAGE",
        "reqRealm": "Trúc Cơ",
        "ingredients": {
          "ring_storage_low": 1,
          "huyen_thiet": 50,
          "thu_don_trung_cap": 100
        },
        "result": "ring_storage_mid",
        "expGain": 100,
        "masteryReq": 1,
        "successRate": 0.6,
        "requiresRecipe": true
      },
      "ring_storage_high": {
        "name": "Nhẫn Trữ Vật (Thượng Phẩm)",
        "category": "STORAGE",
        "reqRealm": "Trúc Cơ",
        "ingredients": {
          "ring_storage_mid": 1,
          "tinh_khong_thach": 50,
          "thu_don_cao_cap": 100
        },
        "result": "ring_storage_high",
        "expGain": 200,
        "masteryReq": 2,
        "successRate": 0.4,
        "requiresRecipe": true
      },
      "ring_storage_perfect": {
        "name": "Nhẫn Trữ Vật (Cực Phẩm)",
        "category": "STORAGE",
        "reqRealm": "Kim Đan",
        "ingredients": {
          "ring_storage_high": 1,
          "tinh_khong_thach": 100,
          "thai_at_kim_tinh": 200,
          "thu_don_thuong_co": 300
        },
        "result": "ring_storage_perfect",
        "expGain": 400,
        "masteryReq": 3,
        "successRate": 0.3,
        "requiresRecipe": true
      },
      "thanh_nong_linh_kiem": {
        "name": "Thần Nông Linh Kiếm",
        "reqRealm": "Kim Đan",
        "ingredients": {
          "kiem_go": 6,
          "van_hat_tinh_hoa": 1
        },
        "result": "treasure_thanh_nong_linh_kiem",
        "expGain": 1000,
        "masteryReq": 2,
        "successRate": 1,
        "requiresRecipe": true
      },
      "tui_can_khon_low": {
        "name": "Túi Càn Khôn (Hạ Phẩm)",
        "category": "STORAGE",
        "reqRealm": "Nguyên Anh",
        "ingredients": {
          "u_minh_han_thiet": 100,
          "ngu_giai_yeu_dan": 100
        },
        "result": "tui_can_khon_low",
        "expGain": 500,
        "masteryReq": 3,
        "successRate": 0.5,
        "requiresRecipe": true
      },
      "tui_can_khon_mid": {
        "name": "Túi Càn Khôn (Trung Phẩm)",
        "category": "STORAGE",
        "reqRealm": "Hóa Thần",
        "ingredients": {
          "tui_can_khon_low": 1,
          "phap_tac_thach": 20,
          "khong_minh_thach": 50,
          "linh_thao_chan_pham": 50,
          "luc_giai_yeu_dan": 50
        },
        "result": "tui_can_khon_mid",
        "expGain": 1500,
        "masteryReq": 4,
        "successRate": 0.5,
        "requiresRecipe": true
      },
      "phap_tac_dinh_than_phu": {
        "name": "Pháp Tắc Định Thần Phù",
        "category": "MATERIAL",
        "reqRealm": "Hóa Thần",
        "ingredients": {
          "phap_tac_thach": 10,
          "khong_minh_thach": 20,
          "linh_thao_chan_pham": 20
        },
        "result": "phap_tac_dinh_than_phu",
        "expGain": 1000,
        "masteryReq": 4,
        "successRate": 0.9,
        "requiresRecipe": true
      }
    }
  },
  "gacha": {
    "BANNER_NAME": "Thiên Mệnh Triệu Hoán",
    "GACHA_COST": 500,
    "REFUND_COST": 1000,
    "RARITIES": {
      "Phàm": {
        "chance": 0.6,
        "color": "#95a5a6",
        "emoji": "⚪",
        "convert": 10,
        "upgradeBase": 50
      },
      "Linh": {
        "chance": 0.3,
        "color": "#2ecc71",
        "emoji": "🟢",
        "convert": 30,
        "upgradeBase": 150
      },
      "Địa": {
        "chance": 0.07,
        "color": "#3498db",
        "emoji": "🔵",
        "convert": 150,
        "upgradeBase": 750
      },
      "Thiên": {
        "chance": 0.025,
        "color": "#9b59b6",
        "emoji": "🟣",
        "convert": 600,
        "upgradeBase": 3000
      },
      "Tiên": {
        "chance": 0.004,
        "color": "#f1c40f",
        "emoji": "🟡",
        "convert": 2500,
        "upgradeBase": 12000
      },
      "Thánh": {
        "chance": 0.001,
        "color": "#e74c3c",
        "emoji": "🔴",
        "convert": 10000,
        "upgradeBase": 50000
      }
    },
    "PAINTINGS": [
      {
        "id": "hc_giang_son",
        "name": "Giang Sơn Như Họa",
        "rarity": "Phàm",
        "buff": {
          "max_hp": 0.01
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1501443038503768095/giangsonnhuhoa.png"
      },
      {
        "id": "hc_thach_mon",
        "name": "Thạch Môn Cổ Đạo",
        "rarity": "Phàm",
        "buff": {
          "defense": 0.01
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1501443048884670544/thanhmoncodao.png"
      },
      {
        "id": "hc_linh_tuyen",
        "name": "Linh Tuyền Thác Nước",
        "rarity": "Linh",
        "buff": {
          "attack": 0.02
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1501443039590219868/linhtuyenthacnuoc.png"
      },
      {
        "id": "hc_truc_lam",
        "name": "Trúc Lâm Thâm Xứ",
        "rarity": "Linh",
        "buff": {
          "speed": 0.02
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1501443689820459028/truclamxu.png"
      },
      {
        "id": "hc_u_minh",
        "name": "U Minh Địa Phủ",
        "rarity": "Địa",
        "buff": {
          "crit_points": 0.04
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1501443824894083102/uminhdiaphu.png"
      },
      {
        "id": "hc_long_mach",
        "name": "Long Mạch Chân Thân",
        "rarity": "Địa",
        "buff": {
          "max_hp": 0.04
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1501443047064469595/longmanhchanthan.png"
      },
      {
        "id": "hc_dia_hoa",
        "name": "Địa Hỏa Phần Thân",
        "rarity": "Địa",
        "buff": {
          "speed": 0.04
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1505837594649432125/096a0aa0-6733-4da9-b7d4-73de3301e349.jfif"
      },
      {
        "id": "hc_son_ha",
        "name": "Sơn Hà Linh Mạch",
        "rarity": "Địa",
        "buff": {
          "dodge_points": 0.04
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1505837594209157170/dfb811b2-be18-41bf-a748-3d9afe40b425.jfif"
      },
      {
        "id": "hc_cuu_tieu",
        "name": "Cửu Tiêu Lôi Đình",
        "rarity": "Thiên",
        "buff": {
          "attack": 0.04,
          "speed": 0.04
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1501443037254123570/cuutieuloidinh.png"
      },
      {
        "id": "hc_van_kiem",
        "name": "Vạn Kiếm Quy Tông",
        "rarity": "Thiên",
        "buff": {
          "attack": 0.04,
          "crit_points": 0.04
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1501443823946039326/vankiemquyton.png"
      },
      {
        "id": "hc_thien_co",
        "name": "Thiên Cơ Thần Toán",
        "rarity": "Thiên",
        "buff": {
          "speed": 0.06,
          "dodge_points": 0.04
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1505837593613303890/184f09fe-7b2e-4d1f-b13a-05601711b532.jfif"
      },
      {
        "id": "hc_thien_hoa",
        "name": "Thiên Hỏa Phần Hoang",
        "rarity": "Thiên",
        "buff": {
          "defense": 0.06,
          "max_hp": 0.04
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1505837593160454195/0ba068d9-aaee-43aa-9c13-ae411b62c19d.jfif"
      },
      {
        "id": "hc_dao_qua",
        "name": "Tiên Đạo Quả Viên",
        "rarity": "Tiên",
        "buff": {
          "speed": 0.1,
          "dodge_points": 0.1
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1501443174235635802/tiendaoquavien.png"
      },
      {
        "id": "hc_luan_hoi",
        "name": "Luân Hồi Sơ Khai",
        "rarity": "Tiên",
        "buff": {
          "defense": 0.1,
          "max_hp": 0.1
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1501443047916048515/luanhoisokhai.png"
      },
      {
        "id": "hc_tien_de",
        "name": "Tiên Đế Lâm Trần",
        "rarity": "Tiên",
        "buff": {
          "attack": 0.1,
          "crit_points": 0.1
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1505837592787157145/24e290c1-a394-4f28-bf64-8d2c0416df0e.jfif"
      },
      {
        "id": "hc_vo_cuc",
        "name": "Vô Cực Kiếm Trận",
        "rarity": "Tiên",
        "buff": {
          "crit_points": 0.1,
          "speed": 0.1
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1505837592359211211/f465c426-d47f-45eb-bc5e-a6d9fc197132.jfif"
      },
      {
        "id": "hc_loi_nhan",
        "name": "Thần Hành Lôi Nhãn",
        "rarity": "Tiên",
        "buff": {
          "attack": 0.1,
          "speed": 0.1
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1516708724281184346/thanhhanhloinhan.png"
      },
      {
        "id": "hc_ba_the",
        "name": "Bá Thể Độc Tôn",
        "rarity": "Tiên",
        "buff": {
          "attack": 0.1,
          "max_hp": 0.1
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1516708723396050944/bathedocton.png"
      },
      {
        "id": "hc_thai_cuc",
        "name": "Thái Cực Kiếm Ý",
        "rarity": "Tiên",
        "buff": {
          "defense": 0.1,
          "dodge_points": 0.1
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1516708723903565895/thaicuckiemy.png"
      },
      {
        "id": "hc_anh_sat",
        "name": "U Minh Ảnh Sát",
        "rarity": "Tiên",
        "buff": {
          "crit_points": 0.1,
          "dodge_points": 0.1
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1516708724717129898/uminhanhsat.png"
      },
      {
        "id": "hc_thanh_nhan",
        "name": "Thánh Nhân Đạo Ảnh",
        "rarity": "Thánh",
        "buff": {
          "all_stats": 0.2
        },
        "image": "https://cdn.discordapp.com/attachments/1445984975848472689/1501443175146062027/tienanhdaonhan.png"
      }
    ]
  },
  "techniques": {
    "hoang_giai": {
      "manual_thanh_phong": {
        "id": "manual_thanh_phong",
        "name": "Bí Kíp: Thanh Phong Kiếm",
        "description": "Lĩnh ngộ: **Thanh Phong Kiếm Pháp** (Hệ Mộc).\n⚡ *Kiếm pháp thanh thoát, tốn ít Mana, có tỉ lệ hồi phục sinh mệnh.*",
        "price": 150,
        "type": "technique",
        "category": "techniques",
        "rarity": "Hoàng Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 30,
        "techniqueId": "thanh_phong_kiem"
      },
      "manual_liet_hoa": {
        "id": "manual_liet_hoa",
        "name": "Bí Kíp: Liệt Hỏa Chưởng",
        "description": "Lĩnh ngộ: **Liệt Hỏa Chưởng** (Hệ Hỏa).\n🔥 *Chưởng pháp nóng rực, có tỉ lệ thiêu đốt đối thủ gây sát thương liên tục.*",
        "price": 150,
        "type": "technique",
        "category": "techniques",
        "rarity": "Hoàng Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 30,
        "techniqueId": "liet_hoa_chuong"
      },
      "manual_kim_quang": {
        "id": "manual_kim_quang",
        "name": "Bí Kíp: Kim Quang Kích",
        "description": "Lĩnh ngộ: **Kim Quang Kích** (Hệ Kim).\n⚔️ *Ngưng tụ kim khí cực mạnh, gây sát thương trực diện cao nhất Hoàng Giai.*",
        "price": 150,
        "type": "technique",
        "category": "techniques",
        "rarity": "Hoàng Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 30,
        "techniqueId": "kim_quang_kich"
      },
      "manual_thuy_luu": {
        "id": "manual_thuy_luu",
        "name": "Bí Kíp: Thủy Lưu Thuật",
        "description": "Lĩnh ngộ: **Thủy Lưu Thuật** (Hệ Thủy).\n💧 *Dòng nước nhu hòa, linh hoạt, biến hóa khôn lường.*",
        "price": 150,
        "type": "technique",
        "category": "techniques",
        "rarity": "Hoàng Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 30,
        "techniqueId": "thuy_luu_thuat"
      },
      "manual_thach_tuong": {
        "id": "manual_thach_tuong",
        "name": "Bí Kíp: Thạch Tường Quyết",
        "description": "Lĩnh ngộ: **Thạch Tường Quyết** (Hệ Thổ).\n🛡️ *Sức mạnh của đất, có tỉ lệ tăng cường phòng ngự bản thân.*",
        "price": 150,
        "type": "technique",
        "category": "techniques",
        "rarity": "Hoàng Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 30,
        "techniqueId": "thach_tuong_quyet"
      },
      "manual_kim_tranh": {
        "id": "manual_kim_tranh",
        "name": "Bí Kíp: Kim Tranh Quyết",
        "description": "Lĩnh ngộ: **Kim Tranh Quyết** (Hệ Kim).\n🩸 *Đòn đánh sắc lẹm, khiến kẻ địch bị rướm máu và mất máu theo thời gian.*",
        "price": 150,
        "type": "technique",
        "category": "techniques",
        "rarity": "Hoàng Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 30,
        "techniqueId": "kim_tranh_quyet"
      },
      "manual_doc_gai": {
        "id": "manual_doc_gai",
        "name": "Bí Kíp: Độc Gai Thuật",
        "description": "Lĩnh ngộ: **Độc Gai Thuật** (Hệ Mộc).\n🌿 *Gai độc quấn quanh, gây sát thương độc liên tục.*",
        "price": 150,
        "type": "technique",
        "category": "techniques",
        "rarity": "Hoàng Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 30,
        "techniqueId": "doc_gai_thuat"
      },
      "manual_suong_mu": {
        "id": "manual_suong_mu",
        "name": "Bí Kíp: Sương Mù Thuật",
        "description": "Lĩnh ngộ: **Sương Mù Thuật** (Hệ Thủy).\n🌫️ *Đòn công thủ mạo hiểm: gây 180% Công, nếu đánh trúng sẽ tự gia trì Hồi Xuân trong 2 hiệp; nếu trượt thì không hồi phục.*",
        "price": 150,
        "type": "technique",
        "category": "techniques",
        "rarity": "Hoàng Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 30,
        "techniqueId": "suong_mu_thuat"
      },
      "manual_hoa_cau": {
        "id": "manual_hoa_cau",
        "name": "Bí Kíp: Hỏa Cầu Thuật",
        "description": "Lĩnh ngộ: **Hỏa Cầu Thuật** (Hệ Hỏa).\n☄️ *Cầu lửa bùng nổ, tập trung sát thương và làm kẻ địch suy yếu.*",
        "price": 150,
        "type": "technique",
        "category": "techniques",
        "rarity": "Hoàng Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 30,
        "techniqueId": "hoa_cau_thuat"
      },
      "manual_dia_dong": {
        "id": "manual_dia_dong",
        "name": "Bí Kíp: Địa Động Thuật",
        "description": "Lĩnh ngộ: **Địa Động Thuật** (Hệ Thổ).\n💥 *Địa chấn rung chuyển, có tỉ lệ làm choáng kẻ địch trong 1 lượt.*",
        "price": 150,
        "type": "technique",
        "category": "techniques",
        "rarity": "Hoàng Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 30,
        "techniqueId": "dia_dong_thuat"
      }
    },
    "huyen_giai": {
      "manual_han_bang": {
        "id": "manual_han_bang",
        "name": "Bí Kíp: Hàn Băng Quyết",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Hàn Băng Quyết (Hệ Thủy).",
        "price": 1500,
        "type": "technique",
        "category": "techniques",
        "rarity": "Huyền Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 300,
        "techniqueId": "han_bang_quyet"
      },
      "manual_kim_cuong": {
        "id": "manual_kim_cuong",
        "name": "Bí Kíp: Kim Cương Chỉ",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Kim Cương Chỉ (Hệ Kim).",
        "price": 1500,
        "type": "technique",
        "category": "techniques",
        "rarity": "Huyền Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 300,
        "techniqueId": "kim_cuong_chi"
      },
      "manual_linh_moc": {
        "id": "manual_linh_moc",
        "name": "Bí Kíp: Linh Mộc Quyết",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Linh Mộc Quyết (Hệ Mộc).",
        "price": 1500,
        "type": "technique",
        "category": "techniques",
        "rarity": "Huyền Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 300,
        "techniqueId": "linh_moc_quyet"
      },
      "manual_nguyen_vi_hoa": {
        "id": "manual_nguyen_vi_hoa",
        "name": "Bí Kíp: Nguyên Vi Hỏa",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Nguyên Vi Hỏa (Hệ Hỏa).",
        "price": 1500,
        "type": "technique",
        "category": "techniques",
        "rarity": "Huyền Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 300,
        "techniqueId": "nguyen_vi_hoa"
      },
      "manual_thach_sinh": {
        "id": "manual_thach_sinh",
        "name": "Bí Kíp: Thạch Sinh Quyết",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Thạch Sinh Quyết (Hệ Thổ).",
        "price": 1500,
        "type": "technique",
        "category": "techniques",
        "rarity": "Huyền Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 300,
        "techniqueId": "thach_sinh_quyet"
      },
      "manual_tram_thiet": {
        "id": "manual_tram_thiet",
        "name": "Bí Kíp: Trảm Thiết Kiếm",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Trảm Thiết Kiếm (Hệ Kim).",
        "price": 1500,
        "type": "technique",
        "category": "techniques",
        "rarity": "Huyền Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 300,
        "techniqueId": "tram_thiet_kiem"
      },
      "manual_thanh_long": {
        "id": "manual_thanh_long",
        "name": "Bí Kíp: Thanh Long Quyết",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Thanh Long Quyết (Hệ Mộc).",
        "price": 1500,
        "type": "technique",
        "category": "techniques",
        "rarity": "Huyền Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 300,
        "techniqueId": "thanh_long_quyet"
      },
      "manual_bang_ha": {
        "id": "manual_bang_ha",
        "name": "Bí Kíp: Băng Hà Chưởng",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Băng Hà Chưởng (Hệ Thủy).",
        "price": 1500,
        "type": "technique",
        "category": "techniques",
        "rarity": "Huyền Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 300,
        "techniqueId": "bang_ha_chuong"
      },
      "manual_hoa_van": {
        "id": "manual_hoa_van",
        "name": "Bí Kíp: Hỏa Vân Bộ",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Hỏa Vân Bộ (Hệ Hỏa).",
        "price": 1500,
        "type": "technique",
        "category": "techniques",
        "rarity": "Huyền Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 300,
        "techniqueId": "hoa_van_bo"
      },
      "manual_ho_the": {
        "id": "manual_ho_the",
        "name": "Bí Kíp: Hộ Thể Nham Thạch",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Hộ Thể Nham Thạch (Hệ Thổ).",
        "price": 1500,
        "type": "technique",
        "category": "techniques",
        "rarity": "Huyền Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 300,
        "techniqueId": "ho_the_nham_thach"
      }
    },
    "dia_giai": {
      "manual_u_minh": {
        "id": "manual_u_minh",
        "name": "Bí Kíp: U Minh Quỷ Trao",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng U Minh Quỷ Trao (Hệ Thổ).",
        "price": 3000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 1000,
        "techniqueId": "u_minh_trao"
      },
      "manual_hoi_xuan": {
        "id": "manual_hoi_xuan",
        "name": "Bí Kíp: Đại Hồi Xuân Thuật",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Đại Hồi Xuân Thuật (Hệ Mộc).",
        "price": 3000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 1000,
        "techniqueId": "hoi_xuan_thuat"
      },
      "manual_kim_xa": {
        "id": "manual_kim_xa",
        "name": "Bí Kíp: Kim Xà Kiếm Pháp",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Kim Xà Kiếm Pháp (Hệ Kim).",
        "price": 3500,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 1200,
        "techniqueId": "kim_xa_kiem_phap"
      },
      "manual_thuy_tinh_huy": {
        "id": "manual_thuy_tinh_huy",
        "name": "Bí Kíp: Thủy Tinh Huy Quyết",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Thủy Tinh Huy Quyết (Hệ Thủy).",
        "price": 3500,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 1200,
        "techniqueId": "thuy_tinh_huy_quyet"
      },
      "manual_hong_lien": {
        "id": "manual_hong_lien",
        "name": "Bí Kíp: Hồng Liên Nghiệp Hỏa",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Hồng Liên Nghiệp Hỏa (Hệ Hỏa).",
        "price": 4000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 1500,
        "techniqueId": "hong_lien_nghiep_hoa"
      },
      "manual_kim_bat_hoai": {
        "id": "manual_kim_bat_hoai",
        "name": "Bí Kíp: Kim Cương Bất Hoại",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Kim Cương Bất Hoại (Hệ Kim).",
        "price": 5000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 1500,
        "techniqueId": "kim_cuong_bat_hoai"
      },
      "manual_van_diep": {
        "id": "manual_van_diep",
        "name": "Bí Kíp: Mê Vụ Bách Dược Độc",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Mê Vụ Bách Dược Độc (Hệ Mộc).",
        "price": 5000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 1500,
        "techniqueId": "van_diep_phi_hoa"
      },
      "manual_than_quy": {
        "id": "manual_than_quy",
        "name": "Bí Kíp: Thần Quy Trấn Hải",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Thần Quy Trấn Hải (Hệ Thủy).",
        "price": 5000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 1500,
        "techniqueId": "than_quy_tran_hai"
      },
      "manual_thien_hoa": {
        "id": "manual_thien_hoa",
        "name": "Bí Kíp: Thiên Hỏa Phần Thân",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Thiên Hỏa Phần Thân (Hệ Hỏa).",
        "price": 5000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 1500,
        "techniqueId": "thien_hoa_phan_than"
      },
      "manual_dia_long": {
        "id": "manual_dia_long",
        "name": "Bí Kíp: Địa Long Quyển",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Địa Long Quyển (Hệ Thổ).",
        "price": 5000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 1500,
        "techniqueId": "dia_long_quyen"
      },
      "manual_son_ha_toan_luc": {
        "id": "manual_son_ha_toan_luc",
        "name": "Bí Kíp: Sơn Hà Toàn Lực Kích",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Sơn Hà Toàn Lực Kích (Hệ Thổ).",
        "price": 100000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 1500,
        "techniqueId": "son_ha_toan_luc_kich"
      },
      "manual_phat_no_hoa_lien": {
        "id": "manual_phat_no_hoa_lien",
        "name": "Bí Kíp: Phật Nộ Hỏa Liên",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Phật Nộ Hỏa Liên (Hệ Hỏa).",
        "price": 100000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 1500,
        "techniqueId": "phat_no_hoa_lien"
      },
      "manual_con_bang_thon_thien": {
        "id": "manual_con_bang_thon_thien",
        "name": "Bí Kíp: Côn Bằng Thôn Thiên Quyết",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Côn Bằng Thôn Thiên Quyết (Hệ Thủy).",
        "price": 100000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 1500,
        "techniqueId": "con_bang_thon_thien_quyet"
      },
      "manual_tat_phong_tuyet_anh": {
        "id": "manual_tat_phong_tuyet_anh",
        "name": "Bí Kíp: Tật Phong Tuyệt Ảnh Trảm",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Tật Phong Tuyệt Ảnh Trảm (Hệ Kim).",
        "price": 100000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 1500,
        "techniqueId": "tat_phong_tuyet_anh_tram"
      },
      "manual_thanh_moc_tinh_linh": {
        "id": "manual_thanh_moc_tinh_linh",
        "name": "Bí Kíp: Vạn Mộc Triều Nguyên",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Vạn Mộc Triều Nguyên (Hệ Mộc).",
        "price": 100000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 1500,
        "techniqueId": "thanh_moc_tinh_linh_quyet"
      },
      "manual_bach_doc_phe_tam": {
        "id": "manual_bach_doc_phe_tam",
        "name": "Bí Kíp: Bách Độc Phệ Tâm",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Bách Độc Phệ Tâm (Hệ Mộc).",
        "price": 100000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Địa Giai",
        "buyable": true,
        "sellable": true,
        "sellPrice": 1500,
        "techniqueId": "bach_doc_phe_tam"
      }
    },
    "thien_giai": {
      "manual_diet_the_ma_kiem": {
        "id": "manual_diet_the_ma_kiem",
        "name": "Bí Kíp: Diệt Thế Ma Kiếm",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Diệt Thế Ma Kiếm (Hệ Hỏa). Hủy diệt vạn vật.",
        "price": 10000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Thiên Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 5000,
        "techniqueId": "diet_the_ma_kiem"
      },
      "manual_bat_tu_diet_than": {
        "id": "manual_bat_tu_diet_than",
        "name": "Bí Kíp: Bất Tử Diệt Thần Quyết",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Bất Tử Diệt Thần Quyết (Hệ Kim). Nghịch thiên cải mệnh.",
        "price": 10000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Thiên Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 5000,
        "techniqueId": "bat_tu_diet_than"
      },
      "manual_van_moc_phuc_sinh": {
        "id": "manual_van_moc_phuc_sinh",
        "name": "Bí Kíp: Vạn Mộc Phục Sinh",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Vạn Mộc Phục Sinh (Hệ Mộc). Tịnh hóa tà niệm.",
        "price": 10000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Thiên Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 5000,
        "techniqueId": "van_moc_phuc_sinh"
      },
      "manual_thanh_long_xanh_hai": {
        "id": "manual_thanh_long_xanh_hai",
        "name": "Bí Kíp: Thanh Long Xuất Hải",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Thanh Long Xuất Hải (Hệ Thủy). Trấn áp vạn quân.",
        "price": 12000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Thiên Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 6000,
        "techniqueId": "thanh_long_xanh_hai"
      },
      "manual_dia_mau_quy_nguyen": {
        "id": "manual_dia_mau_quy_nguyen",
        "name": "Bí Kíp: Địa Mẫu Quy Nguyên",
        "description": "Vật phẩm dùng để lĩnh ngộ kỹ năng Địa Mẫu Quy Nguyên (Hệ Thổ). Sức mạnh lòng đất mẹ.",
        "price": 12000,
        "type": "technique",
        "category": "techniques",
        "rarity": "Thiên Giai",
        "buyable": false,
        "sellable": true,
        "sellPrice": 6000,
        "techniqueId": "dia_mau_quy_nguyen"
      }
    }
  },
  "maps": {
    "luyenkhi_maps": [
      {
        "id": "thanh_van_son",
        "name": "Thanh Vân Sơn",
        "minRealm": "Luyện Khí",
        "description": "Ngọn núi quanh năm mây phủ, linh khí ôn hòa, tụ hội tất cả yêu thú Luyện Khí.",
        "monsters": [
          "linh_hau",
          "hac_xa",
          "than_nham_khau",
          "am_du_viem_xa",
          "phong_linh_hau",
          "dia_khau_nham_xa",
          "thiet_tian_ho",
          "cuong_nham_ho",
          "thiet_bach_ho_vuong",
          "hac_xa_vuong"
        ]
      }
    ],
    "trucco_maps": [
      {
        "id": "van_thu_coc",
        "name": "Vạn Thú Cốc",
        "minRealm": "Trúc Cơ",
        "description": "Thung lũng u tối, nơi hàng ngàn yêu thú cấp cao quần tụ tranh hùng.",
        "monsters": [
          "lam_lang",
          "kim_quang_dieu",
          "thach_giap_vien",
          "hoa_linh_lang",
          "vong_hong_dieu",
          "u_anh_bao",
          "bao_kim_lang_vuong",
          "thien_kim_dieu_vương",
          "kim_giap_te",
          "xich_diem_ma_ho"
        ]
      }
    ],
    "kettinh_maps": [
      {
        "id": "loi_phat_chi_dia",
        "name": "Lôi Phạt Chi Địa",
        "minRealm": "Kết Tinh",
        "description": "Vùng đất sấm sét quanh năm, ẩn giấu vô số linh dược phục vụ ngưng kết Kim Đan.",
        "monsters": [
          "loi_quy",
          "thanh_phong_dieu",
          "hoa_van_bao",
          "dia_nguc_khuyen",
          "kim_cuong_vien",
          "cuu_dau_xa",
          "huyet_phuong",
          "thanh_long_ngac",
          "hac_ma_long",
          "thien_loi_ho"
        ]
      }
    ],
    "kimdan_maps": [
      {
        "id": "hoang_co_phe_tich",
        "name": "Hoang Cổ Phế Tích",
        "minRealm": "Kim Đan",
        "description": "Phế tích thời cổ đại hoang vu, linh lực hỗn loạn nhưng ẩn giấu vô số truyền thừa quý giá và linh dược để đột phá Kim Đan.",
        "monsters": [
          "hoang_co_sat_linh",
          "ma_phap_khuyen",
          "quy_dien_nhan",
          "hoang_tho_cu_cu",
          "cu_doc_thach_nghiem",
          "kinh_kich_thu_ve",
          "kiem_than_khoi_loi",
          "am_anh_ma_xa",
          "xich_linh_cu_hien_con",
          "hoang_co_chi_vuong"
        ]
      }
    ],
    "nguyenanh_maps": [
      {
        "id": "tuyet_am_coc",
        "name": "Tuyệt Âm Cốc",
        "minRealm": "Nguyên Anh",
        "released": true,
        "description": "Thung lũng u ám vĩnh cửu tràn ngập tà khí và oán niệm ngàn năm, là nơi ẩn náu của vô số yêu thú nguyên anh cấp.",
        "monsters": [
          "u_hon_linh",
          "dia_nguc_doc_ma",
          "thiet_giap_cu_te",
          "cu_am_ma_vuong",
          "doc_nhan_ma_vuong",
          "huyet_lien_tinh_anh",
          "van_hon_chua_te",
          "tuyet_am_ma_long"
        ]
      }
    ],
    "hoathan_maps": [
      {
        "id": "than_ma_co_mo",
        "name": "Thần Ma Cổ Mộ",
        "minRealm": "Hóa Thần",
        "released": true,
        "description": "Nơi chôn cất vô số thần ma thời thượng cổ, linh khí hỗn loạn dung hợp thần ma chi lực, chứa đựng vô vàn tàn linh cổ thú hóa thần cấp cực kỳ hung hiểm.",
        "monsters": [
          "co_mo_ma_binh",
          "kim_giap_uy_ve",
          "co_thu_phong_chien",
          "co_mo_hon_tinh",
          "cu_diet_vong_linh",
          "thiet_nhat_cu_linh",
          "than_ma_tu_si",
          "hac_am_long_vuong"
        ]
      }
    ]
  }
};
