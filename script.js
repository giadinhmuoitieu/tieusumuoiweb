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
        "Luyện Khí",
        "Trúc Cơ",
        "Kim Đan",
        "Nguyên Anh",
        "Hóa Thần",
        "Luyện Hư",
        "Hợp Thể",
        "Đại Thừa",
        "Độ Kiếp"
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
        this.spawnFloatingStonesText("+10 tu vi ✨", e.target);

        const logs = [
            "Đạo hữu tĩnh tâm tu luyện, tu vi tăng thêm 10 điểm.",
            "Linh khí hội tụ quanh người. Thanh tu vi tăng thêm một đoạn.",
            "Một lượt tu luyện hoàn tất. Khi đủ 100 tu vi có thể thử đột phá.",
            "Tu vi tăng thêm 10 điểm. Tiếp tục tích lũy để mở cảnh giới mới."
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
        
        this.consoleLog.innerText = "⚡ Đang thử đột phá cảnh giới. Hệ thống sẽ kiểm tra kết quả trong giây lát...";
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
            const successRate = 0.75; // 75% cơ hội thành công

            if (chance <= successRate) {
                // ĐỘT PHÁ THÀNH CÔNG!
                AudioSynth.playSuccessGong();
                this.realmIndex = Math.min(this.realms.length - 1, this.realmIndex + 1);
                this.tribulations += 1;
                
                // Tặng thưởng Linh Thạch dựa trên cảnh giới vừa đạt
                const reward = this.realmIndex * 150;
                this.spiritStones += reward;
                this.qiExp = 0;

                this.consoleLog.innerText = `🎉 ĐỘT PHÁ THÀNH CÔNG! Đạo hữu đạt cảnh giới [ ${this.realms[this.realmIndex]} ] và nhận thêm ${reward} Linh Thạch.`;
                this.consoleLog.className = "console-log success";

                // Trigger pháo hoa/hạt phát sáng màu vàng kim tại profile avatar
                const avatar = document.querySelector('.profile-avatar');
                if (avatar) {
                    this.spawnFloatingStonesText(`Đột phá! ✨`, avatar);
                }

            } else {
                // ĐỘT PHÁ THẤT BẠI!
                AudioSynth.playFailureRise();
                // Nếu thất bại, giữ lại 50% tu vi
                this.qiExp = 50;

                this.consoleLog.innerText = "❌ ĐỘT PHÁ CHƯA THÀNH CÔNG. Đạo hữu vẫn giữ lại 50 tu vi, hãy tiếp tục tu luyện rồi thử lại.";
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
            q: "Tính năng /tutien trên Uyên Sư Muội dùng để làm gì?",
            opts: ["A. Tạo phòng voice", "B. Tích tu vi và đột phá", "C. Đổi tên server", "D. Xóa tin nhắn"],
            correct: 1, // B
            expReward: 100
        },
        {
            q: "Mỗi câu trả lời đúng trong /dovui sẽ nhận được phần thưởng gì?",
            opts: ["A. 50 Linh Thạch", "B. 100 Linh Thạch", "C. 200 Linh Thạch", "D. 300 Linh Thạch"],
            correct: 1, // B
            expReward: 100
        },
        {
            q: "Trong Ma Sói, vai nào có thể bảo vệ một người vào ban đêm?",
            opts: ["A. Tiên Tri", "B. Bảo Vệ", "C. Ma Sói", "D. Dân Làng"],
            correct: 1, // B
            expReward: 100
        },
        {
            q: "Nói Hay Làm phù hợp nhất với hoạt động nào trong server?",
            opts: ["A. Chơi chung trong chat hoặc voice", "B. Quản lý quyền admin", "C. Backup dữ liệu", "D. Tạo emoji"],
            correct: 0, // A
            expReward: 100
        },
        {
            q: "Tính năng Confession dùng để làm gì?",
            opts: ["A. Tặng Linh Thạch cho người khác", "B. Gửi lời nhắn ẩn danh", "C. Bắt đầu ván Ma Sói", "D. Quay Nói Hay Làm"],
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
            this.feedback.innerText = "🎉 Chính xác! Bạn nhận thêm Linh Thạch.";
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
                ? "⌛ Hết thời gian trả lời. Chuyển sang câu tiếp theo nhé." 
                : "❌ Chưa đúng rồi. Đáp án đúng đã được đánh dấu.";
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
        { label: "Nói thật", color: "#7c6fd8", type: "truth" },
        { label: "Làm thử", color: "#c86b93", type: "dare" },
        { label: "Bonus", color: "#e2b75a", type: "luck" },
        { label: "Trừ thưởng", color: "#cf5f5f", type: "fail" },
        { label: "May mắn", color: "#34d6bd", type: "gems" },
        { label: "Bí mật", color: "#5b8ed7", type: "secret" }
    ],

    // Mẫu sự kiện của Nói Hay Làm tu tiên
    prompts: {
        truth: [
            "Kể tên một người trong server mà bạn thấy đáng tin cậy nhất và lý do.",
            "Bạn từng lỡ nói hoặc gửi nhầm thứ gì trong server chưa?",
            "Nếu được chọn một người để lập team chơi game cùng, bạn sẽ chọn ai?",
            "Một chuyện xấu hổ nhưng vui mà bạn từng gặp trong Discord là gì?"
        ],
        dare: [
            "Đổi nickname Discord thành một biệt danh vui trong 24 giờ.",
            "Gửi một câu chào thật tự tin vào kênh chat chính.",
            "Tag một người bạn trong server và gửi cho họ một lời khen thật lòng.",
            "Hát một đoạn ngắn trong voice hoặc gửi một meme bạn thấy hài nhất."
        ],
        luck: [
            "Chúc mừng! Bạn nhận ngay +300 Linh Thạch.",
            "May mắn ghé thăm. Tài khoản nhận thêm +300 Linh Thạch."
        ],
        fail: [
            "Không may rồi, bạn bị trừ -150 Linh Thạch.",
            "Vòng quay hơi khó tính hôm nay. Mất -150 Linh Thạch."
        ],
        gems: [
            "Bạn nhận thêm +200 Linh Thạch vì quay trúng ô may mắn.",
            "Một phần thưởng nhỏ được cộng vào tài khoản: +200 Linh Thạch."
        ],
        secret: [
            "Ô bí mật không cộng cũng không trừ. Bạn thoát một lượt an toàn.",
            "Không có gì xảy ra, nhưng ít nhất bạn không mất Linh Thạch."
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

        this.resultTitle.innerText = "🔮 Đang quay...";
        this.resultDesc.innerText = "Vòng quay đang chọn kết quả. Chờ một chút nhé.";

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

        this.resultTitle.innerText = `✨ Kết quả: ${sec.label}`;
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
// 10. Khởi Tạo Nền Động Spine 2D (PC & Mobile)
// --------------------------------------------------------------------------
let spinePlayerBg = null;
let currentSpineMode = null;

function initSpineBackground() {
    const container = document.getElementById('spine-hero-bg');
    if (!container) return;

    const mode = window.innerWidth < 768 ? 'mb' : 'pc';
    if (currentSpineMode === mode) return;

    currentSpineMode = mode;

    if (spinePlayerBg) {
        try {
            spinePlayerBg.dispose();
        } catch (e) {
            console.error("Lỗi khi giải phóng Spine player cũ:", e);
        }
        container.innerHTML = '';
    }

    const skelPath = `spine_assets/spine/${mode}/dengluye.skel`;
    const atlasPath = `spine_assets/spine/${mode}/dengluye.atlas`;

    // Thiết lập kích thước và vùng hiển thị (viewport) giống trang game gốc
    const width = mode === 'pc' ? 1800 : 1242;
    const height = mode === 'pc' ? 750 : 2668;
    const padTop = mode === 'pc' ? "-15%" : "-10vw";

    try {
        spinePlayerBg = new spine.SpinePlayer(container, {
            skelUrl: skelPath,
            atlasUrl: atlasPath,
            animation: "stand",
            premultipliedAlpha: true,
            showControls: false,
            alpha: true,
            backgroundColor: "#00000000",
            width: "100%",
            height: "100%",
            viewport: {
                x: -width / 2,
                y: -height / 2,
                width: width,
                height: height,
                padLeft: "0%",
                padRight: "0%",
                padTop: padTop,
                padBottom: "0%"
            },
            success: function(p) {
                console.log(`Spine Background (${mode}) loaded successfully.`);
            },
            error: function(p, err) {
                console.error("Lỗi tải nền động Spine:", err);
            }
        });
    } catch (err) {
        console.error("Lỗi khởi tạo Spine player cho nền:", err);
    }
}

// --------------------------------------------------------------------------
// Khởi Chạy Toàn Diện Hệ Thống (DOMContentLoaded)
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    initScrollObserver();
    initNavbarLogic();
    initAmbientParticles();
    initSpineBackground();
    
    // Lắng nghe thay đổi kích thước màn hình để chuyển đổi PC/Mobile
    window.addEventListener('resize', () => {
        const newMode = window.innerWidth < 768 ? 'mb' : 'pc';
        if (newMode !== currentSpineMode) {
            initSpineBackground();
        }
    });
    
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
