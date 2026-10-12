/**
 * LINH GIỚI BÁCH KHOA TOÀN THƯ (DỊCH TIÊN BÀI YI XIAN STANDARDS)
 * Trích xuất 100% từ cấu hình bot Uyên Sư Muội
 */

window.LINH_GIOI_DATA = {
  guardians: [
  {
    "id": "hd_muc_dat_phong",
    "name": "Mục Dật Phong",
    "nameCn": "牧逸风",
    "title": "Ngự Kiếm Chân Nhân",
    "school": "kiem_tu",
    "schoolName": "Kiếm Tu",
    "sect": "Vân Linh Kiếm Tông",
    "icon": "🗡️",
    "avatarEmoji": "⚡",
    "style": "Ngự Kiếm cân bằng, Tiên cơ thần tốc",
    "description": "Đại đệ tử Vân Linh Kiếm Tông, tâm tính khoáng đạt, kiếm pháp thông thuận, chiếm tiên cơ ra đòn trước.",
    "innateBonus": {
      "atk": 1,
      "spd": 3,
      "startingMana": 1
    },
    "signatureSkillId": "card_1000001",
    "signatureSkillName": "Vân Kiếm•Tham Vân",
    "signatureSkill": {
      "id": "card_1000001",
      "name": "Vân Kiếm•Tham Vân",
      "nameCn": "云剑•探云",
      "type": "CONG_PHAP",
      "category": "VO_KY",
      "phase": 1,
      "school": "kiem_tu",
      "description": "6 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "6 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "9 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "12 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 12,
              "baseDamage": 12,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Triêu Khí",
        "desc": "+1 Linh Khí khởi đầu trận"
      },
      "dai_thua": {
        "name": "Ngự Phong",
        "desc": "+3 Thân Pháp (Tốc Độ)"
      },
      "do_kiep": {
        "name": "Kiếm Ý Bạt Tụy",
        "desc": "+2 Kiếm Ý đầu trận"
      },
      "ngo_dao": {
        "name": "Vạn Kiếm Quy Lưu",
        "desc": "Đòn đánh kiếm kế tiếp tăng thêm 4 Sát Thương"
      },
      "quy_nguyen": {
        "name": "Nhân Kiếm Hợp Nhất",
        "desc": "Bỏ qua 50% Hộ Giáp của đối phương"
      }
    }
  },
  {
    "id": "hd_viem_tuyet",
    "name": "Viêm Tuyết",
    "nameCn": "炎雪",
    "title": "Huyết Dục Kiếm Cơ",
    "school": "kiem_tu",
    "schoolName": "Kiếm Tu",
    "sect": "Vân Linh Kiếm Tông",
    "icon": "🩸",
    "avatarEmoji": "🔥",
    "style": "Cuồng Kiếm bạo kích, Khát Máu trảm sát",
    "description": "Nữ kiếm tu dũng mãnh, lấy máu ngưng kiếm, sát phạt quả quyết, đòn đánh cuồng bạo.",
    "innateBonus": {
      "atk": 3,
      "spd": 1
    },
    "signatureSkillId": "card_1000002",
    "signatureSkillName": "Vân Kiếm•Phi Thứ",
    "signatureSkill": {
      "id": "card_1000002",
      "name": "Vân Kiếm•Phi Thứ",
      "nameCn": "云剑•飞刺",
      "type": "CONG_PHAP",
      "category": "VO_KY",
      "phase": 1,
      "school": "kiem_tu",
      "description": "5 Công\n[Liên Vân]: Thêm vào 3 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "5 Công\n[Liên Vân]: Thêm vào 3 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 5,
              "baseDamage": 5,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "6 Công\n[Liên Vân]: Thêm vào 5 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "7 Công\n[Liên Vân]: Thêm vào 7 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 7,
              "baseDamage": 7,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Khát Máu",
        "desc": "+2 Sát Thương đòn đánh đầu trận"
      },
      "dai_thua": {
        "name": "Cuồng Kiếm Chi Ý",
        "desc": "Tăng 15% Sát Thương khi máu đối thủ dưới 50%"
      },
      "do_kiep": {
        "name": "Huyết Kiếm Nhập Thể",
        "desc": "Hồi 2 Máu mỗi khi tiêu hao Kiếm Ý"
      },
      "ngo_dao": {
        "name": "Huyết Dục Thần Kiếm",
        "desc": "Đòn đánh tiếp theo có hiệu ứng Phá Trán (+40% DMG)"
      },
      "quy_nguyen": {
        "name": "Thiên Ma Tuyệt Kiếm",
        "desc": "Bạo kích cực hạn, x2 Kiếm Ý tiêu hao"
      }
    }
  },
  {
    "id": "hd_long_dao",
    "name": "Long Dao",
    "nameCn": "龙瑶",
    "title": "Chấn Thiên Long Nữ",
    "school": "kiem_tu",
    "schoolName": "Kiếm Tu",
    "sect": "Vân Linh Kiếm Tông",
    "icon": "🐉",
    "avatarEmoji": "🌊",
    "style": "Long Hồn hộ thể, Kiếm Ý hùng hậu",
    "description": "Hậu duệ Chân Long mang huyết mạch viễn cổ, kiếm thế trầm ổn như núi, ngưng tụ long uy hộ thân.",
    "innateBonus": {
      "def": 2,
      "startingGuard": 3,
      "startingSwordIntent": 1
    },
    "signatureSkillId": "card_1000003",
    "signatureSkillName": "Vân Kiếm•Hậu Thổ",
    "signatureSkill": {
      "id": "card_1000003",
      "name": "Vân Kiếm•Hậu Thổ",
      "nameCn": "云剑•厚土",
      "type": "CONG_PHAP",
      "category": "VO_KY",
      "phase": 1,
      "school": "kiem_tu",
      "description": "4 Công\n[Liên Vân]: [Phòng] +4",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công\n[Liên Vân]: [Phòng] +4",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "6 Công\n[Liên Vân]: [Phòng] +6",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "8 Công\n[Liên Vân]: [Phòng] +8",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 8,
              "baseDamage": 8,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Long Khí Hộ Thân",
        "desc": "+3 Hộ Thể khởi đầu trận"
      },
      "dai_thua": {
        "name": "Chấn Địa Kiếm Phách",
        "desc": "+2 Hộ Thể nền tảng"
      },
      "do_kiep": {
        "name": "Long Ngâm Ba",
        "desc": "Làm đối thủ giảm 2 Tốc Độ đầu trận"
      },
      "ngo_dao": {
        "name": "Bán Long Ba",
        "desc": "Mỗi hiệp tự sinh 2 Hộ Giáp"
      },
      "quy_nguyen": {
        "name": "Chân Long Xuất Thế",
        "desc": "Kháng 1 tầng debuff xấu đầu tiên"
      }
    }
  },
  {
    "id": "hd_lam_tieu_nguyet",
    "name": "Lâm Tiểu Nguyệt",
    "nameCn": "林小月",
    "title": "Linh Miêu Kiếm Nữ",
    "school": "kiem_tu",
    "schoolName": "Kiếm Tu",
    "sect": "Vân Linh Kiếm Tông",
    "icon": "🐱",
    "avatarEmoji": "✨",
    "style": "Thân Pháp linh hoạt, Liên hoàn kiếm trảo",
    "description": "Miêu tộc linh động đắc đạo, kiếm pháp thoắt ẩn thoắt hiện, móng vuốt xé toạc phòng ngự.",
    "innateBonus": {
      "spd": 4,
      "atk": 1
    },
    "signatureSkillId": "card_1000004",
    "signatureSkillName": "Khinh Kiếm",
    "signatureSkill": {
      "id": "card_1000004",
      "name": "Khinh Kiếm",
      "nameCn": "轻剑",
      "type": "CONG_PHAP",
      "category": "VO_KY",
      "phase": 1,
      "school": "kiem_tu",
      "description": "4 Công\n[Linh khí] +1",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công\n[Linh khí] +1",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            },
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "4 Công\n[Linh khí] +2",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            },
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "4 Công\n[Linh khí] +3",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            },
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Miêu Bộ Linh Động",
        "desc": "+4 Thân Pháp (Tốc Độ)"
      },
      "dai_thua": {
        "name": "Linh Miêu Trảo",
        "desc": "Đòn đánh kế tiếp cộng thêm 1 lần công kích phụ"
      },
      "do_kiep": {
        "name": "Miêu Trảo Loạn Kiếm",
        "desc": "Đánh trúng kẻ địch nhận thêm 1 Hộ Thể"
      },
      "ngo_dao": {
        "name": "Linh Miêu Phụ Thể",
        "desc": "Liên Kích Chiêu Kế (Không mất lượt) không tiêu hao Thân Pháp"
      },
      "quy_nguyen": {
        "name": "Cửu Mệnh Linh Thân",
        "desc": "Sinh mệnh tối đa +30"
      }
    }
  },
  {
    "id": "hd_luc_kiem_tam",
    "name": "Lục Kiếm Tâm",
    "nameCn": "陆剑心",
    "title": "Vô Kiếm Kiếm Si",
    "school": "kiem_tu",
    "schoolName": "Kiếm Tu",
    "sect": "Vân Linh Kiếm Tông",
    "icon": "⚔️",
    "avatarEmoji": "🌟",
    "style": "Vô Kiếm Thắng Hữu Kiếm, Tụ Ý đoạn không",
    "description": "Kiếm si si mê kiếm đạo, trong lòng có kiếm thì cỏ cây cũng là kiếm khí, tích kiếm ý cuồng triều.",
    "innateBonus": {
      "atk": 2,
      "startingSwordIntent": 2
    },
    "signatureSkillId": "card_1000005",
    "signatureSkillName": "Hộ Thân Linh Khí",
    "signatureSkill": {
      "id": "card_1000005",
      "name": "Hộ Thân Linh Khí",
      "nameCn": "护身灵气",
      "type": "CONG_PHAP",
      "category": "THAN_PHAP",
      "phase": 1,
      "school": "kiem_tu",
      "description": "[Linh khí] +1\n[Phòng] +5",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +1\n[Phòng] +5",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            },
            {
              "type": "GUARD",
              "amount": 5
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +2\n[Phòng] +5",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            },
            {
              "type": "GUARD",
              "amount": 5
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +3\n[Phòng] +5",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            },
            {
              "type": "GUARD",
              "amount": 5
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Kiếm Tâm Thuần Khiết",
        "desc": "+2 Kiếm Ý khởi đầu trận"
      },
      "dai_thua": {
        "name": "Ý Khí Phong Phát",
        "desc": "Kiếm Ý không bị suy hao theo hiệp"
      },
      "do_kiep": {
        "name": "Kiếm Ý Cuồng Triều",
        "desc": "Xả Kiếm Ý gây thêm 50% Sát Thương"
      },
      "ngo_dao": {
        "name": "Tâm Kiếm Hợp Nhất",
        "desc": "+1 Công Kích cho mỗi 2 tầng Kiếm Ý"
      },
      "quy_nguyen": {
        "name": "Vạn Kiếm Quy Tông",
        "desc": "Đại chiêu kiếm thuật uy lực chí cao"
      }
    }
  },
  {
    "id": "hd_le_thua_van",
    "name": "Lê Thừa Vân",
    "nameCn": "黎承云",
    "title": "Vân Sơn Kiếm Tôn",
    "school": "kiem_tu",
    "schoolName": "Kiếm Tu",
    "sect": "Vân Linh Kiếm Tông",
    "icon": "☁️",
    "avatarEmoji": "🛡️",
    "style": "Vân Sơn Vụ Hải, Phản kích thần lôi",
    "description": "Kiếm ý mịt mù như biển mây, dĩ nhu khắc cương, hóa giải sát thương của đối phương làm kiếm thế của mình.",
    "innateBonus": {
      "hp": 20,
      "def": 2
    },
    "signatureSkillId": "card_1000006",
    "signatureSkillName": "Linh Khí Quán Chú",
    "signatureSkill": {
      "id": "card_1000006",
      "name": "Linh Khí Quán Chú",
      "nameCn": "灵气灌注",
      "type": "CONG_PHAP",
      "category": "THAN_PHAP",
      "phase": 1,
      "school": "kiem_tu",
      "description": "[Linh khí] +2\n1 lần công kích sau [Không nhìn phòng ngự]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +2\n1 lần công kích sau [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +3\n1 lần công kích sau [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +4\n1 lần công kích sau [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Mây Giăng Kín Lối",
        "desc": "+20 Máu tối đa"
      },
      "dai_thua": {
        "name": "Vân Khí Hộ Thân",
        "desc": "+3 Hộ Thể khi bị tấn công"
      },
      "do_kiep": {
        "name": "Huyền Tâm Trảm Phách",
        "desc": "Phản đòn gây 3 Sát Thương khi đỡ được đòn đánh"
      },
      "ngo_dao": {
        "name": "Vân Lôi Nhập Thể",
        "desc": "+2 Linh Khí khi máu giảm dưới 50%"
      },
      "quy_nguyen": {
        "name": "Vân Quy Bát Hoang",
        "desc": "Miễn nhiễm choáng và ngắt chiêu"
      }
    }
  },
  {
    "id": "hd_dam_thu_nhan",
    "name": "Đàm Thư Nhạn",
    "nameCn": "谭舒雁",
    "title": "U Lan Cầm Tiên",
    "school": "tinh_tu",
    "schoolName": "Tinh Tu",
    "sect": "Thất Tinh Các",
    "icon": "🪕",
    "avatarEmoji": "🌸",
    "style": "Cầm Sư âm luật, Nội Thương xuyên thấu giáp",
    "description": "Diệu thủ gảy đàn, tiếng đàn ẩn chứa sát khí vô hình đánh thẳng vào tạng phủ, bỏ qua hộ giáp.",
    "innateBonus": {
      "startingMana": 1,
      "atk": 1
    },
    "signatureSkillId": "card_4000002",
    "signatureSkillName": "Khôn Quái (Thanh Tâm Khúc)",
    "signatureSkill": {
      "id": "card_4000002",
      "name": "Khôn Quái",
      "nameCn": "坤卦",
      "type": "CONG_PHAP",
      "category": "THAN_PHAP",
      "phase": 1,
      "school": "tinh_tu",
      "description": "[Phòng] +2\n[Quái tượng] +2",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Phòng] +2\n[Quái tượng] +2",
          "effects": [
            {
              "type": "GUARD",
              "amount": 2
            },
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 2
              }
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Phòng] +2\n[Quái tượng] +3",
          "effects": [
            {
              "type": "GUARD",
              "amount": 2
            },
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 3
              }
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Phòng] +2\n[Quái tượng] +4",
          "effects": [
            {
              "type": "GUARD",
              "amount": 2
            },
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 4
              }
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Huyền Âm Thấu Tạng",
        "desc": "Đòn đánh gây thêm +1 tầng Nội Thương"
      },
      "dai_thua": {
        "name": "Cầm Tâm Họa Ý",
        "desc": "+1 Linh Khí khởi đầu"
      },
      "do_kiep": {
        "name": "Thiên Lại Chi Âm",
        "desc": "Nội Thương gây thêm 2 Sát Thương mỗi lượt"
      },
      "ngo_dao": {
        "name": "Quảng Lăng Tuyệt Điệu",
        "desc": "Giảm 2 Công Kích của đối thủ trong 2 hiệp"
      },
      "quy_nguyen": {
        "name": "Thần Âm Phá Hồn",
        "desc": "Bỏ qua 100% Hộ Giáp với các đòn âm luật"
      }
    }
  },
  {
    "id": "hd_viem_tran",
    "name": "Viêm Trần",
    "nameCn": "炎尘",
    "title": "Xích Hỏa Tinh Quân",
    "school": "tinh_tu",
    "schoolName": "Tinh Tu",
    "sect": "Thất Tinh Các",
    "icon": "☄️",
    "avatarEmoji": "🔥",
    "style": "Tinh Hỏa Liệu Nguyên, Phá Khí đối thủ",
    "description": "Dẫn tinh hỏa trên trời giáng thế, thiêu đốt đan điền, cướp đoạt linh khí đối phương.",
    "innateBonus": {
      "atk": 2,
      "spd": 1
    },
    "signatureSkillId": "card_4000003",
    "signatureSkillName": "Chấn Quái",
    "signatureSkill": {
      "id": "card_4000003",
      "name": "Chấn Quái",
      "nameCn": "震卦",
      "type": "CONG_PHAP",
      "category": "VO_KY",
      "phase": 1,
      "school": "tinh_tu",
      "description": "4 Công\n[Quái tượng] +1",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công\n[Quái tượng] +1",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 1
              }
            },
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "7 Công\n[Quái tượng] +1",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 1
              }
            },
            {
              "type": "DAMAGE",
              "damage": 7,
              "baseDamage": 7,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "10 Công\n[Quái tượng] +1",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 1
              }
            },
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Tinh Hỏa Liệt Diệm",
        "desc": "+2 Công Kích đòn tấn công"
      },
      "dai_thua": {
        "name": "Chấn Hỏa Thiêu Đan",
        "desc": "Đốt cháy 1 Linh Khí của đối thủ ở Hiệp 2"
      },
      "do_kiep": {
        "name": "Thiên Hỏa Lạc Tinh",
        "desc": "Gây 5 Sát Thương Hỏa Tinh đầu trận"
      },
      "ngo_dao": {
        "name": "Tinh Khí Bộc Liệt",
        "desc": "+3 Sát Thương khi đối thủ cạn Linh Khí"
      },
      "quy_nguyen": {
        "name": "Hỏa Tinh Tuyệt Sát",
        "desc": "X2 sát thương khi kích hoạt Tinh Vị"
      }
    }
  },
  {
    "id": "hd_dieu_linh",
    "name": "Diệu Linh",
    "nameCn": "曜灵",
    "title": "Bắc Đẩu Tinh Quan",
    "school": "tinh_tu",
    "schoolName": "Tinh Tu",
    "sect": "Thất Tinh Các",
    "icon": "🌟",
    "avatarEmoji": "✨",
    "style": "Tinh Vị trụ trận, Phù chú hộ mệnh",
    "description": "Thông hiểu tinh tú phương bắc, kích hoạt Tinh Vị tại các ô đặc biệt trong trận hình.",
    "innateBonus": {
      "def": 2,
      "startingGuard": 4
    },
    "signatureSkillId": "card_4000010",
    "signatureSkillName": "Tinh Kỳ•Giáp",
    "signatureSkill": {
      "id": "card_4000010",
      "name": "Tinh Kỳ•Giáp",
      "nameCn": "星弈•夹",
      "type": "CONG_PHAP",
      "category": "TUYET_KY",
      "phase": 1,
      "school": "tinh_tu",
      "description": "6 Công\n[Tinh vị]: Thêm vào 5 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "6 Công\n[Tinh vị]: Thêm vào 5 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "7 Công\n[Tinh vị]: Thêm vào 7 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 7,
              "baseDamage": 7,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "8 Công\n[Tinh vị]: Thêm vào 9 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 8,
              "baseDamage": 8,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Tinh Vị Ô 3",
        "desc": "Ô thứ 3 nhận thêm +3 Hộ Thể"
      },
      "dai_thua": {
        "name": "Tinh Vị Ô 6",
        "desc": "Ô thứ 6 hồi phục +1 Linh Khí"
      },
      "do_kiep": {
        "name": "Bắc Đẩu Trụ Trận",
        "desc": "+2 Hộ Thể nền tảng"
      },
      "ngo_dao": {
        "name": "Thất Tinh Chi Quang",
        "desc": "Hồi 5 Máu khi thi triển công pháp Tinh Kỳ"
      },
      "quy_nguyen": {
        "name": "Chu Thiên Tinh Đấu Trận",
        "desc": "Giảm 30% toàn bộ sát thương nhận vào"
      }
    }
  },
  {
    "id": "hd_khuong_tap_minh",
    "name": "Khương Tập Minh",
    "nameCn": "姜袭明",
    "title": "Thiên Cơ Thần Toán",
    "school": "tinh_tu",
    "schoolName": "Tinh Tu",
    "sect": "Thất Tinh Các",
    "icon": "🔮",
    "avatarEmoji": "📜",
    "style": "Bấm quẻ đoán mệnh, Nghịch chuyển càn khôn",
    "description": "Vận dụng Dịch Kinh chiêm bói, nắm giữ xác suất và thiên cơ, biến điềm hung thành cát.",
    "innateBonus": {
      "startingGua": 2,
      "startingMana": 1
    },
    "signatureSkillId": "card_4000003",
    "signatureSkillName": "Bói Quẻ Thiên Cơ",
    "signatureSkill": {
      "id": "card_4000003",
      "name": "Chấn Quái",
      "nameCn": "震卦",
      "type": "CONG_PHAP",
      "category": "VO_KY",
      "phase": 1,
      "school": "tinh_tu",
      "description": "4 Công\n[Quái tượng] +1",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công\n[Quái tượng] +1",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 1
              }
            },
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "7 Công\n[Quái tượng] +1",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 1
              }
            },
            {
              "type": "DAMAGE",
              "damage": 7,
              "baseDamage": 7,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "10 Công\n[Quái tượng] +1",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 1
              }
            },
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Bấm Quẻ Chiêm Binh",
        "desc": "+2 Quẻ Tượng khởi đầu trận"
      },
      "dai_thua": {
        "name": "Quẻ Cát Hóa Thần",
        "desc": "Hiệu ứng xúc xắc luôn đạt chỉ số tối đa"
      },
      "do_kiep": {
        "name": "Nghịch Chuyển Thiên Cơ",
        "desc": "Hồi 3 Máu khi quẻ tượng kích hoạt"
      },
      "ngo_dao": {
        "name": "Đại Diễn Chi Số",
        "desc": "+1 Thân Pháp cho mỗi tầng Quẻ Tượng"
      },
      "quy_nguyen": {
        "name": "Thần Toán Vô Song",
        "desc": "Đoán trước đòn đánh, né tránh 1 đòn sát thương chí mạng"
      }
    }
  },
  {
    "id": "hd_ngo_sach",
    "name": "Ngô Sách",
    "nameCn": "吴策",
    "title": "Tinh Khôi Kỳ Thánh",
    "school": "tinh_tu",
    "schoolName": "Tinh Tu",
    "sect": "Thất Tinh Các",
    "icon": "♟️",
    "avatarEmoji": "⚡",
    "style": "Tinh Hạm áp chế, Đoạt Khí linh lực",
    "description": "Lấy thiên địa làm bàn cờ, từng nước đi đoạt khí áp chế đối thủ đến mức không thể ra đòn.",
    "innateBonus": {
      "startingMana": 1,
      "spd": 2
    },
    "signatureSkillId": "card_4000001",
    "signatureSkillName": "Tốn Quái",
    "signatureSkill": {
      "id": "card_4000001",
      "name": "Tốn Quái",
      "nameCn": "巽卦",
      "type": "CONG_PHAP",
      "category": "THAN_PHAP",
      "phase": 1,
      "school": "tinh_tu",
      "description": "[Linh khí] +1\n[Quái tượng] +1",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +1\n[Quái tượng] +1",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            },
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 1
              }
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +2\n[Quái tượng] +1",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            },
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 1
              }
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +2\n[Quái tượng] +2",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            },
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 2
              }
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Kỳ Phổ Tinh Hạm",
        "desc": "+1 Linh Khí khởi đầu"
      },
      "dai_thua": {
        "name": "Đoạt Khí Tuyệt Sát",
        "desc": "Hút 1 Linh Khí của đối thủ ở Hiệp 3"
      },
      "do_kiep": {
        "name": "Thiên Cương Áp Chế",
        "desc": "Làm đối thủ tăng thêm 1 tiêu hao Linh Khí"
      },
      "ngo_dao": {
        "name": "Chiếu Tướng Diệt Tuyệt",
        "desc": "+4 Sát Thương đòn đánh"
      },
      "quy_nguyen": {
        "name": "Kỳ Đạo Đỉnh Phong",
        "desc": "Khóa 1 ô Trận Hình của đối thủ trong 1 chu kỳ"
      }
    }
  },
  {
    "id": "hd_phong_tu",
    "name": "Phong Tự",
    "nameCn": "风绪",
    "title": "Tật Phong Tinh Kiếm",
    "school": "tinh_tu",
    "schoolName": "Tinh Tu",
    "sect": "Thất Tinh Các",
    "icon": "🌪️",
    "avatarEmoji": "🗡️",
    "style": "Khoái Kiếm nhịp độ cao, Thần tốc xuất chiêu",
    "description": "Tinh kiếm xuất vỏ như gió thoảng mây trôi, tốc độ ra chiêu kinh người áp đảo tiên cơ.",
    "innateBonus": {
      "spd": 5,
      "atk": 1
    },
    "signatureSkillId": "card_8000010",
    "signatureSkillName": "Bát Môn Kim Tỏa Trận",
    "signatureSkill": {
      "id": "card_8000010",
      "name": "Bát Môn Kim Tỏa Trận",
      "nameCn": "八门金锁阵",
      "type": "CONG_PHAP",
      "category": "THAN_PHAP",
      "phase": 4,
      "school": "trung_lap",
      "description": "Tạo thành 10 [Tổn thương]\n[Duy trì] 2 [Lần]: Nếu đối thủ Tiếp tục hành động thì trước đó sẽ nhận 8 Tổn thương",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "Tạo thành 10 [Tổn thương]\n[Duy trì] 2 [Lần]: Nếu đối thủ Tiếp tục hành động thì trước đó sẽ nhận 8 Tổn thương",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": true
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "Tạo thành 15 [Tổn thương]\n[Duy trì] 3 [Lần]: Nếu đối thủ Tiếp tục hành động thì trước đó sẽ nhận 8 Tổn thương",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": true
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "Tạo thành 20 [Tổn thương]\n[Duy trì] 4 [Lần]: Nếu đối thủ Tiếp tục hành động thì trước đó sẽ nhận 8 Tổn thương",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": true
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Thần Tốc Tiên Cơ",
        "desc": "+5 Thân Pháp (Tốc Độ)"
      },
      "dai_thua": {
        "name": "Tật Phong Nhất Kiếm",
        "desc": "Luôn xuất chiêu trước ở Hiệp 1"
      },
      "do_kiep": {
        "name": "Phong Nhận Liên Hoàn",
        "desc": "+2 Công Kích đòn đánh khi thân pháp cao hơn đối thủ"
      },
      "ngo_dao": {
        "name": "Tật Phong Bộ Pháp",
        "desc": "+1 Lần Liên Kích Chiêu Kế (Không mất lượt) ở hiệp đầu"
      },
      "quy_nguyen": {
        "name": "Cuồng Phong Tuyệt Sát",
        "desc": "Tấn công thêm 1 lượt khi kết liễu"
      }
    }
  },
  {
    "id": "hd_ngo_hanh_chi",
    "name": "Ngô Hành Chi",
    "nameCn": "吾行之",
    "title": "Ngũ Hành Đạo Chủ",
    "school": "phap_tu",
    "schoolName": "Pháp Tu",
    "sect": "Ngũ Hành Đạo Minh",
    "icon": "🌀",
    "avatarEmoji": "☯️",
    "style": "Ngũ Hành Tương Sinh, Sinh Khắc tuần hoàn",
    "description": "Vận chuyển linh lực ngũ hành tương sinh, linh khí lưu chuyển bất tận, công thủ toàn diện.",
    "innateBonus": {
      "hp": 15,
      "startingMana": 1,
      "def": 1
    },
    "signatureSkillId": "card_7000003",
    "signatureSkillName": "Mộc Linh Ấn",
    "signatureSkill": {
      "id": "card_7000003",
      "name": "Mộc Linh Ấn",
      "nameCn": "木灵印",
      "type": "CONG_PHAP",
      "category": "THAN_PHAP",
      "phase": 1,
      "school": "phap_tu",
      "description": "[Linh khí] +1\nSinh mệnh +4 \n[Kích Hoạt Mộc Linh]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +1\nSinh mệnh +4 \n[Kích Hoạt Mộc Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +2\nSinh mệnh +4 \n[Kích Hoạt Mộc Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +3\nSinh mệnh +4 \n[Kích Hoạt Mộc Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Ngũ Hành Tương Sinh",
        "desc": "Kích hoạt công pháp cùng hệ ngũ hành hồi +3 Máu"
      },
      "dai_thua": {
        "name": "Linh Khí Tuần Hoàn",
        "desc": "+1 Linh Khí sau mỗi chu kỳ tương sinh"
      },
      "do_kiep": {
        "name": "Đại Đạo Chi Quang",
        "desc": "+2 Hộ Thể và +2 Công Kích"
      },
      "ngo_dao": {
        "name": "Ngũ Hành Quy Nhất",
        "desc": "+5 Sát Thương khi chu kỳ đủ 5 nguyên tố"
      },
      "quy_nguyen": {
        "name": "Hỗn Độn Ngũ Hành",
        "desc": "Miễn nhiễm sát thương khắc hệ"
      }
    }
  },
  {
    "id": "hd_do_linh_uyen",
    "name": "Đỗ Linh Uyên",
    "nameCn": "杜伶鸳",
    "title": "Hàn Băng Thần Nữ",
    "school": "phap_tu",
    "schoolName": "Pháp Tu",
    "sect": "Ngũ Hành Đạo Minh",
    "icon": "❄️",
    "avatarEmoji": "💧",
    "style": "Thủy Linh Băng Phong, Khống chế tốc độ",
    "description": "Hàn băng vạn trượng đông cứng kinh mạch đối thủ, làm chậm nhịp độ và bào mòn sinh lực.",
    "innateBonus": {
      "def": 2,
      "startingGuard": 3
    },
    "signatureSkillId": "card_17",
    "signatureSkillName": "Thủy Linh•Xuân Vũ",
    "signatureSkill": {
      "id": "card_17",
      "name": "Thủy Linh•Xuân Vũ",
      "nameCn": "水灵•春雨",
      "type": "CONG_PHAP",
      "category": "THAN_PHAP",
      "phase": 4,
      "school": "trung_lap",
      "description": "Sinh mệnh cùng hạn mức cao nhất +4 \n[Duy trì]: Mỗi lần bắt đầu hiệp của bản thân thêm 1 tầng [Thủy thế]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "Sinh mệnh cùng hạn mức cao nhất +4 \n[Duy trì]: Mỗi lần bắt đầu hiệp của bản thân thêm 1 tầng [Thủy thế]",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "Sinh mệnh cùng hạn mức cao nhất +10 \n[Duy trì]: Mỗi lần bắt đầu hiệp của bản thân thêm 1 tầng [Thủy thế]",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "Sinh mệnh cùng hạn mức cao nhất +16 \n[Duy trì]: Mỗi lần bắt đầu hiệp của bản thân thêm 1 tầng [Thủy thế]",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Băng Sương Thấu Cốt",
        "desc": "Đòn Thủy Linh làm giảm 2 Tốc Độ đối thủ"
      },
      "dai_thua": {
        "name": "Hàn Băng Hộ Giáp",
        "desc": "+3 Hộ Thể khởi đầu trận"
      },
      "do_kiep": {
        "name": "Đông Kết Linh Mạch",
        "desc": "Đối thủ bị đóng băng mất 1 lượt hành động phụ"
      },
      "ngo_dao": {
        "name": "Cửu U Huyền Băng",
        "desc": "+4 Sát Thương đòn đánh hệ Thủy"
      },
      "quy_nguyen": {
        "name": "Băng Phong Thiên Lý",
        "desc": "Giảm 50% Tốc Độ toàn bộ hiệp đấu của đối thủ"
      }
    }
  },
  {
    "id": "hd_hoa_tham_nhi",
    "name": "Hoa Thấm Nhị",
    "nameCn": "花沁蕊",
    "title": "Bách Thảo Tiên Cô",
    "school": "phap_tu",
    "schoolName": "Pháp Tu",
    "sect": "Ngũ Hành Đạo Minh",
    "icon": "🌿",
    "avatarEmoji": "🌸",
    "style": "Mộc Linh Dưỡng Mệnh, Trị liệu sinh cơ",
    "description": "Chữa lành vạn vật, dồi dào sinh cơ như cỏ cây mùa xuân, sinh mệnh bền bỉ không thể bị quật ngã.",
    "innateBonus": {
      "hp": 30,
      "def": 1
    },
    "signatureSkillId": "card_7000004",
    "signatureSkillName": "Mộc Linh•Nha",
    "signatureSkill": {
      "id": "card_7000004",
      "name": "Mộc Linh•Nha",
      "nameCn": "木灵•芽",
      "type": "CONG_PHAP",
      "category": "TUYET_KY",
      "phase": 1,
      "school": "phap_tu",
      "description": "3 Công ×2\n[Mộc Linh]: Sinh mệnh +5",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "3 Công ×2\n[Mộc Linh]: Sinh mệnh +5",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 3,
              "baseDamage": 3,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "3 Công ×3\n[Mộc Linh]: Sinh mệnh +5",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 3,
              "baseDamage": 3,
              "hits": 3,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "3 Công ×4\n[Mộc Linh]: Sinh mệnh +5",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 3,
              "baseDamage": 3,
              "hits": 4,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Bách Thảo Dưỡng Sinh",
        "desc": "+30 Máu tối đa"
      },
      "dai_thua": {
        "name": "Sinh Sinh Bất Tức",
        "desc": "Mỗi hiệp tự hồi phục 2 Máu"
      },
      "do_kiep": {
        "name": "Mộc Linh Sinh Mệnh",
        "desc": "Tăng 50% hiệu quả toàn bộ kỹ năng hồi phục"
      },
      "ngo_dao": {
        "name": "Thần Thảo Hộ Mệnh",
        "desc": "Khi máu < 30%, lập tức hồi 15 Máu (1 lần/trận)"
      },
      "quy_nguyen": {
        "name": "Niết Bàn Trường Sinh",
        "desc": "Hồi sinh với 20% Máu khi chịu đòn chí tử"
      }
    }
  },
  {
    "id": "hd_mo_ho",
    "name": "Mộ Hổ",
    "nameCn": "慕虎",
    "title": "Bạch Hổ Chiến Tướng",
    "school": "phap_tu",
    "schoolName": "Pháp Tu",
    "sect": "Ngũ Hành Đạo Minh",
    "icon": "🐅",
    "avatarEmoji": "⚔️",
    "style": "Canh Kim Phong Nhuệ, Xuyên giáp trảm kích",
    "description": "Bạch Hổ Canh Kim sát phạt chí tôn, móng vuốt sắc bén xé nát mọi tấm khiên hộ thể.",
    "innateBonus": {
      "atk": 3,
      "spd": 2
    },
    "signatureSkillId": "card_7000001",
    "signatureSkillName": "Kim Linh Liệt Trận",
    "signatureSkill": {
      "id": "card_7000001",
      "name": "Kim Linh Ấn",
      "nameCn": "金灵印",
      "type": "CONG_PHAP",
      "category": "VO_KY",
      "phase": 1,
      "school": "phap_tu",
      "description": "6 Công\n[Kích Hoạt Kim Linh]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "6 Công\n[Kích Hoạt Kim Linh]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "9 Công\n[Kích Hoạt Kim Linh]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "12 Công\n[Kích Hoạt Kim Linh]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 12,
              "baseDamage": 12,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Bạch Hổ Canh Kim",
        "desc": "+2 tầng Phong Nhuệ khởi đầu trận"
      },
      "dai_thua": {
        "name": "Kim Cương Phá Giáp",
        "desc": "Đòn đánh bỏ qua 3 Hộ Giáp của đối thủ"
      },
      "do_kiep": {
        "name": "Hổ Khiếu Sơn Hà",
        "desc": "+3 Công Kích nền tảng"
      },
      "ngo_dao": {
        "name": "Kim Linh Thần Trảm",
        "desc": "X2 sát thương Phong Nhuệ khi xuyên trúng Máu"
      },
      "quy_nguyen": {
        "name": "Bạch Hổ Tuyệt Sát",
        "desc": "Trảm sát trực tiếp nếu đối thủ dưới 15% Máu"
      }
    }
  },
  {
    "id": "hd_nam_cung_sinh",
    "name": "Nam Cung Sinh",
    "nameCn": "南宫生",
    "title": "Hậu Thổ Kim Cương",
    "school": "phap_tu",
    "schoolName": "Pháp Tu",
    "sect": "Ngũ Hành Đạo Minh",
    "icon": "⛰️",
    "avatarEmoji": "🛡️",
    "style": "Thổ Linh Thạch Giáp, Bất động như sơn",
    "description": "Vững chãi như Thái Sơn, hấp thu địa mạch bảo hộ thân thể, giảm tối đa suy hao hộ giáp.",
    "innateBonus": {
      "def": 3,
      "startingGuard": 5
    },
    "signatureSkillId": "card_1000005",
    "signatureSkillName": "Thổ Linh•Thạch Giáp",
    "signatureSkill": {
      "id": "card_1000005",
      "name": "Hộ Thân Linh Khí",
      "nameCn": "护身灵气",
      "type": "CONG_PHAP",
      "category": "THAN_PHAP",
      "phase": 1,
      "school": "kiem_tu",
      "description": "[Linh khí] +1\n[Phòng] +5",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +1\n[Phòng] +5",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            },
            {
              "type": "GUARD",
              "amount": 5
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +2\n[Phòng] +5",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            },
            {
              "type": "GUARD",
              "amount": 5
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +3\n[Phòng] +5",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            },
            {
              "type": "GUARD",
              "amount": 5
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Thạch Giáp Hộ Thân",
        "desc": "+5 Hộ Thể khởi đầu trận"
      },
      "dai_thua": {
        "name": "Thổ Linh Bất Hoại",
        "desc": "Suy hao giáp đầu lượt giảm từ 50% xuống 25%"
      },
      "do_kiep": {
        "name": "Hậu Thổ Chi Lực",
        "desc": "+3 Hộ Thể nền tảng"
      },
      "ngo_dao": {
        "name": "Địa Mạch Hóa Thần",
        "desc": "Chuyển 50% sát thương nhận vào thành Linh Khí"
      },
      "quy_nguyen": {
        "name": "Bất Động Minh Vương",
        "desc": "Miễn nhiễm hoàn toàn sát thương bạo kích"
      }
    }
  },
  {
    "id": "hd_ky_vong_uu",
    "name": "Kỳ Vong Ưu",
    "nameCn": "祁忘忧",
    "title": "Xích Viêm Hỏa Ma",
    "school": "phap_tu",
    "schoolName": "Pháp Tu",
    "sect": "Ngũ Hành Đạo Minh",
    "icon": "🔥",
    "avatarEmoji": "💥",
    "style": "Ly Hỏa Bạo Liệt, Thiêu đốt cuồng nộ",
    "description": "Khống chế ngọn lửa Nam Minh Ly Hỏa cuồng bạo, thiêu rụi mọi chướng ngại vật cản đường.",
    "innateBonus": {
      "atk": 3,
      "startingMana": 1
    },
    "signatureSkillId": "card_7000009",
    "signatureSkillName": "Hỏa Linh Ấn",
    "signatureSkill": {
      "id": "card_7000009",
      "name": "Hỏa Linh Ấn",
      "nameCn": "火灵印",
      "type": "CONG_PHAP",
      "category": "THAN_PHAP",
      "phase": 1,
      "school": "phap_tu",
      "description": "[Linh khí] +1\nĐối phương giảm 3 Sinh mệnh và Sinh mệnh tối đa\n[Kích Hoạt Hỏa Linh]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +1\nĐối phương giảm 3 Sinh mệnh và Sinh mệnh tối đa\n[Kích Hoạt Hỏa Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +2\nĐối phương giảm 3 Sinh mệnh và Sinh mệnh tối đa\n[Kích Hoạt Hỏa Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +3\nĐối phương giảm 3 Sinh mệnh và Sinh mệnh tối đa\n[Kích Hoạt Hỏa Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Nam Minh Ly Hỏa",
        "desc": "Công pháp Hỏa Linh gây thêm +3 Sát Thương"
      },
      "dai_thua": {
        "name": "Hỏa Diễm Nhiệt Triều",
        "desc": "+1 Linh Khí khởi đầu trận"
      },
      "do_kiep": {
        "name": "Liệt Diệm Bộc Phá",
        "desc": "Đòn đánh bộc phát diện rộng"
      },
      "ngo_dao": {
        "name": "Phần Thiên Diệt Địa",
        "desc": "+5 Công Kích khi sinh mệnh bản thân dưới 50%"
      },
      "quy_nguyen": {
        "name": "Bất Diệt Hỏa Chủng",
        "desc": "Đốt cháy 2 Máu đối phương mỗi hiệp vĩnh viễn"
      }
    }
  },
  {
    "id": "hd_tieu_bo",
    "name": "Tiểu Bố",
    "nameCn": "小布",
    "title": "Kim Thân Thiếu Niên",
    "school": "the_tu",
    "schoolName": "Thể Tu",
    "sect": "Đoán Huyền Tông",
    "icon": "🥋",
    "avatarEmoji": "💪",
    "style": "Thể Phách hùng hậu, Càng đánh càng hăng",
    "description": "Thiếu niên thuần khiết lấy thân luyện đạo, thể phách dẻo dai vô song, sức chịu đựng phi thường.",
    "innateBonus": {
      "hp": 25,
      "startingMomentum": 2
    },
    "signatureSkillId": "card_10000004",
    "signatureSkillName": "Đoán Quyết (Đoán Cốt Quyết)",
    "signatureSkill": {
      "id": "card_10000004",
      "name": "Đoán Quyền",
      "nameCn": "锻拳",
      "type": "CONG_PHAP",
      "category": "VO_KY",
      "phase": 1,
      "school": "the_tu",
      "description": "6 Công\n[Thể phách] +1",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "6 Công\n[Thể phách] +1",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 1
            },
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "6 Công\n[Thể phách] +1",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 1
            },
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "6 Công\n[Thể phách] +1",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 1
            },
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Đoán Cốt Nhập Đạo",
        "desc": "+2 Thể Phách (Momentum) khởi đầu trận"
      },
      "dai_thua": {
        "name": "Kim Thân Dẻo Dai",
        "desc": "+25 Máu tối đa"
      },
      "do_kiep": {
        "name": "Càng Đánh Càng Hăng",
        "desc": "+1 Công Kích sau mỗi 2 hiệp chiến đấu"
      },
      "ngo_dao": {
        "name": "Bất Hoại Chi Thân",
        "desc": "Giảm 2 sát thương từ mọi đòn tấn công"
      },
      "quy_nguyen": {
        "name": "Chân Thể Bất Diệt",
        "desc": "Tự động hồi 10 Máu khi máu tụt xuống 0 (1 lần)"
      }
    }
  },
  {
    "id": "hd_do_quy",
    "name": "Đồ Quỳ",
    "nameCn": "屠馗",
    "title": "Phá Thạch Quyền Bá",
    "school": "the_tu",
    "schoolName": "Thể Tu",
    "sect": "Đoán Huyền Tông",
    "icon": "👊",
    "avatarEmoji": "💥",
    "style": "Băng Quyền phá đá, Thuần lực áp chế",
    "description": "Dĩ lực chứng đạo, quyền phong như sấm sét xé toạc đá tảng, đấm vỡ mọi lớp giáp phòng hộ.",
    "innateBonus": {
      "atk": 3,
      "startingMomentum": 1
    },
    "signatureSkillId": "card_10000001",
    "signatureSkillName": "Băng Quyền•Trạc (Phá Thạch)",
    "signatureSkill": {
      "id": "card_10000001",
      "name": "Băng Quyền•Trạc",
      "nameCn": "崩拳•戳",
      "type": "CONG_PHAP",
      "category": "VO_KY",
      "phase": 1,
      "school": "the_tu",
      "description": "9 Công\nchiêu Băng Quyền kế tiếp nhiều 2 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "9 Công\nchiêu Băng Quyền kế tiếp nhiều 2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "9 Công\nchiêu Băng Quyền kế tiếp nhiều 2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "9 Công\nchiêu Băng Quyền kế tiếp nhiều 2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Băng Quyền Thần Uy",
        "desc": "+3 Sát Thương cho tất cả chiêu Băng Quyền"
      },
      "dai_thua": {
        "name": "Phá Thạch Kình",
        "desc": "Đòn Băng Quyền phá vỡ 4 Hộ Giáp của đối phương"
      },
      "do_kiep": {
        "name": "Quyền Trọng Vạn Cân",
        "desc": "+2 Công Kích nền tảng"
      },
      "ngo_dao": {
        "name": "Bá Đạo Quyền Ý",
        "desc": "Đòn đánh kế tiếp có hiệu ứng Choáng nhẹ"
      },
      "quy_nguyen": {
        "name": "Khai Thiên Tích Địa",
        "desc": "X2 sát thương Băng Quyền khi Thể Phách > 5"
      }
    }
  },
  {
    "id": "hd_diep_minh_minh",
    "name": "Diệp Minh Minh",
    "nameCn": "叶冥冥",
    "title": "U Ảnh Ám Quyền",
    "school": "the_tu",
    "schoolName": "Thể Tu",
    "sect": "Đoán Huyền Tông",
    "icon": "🌑",
    "avatarEmoji": "⚡",
    "style": "Ám Kình thấu cốt, Thần tốc đột kích",
    "description": "Thân pháp thoắt ẩn thoắt hiện trong bóng đêm, quyền kình âm độc đánh lén điểm yếu đối thủ.",
    "innateBonus": {
      "spd": 4,
      "atk": 2
    },
    "signatureSkillId": "card_10000024",
    "signatureSkillName": "Băng Quyền•Tiệt Mạch",
    "signatureSkill": {
      "id": "card_10000024",
      "name": "Băng Quyền•Tiệt Mạch",
      "nameCn": "崩拳•截脉",
      "type": "CONG_PHAP",
      "category": "VO_KY",
      "phase": 3,
      "school": "the_tu",
      "description": "9 Công\nNgẫu nhiên chuyển 1 tầng [Trạng thái xấu] của bản thân cho đối thủ (chiêu Băng Quyền kế tiếp cũng kèm hiệu quả này)",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "9 Công\nNgẫu nhiên chuyển 1 tầng [Trạng thái xấu] của bản thân cho đối thủ (chiêu Băng Quyền kế tiếp cũng kèm hiệu quả này)",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "9 Công\nNgẫu nhiên chuyển 1 tầng [Trạng thái xấu] của bản thân cho đối thủ (chiêu Băng Quyền kế tiếp cũng kèm hiệu quả này)",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "9 Công\nNgẫu nhiên chuyển 1 tầng [Trạng thái xấu] của bản thân cho đối thủ (chiêu Băng Quyền kế tiếp cũng kèm hiệu quả này)",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Ám Kình Thấu Cốt",
        "desc": "Bỏ qua 2 Hộ Giáp của đối phương"
      },
      "dai_thua": {
        "name": "U Ảnh Thần Hành",
        "desc": "+4 Thân Pháp (Tốc Độ)"
      },
      "do_kiep": {
        "name": "Tiệt Mạch Phá Khí",
        "desc": "Chuyển 1 hiệu ứng xấu của mình sang đối phương"
      },
      "ngo_dao": {
        "name": "Đột Kích Điểm Yếu",
        "desc": "Tấn công gây thêm 4 Sát Thương nếu có Tiên Cơ"
      },
      "quy_nguyen": {
        "name": "Vô Ảnh Vô Hình",
        "desc": "Né tránh 25% sát thương nhận vào"
      }
    }
  },
  {
    "id": "hd_co_phuong_sinh",
    "name": "Cơ Phương Sinh",
    "nameCn": "姬方生",
    "title": "Bá Vương Cử Đỉnh",
    "school": "the_tu",
    "schoolName": "Thể Tu",
    "sect": "Đoán Huyền Tông",
    "icon": "🏺",
    "avatarEmoji": "🛡️",
    "style": "Cương Khí Hộ Thân, Thần Lực Cử Đỉnh",
    "description": "Thần lực vô song nhấc đỉnh đồng ngàn cân, cương khí hộ thân cứng cáp như thần binh hộ thể.",
    "innateBonus": {
      "def": 3,
      "startingGuard": 4,
      "startingMomentum": 2
    },
    "signatureSkillId": "card_10000102",
    "signatureSkillName": "Bá Vương Cử Đỉnh",
    "signatureSkill": {
      "id": "card_10000102",
      "name": "Bá Vương Cử Đỉnh",
      "nameCn": "霸王举鼎",
      "type": "CONG_PHAP",
      "category": "THAN_PHAP",
      "phase": 2,
      "school": "the_tu",
      "description": "[Linh Khí] +1\n[Thể Phách] +2\nNhận 1 tầng [Tăng Công]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh Khí] +1\n[Thể Phách] +2\nNhận 1 tầng [Tăng Công]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            },
            {
              "type": "MOMENTUM",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh Khí] +1\n[Thể Phách] +2\nNhận 1 tầng [Tăng Công]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            },
            {
              "type": "MOMENTUM",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh Khí] +1\n[Thể Phách] +2\nNhận 1 tầng [Tăng Công]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            },
            {
              "type": "MOMENTUM",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Cử Đỉnh Cương Khí",
        "desc": "+4 Hộ Thể và +2 Thể Phách đầu trận"
      },
      "dai_thua": {
        "name": "Kim Cang Bất Hoại",
        "desc": "+3 Hộ Thể nền tảng"
      },
      "do_kiep": {
        "name": "Bá Vương Thần Lực",
        "desc": "Phản đòn 3 Sát Thương khi chặn đòn bằng Hộ Giáp"
      },
      "ngo_dao": {
        "name": "Đỉnh Trấn Sơn Hà",
        "desc": "+5 Công Kích cho đòn đánh tiêu hao Thể Phách"
      },
      "quy_nguyen": {
        "name": "Bá Thể Bất Diệt",
        "desc": "Miễn nhiễm mọi hiệu ứng debuff và giảm chỉ số"
      }
    }
  },
  {
    "id": "hd_ly_man",
    "name": "Lý Mạn",
    "nameCn": "李㵘",
    "title": "Liên Quyền Thần Nữ",
    "school": "the_tu",
    "schoolName": "Thể Tu",
    "sect": "Đoán Huyền Tông",
    "icon": "🌊",
    "avatarEmoji": "👊",
    "style": "Quyền Ý liên hoàn, Sóng cuộn dồn dập",
    "description": "Quyền pháp uyển chuyển như nước lũ dâng trào, từng đòn liên kích dồn dập không cho đối thủ thở.",
    "innateBonus": {
      "atk": 2,
      "spd": 3
    },
    "signatureSkillId": "card_10000025",
    "signatureSkillName": "Băng Quyền•Thốn Kình",
    "signatureSkill": {
      "id": "card_10000025",
      "name": "Băng Quyền•Thốn Kình",
      "nameCn": "崩拳•寸劲",
      "type": "CONG_PHAP",
      "category": "VO_KY",
      "phase": 4,
      "school": "the_tu",
      "description": "10 Công\n[Khí thế] tăng thêm gấp đôi (chiêu Băng Quyền kế tiếp cũng kèm hiệu quả này, không thể điệp gia)",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "10 Công\n[Khí thế] tăng thêm gấp đôi (chiêu Băng Quyền kế tiếp cũng kèm hiệu quả này, không thể điệp gia)",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "10 Công\n[Khí thế] tăng thêm gấp đôi (chiêu Băng Quyền kế tiếp cũng kèm hiệu quả này, không thể điệp gia)",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "10 Công\n[Khí thế] tăng thêm gấp đôi (chiêu Băng Quyền kế tiếp cũng kèm hiệu quả này, không thể điệp gia)",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Thốn Kình Liên Kích",
        "desc": "Đòn đánh kế tiếp cộng thêm 1 lần tấn công phụ"
      },
      "dai_thua": {
        "name": "Ba Lãng Trùng Điệp",
        "desc": "+3 Thân Pháp (Tốc Độ)"
      },
      "do_kiep": {
        "name": "Khí Thế Gấp Đôi",
        "desc": "Thể Phách nhận được tăng gấp đôi"
      },
      "ngo_dao": {
        "name": "Quyền Ý Bất Tức",
        "desc": "Mỗi đòn đánh hồi lại 1 Hộ Giáp"
      },
      "quy_nguyen": {
        "name": "Cuồng Đào Hãi Lãng",
        "desc": "Liên kích 3 đòn liên tiếp trong 1 lượt"
      }
    }
  },
  {
    "id": "hd_linh_vu",
    "name": "Linh Vũ",
    "nameCn": "聆羽",
    "title": "Phiêu Diệc Tiên Cơ",
    "school": "the_tu",
    "schoolName": "Thể Tu",
    "sect": "Đoán Huyền Tông",
    "icon": "🪶",
    "avatarEmoji": "🍃",
    "style": "Dĩ nhu khắc cương, Lượn gió né đòn",
    "description": "Lấy nhu thắng cương, mượn lực đả lực, bước chân nhẹ nhàng như lông vũ tránh né mọi đòn hiểm.",
    "innateBonus": {
      "spd": 4,
      "def": 2
    },
    "signatureSkillId": "card_10000026",
    "signatureSkillName": "Băng Thiên Bộ",
    "signatureSkill": {
      "id": "card_10000026",
      "name": "Băng Thiên Bộ",
      "nameCn": "崩天步",
      "type": "CONG_PHAP",
      "category": "THAN_PHAP",
      "phase": 3,
      "school": "the_tu",
      "description": "[Linh khí] +1\n[Thân pháp] +4 \n[Duy trì]: tất cả công pháp đều có thể tính là “Băng Quyền”",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +1\n[Thân pháp] +4 \n[Duy trì]: tất cả công pháp đều có thể tính là “Băng Quyền”",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +1\n[Thân pháp] +4 \n[Duy trì]: tất cả công pháp đều có thể tính là “Băng Quyền”",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +1\n[Thân pháp] +4 \n[Duy trì]: tất cả công pháp đều có thể tính là “Băng Quyền”",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        }
      }
    },
    "breakthroughTalents": {
      "hop_the": {
        "name": "Phiêu Dật Thần Hành",
        "desc": "+4 Thân Pháp (Tốc Độ)"
      },
      "dai_thua": {
        "name": "Mượn Lực Đả Lực",
        "desc": "Né đòn đầu tiên của đối thủ bằng Hộ Thể"
      },
      "do_kiep": {
        "name": "Lông Vũ Hóa Kiếm",
        "desc": "+2 Hộ Thể và +1 Công Kích"
      },
      "ngo_dao": {
        "name": "Hư Không Bộ Pháp",
        "desc": "Liên Kích Chiêu Kế (Không mất lượt) khi né thành công đòn đánh"
      },
      "quy_nguyen": {
        "name": "Thiên Nhân Hợp Nhất",
        "desc": "Giảm 40% sát thương từ đòn đánh bộc phát"
      }
    }
  }
],
  races: [
  {
    "id": "nhan_toc",
    "key": "thanh_van_linh",
    "name": "Nhân Tộc",
    "domain": "Thanh Vân Lĩnh",
    "icon": "👤",
    "banner": "Sơn Mạch Tiên Gia — Thanh Lôi Quy Mạch",
    "color": "#38bdf8",
    "desc": "Lãnh địa rộng lớn của Nhân Tộc với sơn mạch nhấp nhô ngàn trượng, mây trắng bồng bềnh che phủ các tiên gia tông môn. Nơi đây linh khí thuần khiết, sương núi quyện hòa lôi đình dịu nhẹ.",
    "history": "Tương truyền hàng vạn năm trước, một vị Chân Nhân Nhân Tộc đã dùng đại pháp lực dẫn dắt linh mạch Thanh Vân về đây, dựng nên nền móng cho vô số tông môn tu sĩ rèn luyện.",
    "trait": "Quân bình thuộc tính, khởi đầu nhanh, sở trường Kiếm Đạo & Tinh Thuật.",
    "nodes": [
      {
        "id": "thanh_moc_thanh",
        "name": "Thanh Mộc Thành",
        "title": "Kinh Đô Cổ Mộc — Nơi Khởi Đầu Tiên Duyên",
        "lore": "Thành trấn lâu đời dựng trên đại linh mạch Nhân Tộc. Kiến trúc thành được chạm khắc từ linh mộc ngàn năm, tỏa ra hương thơm dịu nhẹ xua đuổi tâm ma. Đây là trụ sở hội tụ các tân tu sĩ Nhân Tộc vừa bước chân vào Linh Giới.",
        "atmosphere": "Phố xá tấp nập, tiếng đe rèn linh khí hòa cùng mùi trà linh thảo thơm phức.",
        "specialties": []
      },
      {
        "id": "thanh_van_tran",
        "name": "Thanh Vân Khâu",
        "title": "Tây Lĩnh Khâu Sơn — Vùng Dã Ngoại An Toàn",
        "lore": "Thung lũng gò đồi tĩnh mịch nằm ở phía Tây dãy Thanh Vân, bao quanh bởi những đồi chè linh thảo xanh ngút ngàn. Nơi đây là vùng dã ngoại an toàn cho các đoàn tu sĩ rèn luyện và thu hái thảo dược.",
        "atmosphere": "Trầm lặng, sương sớm bao phủ những mái nhà gỗ đơn sơ bên dòng suối nhỏ.",
        "specialties": []
      },
      {
        "id": "thanh_van_son",
        "name": "Thanh Vân Sơn",
        "title": "Đông Lĩnh Linh Phong — Thung Lũng Linh Thảo",
        "lore": "Sơn mạch phía Đông ngập tràn linh khí và ánh mây ngũ sắc. Thung lũng dưới chân núi là nơi hội tụ vô số linh thảo quý giá được các tông môn nuôi dưỡng và bảo vệ nghiêm ngặt.",
        "atmosphere": "Tiếng chim linh hót líu lo, gió núi thổi qua rừng tùng vang lên tiếng reo vi vu.",
        "specialties": []
      },
      {
        "id": "loi_trach",
        "name": "U Lôi Trạch",
        "title": "Tây Đầm Dị Thú — Đầm Lầy Sấm Sét",
        "lore": "Vùng đầm lầy dã ngoại u mịch phía Tây Thanh Vân. Nơi đây thường xuyên xuất hiện những luồng điện quang xé rách không trung, ngưng tụ thành các quặng Lôi Thạch và nuôi dưỡng những dị thú mang thuộc tính lôi.",
        "atmosphere": "Sương mù âm u đan xen những tia chớp tím lóe sáng trong đêm.",
        "specialties": []
      },
      {
        "id": "cuu_thien_loi_vuc",
        "name": "Lôi Đình Cốc",
        "title": "Đông Cốc Lôi Phong — Thung Lũng Thử Thách",
        "lore": "Thung lũng hiểm trở phía Đông với các vách đá cuồn cuộn cuồng phong. Tu sĩ Nhân Tộc thường đến đây rèn luyện thân pháp và tôi luyện thần hồn dưới áp lực lôi đình dịu nhẹ.",
        "atmosphere": "Gió hú cuồng nhiệt trên vách đá, linh khí lôi thuộc tính cuồn cuộn.",
        "specialties": []
      },
      {
        "id": "thai_hu_cam_dia",
        "name": "Thanh Vân Cấm Mạch",
        "title": "Bắc Mạch Cấm Địa — Lối Vào Thiên Uyên",
        "lore": "Vùng hiểm địa nguy hiểm nhất của Thanh Vân Lĩnh, giáp ranh lối vào Trung Châu. Nơi đây bị bao phủ bởi các trận pháp cổ xưa và linh khí bạo động, chứa đựng vô số cơ duyên cùng hiểm nguy cho cao thủ Trúc Cơ.",
        "atmosphere": "Áp lực linh áp đè nén, không khí tĩnh mịch đến rợn người.",
        "specialties": []
      }
    ]
  },
  {
    "id": "yeu_toc",
    "key": "van_yeu_son",
    "name": "Yêu Tộc",
    "domain": "Vạn Yêu Sơn",
    "icon": "🐾",
    "banner": "Vạn Lý Yêu Sơn — Thái Cổ Thú Hồn",
    "color": "#f87171",
    "desc": "Sơn mạch hùng vĩ trải dài vạn dặm với những cây cổ thụ cao vút tầng mây. Nơi ngự trị của các chủng tộc Yêu Tộc, lưu giữ sức mạnh huyết mạch hoang dã và nguồn linh khí dạt dào của thiên nhiên nguyên thủy.",
    "history": "Từ thời thượng cổ, chư vị Yêu Vương đã lập thệ nguyện bảo vệ sơn mạch này, biến nơi đây thành thánh địa không thể xâm phạm của Yêu Tộc.",
    "trait": "Công kích bộc phát hung bạo, huyết khí cuộn trào, dĩ sát dưỡng sát.",
    "nodes": [
      {
        "id": "yeu_hoang_thanh",
        "name": "Vạn Yêu Thành",
        "title": "Kinh Đô Yêu Vương — Thánh Địa Huyết Mạch",
        "lore": "Kinh đô nguy nga tráng lệ đục đẽo từ sơn vách đá khổng lồ. Trung tâm thành là Điện Yêu Vương nơi chư vị đại lão Yêu Tộc thảo phạt chuyện lớn nhỏ và duy trì trật tự cho toàn bộ lãnh địa.",
        "atmosphere": "Uy nghiêm, vang vọng tiếng gầm thấp của các thần thú canh cổng.",
        "specialties": []
      },
      {
        "id": "bach_thu_tran",
        "name": "Bách Thú Lâm",
        "title": "Rừng Rậm Bách Thú — Vùng Dã Ngoại An Toàn",
        "lore": "Vùng rừng rậm an toàn bạt ngàn cây xanh ven núi Vạn Yêu, nơi các tu sĩ Yêu Tộc thu hái mộc tinh, linh thảo và rèn luyện thân pháp.",
        "atmosphere": "Náo nhiệt, rực rỡ sắc màu cờ hiệu các thương hội Yêu Tộc.",
        "specialties": []
      },
      {
        "id": "van_yeu_lam",
        "name": "Linh Cốc Lâm",
        "title": "Thung Lũng Cổ Thụ — Rừng Già Sinh Cơ",
        "lore": "Khu rừng nguyên sinh bạt ngàn cây cổ thụ ngàn năm. Linh khí ngưng tụ thành những giọt sương mai trên lá, nuôi dưỡng hàng ngàn loài yêu thú sinh sống hòa thuận.",
        "atmosphere": "Mát mẻ, ánh nắng chiếu qua vòm lá tạo thành những vệt sáng huyền ảo.",
        "specialties": []
      },
      {
        "id": "huyet_sac_hoang_nguyen",
        "name": "Huyết Thạch Nguyên",
        "title": "Đồng Đỏ Dã Ngoại — Quặng Thạch Cổ",
        "lore": "Vùng đất đỏ dã ngoại trải dài ngút ngàn ngập tràn quặng Huyết Thạch. Nơi đây là vùng rèn luyện lý tưởng cho các Yêu tu luyện thể và tìm kiếm khoáng thạch hiếm.",
        "atmosphere": "Gió bụi màu đỏ nhạt bay lang thang, mặt đất tỏa nhiệt khí ấm áp.",
        "specialties": []
      },
      {
        "id": "thu_than_son",
        "name": "Thú Vĩ Sơn",
        "title": "Sơn Mạch Uốn Lượn — Vực Sơn Dã Ngoại",
        "lore": "Dãy núi uốn lượn như cái đuôi đại thú khổng lồ. Vùng núi dã ngoại này là nơi cư trú của nhiều loài yêu thú hung hãn và tích tụ linh khí mộc thổ mạnh mẽ.",
        "atmosphere": "Vách đá dốc đứng, sương mù lượn quanh các đỉnh núi nhọn.",
        "specialties": []
      },
      {
        "id": "van_yeu_cam_vuc",
        "name": "Yêu Sương Cấm Vực",
        "title": "Hiểm Địa Sương Mù — Lối Vào Thiên Uyên",
        "lore": "Vùng hiểm địa che phủ bởi lớp sương độc dày đặc ở phía Bắc Vạn Yêu Sơn. Chỉ có tu sĩ có thân pháp linh hoạt và linh lực vững vàng mới có thể băng qua cấm vực này.",
        "atmosphere": "Sương mù màu lục nhạt cuộn sóng, ẩn hiện những bóng đen bí ẩn.",
        "specialties": []
      }
    ]
  },
  {
    "id": "minh_toc",
    "key": "u_minh_vuc",
    "name": "Minh Tộc",
    "domain": "U Minh Vực",
    "icon": "👻",
    "banner": "U Minh Thủy Ngạn — Hoàng Tuyền Hồn Đạo",
    "color": "#c084fc",
    "desc": "Vùng u minh huyền bí bao phủ bởi sương u mù mịt và ánh trăng bạc quanh năm. Nơi tụ họp của Minh Tộc — những tu sĩ thấu hiểu quy luật sinh tử và linh hồn thiên địa.",
    "history": "Được khai phá bởi các bậc Tiên Tu Minh Tộc cổ xưa nhằm gìn giữ sự cân bằng linh hồn giữa các cõi trong Linh Giới.",
    "trait": "Sát thương Nội Thương xuyên thấu Hộ Thể, cướp đoạt Linh Khí, khống chế tâm thần.",
    "nodes": [
      {
        "id": "u_minh_thanh",
        "name": "U Minh Thành",
        "title": "Thành Trì U Mịch — Kinh Đô Minh Tộc",
        "lore": "Thành trì cổ kính được xây bằng u thạch đen bóng, tỏa ra hào quang tử thạch dịu nhẹ. Thành là nơi an định nhất của Minh Tộc, ngập tràn các thư viện ghi chép về hồn đạo.",
        "atmosphere": "Tĩnh mịch, đèn linh hồn màu xanh lam treo dọc các con đường đá.",
        "specialties": []
      },
      {
        "id": "hoang_tuyen_tran",
        "name": "Tuyền Mộc Cốc",
        "title": "Cốc Suối Tuyền Mộc — Vùng Dã Ngoại An Toàn",
        "lore": "Thung lũng suối u tĩnh tọa lạc bên dòng suối mộc u uẩn. Nơi đây là vùng dã ngoại an toàn cho các đoàn tu sĩ Minh Tộc tĩnh tâm thu hái linh thảo rèn luyện.",
        "atmosphere": "Tiếng nước chảy róc rách trong đêm, không khí se lạnh dễ chịu.",
        "specialties": []
      },
      {
        "id": "quy_vu_hoang_nguyen",
        "name": "U Sương Nguyên",
        "title": "Đồng Sương Tĩnh Lặng — Nuôi Dưỡng Linh Khí",
        "lore": "Cánh đồng rộng lớn bao phủ bởi lớp sương u mát lạnh. Nơi đây nuôi dưỡng các loài linh thảo thuộc tính âm và là nơi các tu sĩ tụ tập thiền định xua tan tâm ma.",
        "atmosphere": "Sương trắng đung đưa nhịp nhàng theo làn gió đêm.",
        "specialties": []
      },
      {
        "id": "quy_vu_uyen",
        "name": "U Tranh Uyên",
        "title": "Vực Sâu Dã Ngoại — Sương Giăng Vực Thẫm",
        "lore": "Vực sâu dã ngoại chông chênh ngập tràn sương mù. Nơi đây chứa đựng nhiều loại khoáng thạch âm thuộc tính và các dị linh dã ngoại cần xua đuổi.",
        "atmosphere": "Vực sâu thăm thẳm, tiếng gió rít qua khe đá như tiếng sáo u buồn.",
        "specialties": []
      },
      {
        "id": "vong_hon_hai",
        "name": "Minh Hà Tân",
        "title": "Bến Sông Tĩnh Lặng — Bến Nước U Minh",
        "lore": "Bến sông tĩnh lặng bên bờ nước phẳng như gương của U Minh Vực. Nơi đây ngưng tụ linh khí thủy âm thuần khiết, thu hút nhiều Minh tu đến rèn luyện thần thức.",
        "atmosphere": "Mặt nước phản chiếu ánh trăng bạc, sóng vỗ nhẹ nhàng vào mạn thuyền cổ.",
        "specialties": []
      },
      {
        "id": "u_minh_cam_vuc",
        "name": "U Minh Cấm Cốc",
        "title": "Thung Lũng Cấm Địa — Lối Vào Thiên Uyên",
        "lore": "Thung lũng u mịt phía Bắc U Minh Vực, nơi cấm địa phong ấn các cuộn trào bạo động của tử khí. Chỉ tu sĩ có đạo tâm kiên định mới có thể vượt qua.",
        "atmosphere": "Tử khí mịt mờ, trận pháp phong ấn phát ra luồng sáng xanh lục.",
        "specialties": []
      }
    ]
  },
  {
    "id": "linh_toc",
    "key": "linh_moc_hai",
    "name": "Linh Tộc",
    "domain": "Linh Mộc Hải",
    "icon": "🌿",
    "banner": "Vạn Mộc Thần Uyên — Sinh Cơ Bất Tuyệt",
    "color": "#34d399",
    "desc": "Biển cây ngút ngàn tràn ngập linh khí sinh mệnh và các con suối linh tuyền trong suốt. Thánh địa của Linh Tộc — những sinh linh giao hòa sâu sắc với cỏ cây hoa lá.",
    "history": "Được nuôi dưỡng bởi Thần Mộc ngàn năm, nơi đây chưa từng chịu tác động của khói bụi hay bạo động thiên tai.",
    "trait": "Ngũ Hành Mộc Linh tuần hoàn, phục hồi Sinh Mệnh mạnh mẽ, bảo hộ kiên cường.",
    "nodes": [
      {
        "id": "linh_moc_thanh",
        "name": "Linh Mộc Thành",
        "title": "Kinh Đô Sinh Thái — Thành Trì Vạn Cây",
        "lore": "Thành trì sinh thái xinh đẹp kết bằng thân các cây cổ thụ sống. Các ngôi nhà được khắc trực tiếp trong lòng cây xanh mát, tỏa ra sinh khí dồi dào giúp chữa lành thương tổn.",
        "atmosphere": "Hoa thơm ngào ngạt, tiếng suối linh tuyền chảy quanh các lối đi gỗ.",
        "specialties": []
      },
      {
        "id": "bach_hoa_coc",
        "name": "Bách Hoa Cốc",
        "title": "Thung Lũng Ngàn Hoa — Hương Thơm An Bình",
        "lore": "Thung lũng ngàn hoa quanh năm nở rộ khoe sắc. Nơi đây được các linh tu chăm sóc tỉ mỉ để chiết xuất các loại tinh dầu linh thảo và đan dược phục hồi thể lực.",
        "atmosphere": "Rực rỡ sắc màu hoa tươi, bươm bướm linh hoa chao liệng khắp thung lũng.",
        "specialties": []
      },
      {
        "id": "sinh_menh_sam_lam",
        "name": "Linh Ẩn Lâm",
        "title": "Đại Ngàn Ẩn Dật — Rừng Xanh Thanh Bình",
        "lore": "Khu rừng xanh thẫm yên tĩnh phủ đầy rêu xanh và nấm linh chi ngàn năm. Đây là nơi các tu sĩ Linh Tộc ẩn dật luyện công và bái phỏng các bậc cao nhân.",
        "atmosphere": "Êm đềm, tiếng lá cây xạc xào trong gió chiều thanh mát.",
        "specialties": []
      },
      {
        "id": "linh_tuyen_hai",
        "name": "Linh Tuyền Trạch",
        "title": "Đầm Suối Sinh Cơ — Hồ Nước Linh Khí",
        "lore": "Đầm suối dã ngoại ngập tràn nước suối linh tuyền tinh khiết. Nước hồ có khả năng tẩy rửa tạp chất trong kinh mạch và tăng cường khả năng hồi phục.",
        "atmosphere": "Làn nước xanh trong nhìn tận đáy, hơi nước mang hương thơm mát lạnh.",
        "specialties": []
      },
      {
        "id": "van_moc_co_lam",
        "name": "Cổ Mộc Lâm",
        "title": "Rừng Cổ Thụ Ngàn Năm — Thần Bí Dã Ngoại",
        "lore": "Khu rừng đại ngàn ngàn năm tuổi với những thân cây khổng lồ mười người ôm không xát. Nơi đây lưu giữ nhiều hạt giống linh mộc quý hiếm của Linh Giới.",
        "atmosphere": "Bóng râm cổ thụ che rợp mặt đất, linh khí mộc thuộc tính đậm đặc.",
        "specialties": []
      },
      {
        "id": "sinh_menh_cam_vuc",
        "name": "Linh Phù Cấm Vực",
        "title": "Hiểm Địa Phù Ẩn — Lối Vào Thiên Uyên",
        "lore": "Vùng cấm địa bao phủ bởi hàng ngàn dây leo linh phù cổ xưa phía Bắc Linh Mộc Hải. Lối đi cấm vực thử thách sự kiên nhẫn và linh lực mộc đạo của tu sĩ.",
        "atmosphere": "Dây leo cổ thụ chắn lối, ánh sáng linh phù nhấp nháy trên thân cây.",
        "specialties": []
      }
    ]
  },
  {
    "id": "co_toc",
    "key": "thai_co_hoang_nguyen",
    "name": "Cổ Tộc",
    "domain": "Thái Cổ Hoang Nguyên",
    "icon": "🗿",
    "banner": "Thái Cổ Hoang Nguyên — Cương Khí Bất Hoại",
    "color": "#fbbf24",
    "desc": "Vùng hoang nguyên cằn cỗi rải rác những trụ đá tảng và di tích phế tích chiến trường cổ xưa. Nơi ngự trị của Cổ Tộc — chủng tộc mang thân thể kiên cường như vách đá.",
    "history": "Nơi từng diễn ra cuộc đọ sức vĩ đại giữa các chủng tộc thời cổ đại, để lại vô số tàn tích thần ma và khoáng thạch thượng hạng.",
    "trait": "Thể Phách chí cường, Hộ Thể tựa bàn thạch, ngưng tụ Cương Khí hộ thân bộc phát.",
    "nodes": [
      {
        "id": "co_than_thanh",
        "name": "Cổ Thạch Thành",
        "title": "Kinh Đô Đá Tảng — Trọng Thành Cổ Tộc",
        "lore": "Thành trì kiên cố xây hoàn toàn bằng các khối đá cự thạch xếp chồng không kẽ hở. Thành tỏa ra sự uy nghi cổ kính, là trạm dừng chân an toàn nhất trên hoang nguyên.",
        "atmosphere": "Hùng vĩ, tiếng tù và bằng đá vang lên mỗi khi hoàng hôn xuống.",
        "specialties": []
      },
      {
        "id": "co_toc_tran",
        "name": "Cổ Hoang Cốc",
        "title": "Cốc Đá Cổ Hoang — Vùng Dã Ngoại An Toàn",
        "lore": "Thung lũng thạch vách chứa đựng nhiều tinh quặng cùng dấu tích Thái Cổ. Nơi đây là khu vực dã ngoại an toàn cho tu sĩ Cổ Tộc rèn luyện và đục đẽo tinh thạch.",
        "atmosphere": "Tiếng đục đẽo đá vang vọng, mùi quặng nung đỏ tỏa ra từ các lò rèn.",
        "specialties": []
      },
      {
        "id": "thai_co_hoang_da",
        "name": "Hoang Thạch Khâu",
        "title": "Gò Đá Hoang Sơ — Di Tích An Toàn",
        "lore": "Vùng gò đá cằn cỗi tĩnh lặng rải rác các mảnh bia đá cổ. Tu sĩ Cổ Tộc thường đến đây quan sát khắc tự trên bia đá để chiêm nghiệm thổ đạo.",
        "atmosphere": "Gió khô thổi qua các gò đá, mặt đất đầy sỏi đá màu xám nhạt.",
        "specialties": []
      },
      {
        "id": "thuong_co_chien_truong",
        "name": "Cổ Chiến Phế Tích",
        "title": "Phế Tích Chiến Trường — Thượng Cổ Vết Tích",
        "lore": "Vùng phế tích dã ngoại hoang tàn ngập tràn gãy đổ binh khí và vách đá rạn nứt. Vùng đất rèn luyện nức tiếng giúp các tu sĩ tìm kiếm tàn quặng bí ẩn.",
        "atmosphere": "Tàn tích hoang vắng, gió hú qua các mảnh giáp sắt gỉ sét.",
        "specialties": []
      },
      {
        "id": "co_than_son",
        "name": "Cổ Nhai Sơn",
        "title": "Dãy Núi Vách Đá — Thập Mục Sơn Mạch",
        "lore": "Dãy núi đá vách đứng dựng đứng như những thanh kiếm đá khổng lồ đâm vào mây xanh. Vùng núi dã ngoại tích tụ nguồn thổ thuộc tính tinh khiết.",
        "atmosphere": "Mây mỏng bao quanh vách đá xám, chim đại bàng đá chao liệng.",
        "specialties": []
      },
      {
        "id": "thai_co_cam_khu",
        "name": "Cổ Hoang Cấm Khu",
        "title": "Hiểm Địa Thạch Trận — Lối Vào Thiên Uyên",
        "lore": "Vùng cấm khu với các cự thạch tự động di chuyển xếp thành thạch trận cổ xưa. Lối vào hiểm trở nhất phía Bắc Cổ Hoang Nguyên thử thách sức mạnh kiên cường.",
        "atmosphere": "Các khối đá khổng lồ chuyển động chậm rãi phát ra tiếng rung ồn ào.",
        "specialties": []
      }
    ]
  },
  {
    "id": "trung_chau",
    "key": "trung_chau_linh_gioi",
    "name": "Trung Châu Linh Giới",
    "domain": "Thiên Cơ Thánh Thành",
    "icon": "🏛️",
    "banner": "Trung Ương Thánh Thành — Vạn Tộc Triều Bái",
    "color": "#fef08a",
    "desc": "Vùng đất trung tâm Linh Giới kết nối 5 đại chủng tộc. Nơi ngự trị của Thiên Uyên Thành tuyệt mỹ nhưng hiện đang bị phong tỏa bởi Thái Cổ Phong Ấn.",
    "history": "Trung tâm hành chính và giao thương vĩ đại nhất Linh Giới, nơi từng diễn ra các đại hội Tiên Giới và minh ước ngũ tộc.",
    "trait": "Trung tâm giao thương vạn tộc, lôi đài tỷ thí đỉnh cao, thị trường đấu giá trân bảo.",
    "nodes": [
      {
        "id": "thien_uyen_thanh",
        "name": "Thiên Uyên Thành",
        "title": "Đại Thành Trung Tâm — Bị Phong Ấn",
        "lore": "Đại thành hùng vĩ nhất Linh Giới nằm ở điểm giao thoa của 5 đại linh mạch. Hiện nay thành trì đang bị Thái Cổ Phong Ấn bảo vệ nghiêm ngặt, tỏa hào quang kim sắc ngăn chặn mọi hành vi xâm nhập cho đến khi phong ấn tan biến.",
        "atmosphere": "Màn sáng kim sắc phong ấn bao phủ toàn bộ đại thành, ánh sáng rực rỡ chiếu sáng bầu trời Trung Châu.",
        "specialties": []
      }
    ]
  }
],
  combatStats: {
  "stats": [
    {
      "key": "hp",
      "name": "Sinh Mệnh",
      "icon": "❤️",
      "base": "60 (Tăng theo Cảnh Giới + Trang Bị)",
      "unit": "Điểm",
      "role": "Lượng sinh mệnh cốt lõi",
      "desc": "Lượng sinh mệnh cốt lõi của tu sĩ. Khi Sinh Mệnh về 0 sẽ bại trận. Đòn đánh có Hộ Thể sẽ trừ vào Hộ Thể trước, riêng sát thương Nội Thương trừ thẳng vào Sinh Mệnh."
    },
    {
      "key": "def",
      "name": "Hộ Thể",
      "icon": "🛡️",
      "base": "0 (Tích lũy qua Kỹ Năng / Trang Bị)",
      "unit": "Điểm",
      "role": "Lớp khiên phòng ngự",
      "desc": "Lớp chân khí bảo hộ kiên cố chống đỡ trực tiếp Sát Thương từ mọi chiêu thức ngoại trừ Nội Thương. Có thể cộng dồn qua Thân Pháp và Tuyệt Kỹ phòng ngự."
    },
    {
      "key": "atk",
      "name": "Công Kích",
      "icon": "⚔️",
      "base": "3 (Tăng theo Trang Bị + Tiên Linh)",
      "unit": "Điểm",
      "role": "Sức mạnh đòn đánh gốc",
      "desc": "Chỉ số sức mạnh đòn đánh gốc. Cộng thẳng vào hệ số sát thương của Võ Kỹ, Tuyệt Kỹ và Thần Thông."
    },
    {
      "key": "damage",
      "name": "Sát Thương",
      "icon": "💥",
      "base": "Biến thiên ±5%",
      "unit": "Điểm",
      "role": "Tổn thương thực tế",
      "desc": "Lượng sát thương thực tế gây lên mục tiêu sau khi trừ Hộ Thể. Có độ lệch ngẫu nhiên ±5% tạo tính biến hóa chân thực trong giao chiến."
    },
    {
      "key": "qi",
      "name": "Linh Khí",
      "icon": "💠",
      "base": "0 - 3 (Tối đa 4 Khí)",
      "unit": "Khí",
      "role": "Tài nguyên xuất chiêu",
      "desc": "Tài nguyên then chốt để xuất Tuyệt Kỹ (1-2 Khí) và Thần Thông (≥3 Khí). Tụ khí qua chiêu thức chuyên dụng hoặc kích hoạt Ngũ Hành Tương Sinh."
    },
    {
      "key": "speed",
      "name": "Thân Pháp",
      "icon": "⚡",
      "base": "Tăng theo Trang Bị / Bộ Pháp",
      "unit": "Điểm",
      "role": "Thân thủ & Kích Tốc (10đ)",
      "desc": "Quyết định né tránh và cơ chế KÍCH TỐC: Đạt đủ 10 Thân Pháp sẽ tiêu hao 10 điểm để kích hoạt Liên Kích Chiêu Kế (Tái Hành Động / Chase) ngay tức thì trong cùng hiệp!"
    },
    {
      "key": "xiu_wei",
      "name": "Tiên Cơ / Tu Vi",
      "icon": "📜",
      "base": "Theo Cảnh Giới + Trang Bị",
      "unit": "Điểm",
      "role": "Thứ tự ra đòn hiệp 1",
      "desc": "Tu Vi kết hợp Thân Pháp quyết định bên nào giành được quyền xuất chiêu trước ở Hiệp 1. Càng cảnh giới cao Tiên Cơ càng áp đảo."
    },
    {
      "key": "ti_po",
      "name": "Thể Phách",
      "icon": "🔱",
      "base": "Đoán Huyền Tông / Trang Bị",
      "unit": "Điểm",
      "role": "Độc môn Thể Tu & Cương Khí",
      "desc": "Sức mạnh nhục thân của Thể Tu. Gia tăng uy lực Bá Quyền, chuyển hóa thành Cương Khí Hộ Thân bộc phát sát thương chấn động đập tan giáp địch."
    }
  ]
},
  realms: [
  {
    "id": "hop_the",
    "name": "Hợp Thể",
    "autoHpPerTier": 1,
    "autoAtkPerTier": 0,
    "autoDefPerTier": 0,
    "attributePointsPerTier": 0,
    "description": "Hợp thể cùng Thiên Địa linh khí, Nguyên Anh và Thần Hồn ngưng tụ thành một.",
    "tiers": {
      "1": {
        "maxExp": 100,
        "type": "NORMAL"
      },
      "2": {
        "maxExp": 150,
        "type": "NORMAL"
      },
      "3": {
        "maxExp": 200,
        "type": "MINOR_BREAKTHROUGH",
        "reqPill": "pill_hopthe_mid",
        "reqPillName": "Hợp Thể Phá Cảnh Đan (Sơ Kỳ)",
        "reqQty": 1
      },
      "4": {
        "maxExp": 250,
        "type": "NORMAL"
      },
      "5": {
        "maxExp": 300,
        "type": "NORMAL"
      },
      "6": {
        "maxExp": 350,
        "type": "MINOR_BREAKTHROUGH",
        "reqPill": "pill_hopthe_late",
        "reqPillName": "Hợp Thể Phá Cảnh Đan (Trung Kỳ)",
        "reqQty": 1
      },
      "7": {
        "maxExp": 400,
        "type": "NORMAL"
      },
      "8": {
        "maxExp": 450,
        "type": "NORMAL"
      },
      "9": {
        "maxExp": 500,
        "type": "MAJOR_BREAKTHROUGH",
        "reqPill": "pill_hopthe_next",
        "reqPillName": "Hợp Thể Đại Đột Phá Đan",
        "reqQty": 1,
        "reqCucPhamStones": 500
      }
    }
  },
  {
    "id": "dai_thua",
    "name": "Đại Thừa",
    "autoHpPerTier": 4,
    "autoAtkPerTier": 0,
    "autoDefPerTier": 0,
    "attributePointsPerTier": 0,
    "description": "Viên mãn Hợp Thể, đại thừa cảnh giới, khai phá đạo quả cá nhân.",
    "tiers": {
      "1": {
        "maxExp": 600,
        "type": "NORMAL"
      },
      "2": {
        "maxExp": 700,
        "type": "NORMAL"
      },
      "3": {
        "maxExp": 800,
        "type": "MINOR_BREAKTHROUGH",
        "reqPill": "pill_daithua_mid",
        "reqPillName": "Đại Thừa Phá Cảnh Đan (Sơ Kỳ)",
        "reqQty": 1
      },
      "4": {
        "maxExp": 900,
        "type": "NORMAL"
      },
      "5": {
        "maxExp": 1000,
        "type": "NORMAL"
      },
      "6": {
        "maxExp": 1100,
        "type": "MINOR_BREAKTHROUGH",
        "reqPill": "pill_daithua_late",
        "reqPillName": "Đại Thừa Phá Cảnh Đan (Trung Kỳ)",
        "reqQty": 1
      },
      "7": {
        "maxExp": 1200,
        "type": "NORMAL"
      },
      "8": {
        "maxExp": 1300,
        "type": "NORMAL"
      },
      "9": {
        "maxExp": 1400,
        "type": "MAJOR_BREAKTHROUGH",
        "reqPill": "pill_daithua_next",
        "reqPillName": "Đại Thừa Đại Đột Phá Đan",
        "reqQty": 1,
        "reqCucPhamStones": 1000
      }
    }
  },
  {
    "id": "do_kiep",
    "name": "Độ Kiếp",
    "autoHpPerTier": 5,
    "autoAtkPerTier": 0,
    "autoDefPerTier": 0,
    "attributePointsPerTier": 0,
    "description": "Nghênh tiếp Thiên Kiếp giáng thế, tôi luyện tiên thân qua cửu thiên lôi đình.",
    "tiers": {
      "1": {
        "maxExp": 1600,
        "type": "NORMAL"
      },
      "2": {
        "maxExp": 1800,
        "type": "NORMAL"
      },
      "3": {
        "maxExp": 2000,
        "type": "MINOR_BREAKTHROUGH",
        "reqPill": "pill_dokiep_mid",
        "reqPillName": "Độ Kiếp Phá Cảnh Đan (Sơ Kỳ)",
        "reqQty": 1
      },
      "4": {
        "maxExp": 2200,
        "type": "NORMAL"
      },
      "5": {
        "maxExp": 2400,
        "type": "NORMAL"
      },
      "6": {
        "maxExp": 2600,
        "type": "MINOR_BREAKTHROUGH",
        "reqPill": "pill_dokiep_late",
        "reqPillName": "Độ Kiếp Phá Cảnh Đan (Trung Kỳ)",
        "reqQty": 1
      },
      "7": {
        "maxExp": 2800,
        "type": "NORMAL"
      },
      "8": {
        "maxExp": 3000,
        "type": "NORMAL"
      },
      "9": {
        "maxExp": 3500,
        "type": "MAJOR_BREAKTHROUGH",
        "reqPill": "pill_dokiep_next",
        "reqPillName": "Độ Kiếp Đại Đột Phá Đan",
        "reqQty": 1,
        "reqCucPhamStones": 2000
      }
    }
  },
  {
    "id": "ngo_dao",
    "name": "Ngộ Đạo",
    "autoHpPerTier": 6,
    "autoAtkPerTier": 0,
    "autoDefPerTier": 0,
    "attributePointsPerTier": 0,
    "description": "Cảm ngộ Thiên Địa đại đạo, đúc tạo Quy Tắc Chi Lực của riêng mình.",
    "tiers": {
      "1": {
        "maxExp": 4000,
        "type": "NORMAL"
      },
      "2": {
        "maxExp": 4500,
        "type": "NORMAL"
      },
      "3": {
        "maxExp": 5000,
        "type": "MINOR_BREAKTHROUGH",
        "reqPill": "pill_ngodao_mid",
        "reqPillName": "Ngộ Đạo Phá Cảnh Đan (Sơ Kỳ)",
        "reqQty": 1
      },
      "4": {
        "maxExp": 5500,
        "type": "NORMAL"
      },
      "5": {
        "maxExp": 6000,
        "type": "NORMAL"
      },
      "6": {
        "maxExp": 6500,
        "type": "MINOR_BREAKTHROUGH",
        "reqPill": "pill_ngodao_late",
        "reqPillName": "Ngộ Đạo Phá Cảnh Đan (Trung Kỳ)",
        "reqQty": 1
      },
      "7": {
        "maxExp": 7000,
        "type": "NORMAL"
      },
      "8": {
        "maxExp": 7500,
        "type": "NORMAL"
      },
      "9": {
        "maxExp": 8500,
        "type": "MAJOR_BREAKTHROUGH",
        "reqPill": "pill_ngodao_next",
        "reqPillName": "Ngộ Đạo Đại Đột Phá Đan",
        "reqQty": 1,
        "reqCucPhamStones": 3000
      }
    }
  },
  {
    "id": "quy_nguyen",
    "name": "Quy Nguyên",
    "autoHpPerTier": 7,
    "autoAtkPerTier": 0,
    "autoDefPerTier": 0,
    "attributePointsPerTier": 0,
    "description": "Vạn pháp quy nhất, ngộ nhập hư không nguyên thủy của Thái Sơ.",
    "tiers": {
      "1": {
        "maxExp": 9500,
        "type": "NORMAL"
      },
      "2": {
        "maxExp": 10500,
        "type": "NORMAL"
      },
      "3": {
        "maxExp": 12000,
        "type": "MINOR_BREAKTHROUGH",
        "reqPill": "pill_quynguyen_mid",
        "reqPillName": "Quy Nguyên Phá Cảnh Đan (Sơ Kỳ)",
        "reqQty": 1
      },
      "4": {
        "maxExp": 13500,
        "type": "NORMAL"
      },
      "5": {
        "maxExp": 15000,
        "type": "NORMAL"
      },
      "6": {
        "maxExp": 17000,
        "type": "MINOR_BREAKTHROUGH",
        "reqPill": "pill_quynguyen_late",
        "reqPillName": "Quy Nguyên Phá Cảnh Đan (Trung Kỳ)",
        "reqQty": 1
      },
      "7": {
        "maxExp": 19000,
        "type": "NORMAL"
      },
      "8": {
        "maxExp": 21000,
        "type": "NORMAL"
      },
      "9": {
        "maxExp": 24000,
        "type": "MAJOR_BREAKTHROUGH",
        "reqPill": "pill_quynguyen_next",
        "reqPillName": "Quy Nguyên Đại Đột Phá Đan",
        "reqQty": 1,
        "reqCucPhamStones": 5000
      }
    }
  },
  {
    "id": "vu_hoa",
    "name": "Vũ Hóa",
    "autoHpPerTier": 8,
    "autoAtkPerTier": 0,
    "autoDefPerTier": 0,
    "attributePointsPerTier": 0,
    "description": "Vũ hóa đăng tiên, lột xác khỏi phàm thai Linh Giới để nghênh đón Tiên Thể.",
    "tiers": {
      "1": {
        "maxExp": 27000,
        "type": "NORMAL"
      },
      "2": {
        "maxExp": 30000,
        "type": "NORMAL"
      },
      "3": {
        "maxExp": 34000,
        "type": "MINOR_BREAKTHROUGH",
        "reqPill": "pill_vuhoa_mid",
        "reqPillName": "Vũ Hóa Phá Cảnh Đan (Sơ Kỳ)",
        "reqQty": 1
      },
      "4": {
        "maxExp": 38000,
        "type": "NORMAL"
      },
      "5": {
        "maxExp": 42000,
        "type": "NORMAL"
      },
      "6": {
        "maxExp": 47000,
        "type": "MINOR_BREAKTHROUGH",
        "reqPill": "pill_vuhoa_late",
        "reqPillName": "Vũ Hóa Phá Cảnh Đan (Trung Kỳ)",
        "reqQty": 1
      },
      "7": {
        "maxExp": 52000,
        "type": "NORMAL"
      },
      "8": {
        "maxExp": 58000,
        "type": "NORMAL"
      },
      "9": {
        "maxExp": 65000,
        "type": "MAJOR_BREAKTHROUGH",
        "reqPill": "pill_vuhoa_next",
        "reqPillName": "Vũ Hóa Tiên Đan",
        "reqQty": 1,
        "reqCucPhamStones": 8000
      }
    }
  },
  {
    "id": "dang_tien",
    "name": "Đăng Tiên",
    "autoHpPerTier": 10,
    "autoAtkPerTier": 0,
    "autoDefPerTier": 0,
    "attributePointsPerTier": 0,
    "description": "Chân chính Đăng Tiên, đứng tại đỉnh cao Linh Giới, sẵn sàng bước sang Tiên Giới.",
    "tiers": {
      "1": {
        "maxExp": 75000,
        "type": "NORMAL"
      },
      "2": {
        "maxExp": 85000,
        "type": "NORMAL"
      },
      "3": {
        "maxExp": 100000,
        "type": "MINOR_BREAKTHROUGH",
        "reqPill": "pill_dangtien_mid",
        "reqPillName": "Đăng Tiên Phá Cảnh Đan (Sơ Kỳ)",
        "reqQty": 1
      },
      "4": {
        "maxExp": 120000,
        "type": "NORMAL"
      },
      "5": {
        "maxExp": 150000,
        "type": "MAJOR_BREAKTHROUGH",
        "reqPill": "pill_dangtien_next",
        "reqPillName": "Tiên Giới Phi Thăng Ấn",
        "reqQty": 1,
        "reqCucPhamStones": 10000
      }
    }
  }
],
  skillsBySchool: {
  "kiem_tu": [
    {
      "id": "card_47",
      "name": "Vân Kiếm·Vãn Hà",
      "nameCn": "云剑•晚霞",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Kiếm ý] +2\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 2 [Kiếm ý]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Kiếm ý] +2\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 2 [Kiếm ý]",
          "effects": [
            {
              "type": "SWORD_INTENT",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Kiếm ý] +4\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 2 [Kiếm ý]",
          "effects": [
            {
              "type": "SWORD_INTENT",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Kiếm ý] +6\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 2 [Kiếm ý]",
          "effects": [
            {
              "type": "SWORD_INTENT",
              "amount": 6
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_47",
      "name": "Vân Kiếm·Vãn Hà",
      "nameCn": "云剑•晚霞",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Kiếm ý] +2\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 2 [Kiếm ý]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Kiếm ý] +2\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 2 [Kiếm ý]",
          "effects": [
            {
              "type": "SWORD_INTENT",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Kiếm ý] +4\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 2 [Kiếm ý]",
          "effects": [
            {
              "type": "SWORD_INTENT",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Kiếm ý] +6\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 2 [Kiếm ý]",
          "effects": [
            {
              "type": "SWORD_INTENT",
              "amount": 6
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_48",
      "name": "Thanh Long Kiếm Trận",
      "nameCn": "青龙剑阵",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Phòng] +8\nMỗi có 3 [Phòng] liền thêm 1 [Kiếm ý]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Phòng] +8\nMỗi có 3 [Phòng] liền thêm 1 [Kiếm ý]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 8
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Phòng] +12\nMỗi có 3 [Phòng] liền thêm 1 [Kiếm ý]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 12
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Phòng] +16\nMỗi có 3 [Phòng] liền thêm 1 [Kiếm ý]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 16
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_48",
      "name": "Thanh Long Kiếm Trận",
      "nameCn": "青龙剑阵",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Phòng] +8\nMỗi có 3 [Phòng] liền thêm 1 [Kiếm ý]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Phòng] +8\nMỗi có 3 [Phòng] liền thêm 1 [Kiếm ý]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 8
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Phòng] +12\nMỗi có 3 [Phòng] liền thêm 1 [Kiếm ý]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 12
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Phòng] +16\nMỗi có 3 [Phòng] liền thêm 1 [Kiếm ý]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 16
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_49",
      "name": "Bách Thú Linh Kiếm Trận",
      "nameCn": "百兽灵剑阵",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Linh khí] +2\n[Duy trì]: Mỗi hiệp lần đầu sử dụng “Linh Kiếm” hoặc công pháp “Kiếm Trận” sau, mỗi thừa 1 điểm Linh khí hướng đối thủ tạo thành 1 Tổn thương",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +2\n[Duy trì]: Mỗi hiệp lần đầu sử dụng “Linh Kiếm” hoặc công pháp “Kiếm Trận” sau, mỗi thừa 1 điểm Linh khí hướng đối thủ tạo thành 1 Tổn thương",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +3\n[Duy trì]: Mỗi hiệp lần đầu sử dụng “Linh Kiếm” hoặc công pháp “Kiếm Trận” sau, mỗi thừa 1 điểm Linh khí hướng đối thủ tạo thành 1 Tổn thương",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +4\n[Duy trì]: Mỗi hiệp lần đầu sử dụng “Linh Kiếm” hoặc công pháp “Kiếm Trận” sau, mỗi thừa 1 điểm Linh khí hướng đối thủ tạo thành 1 Tổn thương",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_49",
      "name": "Bách Thú Linh Kiếm Trận",
      "nameCn": "百兽灵剑阵",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Linh khí] +2\n[Duy trì]: Mỗi hiệp lần đầu sử dụng “Linh Kiếm” hoặc công pháp “Kiếm Trận” sau, mỗi thừa 1 điểm Linh khí hướng đối thủ tạo thành 1 Tổn thương",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +2\n[Duy trì]: Mỗi hiệp lần đầu sử dụng “Linh Kiếm” hoặc công pháp “Kiếm Trận” sau, mỗi thừa 1 điểm Linh khí hướng đối thủ tạo thành 1 Tổn thương",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +3\n[Duy trì]: Mỗi hiệp lần đầu sử dụng “Linh Kiếm” hoặc công pháp “Kiếm Trận” sau, mỗi thừa 1 điểm Linh khí hướng đối thủ tạo thành 1 Tổn thương",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +4\n[Duy trì]: Mỗi hiệp lần đầu sử dụng “Linh Kiếm” hoặc công pháp “Kiếm Trận” sau, mỗi thừa 1 điểm Linh khí hướng đối thủ tạo thành 1 Tổn thương",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_50",
      "name": "Cuồng Long Thôn Vân",
      "nameCn": "狂龙吞云",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "Tính là đã sử dụng Cuồng Kiếm 1 lần [Duy trì]: Cuồng Kiếm có thể tính là Vân Kiếm, Vân Kiếm có thể tính là Cuồng Kiếm",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "Tính là đã sử dụng Cuồng Kiếm 1 lần [Duy trì]: Cuồng Kiếm có thể tính là Vân Kiếm, Vân Kiếm có thể tính là Cuồng Kiếm",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "Tính tác dụng qua 2 lần Cuồng Kiếm\n[Duy trì]: Cuồng Kiếm có thể tính là Vân Kiếm, Vân Kiếm có thể tính là Cuồng Kiếm",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "Tính tác dụng qua 3 lần Cuồng Kiếm\n[Duy trì]: Cuồng Kiếm có thể tính là Vân Kiếm, Vân Kiếm có thể tính là Cuồng Kiếm",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_50",
      "name": "Cuồng Long Thôn Vân",
      "nameCn": "狂龙吞云",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "Tính là đã sử dụng Cuồng Kiếm 1 lần [Duy trì]: Cuồng Kiếm có thể tính là Vân Kiếm, Vân Kiếm có thể tính là Cuồng Kiếm",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "Tính là đã sử dụng Cuồng Kiếm 1 lần [Duy trì]: Cuồng Kiếm có thể tính là Vân Kiếm, Vân Kiếm có thể tính là Cuồng Kiếm",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "Tính tác dụng qua 2 lần Cuồng Kiếm\n[Duy trì]: Cuồng Kiếm có thể tính là Vân Kiếm, Vân Kiếm có thể tính là Cuồng Kiếm",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "Tính tác dụng qua 3 lần Cuồng Kiếm\n[Duy trì]: Cuồng Kiếm có thể tính là Vân Kiếm, Vân Kiếm có thể tính là Cuồng Kiếm",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_141",
      "name": "Vân Kiếm • Tinh Không",
      "nameCn": "云剑•星空",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Phòng] +4\n[Tiếp tục hành động]\n[Liên Vân]: Mỗi có 1 [Linh khí] tăng 1 [Phòng]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Phòng] +4\n[Tiếp tục hành động]\n[Liên Vân]: Mỗi có 1 [Linh khí] tăng 1 [Phòng]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 4
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Phòng] +10\n[Tiếp tục hành động]\n[Liên Vân]: Mỗi có 1 [Linh khí] tăng 1 [Phòng]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 10
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Phòng] +16\n[Tiếp tục hành động]\n[Liên Vân]: Mỗi có 1 [Linh khí] tăng 1 [Phòng]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 16
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_141",
      "name": "Vân Kiếm • Tinh Không",
      "nameCn": "云剑•星空",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Phòng] +4\n[Tiếp tục hành động]\n[Liên Vân]: Mỗi có 1 [Linh khí] tăng 1 [Phòng]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Phòng] +4\n[Tiếp tục hành động]\n[Liên Vân]: Mỗi có 1 [Linh khí] tăng 1 [Phòng]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 4
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Phòng] +10\n[Tiếp tục hành động]\n[Liên Vân]: Mỗi có 1 [Linh khí] tăng 1 [Phòng]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 10
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Phòng] +16\n[Tiếp tục hành động]\n[Liên Vân]: Mỗi có 1 [Linh khí] tăng 1 [Phòng]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 16
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_151",
      "name": "Cuồng Kiếm • Tinh Vân",
      "nameCn": "狂剑•星云",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "VO_KY",
      "phase": 3,
      "costMana": 0,
      "gainMana": 0,
      "description": "6 Công\nMỗi khi dùng 1 lần “Cuồng Kiếm” tăng 1 [Linh khí], 1 [Phòng] và 1 [Kiếm ý]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "6 Công\nMỗi khi dùng 1 lần “Cuồng Kiếm” tăng 1 [Linh khí], 1 [Phòng] và 1 [Kiếm ý]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "7 Công\nMỗi khi dùng 1 lần “Cuồng Kiếm” tăng 1 [Linh khí], 2 [Phòng] và 1 [Kiếm ý]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 7,
              "baseDamage": 7,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "8 Công\nMỗi khi dùng 1 lần “Cuồng Kiếm” tăng 1 [Linh khí], 3 [Phòng] và 1 [Kiếm ý]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 8,
              "baseDamage": 8,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_151",
      "name": "Cuồng Kiếm • Tinh Vân",
      "nameCn": "狂剑•星云",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "VO_KY",
      "phase": 3,
      "costMana": 0,
      "gainMana": 0,
      "description": "6 Công\nMỗi khi dùng 1 lần “Cuồng Kiếm” tăng 1 [Linh khí], 1 [Phòng] và 1 [Kiếm ý]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "6 Công\nMỗi khi dùng 1 lần “Cuồng Kiếm” tăng 1 [Linh khí], 1 [Phòng] và 1 [Kiếm ý]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "7 Công\nMỗi khi dùng 1 lần “Cuồng Kiếm” tăng 1 [Linh khí], 2 [Phòng] và 1 [Kiếm ý]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 7,
              "baseDamage": 7,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "8 Công\nMỗi khi dùng 1 lần “Cuồng Kiếm” tăng 1 [Linh khí], 3 [Phòng] và 1 [Kiếm ý]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 8,
              "baseDamage": 8,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_163",
      "name": "Huyền Minh Kiếm Ý Quyết",
      "nameCn": "玄冥剑意诀",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Kiếm ý] +6\nBản thân mỗi lần đã mất 6 Sinh mệnh sẽ thêm 1 [Kiếm ý]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Kiếm ý] +6\nBản thân mỗi lần đã mất 6 Sinh mệnh sẽ thêm 1 [Kiếm ý]",
          "effects": [
            {
              "type": "SWORD_INTENT",
              "amount": 6
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Kiếm ý] +8\nBản thân mỗi lần đã mất 6 Sinh mệnh sẽ thêm 1 [Kiếm ý]",
          "effects": [
            {
              "type": "SWORD_INTENT",
              "amount": 8
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Kiếm ý] +10\nBản thân mỗi lần đã mất 6 Sinh mệnh sẽ thêm 1 [Kiếm ý]",
          "effects": [
            {
              "type": "SWORD_INTENT",
              "amount": 10
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_163",
      "name": "Huyền Minh Kiếm Ý Quyết",
      "nameCn": "玄冥剑意诀",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Kiếm ý] +6\nBản thân mỗi lần đã mất 6 Sinh mệnh sẽ thêm 1 [Kiếm ý]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Kiếm ý] +6\nBản thân mỗi lần đã mất 6 Sinh mệnh sẽ thêm 1 [Kiếm ý]",
          "effects": [
            {
              "type": "SWORD_INTENT",
              "amount": 6
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Kiếm ý] +8\nBản thân mỗi lần đã mất 6 Sinh mệnh sẽ thêm 1 [Kiếm ý]",
          "effects": [
            {
              "type": "SWORD_INTENT",
              "amount": 8
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Kiếm ý] +10\nBản thân mỗi lần đã mất 6 Sinh mệnh sẽ thêm 1 [Kiếm ý]",
          "effects": [
            {
              "type": "SWORD_INTENT",
              "amount": 10
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_167",
      "name": "Vạn Kiếp Thiên Phong",
      "nameCn": "万劫天锋",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "12 Công\nCông pháp này ×6 lần [Kiếm ý] và ×4 lần [Thêm công]\n[Phá giáp]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "12 Công\nCông pháp này ×6 lần [Kiếm ý] và ×4 lần [Thêm công]\n[Phá giáp]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 12,
              "baseDamage": 12,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "12 Công\nCông pháp này ×6 lần [Kiếm ý] và ×4 lần [Thêm công]\n[Phá giáp]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 12,
              "baseDamage": 12,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "12 Công\nCông pháp này ×6 lần [Kiếm ý] và ×4 lần [Thêm công]\n[Phá giáp]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 12,
              "baseDamage": 12,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_167",
      "name": "Vạn Kiếp Thiên Phong",
      "nameCn": "万劫天锋",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "12 Công\nCông pháp này ×6 lần [Kiếm ý] và ×4 lần [Thêm công]\n[Phá giáp]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "12 Công\nCông pháp này ×6 lần [Kiếm ý] và ×4 lần [Thêm công]\n[Phá giáp]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 12,
              "baseDamage": 12,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "12 Công\nCông pháp này ×6 lần [Kiếm ý] và ×4 lần [Thêm công]\n[Phá giáp]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 12,
              "baseDamage": 12,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "12 Công\nCông pháp này ×6 lần [Kiếm ý] và ×4 lần [Thêm công]\n[Phá giáp]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 12,
              "baseDamage": 12,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_171",
      "name": "Kiếm Định Nhạc Thủ Sơn",
      "nameCn": "首山定岳剑",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "THAN_THONG",
      "phase": 6,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Súc linh] 5\n120 Công\n[Không nhìn phòng ngự]\nBỏ qua [Hộ thể]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 5\n120 Công\n[Không nhìn phòng ngự]\nBỏ qua [Hộ thể]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 120,
              "baseDamage": 120,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 5\n120 Công\n[Không nhìn phòng ngự]\nBỏ qua [Hộ thể]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 120,
              "baseDamage": 120,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 5\n120 Công\n[Không nhìn phòng ngự]\nBỏ qua [Hộ thể]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 120,
              "baseDamage": 120,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_171",
      "name": "Kiếm Định Nhạc Thủ Sơn",
      "nameCn": "首山定岳剑",
      "school": "kiem_tu",
      "schoolName": "Kiếm Tu",
      "category": "THAN_THONG",
      "phase": 6,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Súc linh] 5\n120 Công\n[Không nhìn phòng ngự]\nBỏ qua [Hộ thể]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 5\n120 Công\n[Không nhìn phòng ngự]\nBỏ qua [Hộ thể]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 120,
              "baseDamage": 120,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 5\n120 Công\n[Không nhìn phòng ngự]\nBỏ qua [Hộ thể]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 120,
              "baseDamage": 120,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 5\n120 Công\n[Không nhìn phòng ngự]\nBỏ qua [Hộ thể]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 120,
              "baseDamage": 120,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    }
  ],
  "tinh_tu": [
    {
      "id": "card_51",
      "name": "Linh Quẻ Thuật",
      "nameCn": "灵卦术",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Duy trì]: Mỗi thêm 1 điểm Linh khí sẽ thêm 1 [Quái tượng]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Duy trì]: Mỗi thêm 1 điểm Linh khí sẽ thêm 1 [Quái tượng]",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Quái tượng] +1\n[Duy trì]: Mỗi thêm 1 điểm Linh khí sẽ thêm 1 [Quái tượng]",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 1
              }
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Quái tượng] +3\n[Duy trì]: Mỗi thêm 1 điểm Linh khí sẽ thêm 1 [Quái tượng]",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 3
              }
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_51",
      "name": "Linh Quẻ Thuật",
      "nameCn": "灵卦术",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Duy trì]: Mỗi thêm 1 điểm Linh khí sẽ thêm 1 [Quái tượng]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Duy trì]: Mỗi thêm 1 điểm Linh khí sẽ thêm 1 [Quái tượng]",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Quái tượng] +1\n[Duy trì]: Mỗi thêm 1 điểm Linh khí sẽ thêm 1 [Quái tượng]",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 1
              }
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Quái tượng] +3\n[Duy trì]: Mỗi thêm 1 điểm Linh khí sẽ thêm 1 [Quái tượng]",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 3
              }
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_52",
      "name": "Trích Hoa Phi Diệp",
      "nameCn": "摘花飞叶",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Duy trì]: Mỗi lần công kích đối thủ hoặc bị đối thủ công kích sau, hướng đối thủ thực hiện 1 tầng [Nội thương]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Duy trì]: Mỗi lần công kích đối thủ hoặc bị đối thủ công kích sau, hướng đối thủ thực hiện 1 tầng [Nội thương]",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +1\n[Duy trì]: Mỗi lần công kích đối thủ hoặc bị đối thủ công kích sau, hướng đối thủ thực hiện 1 tầng [Nội thương]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +3\n[Duy trì]: Mỗi lần công kích đối thủ hoặc bị đối thủ công kích sau, hướng đối thủ thực hiện 1 tầng [Nội thương]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_52",
      "name": "Trích Hoa Phi Diệp",
      "nameCn": "摘花飞叶",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Duy trì]: Mỗi lần công kích đối thủ hoặc bị đối thủ công kích sau, hướng đối thủ thực hiện 1 tầng [Nội thương]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Duy trì]: Mỗi lần công kích đối thủ hoặc bị đối thủ công kích sau, hướng đối thủ thực hiện 1 tầng [Nội thương]",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +1\n[Duy trì]: Mỗi lần công kích đối thủ hoặc bị đối thủ công kích sau, hướng đối thủ thực hiện 1 tầng [Nội thương]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +3\n[Duy trì]: Mỗi lần công kích đối thủ hoặc bị đối thủ công kích sau, hướng đối thủ thực hiện 1 tầng [Nội thương]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": true,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_53",
      "name": "Tinh Kỳ·Song Phi Yến",
      "nameCn": "星弈•双飞燕",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "4 Công\n[Tiếp tục hành động]\n[Tinh vị]: công pháp này tăng thêm 4 Công\n[Hậu chiêu]: Thêm vào 1 lần công kích",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công\n[Tiếp tục hành động]\n[Tinh vị]: công pháp này tăng thêm 4 Công\n[Hậu chiêu]: Thêm vào 1 lần công kích",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "5 Công\n[Tiếp tục hành động]\n[Tinh vị]: công pháp này tăng thêm 6 Công\n[Hậu chiêu]: Thêm vào 1 lần công kích",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 5,
              "baseDamage": 5,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "6 Công\n[Tiếp tục hành động]\n[Tinh vị]: công pháp này tăng thêm 8 Công\n[Hậu chiêu]: Thêm vào 1 lần công kích",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_53",
      "name": "Tinh Kỳ·Song Phi Yến",
      "nameCn": "星弈•双飞燕",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "4 Công\n[Tiếp tục hành động]\n[Tinh vị]: công pháp này tăng thêm 4 Công\n[Hậu chiêu]: Thêm vào 1 lần công kích",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công\n[Tiếp tục hành động]\n[Tinh vị]: công pháp này tăng thêm 4 Công\n[Hậu chiêu]: Thêm vào 1 lần công kích",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "5 Công\n[Tiếp tục hành động]\n[Tinh vị]: công pháp này tăng thêm 6 Công\n[Hậu chiêu]: Thêm vào 1 lần công kích",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 5,
              "baseDamage": 5,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "6 Công\n[Tiếp tục hành động]\n[Tinh vị]: công pháp này tăng thêm 8 Công\n[Hậu chiêu]: Thêm vào 1 lần công kích",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_54",
      "name": "Nước Chảy Đá Mòn",
      "nameCn": "滴水穿石",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "1 Công\nĐối phương có [Trạng thái xấu] thì [Tiếp tục hành động]\n[Hậu chiêu]: Gây cho đối thủ 6 tầng [Nội thương]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "1 Công\nĐối phương có [Trạng thái xấu] thì [Tiếp tục hành động]\n[Hậu chiêu]: Gây cho đối thủ 6 tầng [Nội thương]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 1,
              "baseDamage": 1,
              "hits": 1,
              "isInternal": true
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "1 Công\nĐối phương có [Trạng thái xấu] thì [Tiếp tục hành động]\n[Hậu chiêu]: Gây cho đối thủ 8 tầng [Nội thương]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 1,
              "baseDamage": 1,
              "hits": 1,
              "isInternal": true
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "1 Công\nĐối phương có [Trạng thái xấu] thì [Tiếp tục hành động]\n[Hậu chiêu]: Gây cho đối thủ 10 tầng [Nội thương]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 1,
              "baseDamage": 1,
              "hits": 1,
              "isInternal": true
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_54",
      "name": "Nước Chảy Đá Mòn",
      "nameCn": "滴水穿石",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "1 Công\nĐối phương có [Trạng thái xấu] thì [Tiếp tục hành động]\n[Hậu chiêu]: Gây cho đối thủ 6 tầng [Nội thương]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "1 Công\nĐối phương có [Trạng thái xấu] thì [Tiếp tục hành động]\n[Hậu chiêu]: Gây cho đối thủ 6 tầng [Nội thương]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 1,
              "baseDamage": 1,
              "hits": 1,
              "isInternal": true
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "1 Công\nĐối phương có [Trạng thái xấu] thì [Tiếp tục hành động]\n[Hậu chiêu]: Gây cho đối thủ 8 tầng [Nội thương]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 1,
              "baseDamage": 1,
              "hits": 1,
              "isInternal": true
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "1 Công\nĐối phương có [Trạng thái xấu] thì [Tiếp tục hành động]\n[Hậu chiêu]: Gây cho đối thủ 10 tầng [Nội thương]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 1,
              "baseDamage": 1,
              "hits": 1,
              "isInternal": true
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_142",
      "name": "Tinh Kỳ • Sách",
      "nameCn": "星弈•拆",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "VO_KY",
      "phase": 2,
      "costMana": 0,
      "gainMana": 0,
      "description": "4 Công\n[Linh khí] +1\n3 ô phía sau [Trở thành Tinh vị]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công\n[Linh khí] +1\n3 ô phía sau [Trở thành Tinh vị]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            },
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "6 Công\n[Linh khí] +1\n4 ô phía sau [Trở thành Tinh vị]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            },
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "8 Công\n[Linh khí] +1\n5 ô phía sau [Trở thành Tinh vị]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            },
            {
              "type": "DAMAGE",
              "damage": 8,
              "baseDamage": 8,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_142",
      "name": "Tinh Kỳ • Sách",
      "nameCn": "星弈•拆",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "VO_KY",
      "phase": 2,
      "costMana": 0,
      "gainMana": 0,
      "description": "4 Công\n[Linh khí] +1\n3 ô phía sau [Trở thành Tinh vị]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công\n[Linh khí] +1\n3 ô phía sau [Trở thành Tinh vị]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            },
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "6 Công\n[Linh khí] +1\n4 ô phía sau [Trở thành Tinh vị]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            },
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "8 Công\n[Linh khí] +1\n5 ô phía sau [Trở thành Tinh vị]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            },
            {
              "type": "DAMAGE",
              "damage": 8,
              "baseDamage": 8,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_152",
      "name": "Khí Thôn Tinh Hà",
      "nameCn": "气吞星河",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "Tiêu hao hết [Linh khí] và [Tinh lực], mỗi điểm [Linh khí]/[Tinh lực] tăng 2 /4 Sinh mệnh và Sinh mệnh tối đa\nNếu đã tăng Sinh mệnh thì [Tiếp tục hành động]\n[Hậu chiêu]: [Linh khí] +2 ",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "Tiêu hao hết [Linh khí] và [Tinh lực], mỗi điểm [Linh khí]/[Tinh lực] tăng 2 /4 Sinh mệnh và Sinh mệnh tối đa\nNếu đã tăng Sinh mệnh thì [Tiếp tục hành động]\n[Hậu chiêu]: [Linh khí] +2 ",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "Tiêu hao hết [Linh khí] và [Tinh lực], mỗi điểm [Linh khí]/[Tinh lực] tăng 2 /4 Sinh mệnh và Sinh mệnh tối đa\nNếu đã tăng Sinh mệnh thì [Tiếp tục hành động]\n[Hậu chiêu]: [Linh khí] +4 ",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "Tiêu hao hết [Linh khí] và [Tinh lực], mỗi điểm [Linh khí]/[Tinh lực] tăng 2 /4 Sinh mệnh và Sinh mệnh tối đa\nNếu đã tăng Sinh mệnh thì [Tiếp tục hành động]\n[Hậu chiêu]: [Linh khí] +6 ",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_152",
      "name": "Khí Thôn Tinh Hà",
      "nameCn": "气吞星河",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "Tiêu hao hết [Linh khí] và [Tinh lực], mỗi điểm [Linh khí]/[Tinh lực] tăng 2 /4 Sinh mệnh và Sinh mệnh tối đa\nNếu đã tăng Sinh mệnh thì [Tiếp tục hành động]\n[Hậu chiêu]: [Linh khí] +2 ",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "Tiêu hao hết [Linh khí] và [Tinh lực], mỗi điểm [Linh khí]/[Tinh lực] tăng 2 /4 Sinh mệnh và Sinh mệnh tối đa\nNếu đã tăng Sinh mệnh thì [Tiếp tục hành động]\n[Hậu chiêu]: [Linh khí] +2 ",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "Tiêu hao hết [Linh khí] và [Tinh lực], mỗi điểm [Linh khí]/[Tinh lực] tăng 2 /4 Sinh mệnh và Sinh mệnh tối đa\nNếu đã tăng Sinh mệnh thì [Tiếp tục hành động]\n[Hậu chiêu]: [Linh khí] +4 ",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "Tiêu hao hết [Linh khí] và [Tinh lực], mỗi điểm [Linh khí]/[Tinh lực] tăng 2 /4 Sinh mệnh và Sinh mệnh tối đa\nNếu đã tăng Sinh mệnh thì [Tiếp tục hành động]\n[Hậu chiêu]: [Linh khí] +6 ",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_164",
      "name": "Huyền Minh Lôi Vân Kiếp",
      "nameCn": "玄冥雷云劫",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "Lặp lại 5 lần:\nBản thân nhận 7 [Tổn thương] (Mỗi lần có 10% cơ hội tránh), đối thủ nhận 9 [Tổn thương]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "Lặp lại 5 lần:\nBản thân nhận 7 [Tổn thương] (Mỗi lần có 10% cơ hội tránh), đối thủ nhận 9 [Tổn thương]",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "Lặp lại 5 lần:\nBản thân nhận 7 [Tổn thương] (Mỗi lần có 10% cơ hội tránh), đối thủ nhận 10 [Tổn thương]",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "Lặp lại 5 lần:\nBản thân nhận 7 [Tổn thương] (Mỗi lần có 10% cơ hội tránh), đối thủ nhận 11 [Tổn thương]",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_164",
      "name": "Huyền Minh Lôi Vân Kiếp",
      "nameCn": "玄冥雷云劫",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "Lặp lại 5 lần:\nBản thân nhận 7 [Tổn thương] (Mỗi lần có 10% cơ hội tránh), đối thủ nhận 9 [Tổn thương]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "Lặp lại 5 lần:\nBản thân nhận 7 [Tổn thương] (Mỗi lần có 10% cơ hội tránh), đối thủ nhận 9 [Tổn thương]",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "Lặp lại 5 lần:\nBản thân nhận 7 [Tổn thương] (Mỗi lần có 10% cơ hội tránh), đối thủ nhận 10 [Tổn thương]",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "Lặp lại 5 lần:\nBản thân nhận 7 [Tổn thương] (Mỗi lần có 10% cơ hội tránh), đối thủ nhận 11 [Tổn thương]",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_168",
      "name": "Mộng Điệp Du Tiên",
      "nameCn": "梦蝶游仙",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "5 Công ×2\nĐảo ngược [Hướng xuất chiêu] của bản thân\n10% cơ hội [Tiếp tục hành động]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "5 Công ×2\nĐảo ngược [Hướng xuất chiêu] của bản thân\n10% cơ hội [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 5,
              "baseDamage": 5,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "5 Công ×2\nĐảo ngược [Hướng xuất chiêu] của bản thân\n10% cơ hội [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 5,
              "baseDamage": 5,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "5 Công ×2\nĐảo ngược [Hướng xuất chiêu] của bản thân\n10% cơ hội [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 5,
              "baseDamage": 5,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_168",
      "name": "Mộng Điệp Du Tiên",
      "nameCn": "梦蝶游仙",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "5 Công ×2\nĐảo ngược [Hướng xuất chiêu] của bản thân\n10% cơ hội [Tiếp tục hành động]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "5 Công ×2\nĐảo ngược [Hướng xuất chiêu] của bản thân\n10% cơ hội [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 5,
              "baseDamage": 5,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "5 Công ×2\nĐảo ngược [Hướng xuất chiêu] của bản thân\n10% cơ hội [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 5,
              "baseDamage": 5,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "5 Công ×2\nĐảo ngược [Hướng xuất chiêu] của bản thân\n10% cơ hội [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 5,
              "baseDamage": 5,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_172",
      "name": "Cửu Thiên Lưu Quang Luân",
      "nameCn": "九天流光轮",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "THAN_THONG",
      "phase": 6,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Súc linh] 6\nKhi Sinh mệnh bản thân ≤0, hồi sinh và phục hồi Sinh mệnh đến 64 \n(Có thể cộng dồn)",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 6\nKhi Sinh mệnh bản thân ≤0, hồi sinh và phục hồi Sinh mệnh đến 64 \n(Có thể cộng dồn)",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 6\nKhi Sinh mệnh bản thân ≤0, hồi sinh và phục hồi Sinh mệnh đến 64 \n(Có thể cộng dồn)",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 6\nKhi Sinh mệnh bản thân ≤0, hồi sinh và phục hồi Sinh mệnh đến 64 \n(Có thể cộng dồn)",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_172",
      "name": "Cửu Thiên Lưu Quang Luân",
      "nameCn": "九天流光轮",
      "school": "tinh_tu",
      "schoolName": "Tinh Tu",
      "category": "THAN_THONG",
      "phase": 6,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Súc linh] 6\nKhi Sinh mệnh bản thân ≤0, hồi sinh và phục hồi Sinh mệnh đến 64 \n(Có thể cộng dồn)",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 6\nKhi Sinh mệnh bản thân ≤0, hồi sinh và phục hồi Sinh mệnh đến 64 \n(Có thể cộng dồn)",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 6\nKhi Sinh mệnh bản thân ≤0, hồi sinh và phục hồi Sinh mệnh đến 64 \n(Có thể cộng dồn)",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 6\nKhi Sinh mệnh bản thân ≤0, hồi sinh và phục hồi Sinh mệnh đến 64 \n(Có thể cộng dồn)",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    }
  ],
  "phap_tu": [
    {
      "id": "card_55",
      "name": "Dã Độ Chi Ấn",
      "nameCn": "野渡之印",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Linh khí] +2\nLần sau thêm Sinh mệnh hoặc Linh khí thì [Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thủy Linh], [Kích Hoạt Mộc Linh]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +2\nLần sau thêm Sinh mệnh hoặc Linh khí thì [Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thủy Linh], [Kích Hoạt Mộc Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +4\nLần sau thêm Sinh mệnh hoặc Linh khí thì [Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thủy Linh], [Kích Hoạt Mộc Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +6\nLần sau thêm Sinh mệnh hoặc Linh khí thì [Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thủy Linh], [Kích Hoạt Mộc Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 6
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_55",
      "name": "Dã Độ Chi Ấn",
      "nameCn": "野渡之印",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Linh khí] +2\nLần sau thêm Sinh mệnh hoặc Linh khí thì [Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thủy Linh], [Kích Hoạt Mộc Linh]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +2\nLần sau thêm Sinh mệnh hoặc Linh khí thì [Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thủy Linh], [Kích Hoạt Mộc Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +4\nLần sau thêm Sinh mệnh hoặc Linh khí thì [Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thủy Linh], [Kích Hoạt Mộc Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +6\nLần sau thêm Sinh mệnh hoặc Linh khí thì [Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thủy Linh], [Kích Hoạt Mộc Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 6
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_56",
      "name": "Dung Nham Chi Ấn",
      "nameCn": "熔岩之印",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "Giảm đối thủ 10 Sinh mệnh cùng hạn mức cao nhất (Bản thân mỗi có 1 Phòng liền nhiều giảm 1 điểm)\n[Khai Cục]: [Kích Hoạt Hỏa Linh], [Kích Hoạt Thổ Linh]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "Giảm đối thủ 10 Sinh mệnh cùng hạn mức cao nhất (Bản thân mỗi có 1 Phòng liền nhiều giảm 1 điểm)\n[Khai Cục]: [Kích Hoạt Hỏa Linh], [Kích Hoạt Thổ Linh]",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "Giảm đối thủ 15 Sinh mệnh cùng hạn mức cao nhất (Bản thân mỗi có 1 Phòng liền nhiều giảm 1 điểm)\n[Khai Cục]: [Kích Hoạt Hỏa Linh], [Kích Hoạt Thổ Linh]",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "Giảm đối thủ 20 Sinh mệnh cùng hạn mức cao nhất (Bản thân mỗi có 1 Phòng liền nhiều giảm 1 điểm)\n[Khai Cục]: [Kích Hoạt Hỏa Linh], [Kích Hoạt Thổ Linh]",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_56",
      "name": "Dung Nham Chi Ấn",
      "nameCn": "熔岩之印",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "Giảm đối thủ 10 Sinh mệnh cùng hạn mức cao nhất (Bản thân mỗi có 1 Phòng liền nhiều giảm 1 điểm)\n[Khai Cục]: [Kích Hoạt Hỏa Linh], [Kích Hoạt Thổ Linh]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "Giảm đối thủ 10 Sinh mệnh cùng hạn mức cao nhất (Bản thân mỗi có 1 Phòng liền nhiều giảm 1 điểm)\n[Khai Cục]: [Kích Hoạt Hỏa Linh], [Kích Hoạt Thổ Linh]",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "Giảm đối thủ 15 Sinh mệnh cùng hạn mức cao nhất (Bản thân mỗi có 1 Phòng liền nhiều giảm 1 điểm)\n[Khai Cục]: [Kích Hoạt Hỏa Linh], [Kích Hoạt Thổ Linh]",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "Giảm đối thủ 20 Sinh mệnh cùng hạn mức cao nhất (Bản thân mỗi có 1 Phòng liền nhiều giảm 1 điểm)\n[Khai Cục]: [Kích Hoạt Hỏa Linh], [Kích Hoạt Thổ Linh]",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_57",
      "name": "Cổn Thạch Chi Ấn",
      "nameCn": "滚石之印",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Phòng] +2 (Mỗi dùng qua 1 công pháp nhiều 2 )\n[Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thổ Linh], [Kích Hoạt Kim Linh]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Phòng] +2 (Mỗi dùng qua 1 công pháp nhiều 2 )\n[Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thổ Linh], [Kích Hoạt Kim Linh]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 2
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Phòng] +3 (Mỗi dùng qua 1 công pháp nhiều 3 )\n[Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thổ Linh], [Kích Hoạt Kim Linh]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 3
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Phòng] +4 (Mỗi dùng qua 1 công pháp nhiều 4 )\n[Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thổ Linh], [Kích Hoạt Kim Linh]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 4
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_57",
      "name": "Cổn Thạch Chi Ấn",
      "nameCn": "滚石之印",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Phòng] +2 (Mỗi dùng qua 1 công pháp nhiều 2 )\n[Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thổ Linh], [Kích Hoạt Kim Linh]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Phòng] +2 (Mỗi dùng qua 1 công pháp nhiều 2 )\n[Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thổ Linh], [Kích Hoạt Kim Linh]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 2
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Phòng] +3 (Mỗi dùng qua 1 công pháp nhiều 3 )\n[Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thổ Linh], [Kích Hoạt Kim Linh]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 3
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Phòng] +4 (Mỗi dùng qua 1 công pháp nhiều 4 )\n[Tiếp tục hành động]\n[Khai Cục]: [Kích Hoạt Thổ Linh], [Kích Hoạt Kim Linh]",
          "effects": [
            {
              "type": "GUARD",
              "amount": 4
            }
          ],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_58",
      "name": "Trảm Lãng Chi Ấn",
      "nameCn": "斩浪之印",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Linh khí] +2\nMỗi có 1 điểm [Linh khí] thêm 3 [Phong nhuệ]\n[Khai Cục]: [Kích Hoạt Kim Linh], [Kích Hoạt Thủy Linh]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +2\nMỗi có 1 điểm [Linh khí] thêm 3 [Phong nhuệ]\n[Khai Cục]: [Kích Hoạt Kim Linh], [Kích Hoạt Thủy Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +3\nMỗi có 1 điểm [Linh khí] thêm 3 [Phong nhuệ]\n[Khai Cục]: [Kích Hoạt Kim Linh], [Kích Hoạt Thủy Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +4\nMỗi có 1 điểm [Linh khí] thêm 3 [Phong nhuệ]\n[Khai Cục]: [Kích Hoạt Kim Linh], [Kích Hoạt Thủy Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_58",
      "name": "Trảm Lãng Chi Ấn",
      "nameCn": "斩浪之印",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Linh khí] +2\nMỗi có 1 điểm [Linh khí] thêm 3 [Phong nhuệ]\n[Khai Cục]: [Kích Hoạt Kim Linh], [Kích Hoạt Thủy Linh]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +2\nMỗi có 1 điểm [Linh khí] thêm 3 [Phong nhuệ]\n[Khai Cục]: [Kích Hoạt Kim Linh], [Kích Hoạt Thủy Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +3\nMỗi có 1 điểm [Linh khí] thêm 3 [Phong nhuệ]\n[Khai Cục]: [Kích Hoạt Kim Linh], [Kích Hoạt Thủy Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +4\nMỗi có 1 điểm [Linh khí] thêm 3 [Phong nhuệ]\n[Khai Cục]: [Kích Hoạt Kim Linh], [Kích Hoạt Thủy Linh]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_143",
      "name": "Kim Linh • Lưu Tinh",
      "nameCn": "金灵•流星",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "VO_KY",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "4 Công (Bản thân mỗi khi giảm 8 [Phòng] thì tăng thêm 1 Công)\n[Kim Linh]: [Tiếp tục hành động]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công (Bản thân mỗi khi giảm 8 [Phòng] thì tăng thêm 1 Công)\n[Kim Linh]: [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "6 Công (Bản thân mỗi khi giảm 7 [Phòng] thì tăng thêm 1 Công)\n[Kim Linh]: [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "8 Công (Bản thân mỗi khi giảm 6 [Phòng] thì tăng thêm 1 Công)\n[Kim Linh]: [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 8,
              "baseDamage": 8,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_143",
      "name": "Kim Linh • Lưu Tinh",
      "nameCn": "金灵•流星",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "VO_KY",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "4 Công (Bản thân mỗi khi giảm 8 [Phòng] thì tăng thêm 1 Công)\n[Kim Linh]: [Tiếp tục hành động]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công (Bản thân mỗi khi giảm 8 [Phòng] thì tăng thêm 1 Công)\n[Kim Linh]: [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "6 Công (Bản thân mỗi khi giảm 7 [Phòng] thì tăng thêm 1 Công)\n[Kim Linh]: [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "8 Công (Bản thân mỗi khi giảm 6 [Phòng] thì tăng thêm 1 Công)\n[Kim Linh]: [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 8,
              "baseDamage": 8,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_153",
      "name": "Hồn Tinh Thứ",
      "nameCn": "浑星刺",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "VO_KY",
      "phase": 2,
      "costMana": 0,
      "gainMana": 0,
      "description": "7 Công\nLập tức [Kích hoạt] công pháp [Ngũ hành] ở 2 ô kế, nếu trong đó chỉ có 1 loại [Ngũ hành] thì thêm 1 [Linh khí]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "7 Công\nLập tức [Kích hoạt] công pháp [Ngũ hành] ở 2 ô kế, nếu trong đó chỉ có 1 loại [Ngũ hành] thì thêm 1 [Linh khí]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 7,
              "baseDamage": 7,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "11 Công\nLập tức [Kích hoạt] công pháp [Ngũ hành] ở 2 ô kế, nếu trong đó chỉ có 1 loại [Ngũ hành] thì thêm 1 [Linh khí]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 11,
              "baseDamage": 11,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "15 Công\nLập tức [Kích hoạt] công pháp [Ngũ hành] ở 2 ô kế, nếu trong đó chỉ có 1 loại [Ngũ hành] thì thêm 1 [Linh khí]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 15,
              "baseDamage": 15,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_153",
      "name": "Hồn Tinh Thứ",
      "nameCn": "浑星刺",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "VO_KY",
      "phase": 2,
      "costMana": 0,
      "gainMana": 0,
      "description": "7 Công\nLập tức [Kích hoạt] công pháp [Ngũ hành] ở 2 ô kế, nếu trong đó chỉ có 1 loại [Ngũ hành] thì thêm 1 [Linh khí]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "7 Công\nLập tức [Kích hoạt] công pháp [Ngũ hành] ở 2 ô kế, nếu trong đó chỉ có 1 loại [Ngũ hành] thì thêm 1 [Linh khí]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 7,
              "baseDamage": 7,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "11 Công\nLập tức [Kích hoạt] công pháp [Ngũ hành] ở 2 ô kế, nếu trong đó chỉ có 1 loại [Ngũ hành] thì thêm 1 [Linh khí]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 11,
              "baseDamage": 11,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "15 Công\nLập tức [Kích hoạt] công pháp [Ngũ hành] ở 2 ô kế, nếu trong đó chỉ có 1 loại [Ngũ hành] thì thêm 1 [Linh khí]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 15,
              "baseDamage": 15,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_165",
      "name": "Huyền Minh Thiên Tủy Diệt",
      "nameCn": "玄冥天髓灭",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "10 Công (Bản thân mỗi mất đi 5 Sinh mệnh nhiều 1 Công)\nNếu trong Trận Hình không cao hơn 2 loại [Ngũ hành] thì [Tiếp tục hành động]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "10 Công (Bản thân mỗi mất đi 5 Sinh mệnh nhiều 1 Công)\nNếu trong Trận Hình không cao hơn 2 loại [Ngũ hành] thì [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "15 Công (Bản thân mỗi mất đi 5 Sinh mệnh nhiều 1 Công)\nNếu trong Trận Hình không cao hơn 2 loại [Ngũ hành] thì [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 15,
              "baseDamage": 15,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "20 Công (Bản thân mỗi mất đi 5 Sinh mệnh nhiều 1 Công)\nNếu trong Trận Hình không cao hơn 2 loại [Ngũ hành] thì [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 20,
              "baseDamage": 20,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_165",
      "name": "Huyền Minh Thiên Tủy Diệt",
      "nameCn": "玄冥天髓灭",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "10 Công (Bản thân mỗi mất đi 5 Sinh mệnh nhiều 1 Công)\nNếu trong Trận Hình không cao hơn 2 loại [Ngũ hành] thì [Tiếp tục hành động]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "10 Công (Bản thân mỗi mất đi 5 Sinh mệnh nhiều 1 Công)\nNếu trong Trận Hình không cao hơn 2 loại [Ngũ hành] thì [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "15 Công (Bản thân mỗi mất đi 5 Sinh mệnh nhiều 1 Công)\nNếu trong Trận Hình không cao hơn 2 loại [Ngũ hành] thì [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 15,
              "baseDamage": 15,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "20 Công (Bản thân mỗi mất đi 5 Sinh mệnh nhiều 1 Công)\nNếu trong Trận Hình không cao hơn 2 loại [Ngũ hành] thì [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 20,
              "baseDamage": 20,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_169",
      "name": "Xuyên Vân Ngự Phong",
      "nameCn": "穿云御风",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "2 Công ×3\nMỗi công pháp [Ngũ hành] khác nhau trong Trận Hình sẽ tăng thêm 2 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "2 Công ×3\nMỗi công pháp [Ngũ hành] khác nhau trong Trận Hình sẽ tăng thêm 2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 2,
              "baseDamage": 2,
              "hits": 3,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "2 Công ×3\nMỗi công pháp [Ngũ hành] khác nhau trong Trận Hình sẽ tăng thêm 2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 2,
              "baseDamage": 2,
              "hits": 3,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "2 Công ×3\nMỗi công pháp [Ngũ hành] khác nhau trong Trận Hình sẽ tăng thêm 2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 2,
              "baseDamage": 2,
              "hits": 3,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_169",
      "name": "Xuyên Vân Ngự Phong",
      "nameCn": "穿云御风",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "2 Công ×3\nMỗi công pháp [Ngũ hành] khác nhau trong Trận Hình sẽ tăng thêm 2 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "2 Công ×3\nMỗi công pháp [Ngũ hành] khác nhau trong Trận Hình sẽ tăng thêm 2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 2,
              "baseDamage": 2,
              "hits": 3,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "2 Công ×3\nMỗi công pháp [Ngũ hành] khác nhau trong Trận Hình sẽ tăng thêm 2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 2,
              "baseDamage": 2,
              "hits": 3,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "2 Công ×3\nMỗi công pháp [Ngũ hành] khác nhau trong Trận Hình sẽ tăng thêm 2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 2,
              "baseDamage": 2,
              "hits": 3,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_173",
      "name": "Gương Truy Thời Dao Quang",
      "nameCn": "瑶光溯时镜",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "THAN_THONG",
      "phase": 6,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Súc linh] 9\n[Kích hoạt] toàn bộ [Ngũ hành]\nSao chép hiệu ứng của công pháp kế tiếp\n[Tiếp tục hành động] (Sẽ không bị ngăn cản bởi hiệu ứng khác)",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 9\n[Kích hoạt] toàn bộ [Ngũ hành]\nSao chép hiệu ứng của công pháp kế tiếp\n[Tiếp tục hành động] (Sẽ không bị ngăn cản bởi hiệu ứng khác)",
          "effects": [],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 9\n[Kích hoạt] toàn bộ [Ngũ hành]\nSao chép hiệu ứng của công pháp kế tiếp\n[Tiếp tục hành động] (Sẽ không bị ngăn cản bởi hiệu ứng khác)",
          "effects": [],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 9\n[Kích hoạt] toàn bộ [Ngũ hành]\nSao chép hiệu ứng của công pháp kế tiếp\n[Tiếp tục hành động] (Sẽ không bị ngăn cản bởi hiệu ứng khác)",
          "effects": [],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_173",
      "name": "Gương Truy Thời Dao Quang",
      "nameCn": "瑶光溯时镜",
      "school": "phap_tu",
      "schoolName": "Pháp Tu",
      "category": "THAN_THONG",
      "phase": 6,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Súc linh] 9\n[Kích hoạt] toàn bộ [Ngũ hành]\nSao chép hiệu ứng của công pháp kế tiếp\n[Tiếp tục hành động] (Sẽ không bị ngăn cản bởi hiệu ứng khác)",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 9\n[Kích hoạt] toàn bộ [Ngũ hành]\nSao chép hiệu ứng của công pháp kế tiếp\n[Tiếp tục hành động] (Sẽ không bị ngăn cản bởi hiệu ứng khác)",
          "effects": [],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 9\n[Kích hoạt] toàn bộ [Ngũ hành]\nSao chép hiệu ứng của công pháp kế tiếp\n[Tiếp tục hành động] (Sẽ không bị ngăn cản bởi hiệu ứng khác)",
          "effects": [],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Súc linh] 9\n[Kích hoạt] toàn bộ [Ngũ hành]\nSao chép hiệu ứng của công pháp kế tiếp\n[Tiếp tục hành động] (Sẽ không bị ngăn cản bởi hiệu ứng khác)",
          "effects": [],
          "isChase": true,
          "isContinuous": false,
          "isConsume": false
        }
      }
    }
  ],
  "the_tu": [
    {
      "id": "card_144",
      "name": "Băng Quyền • Đoạt Tinh",
      "nameCn": "崩拳•夺星",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "VO_KY",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "12 Công\nBản thân hồi phục 60% Sinh mệnh từ giá trị [Kích Thương] (Chiêu Băng Quyền tiếp theo cũng kèm theo hiệu quả này)",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "12 Công\nBản thân hồi phục 60% Sinh mệnh từ giá trị [Kích Thương] (Chiêu Băng Quyền tiếp theo cũng kèm theo hiệu quả này)",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 12,
              "baseDamage": 12,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "16 Công\nBản thân hồi phục 60% Sinh mệnh từ giá trị [Kích Thương] (Chiêu Băng Quyền tiếp theo cũng kèm theo hiệu quả này)",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 16,
              "baseDamage": 16,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "20 Công\nBản thân hồi phục 60% Sinh mệnh từ giá trị [Kích Thương] (Chiêu Băng Quyền tiếp theo cũng kèm theo hiệu quả này)",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 20,
              "baseDamage": 20,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_144",
      "name": "Băng Quyền • Đoạt Tinh",
      "nameCn": "崩拳•夺星",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "VO_KY",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "12 Công\nBản thân hồi phục 60% Sinh mệnh từ giá trị [Kích Thương] (Chiêu Băng Quyền tiếp theo cũng kèm theo hiệu quả này)",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "12 Công\nBản thân hồi phục 60% Sinh mệnh từ giá trị [Kích Thương] (Chiêu Băng Quyền tiếp theo cũng kèm theo hiệu quả này)",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 12,
              "baseDamage": 12,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "16 Công\nBản thân hồi phục 60% Sinh mệnh từ giá trị [Kích Thương] (Chiêu Băng Quyền tiếp theo cũng kèm theo hiệu quả này)",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 16,
              "baseDamage": 16,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "20 Công\nBản thân hồi phục 60% Sinh mệnh từ giá trị [Kích Thương] (Chiêu Băng Quyền tiếp theo cũng kèm theo hiệu quả này)",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 20,
              "baseDamage": 20,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_154",
      "name": "Tinh Thần Đoán Cốt Quyết",
      "nameCn": "星辰锻骨诀",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "THAN_PHAP",
      "phase": 3,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Thể phách] +3\n[Khí thế] +2 \nMỗi có 5 thể phách, lần tấn công tiếp theo tăng 1 Công (Tối đa 5 )",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Thể phách] +3\n[Khí thế] +2 \nMỗi có 5 thể phách, lần tấn công tiếp theo tăng 1 Công (Tối đa 5 )",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Thể phách] +4\n[Khí thế] +2 \nMỗi có 5 thể phách, lần tấn công tiếp theo tăng 1 Công (Tối đa 8 )",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Thể phách] +5\n[Khí thế] +2 \nMỗi có 5 thể phách, lần tấn công tiếp theo tăng 1 Công (Tối đa 11 )",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 5
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_154",
      "name": "Tinh Thần Đoán Cốt Quyết",
      "nameCn": "星辰锻骨诀",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "THAN_PHAP",
      "phase": 3,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Thể phách] +3\n[Khí thế] +2 \nMỗi có 5 thể phách, lần tấn công tiếp theo tăng 1 Công (Tối đa 5 )",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Thể phách] +3\n[Khí thế] +2 \nMỗi có 5 thể phách, lần tấn công tiếp theo tăng 1 Công (Tối đa 5 )",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Thể phách] +4\n[Khí thế] +2 \nMỗi có 5 thể phách, lần tấn công tiếp theo tăng 1 Công (Tối đa 8 )",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Thể phách] +5\n[Khí thế] +2 \nMỗi có 5 thể phách, lần tấn công tiếp theo tăng 1 Công (Tối đa 11 )",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 5
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_166",
      "name": "Huyền Minh Phá Cảnh Chưởng",
      "nameCn": "玄冥破境掌",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "4 Công ×2\nBản thân mỗi lần đã mất 30 Sinh mệnh sẽ tấn công thêm 1 lần",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công ×2\nBản thân mỗi lần đã mất 30 Sinh mệnh sẽ tấn công thêm 1 lần",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "5 Công ×2\nBản thân mỗi lần đã mất 27 Sinh mệnh sẽ tấn công thêm 1 lần",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 5,
              "baseDamage": 5,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "6 Công ×2\nBản thân mỗi lần đã mất 25 Sinh mệnh sẽ tấn công thêm 1 lần",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_166",
      "name": "Huyền Minh Phá Cảnh Chưởng",
      "nameCn": "玄冥破境掌",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "4 Công ×2\nBản thân mỗi lần đã mất 30 Sinh mệnh sẽ tấn công thêm 1 lần",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công ×2\nBản thân mỗi lần đã mất 30 Sinh mệnh sẽ tấn công thêm 1 lần",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "5 Công ×2\nBản thân mỗi lần đã mất 27 Sinh mệnh sẽ tấn công thêm 1 lần",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 5,
              "baseDamage": 5,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "6 Công ×2\nBản thân mỗi lần đã mất 25 Sinh mệnh sẽ tấn công thêm 1 lần",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_170",
      "name": "Huyền Chân Phá Vọng",
      "nameCn": "玄真破妄",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "10 Công\nTiêu hao toàn bộ [Khí thế]/[Linh khí]/[Thân pháp] của bản thân, mỗi điểm tăng thêm lần lượt 4 /3 /2 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "10 Công\nTiêu hao toàn bộ [Khí thế]/[Linh khí]/[Thân pháp] của bản thân, mỗi điểm tăng thêm lần lượt 4 /3 /2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "10 Công\nTiêu hao toàn bộ [Khí thế]/[Linh khí]/[Thân pháp] của bản thân, mỗi điểm tăng thêm lần lượt 4 /3 /2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "10 Công\nTiêu hao toàn bộ [Khí thế]/[Linh khí]/[Thân pháp] của bản thân, mỗi điểm tăng thêm lần lượt 4 /3 /2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_170",
      "name": "Huyền Chân Phá Vọng",
      "nameCn": "玄真破妄",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "10 Công\nTiêu hao toàn bộ [Khí thế]/[Linh khí]/[Thân pháp] của bản thân, mỗi điểm tăng thêm lần lượt 4 /3 /2 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "10 Công\nTiêu hao toàn bộ [Khí thế]/[Linh khí]/[Thân pháp] của bản thân, mỗi điểm tăng thêm lần lượt 4 /3 /2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "10 Công\nTiêu hao toàn bộ [Khí thế]/[Linh khí]/[Thân pháp] của bản thân, mỗi điểm tăng thêm lần lượt 4 /3 /2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "10 Công\nTiêu hao toàn bộ [Khí thế]/[Linh khí]/[Thân pháp] của bản thân, mỗi điểm tăng thêm lần lượt 4 /3 /2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_174",
      "name": "Liệt Khung Khai Thiên Phủ",
      "nameCn": "裂穹开天斧",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "VO_KY",
      "phase": 6,
      "costMana": 0,
      "gainMana": 0,
      "description": "30 Công\nKhiến đối thủ không thể thêm Sinh mệnh, tiếp tục 1 hiệp\n[Kích thương]: Lần sau Sinh mệnh đối thủ ≤0, gây 20 tổn thương Mệnh nguyên",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "30 Công\nKhiến đối thủ không thể thêm Sinh mệnh, tiếp tục 1 hiệp\n[Kích thương]: Lần sau Sinh mệnh đối thủ ≤0, gây 20 tổn thương Mệnh nguyên",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 30,
              "baseDamage": 30,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "30 Công\nKhiến đối thủ không thể thêm Sinh mệnh, tiếp tục 1 hiệp\n[Kích thương]: Lần sau Sinh mệnh đối thủ ≤0, gây 20 tổn thương Mệnh nguyên",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 30,
              "baseDamage": 30,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "30 Công\nKhiến đối thủ không thể thêm Sinh mệnh, tiếp tục 1 hiệp\n[Kích thương]: Lần sau Sinh mệnh đối thủ ≤0, gây 20 tổn thương Mệnh nguyên",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 30,
              "baseDamage": 30,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_174",
      "name": "Liệt Khung Khai Thiên Phủ",
      "nameCn": "裂穹开天斧",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "VO_KY",
      "phase": 6,
      "costMana": 0,
      "gainMana": 0,
      "description": "30 Công\nKhiến đối thủ không thể thêm Sinh mệnh, tiếp tục 1 hiệp\n[Kích thương]: Lần sau Sinh mệnh đối thủ ≤0, gây 20 tổn thương Mệnh nguyên",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "30 Công\nKhiến đối thủ không thể thêm Sinh mệnh, tiếp tục 1 hiệp\n[Kích thương]: Lần sau Sinh mệnh đối thủ ≤0, gây 20 tổn thương Mệnh nguyên",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 30,
              "baseDamage": 30,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "30 Công\nKhiến đối thủ không thể thêm Sinh mệnh, tiếp tục 1 hiệp\n[Kích thương]: Lần sau Sinh mệnh đối thủ ≤0, gây 20 tổn thương Mệnh nguyên",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 30,
              "baseDamage": 30,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "30 Công\nKhiến đối thủ không thể thêm Sinh mệnh, tiếp tục 1 hiệp\n[Kích thương]: Lần sau Sinh mệnh đối thủ ≤0, gây 20 tổn thương Mệnh nguyên",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 30,
              "baseDamage": 30,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_204",
      "name": "Đạp Hạc Phi Vân",
      "nameCn": "踏鹤飞云",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Linh khí] +1\n[Thân pháp] +10 \n2 lần tấn công kế tiếp [Không nhìn phòng ngự]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +1\n[Thân pháp] +10 \n2 lần tấn công kế tiếp [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +2\n[Thân pháp] +10 \n3 lần tấn công kế tiếp [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +3\n[Thân pháp] +10 \n4 lần tấn công kế tiếp [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        }
      }
    },
    {
      "id": "card_204",
      "name": "Đạp Hạc Phi Vân",
      "nameCn": "踏鹤飞云",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Linh khí] +1\n[Thân pháp] +10 \n2 lần tấn công kế tiếp [Không nhìn phòng ngự]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +1\n[Thân pháp] +10 \n2 lần tấn công kế tiếp [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 1
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +2\n[Thân pháp] +10 \n3 lần tấn công kế tiếp [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 2
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +3\n[Thân pháp] +10 \n4 lần tấn công kế tiếp [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        }
      }
    },
    {
      "id": "card_205",
      "name": "Linh Khí Đoán Thân",
      "nameCn": "灵气锻身",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Linh khí] +3\n[Thể phách] +3\nMỗi có 1 [Linh khí] thêm 1 [Thể phách] (Tối đa 10 )",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +3\n[Thể phách] +3\nMỗi có 1 [Linh khí] thêm 1 [Thể phách] (Tối đa 10 )",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            },
            {
              "type": "MOMENTUM",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +4\n[Thể phách] +4\nMỗi có 1 [Linh khí] thêm 1 [Thể phách] (Tối đa 15 )",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 4
            },
            {
              "type": "MOMENTUM",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +5\n[Thể phách] +5\nMỗi có 1 [Linh khí] thêm 1 [Thể phách] (Tối đa 20 )",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 5
            },
            {
              "type": "MOMENTUM",
              "amount": 5
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        }
      }
    },
    {
      "id": "card_205",
      "name": "Linh Khí Đoán Thân",
      "nameCn": "灵气锻身",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Linh khí] +3\n[Thể phách] +3\nMỗi có 1 [Linh khí] thêm 1 [Thể phách] (Tối đa 10 )",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Linh khí] +3\n[Thể phách] +3\nMỗi có 1 [Linh khí] thêm 1 [Thể phách] (Tối đa 10 )",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 3
            },
            {
              "type": "MOMENTUM",
              "amount": 3
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Linh khí] +4\n[Thể phách] +4\nMỗi có 1 [Linh khí] thêm 1 [Thể phách] (Tối đa 15 )",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 4
            },
            {
              "type": "MOMENTUM",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Linh khí] +5\n[Thể phách] +5\nMỗi có 1 [Linh khí] thêm 1 [Thể phách] (Tối đa 20 )",
          "effects": [
            {
              "type": "QI_GAIN",
              "amount": 5
            },
            {
              "type": "MOMENTUM",
              "amount": 5
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        }
      }
    },
    {
      "id": "card_207",
      "name": "Đoán Long Quyết",
      "nameCn": "锻龙诀",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Thể phách] +4\n[Thể phách tối đa] vĩnh viễn +3 \nNhận 2 tầng [Thêm công]\n[Tiêu hao]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Thể phách] +4\n[Thể phách tối đa] vĩnh viễn +3 \nNhận 2 tầng [Thêm công]\n[Tiêu hao]",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Thể phách] +6\n[Thể phách tối đa] vĩnh viễn +3 \nNhận 3 tầng [Thêm công]\n[Tiêu hao]",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 6
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Thể phách] +8\n[Thể phách tối đa] vĩnh viễn +3 \nNhận 4 tầng [Thêm công]\n[Tiêu hao]",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 8
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        }
      }
    },
    {
      "id": "card_207",
      "name": "Đoán Long Quyết",
      "nameCn": "锻龙诀",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Thể phách] +4\n[Thể phách tối đa] vĩnh viễn +3 \nNhận 2 tầng [Thêm công]\n[Tiêu hao]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Thể phách] +4\n[Thể phách tối đa] vĩnh viễn +3 \nNhận 2 tầng [Thêm công]\n[Tiêu hao]",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 4
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Thể phách] +6\n[Thể phách tối đa] vĩnh viễn +3 \nNhận 3 tầng [Thêm công]\n[Tiêu hao]",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 6
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Thể phách] +8\n[Thể phách tối đa] vĩnh viễn +3 \nNhận 4 tầng [Thêm công]\n[Tiêu hao]",
          "effects": [
            {
              "type": "MOMENTUM",
              "amount": 8
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": true
        }
      }
    },
    {
      "id": "card_208",
      "name": "Thế Linh Trận",
      "nameCn": "势灵阵",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Khí thế] tối đa +4 \n[Duy trì] 2 lần: Bắt đầu hiệp tăng 2 [Linh khí] và [Khí thế]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Khí thế] tối đa +4 \n[Duy trì] 2 lần: Bắt đầu hiệp tăng 2 [Linh khí] và [Khí thế]",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": true
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Khí thế] tối đa +4 \n[Duy trì] 3 lần: Bắt đầu hiệp tăng 2 [Linh khí] và [Khí thế]",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": true
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Khí thế] tối đa +4 \n[Duy trì] 4 lần: Bắt đầu hiệp tăng 2 [Linh khí] và [Khí thế]",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": true
        }
      }
    },
    {
      "id": "card_208",
      "name": "Thế Linh Trận",
      "nameCn": "势灵阵",
      "school": "the_tu",
      "schoolName": "Thể Tu",
      "category": "THAN_PHAP",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Khí thế] tối đa +4 \n[Duy trì] 2 lần: Bắt đầu hiệp tăng 2 [Linh khí] và [Khí thế]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Khí thế] tối đa +4 \n[Duy trì] 2 lần: Bắt đầu hiệp tăng 2 [Linh khí] và [Khí thế]",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": true
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Khí thế] tối đa +4 \n[Duy trì] 3 lần: Bắt đầu hiệp tăng 2 [Linh khí] và [Khí thế]",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": true
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Khí thế] tối đa +4 \n[Duy trì] 4 lần: Bắt đầu hiệp tăng 2 [Linh khí] và [Khí thế]",
          "effects": [],
          "isChase": false,
          "isContinuous": true,
          "isConsume": true
        }
      }
    }
  ],
  "trung_lap": [
    {
      "id": "card_0",
      "name": "Đánh Thường",
      "nameCn": "普通攻击",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "VO_KY",
      "phase": 1,
      "costMana": 0,
      "gainMana": 0,
      "description": "3 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "3 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 3,
              "baseDamage": 3,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "6 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "9 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_0",
      "name": "Đánh Thường",
      "nameCn": "普通攻击",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "VO_KY",
      "phase": 1,
      "costMana": 0,
      "gainMana": 0,
      "description": "3 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "3 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 3,
              "baseDamage": 3,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "6 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "9 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_2",
      "name": "Cuồng Kiếm•Viêm Vũ",
      "nameCn": "狂剑•炎舞",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "2 Công\n[Kích thương]: Thực hiện 1 tầng [Ngoại thương]\nNếu dùng qua “Cuồng Kiếm” thì [Tiếp tục hành động]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "2 Công\n[Kích thương]: Thực hiện 1 tầng [Ngoại thương]\nNếu dùng qua “Cuồng Kiếm” thì [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 2,
              "baseDamage": 2,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "2 Công\n[Kích thương]: Thực hiện 2 tầng [Ngoại thương]\nNếu dùng qua “Cuồng Kiếm” thì [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 2,
              "baseDamage": 2,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "2 Công\n[Kích thương]: Thực hiện 3 tầng [Ngoại thương]\nNếu dùng qua “Cuồng Kiếm” thì [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 2,
              "baseDamage": 2,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_2",
      "name": "Cuồng Kiếm•Viêm Vũ",
      "nameCn": "狂剑•炎舞",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "VO_KY",
      "phase": 5,
      "costMana": 0,
      "gainMana": 0,
      "description": "2 Công\n[Kích thương]: Thực hiện 1 tầng [Ngoại thương]\nNếu dùng qua “Cuồng Kiếm” thì [Tiếp tục hành động]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "2 Công\n[Kích thương]: Thực hiện 1 tầng [Ngoại thương]\nNếu dùng qua “Cuồng Kiếm” thì [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 2,
              "baseDamage": 2,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "2 Công\n[Kích thương]: Thực hiện 2 tầng [Ngoại thương]\nNếu dùng qua “Cuồng Kiếm” thì [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 2,
              "baseDamage": 2,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "2 Công\n[Kích thương]: Thực hiện 3 tầng [Ngoại thương]\nNếu dùng qua “Cuồng Kiếm” thì [Tiếp tục hành động]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 2,
              "baseDamage": 2,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_3",
      "name": "Vân Kiếm•Băng Tuyết",
      "nameCn": "云剑•崩雪",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "VO_KY",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "4 Công\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 4 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 4 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "4 Công\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 5 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "4 Công\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 6 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_3",
      "name": "Vân Kiếm•Băng Tuyết",
      "nameCn": "云剑•崩雪",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "VO_KY",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "4 Công\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 4 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 4 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "4 Công\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 5 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "4 Công\n[Liên Vân]: Mỗi lần liên tục sử dụng \"Vân Kiếm\" sẽ tăng thêm 6 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_4",
      "name": "Thất Tinh Đăng",
      "nameCn": "七星灯",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "THAN_PHAP",
      "phase": 3,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Luyện hóa]: [Mệnh nguyên] biến thành 50",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Luyện hóa]: [Mệnh nguyên] biến thành 50",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Luyện hóa]: [Mệnh nguyên] biến thành 50",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Luyện hóa]: [Mệnh nguyên] biến thành 50",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_4",
      "name": "Thất Tinh Đăng",
      "nameCn": "七星灯",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "THAN_PHAP",
      "phase": 3,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Luyện hóa]: [Mệnh nguyên] biến thành 50",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Luyện hóa]: [Mệnh nguyên] biến thành 50",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Luyện hóa]: [Mệnh nguyên] biến thành 50",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Luyện hóa]: [Mệnh nguyên] biến thành 50",
          "effects": [],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_5",
      "name": "Bắt Rùa Trong Hũ",
      "nameCn": "瓮中捉鳖",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "VO_KY",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "9 Công\nĐối phương mỗi có 1 tầng [Trạng thái xấu], công pháp này tăng thêm 2 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "9 Công\nĐối phương mỗi có 1 tầng [Trạng thái xấu], công pháp này tăng thêm 2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "9 Công\nĐối phương mỗi có 1 tầng [Trạng thái xấu], công pháp này tăng thêm 3 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "9 Công\nĐối phương mỗi có 1 tầng [Trạng thái xấu], công pháp này tăng thêm 4 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_5",
      "name": "Bắt Rùa Trong Hũ",
      "nameCn": "瓮中捉鳖",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "VO_KY",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "9 Công\nĐối phương mỗi có 1 tầng [Trạng thái xấu], công pháp này tăng thêm 2 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "9 Công\nĐối phương mỗi có 1 tầng [Trạng thái xấu], công pháp này tăng thêm 2 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "9 Công\nĐối phương mỗi có 1 tầng [Trạng thái xấu], công pháp này tăng thêm 3 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "9 Công\nĐối phương mỗi có 1 tầng [Trạng thái xấu], công pháp này tăng thêm 4 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 9,
              "baseDamage": 9,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_6",
      "name": "Đăng Diễm Phi Vũ",
      "nameCn": "灯焰飞舞",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "VO_KY",
      "phase": 3,
      "costMana": 0,
      "gainMana": 0,
      "description": "3 Công\nGây cho đối thủ 1 ~ 3 tầng [Nội thương]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "3 Công\nGây cho đối thủ 1 ~ 3 tầng [Nội thương]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 3,
              "baseDamage": 3,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "4 Công\nGây cho đối thủ 2 ~ 4 tầng [Nội thương]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "5 Công\nGây cho đối thủ 3 ~ 5 tầng [Nội thương]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 5,
              "baseDamage": 5,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_6",
      "name": "Đăng Diễm Phi Vũ",
      "nameCn": "灯焰飞舞",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "VO_KY",
      "phase": 3,
      "costMana": 0,
      "gainMana": 0,
      "description": "3 Công\nGây cho đối thủ 1 ~ 3 tầng [Nội thương]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "3 Công\nGây cho đối thủ 1 ~ 3 tầng [Nội thương]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 3,
              "baseDamage": 3,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "4 Công\nGây cho đối thủ 2 ~ 4 tầng [Nội thương]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "5 Công\nGây cho đối thủ 3 ~ 5 tầng [Nội thương]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 5,
              "baseDamage": 5,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_7",
      "name": "Toàn Đăng Chiêm Quái",
      "nameCn": "旋灯占卦",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Quái tượng] +4\nĐối phương Sinh mệnh giảm 2 \nLinh khí đối thủ giảm 1 ",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Quái tượng] +4\nĐối phương Sinh mệnh giảm 2 \nLinh khí đối thủ giảm 1 ",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 4
              }
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Quái tượng] +5\nĐối phương Sinh mệnh giảm 3 \nLinh khí đối thủ giảm 2 ",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 5
              }
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Quái tượng] +6\nĐối phương Sinh mệnh giảm 4 \nLinh khí đối thủ giảm 3 ",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 6
              }
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_7",
      "name": "Toàn Đăng Chiêm Quái",
      "nameCn": "旋灯占卦",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "THAN_PHAP",
      "phase": 4,
      "costMana": 0,
      "gainMana": 0,
      "description": "[Quái tượng] +4\nĐối phương Sinh mệnh giảm 2 \nLinh khí đối thủ giảm 1 ",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "[Quái tượng] +4\nĐối phương Sinh mệnh giảm 2 \nLinh khí đối thủ giảm 1 ",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 4
              }
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "[Quái tượng] +5\nĐối phương Sinh mệnh giảm 3 \nLinh khí đối thủ giảm 2 ",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 5
              }
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "[Quái tượng] +6\nĐối phương Sinh mệnh giảm 4 \nLinh khí đối thủ giảm 3 ",
          "effects": [
            {
              "type": "BUFF",
              "statusId": "gua_xiang",
              "params": {
                "stacks": 6
              }
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_8",
      "name": "Vân Kiếm•Miêu Trảo",
      "nameCn": "云剑•猫爪",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "VO_KY",
      "phase": 2,
      "costMana": 0,
      "gainMana": 0,
      "description": "4 Công ×2\nKhi thi triển công pháp này thì [Không nhìn phòng ngự]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công ×2\nKhi thi triển công pháp này thì [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "6 Công ×2\nKhi thi triển công pháp này thì [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "8 Công ×2\nKhi thi triển công pháp này thì [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 8,
              "baseDamage": 8,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_8",
      "name": "Vân Kiếm•Miêu Trảo",
      "nameCn": "云剑•猫爪",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "VO_KY",
      "phase": 2,
      "costMana": 0,
      "gainMana": 0,
      "description": "4 Công ×2\nKhi thi triển công pháp này thì [Không nhìn phòng ngự]",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "4 Công ×2\nKhi thi triển công pháp này thì [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 4,
              "baseDamage": 4,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "6 Công ×2\nKhi thi triển công pháp này thì [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 6,
              "baseDamage": 6,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "8 Công ×2\nKhi thi triển công pháp này thì [Không nhìn phòng ngự]",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 8,
              "baseDamage": 8,
              "hits": 2,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_10",
      "name": "Tinh Bạo Thuật",
      "nameCn": "星爆术",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "VO_KY",
      "phase": 3,
      "costMana": 0,
      "gainMana": 0,
      "description": "8 Công\nNếu có [Tinh lực], thì giảm 1 [Tinh lực] và công pháp này tăng thêm 8 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "8 Công\nNếu có [Tinh lực], thì giảm 1 [Tinh lực] và công pháp này tăng thêm 8 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 8,
              "baseDamage": 8,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "10 Công\nNếu có [Tinh lực], thì giảm 1 [Tinh lực] và công pháp này tăng thêm 10 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "12 Công\nNếu có [Tinh lực], thì giảm 1 [Tinh lực] và công pháp này tăng thêm 13 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 12,
              "baseDamage": 12,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    },
    {
      "id": "card_10",
      "name": "Tinh Bạo Thuật",
      "nameCn": "星爆术",
      "school": "trung_lap",
      "schoolName": "Trung Lập",
      "category": "VO_KY",
      "phase": 3,
      "costMana": 0,
      "gainMana": 0,
      "description": "8 Công\nNếu có [Tinh lực], thì giảm 1 [Tinh lực] và công pháp này tăng thêm 8 Công",
      "tiers": {
        "1": {
          "name": "Sơ Cấp",
          "costUpgrade": 100,
          "description": "8 Công\nNếu có [Tinh lực], thì giảm 1 [Tinh lực] và công pháp này tăng thêm 8 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 8,
              "baseDamage": 8,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "2": {
          "name": "Trung Cấp",
          "costUpgrade": 200,
          "description": "10 Công\nNếu có [Tinh lực], thì giảm 1 [Tinh lực] và công pháp này tăng thêm 10 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 10,
              "baseDamage": 10,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        },
        "3": {
          "name": "Cao Cấp",
          "costUpgrade": 0,
          "description": "12 Công\nNếu có [Tinh lực], thì giảm 1 [Tinh lực] và công pháp này tăng thêm 13 Công",
          "effects": [
            {
              "type": "DAMAGE",
              "damage": 12,
              "baseDamage": 12,
              "hits": 1,
              "isInternal": false
            }
          ],
          "isChase": false,
          "isContinuous": false,
          "isConsume": false
        }
      }
    }
  ]
},
  passives: [
  {
    "id": "tp_ngung_kiem",
    "name": "Ngưng Kiếm Tâm Pháp",
    "type": "TAM_PHAP",
    "school": "kiem_tu",
    "schoolName": "Kiếm Tu",
    "icon": "🗡️",
    "maxTier": 3,
    "tiers": {
      "1": {
        "name": "Sơ Nhập",
        "costUpgrade": 100,
        "statBonus": {
          "atk": 1
        },
        "description": "Tăng +1 Công Kích."
      },
      "2": {
        "name": "Tiểu Thành",
        "costUpgrade": 200,
        "statBonus": {
          "atk": 2
        },
        "description": "Tăng +2 Công Kích."
      },
      "3": {
        "name": "Đại Thành",
        "costUpgrade": 0,
        "statBonus": {
          "atk": 3
        },
        "description": "Tăng +3 Công Kích."
      }
    },
    "shopPrice": 50,
    "description": "Tâm pháp ngưng luyện kiếm khí của Kiếm Tu."
  },
  {
    "id": "tp_phach_dao",
    "name": "Phách Đao Tâm Pháp",
    "type": "TAM_PHAP",
    "school": "the_tu",
    "schoolName": "Thể Tu",
    "icon": "🪓",
    "maxTier": 3,
    "tiers": {
      "1": {
        "name": "Sơ Nhập",
        "costUpgrade": 100,
        "statBonus": {
          "atk": 1
        },
        "description": "Tăng +1 Công Kích."
      },
      "2": {
        "name": "Tiểu Thành",
        "costUpgrade": 200,
        "statBonus": {
          "atk": 2
        },
        "description": "Tăng +2 Công Kích."
      },
      "3": {
        "name": "Đại Thành",
        "costUpgrade": 0,
        "statBonus": {
          "atk": 3
        },
        "description": "Tăng +3 Công Kích."
      }
    },
    "shopPrice": 50,
    "description": "Tâm pháp bổ đao dũng mãnh."
  },
  {
    "id": "tp_linh_tuyen",
    "name": "Linh Tuyền Tâm Pháp",
    "type": "TAM_PHAP",
    "school": "phap_tu",
    "schoolName": "Pháp Tu",
    "icon": "💧",
    "maxTier": 3,
    "tiers": {
      "1": {
        "name": "Sơ Nhập",
        "costUpgrade": 100,
        "statBonus": {
          "startingMana": 1
        },
        "description": "Tăng +1 Linh Khí khởi đầu."
      },
      "2": {
        "name": "Tiểu Thành",
        "costUpgrade": 200,
        "statBonus": {
          "startingMana": 2
        },
        "description": "Tăng +2 Linh Khí khởi đầu."
      },
      "3": {
        "name": "Đại Thành",
        "costUpgrade": 0,
        "statBonus": {
          "startingMana": 3
        },
        "description": "Tăng +3 Linh Khí khởi đầu."
      }
    },
    "shopPrice": 50,
    "description": "Tâm pháp khai thông linh tuyền đan điền."
  },
  {
    "id": "tp_kiem_tam",
    "name": "Kiếm Tâm Thông Minh",
    "type": "TAM_PHAP",
    "school": "kiem_tu",
    "schoolName": "Kiếm Tu",
    "icon": "🗡️",
    "maxTier": 3,
    "tiers": {
      "1": {
        "name": "Sơ Nhập",
        "costUpgrade": 100,
        "statBonus": {
          "atk": 1,
          "startingSwordIntent": 1
        },
        "description": "Tăng +1 Công Kích và +1 Kiếm Ý khởi đầu trận."
      },
      "2": {
        "name": "Tiểu Thành",
        "costUpgrade": 200,
        "statBonus": {
          "atk": 2,
          "startingSwordIntent": 2
        },
        "description": "Tăng +2 Công Kích và +2 Kiếm Ý khởi đầu trận."
      },
      "3": {
        "name": "Đại Thành",
        "costUpgrade": 0,
        "statBonus": {
          "atk": 3,
          "startingSwordIntent": 3
        },
        "description": "Tăng +3 Công Kích và +3 Kiếm Ý khởi đầu trận."
      }
    },
    "shopPrice": 50,
    "description": "Tâm pháp nhập môn của Kiếm Tu, ngưng tụ kiếm tâm thuần khiết, giúp mỗi nhát kiếm sắc bén hơn."
  },
  {
    "id": "tp_that_tinh",
    "name": "Thất Tinh Quẻ Thuật",
    "type": "TAM_PHAP",
    "school": "tinh_tu",
    "schoolName": "Tinh Tu",
    "icon": "🔮",
    "maxTier": 3,
    "tiers": {
      "1": {
        "name": "Sơ Nhập",
        "costUpgrade": 100,
        "statBonus": {
          "maxMana": 1,
          "startingGua": 1
        },
        "description": "Tăng +1 Max Linh Khí và +1 Quẻ Tượng khởi đầu."
      },
      "2": {
        "name": "Tiểu Thành",
        "costUpgrade": 200,
        "statBonus": {
          "maxMana": 1,
          "startingGua": 2
        },
        "description": "Tăng +1 Max Linh Khí và +2 Quẻ Tượng khởi đầu."
      },
      "3": {
        "name": "Đại Thành",
        "costUpgrade": 0,
        "statBonus": {
          "maxMana": 2,
          "startingGua": 3
        },
        "description": "Tăng +2 Max Linh Khí và +3 Quẻ Tượng khởi đầu."
      }
    },
    "shopPrice": 50,
    "description": "Tâm pháp Thất Tinh Các giúp tâm trí hòa hợp cùng tinh tú, mở rộng linh hải và cảm ứng thiên tượng."
  },
  {
    "id": "tp_tat_phong",
    "name": "Tật Phong Tâm Pháp",
    "type": "TAM_PHAP",
    "school": "phap_tu",
    "schoolName": "Pháp Tu",
    "icon": "⚡",
    "maxTier": 3,
    "tiers": {
      "1": {
        "name": "Sơ Nhập",
        "costUpgrade": 100,
        "statBonus": {
          "spd": 1
        },
        "description": "Tăng +1 Thân Pháp (Tốc Độ)."
      },
      "2": {
        "name": "Tiểu Thành",
        "costUpgrade": 200,
        "statBonus": {
          "spd": 2
        },
        "description": "Tăng +2 Thân Pháp (Tốc Độ)."
      },
      "3": {
        "name": "Đại Thành",
        "costUpgrade": 0,
        "statBonus": {
          "spd": 3
        },
        "description": "Tăng +3 Thân Pháp (Tốc Độ)."
      }
    },
    "shopPrice": 50,
    "description": "Tâm pháp bộ pháp linh động, giúp cơ thể nhẹ nhàng lướt gió chiếm tiên cơ ra đòn trước."
  },
  {
    "id": "tp_kim_cang",
    "name": "Kim Cang Tâm Pháp",
    "type": "TAM_PHAP",
    "school": "the_tu",
    "schoolName": "Thể Tu",
    "icon": "🛡️",
    "maxTier": 3,
    "tiers": {
      "1": {
        "name": "Sơ Nhập",
        "costUpgrade": 100,
        "statBonus": {
          "def": 1,
          "startingGuard": 2
        },
        "description": "Tăng +1 Hộ Thể nền tảng và +2 Hộ Thể khởi đầu trận."
      },
      "2": {
        "name": "Tiểu Thành",
        "costUpgrade": 200,
        "statBonus": {
          "def": 2,
          "startingGuard": 4
        },
        "description": "Tăng +2 Hộ Thể nền tảng và +4 Hộ Thể khởi đầu trận."
      },
      "3": {
        "name": "Đại Thành",
        "costUpgrade": 0,
        "statBonus": {
          "def": 3,
          "startingGuard": 6
        },
        "description": "Tăng +3 Hộ Thể nền tảng và +6 Hộ Thể khởi đầu trận."
      }
    },
    "shopPrice": 50,
    "description": "Tâm pháp Thể Tu rèn luyện cơ nhục gân cốt như hoàng kim, gia tăng Hộ Thể chống đỡ đòn đánh."
  },
  {
    "id": "tp_quy_nguyen",
    "name": "Quy Nguyên Bí Điển",
    "type": "TAM_PHAP",
    "school": "kiem_tu",
    "schoolName": "Kiếm Tu",
    "icon": "🌀",
    "maxTier": 3,
    "tiers": {
      "1": {
        "name": "Sơ Nhập",
        "costUpgrade": 100,
        "statBonus": {
          "hp": 10
        },
        "description": "Tăng +10 Sinh Mệnh tối đa."
      },
      "2": {
        "name": "Tiểu Thành",
        "costUpgrade": 200,
        "statBonus": {
          "hp": 20
        },
        "description": "Tăng +20 Sinh Mệnh tối đa."
      },
      "3": {
        "name": "Đại Thành",
        "costUpgrade": 0,
        "statBonus": {
          "hp": 30
        },
        "description": "Tăng +30 Sinh Mệnh tối đa."
      }
    },
    "shopPrice": 50,
    "description": "Tâm pháp tu dưỡng đan điền, bồi bổ nguyên khí sinh mệnh."
  }
],
  buildGuides: [
  {
    "schoolId": "kiem_tu",
    "schoolName": "Kiếm Tu — Vân Linh Kiếm Tông",
    "icon": "⚔️",
    "color": "#38bdf8",
    "coreMechanics": [
      {
        "name": "Kiếm Ý",
        "desc": "Tích tụ tầng Kiếm Ý qua các chiêu thức tiền đề. Đòn chém kiếm tiếp theo sẽ tiêu hao toàn bộ Kiếm Ý để tăng thêm Sát Thương cực hạn."
      },
      {
        "name": "Liên Vân (Vân Kiếm)",
        "desc": "Khi xuất chiêu Vân Kiếm mà chiêu trước đó cũng là Vân Kiếm, lập tức kích hoạt hiệu ứng bổ sung: tăng số đòn chém, hồi máu, hoặc tái động."
      },
      {
        "name": "Cuồng Kiếm",
        "desc": "Sát phạt cuồng bạo, đánh đổi Hộ Thể hoặc Sinh Mệnh để tăng Sát Thương Bạo Kích và chém liên tiếp nhiều nhát."
      }
    ],
    "combos": [
      {
        "name": "Vân Kiếm Liên Hoàn (Bão Kiếm)",
        "description": "Xâu chuỗi 4-5 chiêu Vân Kiếm liên tục để kích hoạt toàn bộ chuỗi Liên Vân không đứt đoạn.",
        "slotSequence": [
          "Ô 1: Vân Kiếm•Tham Vân (Võ Kỹ - 0 Khí, khởi động)",
          "Ô 2: Vân Kiếm•Phi Thứ (Tuyệt Kỹ - 1 Khí, chém 2 nhát)",
          "Ô 3: Vân Kiếm•Du Long (Thân Pháp - tăng Thân Pháp + Hộ Thể)",
          "Ô 4: Vân Kiếm•Thiểm Quang (Tuyệt Kỹ - Liên Vân hồi 1 Khí)",
          "Ô 5: Vân Kiếm•Vô Cực (Thần Thông - Bão kiếm dồn sát thương)"
        ],
        "tip": "Bắt buộc không chèn các chiêu không phải Vân Kiếm vào giữa chuỗi để tránh ngắt nhịp Liên Vân!"
      },
      {
        "name": "Kiếm Ý Nhất Kích Tất Sát",
        "description": "Tích tụ tối đa điểm Kiếm Ý rồi bộc phát đại chiêu kết liễu đối thủ trong 1 đòn duy nhất.",
        "slotSequence": [
          "Ô 1: Kiếm Tinh (Tụ Khí + Tích 2 Kiếm Ý)",
          "Ô 2: Ngự Kiếm Thuật (Tích 3 Kiếm Ý + Hộ Thể)",
          "Ô 3: Khinh Kiếm (Duy trì Kiếm Ý, tăng Thân Pháp)",
          "Ô 4: Vạn Kiếm Quy Tông (Thần Thông - 3 Khí, bộc phát toàn bộ Kiếm Ý, x3 sát thương)"
        ],
        "tip": "Rất mạnh khi gặp đối thủ không có giáp cứng hoặc chưa kịp dựng Hộ Thể."
      }
    ],
    "sampleDeck": [
      {
        "name": "Vân Kiếm•Tham Vân",
        "cost": 0,
        "type": "VO_KY",
        "icon": "🗡️"
      },
      {
        "name": "Khinh Kiếm",
        "cost": 0,
        "type": "THAN_PHAP",
        "icon": "🍃"
      },
      {
        "name": "Vân Kiếm•Phi Thứ",
        "cost": 1,
        "type": "TUYET_KY",
        "icon": "⚔️"
      },
      {
        "name": "Hộ Thân Linh Khí",
        "cost": 0,
        "type": "THAN_PHAP",
        "icon": "🛡️"
      },
      {
        "name": "Vân Kiếm•Hậu Thổ",
        "cost": 1,
        "type": "TUYET_KY",
        "icon": "⚡"
      },
      {
        "name": "Linh Khí Quán Chú",
        "cost": 0,
        "type": "THAN_PHAP",
        "icon": "💠"
      },
      {
        "name": "Vạn Kiếm Quy Tông",
        "cost": 3,
        "type": "THAN_THONG",
        "icon": "🌟"
      },
      {
        "name": "Vân Kiếm•Du Long",
        "cost": 1,
        "type": "TUYET_KY",
        "icon": "🐉"
      }
    ]
  },
  {
    "schoolId": "tinh_tu",
    "schoolName": "Tinh Tu — Thất Tinh Các",
    "icon": "✨",
    "color": "#c084fc",
    "coreMechanics": [
      {
        "name": "Tinh Vị (Ô 3 & Ô 6)",
        "desc": "Chiêu thức có từ khóa [Tinh Vị] khi đặt đúng vào Ô số 3 hoặc Ô số 6 trong Trận Hình 8 ô sẽ kích hoạt gấp đôi uy lực: nhân đôi sát thương, nhân đôi hộ thể hoặc cướp thêm Linh Khí!"
      },
      {
        "name": "Quẻ Tượng Cát Hung",
        "desc": "Bấm quẻ Càn (Trời), Khôn (Đất), Chấn (Sấm), Tốn (Gió)... Tích lũy các quẻ tương hợp để kích hoạt đại thần thông chuyển hóa càn khôn."
      },
      {
        "name": "Nội Thương (Internal Injury)",
        "desc": "Sát thương bỏ qua hoàn toàn Hộ Thể của mục tiêu, trừ thẳng vào Sinh Mệnh gốc. Khắc tinh số 1 của Thể Tu giáp dày."
      }
    ],
    "combos": [
      {
        "name": "Bắc Đẩu Tinh Vị Bộc Phá (Ô 3 & 6)",
        "description": "Căn chỉnh hoàn hảo nhịp điệu Trận Hình để 2 đại chiêu Tinh Vị rơi đúng vào Ô 3 và Ô 6.",
        "slotSequence": [
          "Ô 1: Bói Quẻ Thiên Cơ (0 Khí, mở quẻ khởi đầu)",
          "Ô 2: Tinh Kỳ•Giáp (0 Khí, chuẩn bị Tinh Vị)",
          "Ô 3: ⭐ Tinh Vị•Đẩu Chuyển (Tuyệt Kỹ - Kích hoạt Tinh Vị Ô 3: x2 Sát Thương + Cướp 1 Khí)",
          "Ô 4: Tốn Quái (1 Khí, tăng Thân Pháp + quẻ Tốn)",
          "Ô 5: Khôn Quái (Thanh Tâm Khúc - hồi phục)",
          "Ô 6: ⭐ Bát Môn Kim Tỏa Trận (Thần Thông - Kích hoạt Tinh Vị Ô 6: Khóa chiêu đối thủ)"
        ],
        "tip": "Đây là quy tắc vàng của Thất Tinh Các: Đừng bao giờ đặt chiêu Tinh Vị ở các ô khác ngoài Ô 3 và Ô 6!"
      },
      {
        "name": "Cầm Sư Nội Thương Đoạt Mệnh",
        "description": "Dùng tiếng đàn du dương thẩm thấu tâm can, bỏ qua hoàn toàn Hộ Thể.",
        "slotSequence": [
          "Ô 1: Khôn Quái (Thanh Tâm Khúc - 0 Khí)",
          "Ô 2: U Lan Khúc (Nội Thương 6 điểm)",
          "Ô 3: Chấn Quái (1 Khí, rung chuyển tâm thần)",
          "Ô 4: Vấn Tình Khúc (2 Khí, bộc phát toàn bộ tầng Nội Thương thành sát thương hủy diệt)"
        ],
        "tip": "Khắc chế tuyệt đối người chơi dồn điểm vào Hộ Thể mà bỏ quên Sinh Mệnh."
      }
    ],
    "sampleDeck": [
      {
        "name": "Bói Quẻ Thiên Cơ",
        "cost": 0,
        "type": "VO_KY",
        "icon": "📜"
      },
      {
        "name": "Tinh Kỳ•Giáp",
        "cost": 0,
        "type": "THAN_PHAP",
        "icon": "🛡️"
      },
      {
        "name": "Tinh Vị•Đẩu Chuyển",
        "cost": 1,
        "type": "TUYET_KY",
        "icon": "⭐"
      },
      {
        "name": "Chấn Quái",
        "cost": 1,
        "type": "TUYET_KY",
        "icon": "⚡"
      },
      {
        "name": "Tốn Quái",
        "cost": 0,
        "type": "THAN_PHAP",
        "icon": "🍃"
      },
      {
        "name": "Bát Môn Kim Tỏa Trận",
        "cost": 3,
        "type": "THAN_THONG",
        "icon": "⭐"
      },
      {
        "name": "Khôn Quái",
        "cost": 0,
        "type": "THAN_PHAP",
        "icon": "🧘"
      },
      {
        "name": "Đoạt Khí Cổ Khúc",
        "cost": 1,
        "type": "TUYET_KY",
        "icon": "🎶"
      }
    ]
  },
  {
    "schoolId": "phap_tu",
    "schoolName": "Pháp Tu — Ngũ Hành Đạo Minh",
    "icon": "🌀",
    "color": "#10b981",
    "coreMechanics": [
      {
        "name": "Ngũ Hành Tương Sinh",
        "desc": "Chu kỳ ngũ hành: Kim ➔ Thủy ➔ Mộc ➔ Hỏa ➔ Thổ ➔ Kim. Khi xuất chiêu thuộc hệ kế tiếp sau hệ tương sinh, tu sĩ nhận ngay +1 Linh Khí và kích hoạt hiệu ứng tương sinh bí truyền."
      },
      {
        "name": "Phong Nhuệ (Sharpness)",
        "desc": "Tích tụ điểm Phong Nhuệ giúp đòn đánh hệ Kim bỏ qua giáp phép, gia tăng sát thương chí mạng."
      },
      {
        "name": "Vĩnh Cửu Tụ Khí",
        "desc": "Nhờ ngũ hành tương sinh sinh khí liên tục, Pháp Tu có thể duy trì chuỗi Tuyệt Kỹ và Thần Thông mà không cần thẻ nạp khí thông thường."
      }
    ],
    "combos": [
      {
        "name": "Ngũ Hành Đại Luân Hồi (Sinh Khí Vĩnh Cửu)",
        "description": "Bố trí 5 thẻ bài theo đúng trật tự tương sinh Kim - Thủy - Mộc - Hỏa - Thổ để kích hoạt hồi Linh Khí mỗi lượt.",
        "slotSequence": [
          "Ô 1: ⚔️ Kim Linh Liệt Trận (Hệ Kim - khởi động, nhận Phong Nhuệ)",
          "Ô 2: 💧 Thủy Linh•Xuân Vũ (Hệ Thủy - Kim sinh Thủy: Kích hoạt +1 Linh Khí & hồi Sinh Mệnh)",
          "Ô 3: 🌿 Mộc Linh•Nha (Hệ Mộc - Thủy sinh Mộc: Kích hoạt +1 Linh Khí & tăng Sinh Cơ)",
          "Ô 4: 🔥 Hỏa Linh Ấn (Hệ Hỏa - Mộc sinh Hỏa: Kích hoạt +1 Linh Khí & thiêu đốt diện rộng)",
          "Ô 5: ⛰️ Thổ Linh•Thạch Giáp (Hệ Thổ - Hỏa sinh Thổ: Kích hoạt +1 Linh Khí & dựng Hộ Thể cực đại)"
        ],
        "tip": "Trận hình này giúp xoay chuyển luân hồi tuần hoàn, mana luôn dồi dào để nuôi các đại thần thông ở Ô 6 và Ô 7!"
      }
    ],
    "sampleDeck": [
      {
        "name": "Kim Linh Liệt Trận",
        "cost": 0,
        "type": "VO_KY",
        "icon": "⚔️"
      },
      {
        "name": "Thủy Linh•Xuân Vũ",
        "cost": 1,
        "type": "TUYET_KY",
        "icon": "💧"
      },
      {
        "name": "Mộc Linh•Nha",
        "cost": 1,
        "type": "TUYET_KY",
        "icon": "🌿"
      },
      {
        "name": "Hỏa Linh Ấn",
        "cost": 1,
        "type": "TUYET_KY",
        "icon": "🔥"
      },
      {
        "name": "Thổ Linh•Thạch Giáp",
        "cost": 1,
        "type": "TUYET_KY",
        "icon": "⛰️"
      },
      {
        "name": "Mộc Linh Ấn",
        "cost": 0,
        "type": "VO_KY",
        "icon": "🍃"
      },
      {
        "name": "Ngũ Hành Thiên Hỗn Nguyên",
        "cost": 3,
        "type": "THAN_THONG",
        "icon": "🌟"
      },
      {
        "name": "Thủy Linh•Triều Tịch",
        "cost": 1,
        "type": "TUYET_KY",
        "icon": "🌊"
      }
    ]
  },
  {
    "schoolId": "the_tu",
    "schoolName": "Thể Tu — Đoán Huyền Tông",
    "icon": "🛡️",
    "color": "#fbbf24",
    "coreMechanics": [
      {
        "name": "Thể Phách & Cương Khí Hộ Thân",
        "desc": "Rèn đúc thân thể bất hoại. Hộ Thể tích lũy sẽ chuyển hóa thành Cương Khí, bộc phát thành lực xung kích khủng khiếp trong các đòn Bá Quyền."
      },
      {
        "name": "Băng Quyền & Bá Quyền",
        "desc": "Quyền kình phá sơn toái thạch. Uy lực tỷ lệ thuận trực tiếp với lượng Hộ Thể và Thể Phách hiện có của bản thân."
      },
      {
        "name": "Kích Tốc Cuồng Quyền",
        "desc": "Tận dụng Thân Pháp đạt 10 điểm để kích hoạt Kích Tốc tái hành động, tung liền 2 quyền sát thủ trong 1 hiệp đấu."
      }
    ],
    "combos": [
      {
        "name": "Cương Khí Hộ Thân ➔ Bá Vương Cử Đỉnh",
        "description": "Tích tụ Hộ Thể siêu cấp rồi chuyển hóa 100% khiên thành sát thương đập vỡ đối thủ.",
        "slotSequence": [
          "Ô 1: Đoán Quyết (Đoán Cốt Quyết - 0 Khí, tăng Thể Phách + Hộ Thể)",
          "Ô 2: Băng Thiên Bộ (0 Khí, tăng Thân Pháp & né tránh)",
          "Ô 3: Cương Khí Hộ Thân (Tuyệt Kỹ - Nhân đôi toàn bộ Hộ Thể)",
          "Ô 4: Bá Vương Cử Đỉnh (Thần Thông - Bộc phát toàn bộ Hộ Thể thành đòn chấn động trời đất)"
        ],
        "tip": "Càng bị đánh nhiều giáp càng dày, và đòn bộc phát ở Ô 4 sẽ càng khủng khiếp!"
      },
      {
        "name": "Băng Quyền Phá Thạch Kích Tốc",
        "description": "Dồn 10 Thân Pháp để kích hoạt Kích Tốc, xuất liền Phá Thạch và Tiệt Mạch trong cùng 1 hiệp.",
        "slotSequence": [
          "Ô 1: Băng Thiên Bộ (Tích đủ 10 Thân Pháp)",
          "-> KÍCH TỐC (Tiêu hao 10 Thân Pháp -> Tái xuất chiêu ngay!)",
          "Ô 2: Băng Quyền•Trạc (Phá Thạch - Đập tan Hộ Thể địch)",
          "Ô 3: Băng Quyền•Tiệt Mạch (Khóa kinh mạch không cho địch tụ khí)"
        ],
        "tip": "Làm gián đoạn toàn bộ nhịp điệu chiêu thức của đối thủ."
      }
    ],
    "sampleDeck": [
      {
        "name": "Đoán Quyết (Đoán Cốt Quyết)",
        "cost": 0,
        "type": "VO_KY",
        "icon": "🔱"
      },
      {
        "name": "Băng Thiên Bộ",
        "cost": 0,
        "type": "THAN_PHAP",
        "icon": "⚡"
      },
      {
        "name": "Băng Quyền•Trạc (Phá Thạch)",
        "cost": 1,
        "type": "TUYET_KY",
        "icon": "👊"
      },
      {
        "name": "Băng Quyền•Tiệt Mạch",
        "cost": 1,
        "type": "TUYET_KY",
        "icon": "❄️"
      },
      {
        "name": "Cương Thể Quyết",
        "cost": 0,
        "type": "THAN_PHAP",
        "icon": "🛡️"
      },
      {
        "name": "Bá Vương Cử Đỉnh",
        "cost": 3,
        "type": "THAN_THONG",
        "icon": "👑"
      },
      {
        "name": "Băng Quyền•Thốn Kình",
        "cost": 1,
        "type": "TUYET_KY",
        "icon": "💥"
      },
      {
        "name": "Huyền Thể Hộ Mệnh",
        "cost": 0,
        "type": "THAN_PHAP",
        "icon": "🧘"
      }
    ]
  }
]
};
