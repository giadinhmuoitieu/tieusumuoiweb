/* ==========================================================================
   UYÊN SƯ MUỘI - TIỂU MUỘI TRỢ THẦN DISCORD (SYNTHETIC CULTIVATION ENGINE JS)
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. Pháp Thuật Âm Thanh (Web Audio API Synthesizer)
// --------------------------------------------------------------------------
const AudioSynth = {
    ctx: null,

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    // Âm thanh tụ linh khí (Soft chime resonance)
    playGather() {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(1046.50, this.ctx.currentTime + 0.35); // C6

        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.4);
    },

    // Âm thanh lôi kiếp sấm sét dữ dội (Low rumble explosion + white noise)
    playThunder() {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        // 1. Tạo chớp tiếng nổ sấm sét lớn (Noise buffer)
        const bufferSize = this.ctx.sampleRate * 1.5;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        // Bộ lọc cho tiếng trầm nổ sấm
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(200, this.ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 1.2);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.4);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        noise.start();
        noise.stop(this.ctx.currentTime + 1.5);

        // 2. Tần số thấp rung chuyển đất trời
        const subOsc = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        subOsc.type = 'sawtooth';
        subOsc.frequency.setValueAtTime(90, this.ctx.currentTime);
        subOsc.frequency.linearRampToValueAtTime(20, this.ctx.currentTime + 1.0);

        subGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        subGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.0);

        subOsc.connect(subGain);
        subGain.connect(this.ctx.destination);

        subOsc.start();
        subOsc.stop(this.ctx.currentTime + 1.0);
    },

    // Âm thanh đột phá thành công (Glorious golden temple gong bell)
    playSuccessGong() {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const now = this.ctx.currentTime;
        const frequencies = [220, 275, 330, 440]; // Hợp âm hòa nhịp

        frequencies.forEach(freq => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now);

            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(now + 1.9);
        });
    },

    // Âm thanh thất bại đột phá (Discordant down-pitch sad fall)
    playFailureRise() {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(80, this.ctx.currentTime + 0.8);

        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.9);
    },

    // Âm thanh vòng quay đố vui đúng (High bell chime)
    playChime() {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, this.ctx.currentTime); // A5
        osc.frequency.setValueAtTime(1046.50, this.ctx.currentTime + 0.08); // C6

        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.35);
    },

    // Âm thanh tic-tac của vòng quay (Woodblock tick)
    playTick() {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.06);
    }
};

// --------------------------------------------------------------------------
// 2. Khởi Tạo Hạt Linh Khí Nền (Ambient Particles Engine)
// --------------------------------------------------------------------------
function initAmbientParticles() {
    const container = document.getElementById('ambient-particles');
    if (!container) return;

    const particleCount = 25;
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const dot = document.createElement('div');
    dot.className = 'ambient-dot';
    
    // Thuộc tính hạt ngẫu nhiên
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.animationDuration = `${8 + Math.random() * 10}s`;
    dot.style.animationDelay = `${Math.random() * -15}s`;
    
    container.appendChild(dot);
}

// --------------------------------------------------------------------------
// 3. Giả Lập Hệ Thống Tu Tiên (Cultivation Simulator)
// --------------------------------------------------------------------------
const CultivationSystem = {
    qiExp: 0,
    realmIndex: 0,
    spiritStones: 0,
    tribulations: 0,

    realms: [
        "Phàm Nhân",
        "Luyện Khí Kỳ",
        "Trúc Cơ Kỳ",
        "Kim Đan Kỳ",
        "Nguyên Anh Kỳ",
        "Hóa Thần Kỳ",
        "Luyện Hư Kỳ",
        "Hợp Thể Kỳ",
        "Đại Thừa Kỳ",
        "Độ Kiếp Thành Tiên"
    ],

    init() {
        this.btnGather = document.getElementById('btn-gather');
        this.btnBreakthrough = document.getElementById('btn-breakthrough');
        this.qiText = document.getElementById('char-qi-text');
        this.qiFill = document.getElementById('char-qi-fill');
        this.stonesText = document.getElementById('char-stones');
        this.tribulationsText = document.getElementById('char-tribulations');
        this.realmBadge = document.getElementById('char-realm');
        this.consoleLog = document.getElementById('console-log-text');
        this.overlay = document.getElementById('lightning-overlay');

        if (!this.btnGather) return;

        this.btnGather.addEventListener('click', (e) => this.gatherQi(e));
        this.btnBreakthrough.addEventListener('click', () => this.attemptBreakthrough());

        this.updateUI();
    },

    updateUI() {
        this.qiText.innerText = `${this.qiExp} / 100`;
        this.qiFill.style.width = `${this.qiExp}%`;
        this.stonesText.innerText = this.spiritStones.toLocaleString();
        this.tribulationsText.innerText = this.tribulations;
        this.realmBadge.innerText = this.realms[this.realmIndex];

        if (this.qiExp >= 100) {
            this.btnBreakthrough.classList.remove('disabled');
            this.btnBreakthrough.removeAttribute('disabled');
            this.btnGather.classList.add('disabled');
            this.btnGather.setAttribute('disabled', 'true');
        } else {
            this.btnBreakthrough.classList.add('disabled');
            this.btnBreakthrough.setAttribute('disabled', 'true');
            this.btnGather.classList.remove('disabled');
            this.btnGather.removeAttribute('disabled');
        }
    },

    // Thêm linh thạch bên ngoài (từ đố vui, vòng quay)
    addSpiritStones(amount, sourceElement) {
        this.spiritStones += amount;
        this.updateUI();
        if (sourceElement) {
            this.spawnFloatingStonesText(amount, sourceElement);
        }
    },

    // Giảm linh thạch
    deductSpiritStones(amount) {
        this.spiritStones = Math.max(0, this.spiritStones - amount);
        this.updateUI();
    },

    // Tụ linh khí
    gatherQi(e) {
        if (this.qiExp >= 100) return;

        AudioSynth.playGather();
        this.qiExp = Math.min(100, this.qiExp + 10);
        
        // Spawn hiệu ứng text bay lên
        this.spawnFloatingStonesText("+10 Linh Khí ✨", e.target);

        const logs = [
            "Đạo hữu xếp bằng tĩnh tọa, dẫn dắt 10 Linh Khí trời đất nhập đan điền.",
            "Linh khí bừng bừng xung quanh ngưng tụ, đạo hữu cảm thấy tu vi gia tăng.",
            "Chu thiên vận chuyển linh lực cực nhanh, kinh mạch giãn nở ngậm khí.",
            "Phát giác linh tuyền gần đó, đạo hữu lập tức luyện hóa nhận 10 Linh Khí."
        ];
        const randomLog = logs[Math.floor(Math.random() * logs.length)];
        this.consoleLog.innerText = randomLog;
        this.consoleLog.className = "console-log";

        this.updateUI();
    },

    // Hiệu ứng phao linh lực/linh thạch bay lên
    spawnFloatingStonesText(text, element) {
        const rect = element.getBoundingClientRect();
        const floatTag = document.createElement('span');
        floatTag.className = 'floating-qi-exp';
        floatTag.innerText = text;

        // Vị trí xuất phát ngẫu nhiên quanh nút bấm
        const x = rect.left + window.scrollX + (rect.width / 2) - 40 + (Math.random() * 40 - 20);
        const y = rect.top + window.scrollY - 15;

        floatTag.style.left = `${x}px`;
        floatTag.style.top = `${y}px`;

        document.body.appendChild(floatTag);
        setTimeout(() => floatTag.remove(), 1200);
    },

    // Đột phá cảnh giới (Thử thách Thiên Kiếp)
    attemptBreakthrough() {
        if (this.qiExp < 100) return;

        // 1. Chuyển đổi trạng thái chờ thiên kiếp
        this.btnBreakthrough.setAttribute('disabled', 'true');
        this.btnBreakthrough.classList.add('disabled');
        
        this.consoleLog.innerText = "⚡ THIÊN KIẾP GIÁNG LÂM! Đang triệu hồi Lôi Kiếp Thử Thách nguyên thần...";
        this.consoleLog.className = "console-log failure"; // Đổi màu tà mị chờ lôi kiếp

        // 2. Kích hoạt hiệu ứng sấm sét nhấp nháy màn hình và âm thanh dữ dội
        AudioSynth.playThunder();
        this.overlay.classList.add('lightning-flash');
        this.triggerSparks();

        setTimeout(() => {
            this.overlay.classList.remove('lightning-flash');
        }, 1200);

        // 3. Chờ 2 giây thiên kiếp giội xuống rồi tính kết quả
        setTimeout(() => {
            const chance = Math.random();
            const successRate = 0.75; // 75% cơ hội thành công cải mệnh

            if (chance <= successRate) {
                // ĐỘT PHÁ THÀNH CÔNG!
                AudioSynth.playSuccessGong();
                this.realmIndex = Math.min(this.realms.length - 1, this.realmIndex + 1);
                this.tribulations += 1;
                
                // Tặng thưởng Linh Thạch dựa trên cảnh giới vừa thăng cấp
                const reward = this.realmIndex * 150;
                this.spiritStones += reward;
                this.qiExp = 0;

                this.consoleLog.innerText = `🎉 ĐỘT PHÁ THÀNH CÔNG! Đạo hữu thuận lợi vượt qua chín tầng sấm sét, tẩy tủy hoán cốt thăng tiến lên cảnh giới [ ${this.realms[this.realmIndex]} ]! Nhận thưởng thêm ${reward} Linh Thạch.`;
                this.consoleLog.className = "console-log success";

                // Trigger pháo hoa/hạt phát sáng màu vàng kim tại profile avatar
                const avatar = document.querySelector('.profile-avatar');
                if (avatar) {
                    this.spawnFloatingStonesText(`Đột phá! ✨`, avatar);
                }

            } else {
                // ĐỘT PHÁ THẤT BẠI!
                AudioSynth.playFailureRise();
                // Bị tụt cấp tu vi linh khí còn 50%
                this.qiExp = 50;

                this.consoleLog.innerText = "❌ ĐỘT PHÁ THẤT BẠI! Thiên lôi hung bạo oanh tạc kinh mạch làm tổn hại đạo căn. Đạo tâm chấn động, linh khí bị tiêu hao hết 50%. Hãy kiên nhẫn tích lũy tu luyện lại!";
                this.consoleLog.className = "console-log failure";
            }

            this.updateUI();

        }, 2200);
    },

    // Hiệu ứng pháo sáng sét bắn ra ngẫu nhiên
    triggerSparks() {
        const container = document.getElementById('sparks-container');
        if (!container) return;

        const count = 35;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        for (let i = 0; i < count; i++) {
            const spark = document.createElement('div');
            spark.className = 'spark';

            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 200;

            const startX = centerX + (Math.random() * 80 - 40);
            const startY = centerY + (Math.random() * 80 - 40);
            const endX = startX + Math.cos(angle) * distance;
            const endY = startY + Math.sin(angle) * distance;

            spark.style.setProperty('--startX', `${startX}px`);
            spark.style.setProperty('--startY', `${startY}px`);
            spark.style.setProperty('--endX', `${endX}px`);
            spark.style.setProperty('--endY', `${endY}px`);

            container.appendChild(spark);
            setTimeout(() => spark.remove(), 800);
        }
    }
};

// --------------------------------------------------------------------------
// 4. Ma Sói 3D Mouse Parallax Tilt & Flips
// --------------------------------------------------------------------------
function initWerewolfCards() {
    const wrappers = document.querySelectorAll('.tilt-card-wrapper');
    
    wrappers.forEach(wrap => {
        const card = wrap.querySelector('.role-card');

        // Hiệu ứng nghiêng 3D theo con trỏ chuột
        wrap.addEventListener('mousemove', (e) => {
            if (card.classList.contains('flipped')) {
                // Đã lật thì nghiêng hướng ngược hoặc tắt
                card.style.transform = `rotateY(180deg)`;
                return;
            }

            const rect = wrap.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Tính góc nghiêng (-15 đến 15 độ)
            const rotateX = ((rect.height / 2) - y) / 10;
            const rotateY = -( ((rect.width / 2) - x) / 8 );

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });

        // Reset khi chuột rời khỏi thẻ
        wrap.addEventListener('mouseleave', () => {
            if (card.classList.contains('flipped')) {
                card.style.transform = `rotateY(180deg)`;
            } else {
                card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
            }
        });

        // Lật mặt bài khi click
        wrap.addEventListener('click', () => {
            AudioSynth.playGather();
            card.classList.toggle('flipped');
            if (card.classList.contains('flipped')) {
                card.style.transform = `rotateY(180deg)`;
            } else {
                card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1.03)`;
            }
        });
    });
}

// --------------------------------------------------------------------------
// 5. Đố Vui Linh Đài (Playable Scroll Quiz)
// --------------------------------------------------------------------------
const QuizSystem = {
    currentIndex: 0,
    canAnswer: true,
    timerInterval: null,
    
    questions: [
        {
            q: "Cảnh giới tu luyện nào xếp ngay sau Luyện Khí Kỳ của tu sĩ?",
            opts: ["A. Kim Đan Kỳ", "B. Nguyên Anh Kỳ", "C. Trúc Cơ Kỳ", "D. Hóa Thần Kỳ"],
            correct: 2, // C
            expReward: 100
        },
        {
            q: "Mỗi câu trả lời đúng của lệnh /dovui trong server Discord sẽ được tặng bao nhiêu Linh Thạch?",
            opts: ["A. 50 Linh Thạch", "B. 100 Linh Thạch", "C. 200 Linh Thạch", "D. 300 Linh Thạch"],
            correct: 1, // B
            expReward: 100
        },
        {
            q: "Nhân vật nào có quyền năng che chở một đạo hữu khỏi móng vuốt Ma Sói vào mỗi đêm?",
            opts: ["A. Linh Nhãn Sư (Tiên Tri)", "B. Kim Giáp Vệ (Bảo Vệ)", "C. U Minh Ma Lang", "D. Linh Thôn Nhân"],
            correct: 1, // B
            expReward: 100
        },
        {
            q: "Vật phẩm đan dược nào sau đây dùng để đạo hữu đột phá tụ anh ngưng thần?",
            opts: ["A. Tẩy Tủy Đan", "B. Nguyên Anh Đan", "C. Phá Chướng Đan", "D. Bích Ngọc Cao"],
            correct: 1, // B
            expReward: 100
        },
        {
            q: "Tính năng Hạc Giấy Confession trên website dùng để ký thác điều gì?",
            opts: ["A. Tặng Linh Thạch cho đệ tử", "B. Thả tâm sự ẩn danh trôi nổi", "C. Triệu hồi thiên kiếp oanh tạc", "D. Đi săn Werewolf ban đêm"],
            correct: 1, // B
            expReward: 100
        }
    ],

    init() {
        this.progress = document.getElementById('quiz-progress');
        this.qText = document.getElementById('quiz-question-text');
        this.optsContainer = document.getElementById('quiz-options-container');
        this.feedback = document.getElementById('quiz-feedback-text');
        this.timerFill = document.getElementById('timer-fill');

        if (!this.qText) return;

        this.loadQuestion();
    },

    loadQuestion() {
        this.canAnswer = true;
        this.feedback.innerText = "";
        this.feedback.className = "quiz-feedback";

        const qData = this.questions[this.currentIndex];
        this.progress.innerText = `CÂU HỎI ${this.currentIndex + 1} / ${this.questions.length}`;
        this.qText.innerText = qData.q;

        // Xóa các tùy chọn cũ và tải các tùy chọn mới
        this.optsContainer.innerHTML = "";
        qData.opts.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-opt';
            btn.innerText = opt;
            btn.addEventListener('click', () => this.checkAnswer(idx, btn));
            this.optsContainer.appendChild(btn);
        });

        // Khởi động đồng hồ đếm ngược (Animation mượt mà)
        this.timerFill.style.transition = 'none';
        this.timerFill.style.width = '100%';
        setTimeout(() => {
            this.timerFill.style.transition = 'width 10s linear';
            this.timerFill.style.width = '0%';
        }, 50);

        // Auto fail nếu hết 10 giây không chọn
        clearTimeout(this.timerInterval);
        this.timerInterval = setTimeout(() => {
            if (this.canAnswer) {
                this.checkAnswer(-1, null);
            }
        }, 10000);
    },

    checkAnswer(selectedIdx, btnElement) {
        if (!this.canAnswer) return;
        this.canAnswer = false;
        clearTimeout(this.timerInterval);

        const qData = this.questions[this.currentIndex];
        const options = this.optsContainer.querySelectorAll('.quiz-opt');

        if (selectedIdx === qData.correct) {
            // Đúng!
            AudioSynth.playChime();
            if (btnElement) btnElement.classList.add('correct');
            this.feedback.innerText = "🎉 Cực Kỳ Chính Xác! Đạo tâm của đạo hữu gia tăng sâu sắc.";
            this.feedback.classList.add('correct-txt');

            // Thưởng linh thạch tích lũy vào hệ thống tu tiên chính!
            CultivationSystem.addSpiritStones(qData.expReward, btnElement || this.qText);

        } else {
            // Sai hoặc hết giờ!
            AudioSynth.playFailureRise();
            if (btnElement) btnElement.classList.add('wrong');
            
            // Highlight đáp án đúng
            options[qData.correct].classList.add('correct');
            
            this.feedback.innerText = selectedIdx === -1 
                ? "⌛ Hết thời gian suy ngẫm! Cơ duyên đã trôi qua..." 
                : "❌ Sai lầm rồi! Đạo tâm chấn động nhẹ, hãy cố gắng tu dưỡng thêm.";
            this.feedback.classList.add('wrong-txt');
        }

        // Chuyển câu sau 3 giây
        setTimeout(() => {
            this.currentIndex = (this.currentIndex + 1) % this.questions.length;
            this.loadQuestion();
        }, 3000);
    }
};

// --------------------------------------------------------------------------
// 6. Vòng Quay Số Phận (Truth or Dare HTML5 Canvas Wheel)
// --------------------------------------------------------------------------
const WheelSystem = {
    canvas: null,
    ctx: null,
    btnSpin: null,
    resultTitle: null,
    resultDesc: null,

    startAngle: 0,
    spinAngleStart: 10,
    spinTime: 0,
    spinTimeTotal: 0,

    // Cấu hình các sector
    sectors: [
        { label: "Chân Ngôn", color: "#8b5cf6", type: "truth" }, // Violet
        { label: "Thử Thách", color: "#ec4899", type: "dare" },  // Pink
        { label: "Ngộ Đạo", color: "#ffd700", type: "luck" },    // Gold
        { label: "Phản Phệ", color: "#ef4444", type: "fail" },   // Red
        { label: "Vận May", color: "#00ffd2", type: "gems" },    // Cyan
        { label: "Thiên Cơ", color: "#3b82f6", type: "secret" }  // Blue
    ],

    // Mẫu sự kiện của Nói Hay Làm tu tiên
    prompts: {
        truth: [
            "Kể tên một vị sư huynh/sư tỷ trong tông môn (server) mà ngươi cảm thấy đáng tin cậy nhất và lý do.",
            "Ngươi từng dùng Linh Thạch hối lộ chưởng môn (admin) để tránh phạt bao giờ chưa?",
            "Nếu có thể kết giao đạo lữ với một người trong server, ngươi sẽ lựa chọn vị đạo hữu nào?",
            "Sự thật xấu hổ nhất trong đạo nghiệp tu tiên từ trước tới nay của ngươi là gì?"
        ],
        dare: [
            "Hãy lập tức đổi danh xưng biệt danh Discord thành 'Phế Vật Đạo Nhân' trong 24 giờ tới!",
            "Tuyên bố công khai trước đạo tràng (kênh chat chính): 'Ta nguyện làm nô tỳ gánh nước quét rác cho tông môn!'",
            "Mượn sư tỷ/sư huynh trong server 1000 Linh Thạch và hứa kiếp sau sẽ hoàn trả rực rỡ.",
            "Hãy hát một khúc Tiên ca (voice chat) hoặc gửi một bức linh họa (meme) hài hước nhất vào đạo tràng."
        ],
        luck: [
            "Chúc mừng đạo hữu! Đột nhiên ngộ đạo, tâm đắc thiên thư. Khí thế bừng bừng thăng hoa đan điền nhận ngay +300 Linh Thạch tích lũy!",
            "Gặp được cơ duyên thiên định tại Đan Dược Điện, nhặt được Đan Dược thượng phẩm trị giá +300 Linh Thạch!"
        ],
        fail: [
            "Bất hạnh gặp phải ma đầu tà đạo tập kích. Kinh mạch bị ma khí làm phản phệ nhẹ, khấu trừ -150 Linh Thạch tu luyện!",
            "Luyện đan thất bại làm nổ lò đan, tổn thất thuốc quý tương đương -150 Linh Thạch pháp thuật."
        ],
        gems: [
            "Cơ duyên tìm thấy một chiếc Túi Trữ Vật cổ xưa bị bỏ hoang, mở ra nhặt được di tích thượng cổ trị giá +200 Linh Thạch!",
            "Đóng góp pháp lực bảo vệ hộ tông trận thành công, môn phái ban thưởng nóng +200 Linh Thạch!"
        ],
        secret: [
            "Thiên cơ bất khả lộ! Luân hồi mệnh bàn xoay chuyển yên bình, không tổn hại cũng không gia tăng công đức.",
            "Nhìn trộm được mật thư của trưởng lão nhưng không dám hé răng. Đạo tâm giữ vững sự im lặng kỳ diệu."
        ]
    },

    init() {
        this.canvas = document.getElementById('destiny-wheel');
        this.btnSpin = document.getElementById('btn-spin');
        this.resultTitle = document.getElementById('result-title');
        this.resultDesc = document.getElementById('result-desc');

        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');

        this.btnSpin.addEventListener('click', () => this.spin());

        this.drawWheel();
    },

    drawWheel() {
        if (!this.ctx) return;
        const width = this.canvas.width;
        const height = this.canvas.height;
        const half = width / 2;
        const arc = Math.PI * 2 / this.sectors.length;

        this.ctx.clearRect(0, 0, width, height);

        // Vẽ các phần miếng bánh
        this.sectors.forEach((sec, idx) => {
            const angle = this.startAngle + idx * arc;
            this.ctx.fillStyle = sec.color;
            this.ctx.beginPath();
            this.ctx.moveTo(half, half);
            this.ctx.arc(half, half, half - 10, angle, angle + arc, false);
            this.ctx.lineTo(half, half);
            this.ctx.fill();

            // Vẽ viền miếng bánh sang trọng
            this.ctx.strokeStyle = '#0e0a1b';
            this.ctx.lineWidth = 3;
            this.ctx.stroke();

            // Viết chữ nhãn text
            this.ctx.save();
            this.ctx.fillStyle = '#07050d';
            this.ctx.font = 'bold 1.1rem "Philosopher", sans-serif';
            this.ctx.translate(half, half);
            this.ctx.rotate(angle + arc / 2);
            
            // Canh lề chữ ở trung tâm miếng bánh hướng ra viền ngoài
            this.ctx.textAlign = 'right';
            this.ctx.fillText(sec.label, half - 30, 8);
            this.ctx.restore();
        });

        // Vẽ vòng tròn viền vàng rực rỡ ngoài cùng
        this.ctx.strokeStyle = '#ffd700';
        this.ctx.lineWidth = 6;
        this.ctx.shadowBlur = 15;
        this.ctx.shadowColor = 'rgba(255, 215, 0, 0.4)';
        this.ctx.beginPath();
        this.ctx.arc(half, half, half - 10, 0, Math.PI * 2, false);
        this.ctx.stroke();

        // Reset shadow để không ảnh hưởng
        this.ctx.shadowBlur = 0;
    },

    spin() {
        if (this.spinTimeTotal > 0) return; // Đang quay thì cấm click tiếp

        AudioSynth.playChime();
        this.spinAngleStart = Math.random() * 10 + 10;
        this.spinTime = 0;
        this.spinTimeTotal = Math.random() * 3000 + 4000; // Quay từ 4-7 giây

        this.resultTitle.innerText = "🔮 Đang đoạt thiên cơ...";
        this.resultDesc.innerText = "Mệnh bàn xoay chuyển luân hồi liên tục. Vận mệnh của đạo hữu sắp sửa hé lộ...";

        this.rotateWheel();
    },

    rotateWheel() {
        this.spinTime += 30;
        if (this.spinTime >= this.spinTimeTotal) {
            this.stopRotate();
            return;
        }

        // Tính toán tốc độ giảm dần đều (Physics ease-out)
        const spinAngle = this.spinAngleStart - this.easeOut(this.spinTime, 0, this.spinAngleStart, this.spinTimeTotal);
        const lastAngle = this.startAngle;
        this.startAngle += (spinAngle * Math.PI / 180);
        
        // Phát âm thanh tách-tách khi quay qua các sector
        const arc = Math.PI * 2 / this.sectors.length;
        const lastSectorIdx = Math.floor(((lastAngle) % (Math.PI * 2)) / arc);
        const currentSectorIdx = Math.floor(((this.startAngle) % (Math.PI * 2)) / arc);
        if (lastSectorIdx !== currentSectorIdx) {
            AudioSynth.playTick();
        }

        this.drawWheel();
        requestAnimationFrame(() => this.rotateWheel());
    },

    stopRotate() {
        this.spinTimeTotal = 0; // Đặt lại để cho phép quay tiếp

        const half = this.canvas.width / 2;
        const arc = Math.PI * 2 / this.sectors.length;

        // Tính xem mũi tên chỉ vào sector nào (Mũi tên ở vị trí 270 độ / góc phía trên bánh xe)
        // Góc tương đối so với bánh xe là 3 * Math.PI / 2
        let degrees = (this.startAngle * 180 / Math.PI) + 90; // bù lại góc mũi tên nằm ở trên đỉnh bánh xe
        let arcd = arc * 180 / Math.PI;
        let index = Math.floor((360 - (degrees % 360)) / arcd);
        if (index < 0) index = (this.sectors.length + index) % this.sectors.length;
        index = index % this.sectors.length;

        const sec = this.sectors[index];
        this.displayResult(sec);
    },

    displayResult(sec) {
        AudioSynth.playSuccessGong();
        
        const list = this.prompts[sec.type];
        const rPrompt = list[Math.floor(Math.random() * list.length)];

        this.resultTitle.innerText = `✨ KẾT QUẢ: ${sec.label}`;
        this.resultDesc.innerText = rPrompt;

        // Tự động cộng/trừ linh thạch nếu quay vào ô Ngộ Đạo, Phản Phệ, Vận May
        if (sec.type === 'luck') {
            CultivationSystem.addSpiritStones(300, this.resultTitle);
        } else if (sec.type === 'gems') {
            CultivationSystem.addSpiritStones(200, this.resultTitle);
        } else if (sec.type === 'fail') {
            CultivationSystem.deductSpiritStones(150);
            this.spawnFloatingLossText("-150 💎", this.resultTitle);
        }
    },

    spawnFloatingLossText(text, element) {
        const rect = element.getBoundingClientRect();
        const floatTag = document.createElement('span');
        floatTag.className = 'floating-qi-exp';
        floatTag.style.color = '#ef4444';
        floatTag.style.textShadow = '0 0 10px rgba(239, 68, 68, 0.4)';
        floatTag.innerText = text;

        const x = rect.left + window.scrollX + (rect.width / 2) - 40;
        const y = rect.top + window.scrollY - 15;

        floatTag.style.left = `${x}px`;
        floatTag.style.top = `${y}px`;

        document.body.appendChild(floatTag);
        setTimeout(() => floatTag.remove(), 1200);
    },

    easeOut(t, b, c, d) {
        const ts = (t /= d) * t;
        const tc = ts * t;
        return b + c * (tc + -3 * ts + 3 * t);
    }
};

// --------------------------------------------------------------------------
// 7. Thiên Hạc Nguyện Ước (Confession Wish Tree & Flying Cranes)
// --------------------------------------------------------------------------
function initConfessionSystem() {
    const form = document.getElementById('confession-form');
    const input = document.getElementById('confession-input');
    const countSpan = document.getElementById('char-count');
    const board = document.getElementById('cranes-board');

    if (!form || !board) return;

    // Bộ đếm ký tự
    input.addEventListener('input', () => {
        const len = input.value.length;
        countSpan.innerText = `${len} / 200`;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        AudioSynth.playGather();

        // 1. Sinh hiệu ứng cánh hạc bay chéo màn hình từ vị trí nút bấm
        const btn = document.getElementById('btn-send-crane');
        triggerFlyingCrane(btn);

        // 2. Thêm tag confession mới vào bảng tâm sự sau 1 giây
        setTimeout(() => {
            const tag = document.createElement('div');
            tag.className = 'crane-tag';
            tag.innerHTML = `
                <span class="crane-icon">🕊️</span>
                <p>"${text}"</p>
            `;
            board.insertBefore(tag, board.firstChild);
            
            // Xóa hạc cũ nếu quá nhiều để tối ưu DOM
            if (board.children.length > 8) {
                board.lastChild.remove();
            }
        }, 1000);

        // Reset form
        input.value = "";
        countSpan.innerText = "0 / 200";
    });
}

function triggerFlyingCrane(btnElement) {
    const rect = btnElement.getBoundingClientRect();
    const crane = document.createElement('div');
    crane.className = 'flying-crane-sprite';
    crane.innerText = "🕊️";

    const startX = rect.left + window.scrollX;
    const startY = rect.top + window.scrollY;

    crane.style.setProperty('--startX', `${startX}px`);
    crane.style.setProperty('--startY', `${startY}px`);

    document.body.appendChild(crane);
    setTimeout(() => crane.remove(), 2500);
}

// --------------------------------------------------------------------------
// 8. Intersection Observer for Scroll Animations
// --------------------------------------------------------------------------
function initScrollObserver() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, options);

    const animElements = document.querySelectorAll('.animate-on-scroll');
    animElements.forEach(el => observer.observe(el));
}

// --------------------------------------------------------------------------
// 9. Điều Hướng Navbar & Tràn Trình Duyệt Mobile
// --------------------------------------------------------------------------
function initNavbarLogic() {
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.mobile-toggle');

    // Mở rộng mobile menu
    if (toggle) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('mobile-active');
            toggle.classList.toggle('active');
        });
    }

    // Đóng mobile menu khi click vào liên kết điều hướng
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('mobile-active');
            if (toggle) toggle.classList.remove('active');
        });
    });

    // Shrink navbar khi scroll qua 60px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.background = 'rgba(7, 5, 13, 0.95)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(14, 10, 27, 0.75)';
        }
    });
}

// --------------------------------------------------------------------------
// Khởi Chạy Toàn Diện Hệ Thống (DOMContentLoaded)
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    initScrollObserver();
    initNavbarLogic();
    initAmbientParticles();
    
    // Tự động bắt đầu âm thanh khi người dùng tương tác lần đầu
    document.body.addEventListener('click', () => {
        AudioSynth.init();
    }, { once: true });

    // Khởi chạy các phân khu cốt lõi
    CultivationSystem.init();
    initWerewolfCards();
    QuizSystem.init();
    WheelSystem.init();
    initConfessionSystem();
});