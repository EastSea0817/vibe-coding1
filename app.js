/**
 * 자정의 시험기간 | Midnight Exam
 */

const stories = {
    // --- STAGE: THE DORMITORY ---
    'dorm_start': {
        id: 'dorm_start',
        location: "기숙사 복도",
        text: "자정의 대학교 기숙사. 복도는 침묵이 흐르고, 스탠드 불빛만이 책상을 비춥니다. 내일 있을 전공 시험 때문에 잠도 이루지 못하던 그때, 방문 밖에서 희미한 소리가 들립니다. '똑... 똑...'",
        image: 'assets/knock_start.png',
        choices: [
            { text: "누구인지 확인하러 문으로 다가간다", next: 'dorm_check' },
            { text: "잘못 들었겠거니 하고 공부에 집중한다", next: 'dorm_ignore' }
        ]
    },
    'dorm_check': {
        id: 'dorm_check',
        location: "문 앞",
        text: "외시경으로 밖을 내다봅니다. 복도의 자동등은 꺼져 있지만, 문 바로 앞에 누군가 서 있는 실루엣이 보입니다. 그런데 그 사람, 머리 방향이 거꾸로 꺾인 채 당신을 빤히 바라보고 있습니다.",
        image: 'assets/knock_check.png',
        choices: [
            { text: "비명을 지르며 창문 밖 사다리로 뛰어내린다", next: 'lib_arrival' },
            { text: "문을 벌컥 열어젖힌다", next: 'dorm_death_confront' }
        ]
    },
    'dorm_death_confront': {
        id: 'dorm_death_confront',
        location: "기숙사",
        text: "문을 열자 복도는 텅 비어 있습니다. 안도하는 순간, 발밑에서 무언가 기어 나오는 소리가 들립니다. 신발장 아래에서 창백한 손들이 뻗어 나와 당신의 발목을 낚아챕니다.",
        image: 'assets/knock_confront.png',
        title: "데드 엔딩: 신발 밑의 진실",
        isEnding: true
    },
    'dorm_ignore': {
        id: 'dorm_ignore',
        location: "기숙사 방",
        text: "노크 소리를 무시하려 했지만 소리는 점점 더 커지고 빨라집니다. '똑똑똑똑똑똑!' 이젠 문이 부서질 듯 덜컹거리고, 문틈 사이로 핏빛 액체가 흘러들어오기 시작합니다.",
        image: 'assets/knock_ignore.png',
        choices: [
            { text: "책상을 밀어 방문을 막는다", next: 'dorm_death_trapped' },
            { text: "창문을 깨고 밖으로 뛰어내린다", next: 'lib_arrival' }
        ]
    },
    'dorm_death_trapped': {
        id: 'dorm_death_trapped',
        location: "기숙사",
        text: "책상을 밀어 문을 막았지만 소용없었습니다. 그 형체는 벽을 통과해 당신의 눈앞에 나타납니다. 당신의 비명은 기숙사의 두꺼운 벽 속에 묻혔습니다.",
        image: 'assets/knock_trapped.png',
        title: "데드 엔딩: 무의미한 방어",
        isEnding: true
    },

    // --- STAGE: THE LIBRARY ENTRANCE ---
    'lib_arrival': {
        id: 'lib_arrival',
        location: "도서관 입구",
        text: "기숙사를 탈출해 불이 켜진 대학 도서관으로 달려옵니다. 하지만 도서관 안은 평소보다 훨씬 고요하고 차갑습니다. 복도 끝 엘리베이터가 작동 중입니다.",
        image: 'assets/library.png',
        choices: [
            { text: "엘리베이터에 탑승하여 4층 열람실로 간다", next: 'lib_elevator' },
            { text: "계단을 통해 천천히 올라간다", next: 'lib_death_stairs' }
        ]
    },
    'lib_death_stairs': {
        id: 'lib_death_stairs',
        location: "도서관 계단",
        text: "계단을 오르는 등 뒤에서 누군가 당신을 지켜보고 있습니다. 한 걸음 내디딜 때마다 차가운 숨결이 목덜미에 닿습니다. 결국 당신은 계단 끝에서 거꾸로 매달린 그것과 마주합니다.",
        image: 'assets/lib_death_stairs.png',
        title: "데드 엔딩: 계단 위의 추격자",
        isEnding: true
    },
    'lib_elevator': {
        id: 'lib_elevator',
        location: "엘리베이터 안",
        text: "엘리베이터 거울에 당신의 모습이 비칩니다. 그런데 당신의 뒤편 천장에 누군가 매달려 있습니다! 문이 닫히려는 순간, 그 형체가 당신의 머리 위로 떨어지려 합니다.",
        image: 'assets/elevator_mirror.png',
        isPortrait: true,
        choices: [
            { text: "문이 닫히기 직전 밖으로 몸을 날린다!", next: 'lib_stacks', qte: 5500 },
            { text: "비상 벨을 미친 듯이 누른다", next: 'lib_death_elevator' }
        ]
    },
    'lib_death_elevator': {
        id: 'lib_death_elevator',
        location: "엘리베이터",
        text: "비상 벨을 눌렀지만 엘리베이터는 멈춘 채 문이 열리지 않습니다. 천장에서 들리는 긁는 소리가 점점 가까워지더니 어둠이 당신을 덮칩니다.",
        image: 'assets/lib_death_elevator.png',
        title: "데드 엔딩: 멈춘 엘리베이터",
        isEnding: true
    },

    // --- STAGE: THE SILENT STACKS ---
    'lib_stacks': {
        id: 'lib_stacks',
        location: "도서관 서가",
        text: "엘리베이터에서 튀어나와 책창 구역으로 숨어듭니다. 하지만 책장 사이에서 한 여학생이 피 묻은 시험지를 씹어 먹으며 당신을 굽어보고 있습니다. '내 답안지... 너지?'",
        image: 'assets/lib_ghost.png',
        choices: [
            { text: "강하게 부정하며 옆 책장으로 도망친다", next: 'lib_death_run' },
            { text: "품속에 있던 여분의 답안지를 건네준다", next: 'lib_archive' }
        ]
    },
    'lib_death_run': {
        id: 'lib_death_run',
        location: "도서관",
        text: "도망치려 했지만 도서관의 책장들이 미로처럼 변해 당신의 앞길을 막습니다. 거대한 입을 벌린 그녀가 당신의 등 뒤까지 따라왔습니다.",
        image: 'assets/lib_death_run.png',
        title: "데드 엔딩: 불타는 질투",
        isEnding: true
    },

    // --- STAGE: THE ARCHIVE ---
    'lib_archive': {
        id: 'lib_archive',
        location: "기록 보관소",
        text: "답안지를 받은 그녀가 기괴하게 웃으며 사라집니다. 이제 기록 보관소에 도착했습니다. 이곳을 통과하려면 조용히 잠든 사서의 눈을 피해 올바른 수건을 가져와야 합니다.",
        image: 'assets/lib_archive.png',
        choices: [
            { text: "파란색 수건을 조용히 챙겨서 나간다", next: 'sleep_start' },
            { text: "옆에 있던 빨간색 수건을 챙긴다", next: 'lib_death_archive' }
        ]
    },
    'lib_death_archive': {
        id: 'lib_death_archive',
        location: "비평의 벽",
        text: "빨간 수건은 피로 적셔진 함정이었습니다. 수건을 잡는 순간 당신의 손이 녹아내리기 시작합니다. 당신의 비명은 기록될 수 없는 기록이 되었습니다.",
        image: 'assets/lib_death_archive.png',
        title: "데드 엔딩: 피로 쓴 기록",
        isEnding: true
    },

    // --- STAGE: EXHAUSTION ---
    'sleep_start': {
        id: 'sleep_start',
        location: "열람실 책상",
        text: "어느덧 새벽. 극도의 긴장감이 풀리며 도서관 책상 위로 고개가 떨어집니다. '딱 5분만 눈을 붙이면 괜찮아질 거야...' 하지만 그것은 돌아올 수 없는 꿈의 시작이었습니다.",
        image: 'assets/sleep_start.png',
        choices: [
            { text: "무거운 눈꺼풀을 이기지 못하고 눈을 감는다", next: 'nightmare_start' }
        ]
    },

    // --- STAGE: THE NIGHTMARE ---
    'nightmare_start': {
        id: 'nightmare_start',
        location: "꿈의 심연",
        text: "눈을 떴지만 몸이 움직이지 않습니다. 전형적인 가위눌림입니다. 천장 구석에서 검은 형체가 천천히 당신의 배 위로 내려오는 것이 보입니다. 당신의 귓가에선 누군가 당신의 시험 점수를 세기 시작합니다.",
        image: 'assets/nightmare_start.jpg',
        choices: [
            { text: "필사적으로 새끼손가락을 움직여 깨어나려 한다", next: 'nightmare_struggle' },
            { text: "눈을 질끈 감고 형체가 지나가길 기다린다", next: 'nightmare_death_wait' }
        ]
    },
    'nightmare_death_wait': {
        id: 'nightmare_death_wait',
        location: "심연",
        text: "숫자를 세는 목소리가 점점 커지더니 당신의 목소리와 똑같아집니다. '...구십... 구십일...' 그리고 당신 앞에 당신과 똑같이 생긴 존재가 미소 짓고 있습니다.",
        image: 'assets/double.png',
        title: "배드 엔딩: 빼앗긴 육체",
        isEnding: true
    },
    'nightmare_struggle': {
        id: 'nightmare_struggle',
        location: "사투",
        text: "'뿌드득' 소리와 함께 몸이 움직이기 시작합니다. 하지만 안심한 순간, 형체가 당신의 목을 낚아챕니다! 이 꿈을 끝내려면 정면 돌파밖에 없습니다.",
        image: 'assets/nightmare_choke.jpg',
        choices: [
            { text: "당신의 목을 조르는 형체의 눈을 똑바로 쳐다본다!", next: 'nightmare_final', qte: 5700 },
            { text: "형체의 팔을 뿌리치려 발버둥 친다", next: 'nightmare_death_choke' }
        ]
    },
    'nightmare_death_choke': {
        id: 'nightmare_death_choke',
        location: "심연",
        text: "발버둥 칠수록 손아귀는 더 단단히 목을 죕니다. 당신의 의식은 무너지는 성적표처럼 산산조각 났습니다.",
        image: 'assets/nightmare_death_choke.png',
        title: "데드 엔딩: 소리 없는 아우성",
        isEnding: true
    },

    // --- STAGE: FINAL BATTLE ---
    'nightmare_final': {
        id: 'nightmare_final',
        location: "현실의 경계",
        text: "정신력이 공포를 이겼습니다. 형체가 비명을 지르며 흩어집니다. 하지만 마지막 문턱, 거울 속에 비친 당신의 반영이 깨진 유리창을 들고 당신을 덮쳐옵니다!",
        image: 'assets/nightmare_final.png',
        choices: [
            { text: "날아오는 깨진 유리를 낚아채 정면으로 돌진한다!", next: 'escape_ending', qte: 5700 },
            { text: "공포에 질려 뒤로 물러난다", next: 'nightmare_death_final' }
        ]
    },
    'nightmare_death_final': {
        id: 'nightmare_death_final',
        location: "심연",
        text: "깨진 유리는 당신의 심장을 관통했습니다. 당신의 성적표에는 오직 붉은 피 자국만이 기록되었습니다.",
        image: 'assets/nightmare_death_final.png',
        title: "데드 엔딩: 반사된 진실",
        isEnding: true
    },

    // --- STAGE: THE ENDING ---
    'escape_ending': {
        id: 'escape_ending',
        location: "아침의 고사장",
        text: "눈부신 햇살이 쏟아집니다. 기숙사도, 도서관도 아닌 평범한 고사장 앞에 당신은 서 있습니다. 밤새 겪은 일은 정말 꿈이었을까요? 하지만 당신의 주머니엔 파란색 수건과 그날의 답안지가 남아 있습니다.",
        image: 'assets/escape_ending.png',
        title: "트루 엔딩: 자정의 생존자",
        isEnding: true
    }
};

let currentStory = null;
let isAudioOn = false;
let qteTimer = null;
let typewriterInterval = null;
let historyStack = [];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const selectScreen = document.getElementById('select-screen');
const warningScreen = document.getElementById('warning-screen');
const storyScreen = document.getElementById('story-screen');
const endingScreen = document.getElementById('ending-screen');
const sceneImage = document.getElementById('scene-image');
const sceneText = document.getElementById('scene-text');
const choiceContainer = document.getElementById('choice-container');
const audioToggle = document.getElementById('audio-toggle');
const audioIcon = document.getElementById('audio-icon');
const audioStatus = document.getElementById('audio-status');
const bgm = document.getElementById('bgm');
const locationDisplay = document.getElementById('location-display');
const qteContainer = document.getElementById('qte-timer-container');
const qteProgress = document.getElementById('qte-progress');

// Transition Function
function transitionToScreen(targetScreen) {
    [startScreen, selectScreen, warningScreen, storyScreen, endingScreen].forEach(s => {
        if (s) s.classList.remove('active');
    });
    if (targetScreen) targetScreen.classList.add('active');
}

// Typewriter Effect
function typeText(text, container, callback) {
    let i = 0;
    if (typewriterInterval) clearInterval(typewriterInterval);
    container.innerHTML = '';
    
    typewriterInterval = setInterval(() => {
        if (i < text.length) {
            container.innerHTML += text.charAt(i);
            i++;
            const appDiv = document.getElementById('app');
            // Auto-scrolling disabled per user request
        } else {
            clearInterval(typewriterInterval);
            typewriterInterval = null;
            if (callback) callback();
        }
    }, 45);
}

// QTE Logic
function startQTE(duration) {
    if (!qteContainer || !qteProgress) return;
    
    qteContainer.style.display = 'block';
    qteProgress.style.transform = 'scaleX(1)';
    void qteProgress.offsetWidth;
    
    qteProgress.style.transition = `transform ${duration}ms linear`;
    qteProgress.style.transform = 'scaleX(0)';
    
    qteTimer = setTimeout(() => {
        qteContainer.style.display = 'none';
        const deathNode = Object.values(stories).find(s => s.location === currentStory.location && s.isEnding);
        loadStory(deathNode ? deathNode.id : 'dorm_death_confront');
    }, duration);
}

// Show Choices
function showChoices(choices) {
    choiceContainer.innerHTML = '';
    
    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice.text;
        btn.className = 'choice-btn';
        if (choice.qte) btn.classList.add('urgent');
        
        btn.addEventListener('click', () => {
            if (qteTimer) {
                clearTimeout(qteTimer);
                qteTimer = null;
                qteContainer.style.display = 'none';
            }
            loadStory(choice.next);
        });
        choiceContainer.appendChild(btn);
    });
    
    choiceContainer.style.display = 'grid';
    
    const qteChoice = choices.find(c => c.qte);
    if (qteChoice) {
        startQTE(qteChoice.qte);
    }
}

// Load Story Node
function loadStory(id, isRetry = false) {
    const story = stories[id];
    if (!story) return;
    
    // Save to history if this is a choice point (not an ending) and not a retry
    if (!isRetry && currentStory && !currentStory.isEnding) {
        historyStack.push(currentStory.id);
    }
    
    currentStory = story;
    
    // Update Location Display
    if (locationDisplay) {
        locationDisplay.innerText = story.location;
        locationDisplay.style.visibility = story.location ? 'visible' : 'hidden';
    }
    
    // Reset UI
    sceneText.innerHTML = '';
    choiceContainer.innerHTML = '';
    choiceContainer.style.display = 'none';
    if (qteContainer) qteContainer.style.display = 'none';
    if (qteTimer) {
        clearTimeout(qteTimer);
        qteTimer = null;
    }
    
    // Update Image
    if (story.image && sceneImage) {
        const portal = document.getElementById('image-portal');
        if (portal) {
            if (story.isPortrait) {
                portal.classList.add('portrait-mode');
            } else {
                portal.classList.remove('portrait-mode');
            }
        }
        
        sceneImage.style.opacity = '0';
        setTimeout(() => {
            sceneImage.src = story.image + '?v=' + new Date().getTime();
            sceneImage.style.opacity = '1';
        }, 300);
    }
    
    // Start Interaction
    typeText(story.text, sceneText, () => {
        if (story.isEnding) {
            setTimeout(() => showEnding(story), 2000);
        } else {
            showChoices(story.choices);
        }
    });
}

// Show Ending
function showEnding(story) {
    transitionToScreen(endingScreen);
    const titleEl = document.getElementById('ending-title');
    const descEl = document.getElementById('ending-desc');
    const endingImg = document.getElementById('ending-image');
    const retryBtn = document.getElementById('retry-btn');
    
    if (titleEl) titleEl.innerText = story.title;
    if (descEl) descEl.innerText = story.text;
    
    // Set the ending image
    if (endingImg && story.image) {
        endingImg.src = story.image + '?v=' + new Date().getTime();
    }
    
    // Show retry button only if there's a history and it's not the True Ending
    if (retryBtn) {
        if (historyStack.length > 0 && story.id !== 'escape_ending') {
            retryBtn.style.display = 'block';
        } else {
            retryBtn.style.display = 'none';
        }
    }
}

// Event Listeners
const startBtn = document.getElementById('start-btn');
if (startBtn) {
    startBtn.addEventListener('click', () => {
        transitionToScreen(warningScreen);
        
        // Wait 10 seconds then start story
        setTimeout(() => {
            transitionToScreen(storyScreen);
            loadStory('dorm_start');
            if (isAudioOn && bgm) bgm.play().catch(e => console.log("Audio play failed"));
        }, 10000);
    });
}

const retryBtn = document.getElementById('retry-btn');
if (retryBtn) {
    retryBtn.addEventListener('click', () => {
        if (historyStack.length > 0) {
            const lastNodeId = historyStack.pop();
            transitionToScreen(storyScreen);
            loadStory(lastNodeId, true);
        }
    });
}

const restartBtn = document.getElementById('restart-btn');
if (restartBtn) {
    restartBtn.addEventListener('click', () => {
        historyStack = [];
        transitionToScreen(startScreen);
    });
}

if (audioToggle) {
    audioToggle.addEventListener('click', () => {
        isAudioOn = !isAudioOn;
        if (isAudioOn) {
            if (bgm) bgm.play().catch(e => console.log("Autoplay blocked"));
            if (audioIcon) audioIcon.innerText = '🔊';
            if (audioStatus) audioStatus.innerText = '사운드 ON';
        } else {
            if (bgm) bgm.pause();
            if (audioIcon) audioIcon.innerText = '🔇';
            if (audioStatus) audioStatus.innerText = '사운드 OFF';
        }
    });
}
