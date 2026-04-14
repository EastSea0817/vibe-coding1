/**
 * 자정의 시험기간 | Midnight Exam
 * Interactive Horror Simulator
 */

const stories = {
    // --- Starting Points ---
    'knock_start': {
        id: 'knock_start',
        text: "새벽 2시. 책상 위 스탠드 불빛만이 방 안을 비추고 있습니다. 기말고사가 코앞이라 잠을 쫓으며 전공 서적을 뒤척이던 그때, 현관문에서 희미한 소리가 들립니다. '똑... 똑...'",
        image: 'assets/knock_start.png',
        choices: [
            { text: "누구인지 확인하러 문으로 다가간다", next: 'knock_check' },
            { text: "잘못 들었겠거니 하고 공부에 집중한다", next: 'knock_ignore' }
        ]
    },
    'lib_start': {
        id: 'lib_start',
        text: "대학교 도서관 4층, 아무도 없는 열람실 구석. 시험 공부를 하다 깜빡 잠이 들었습니다. 눈을 뜨니 조명은 모두 꺼져 있고, 창밖으로 비치는 가로등 불빛만이 서늘하게 감돕니다. 저 멀리 복도 끝에서 누군가 흐느끼는 소리가 들려옵니다.",
        image: 'assets/library.png',
        choices: [
            { text: "소리가 나는 곳으로 조심스럽게 가본다", next: 'lib_approach' },
            { text: "짐을 챙겨 서둘러 도서관을 빠져나간다", next: 'lib_escape' }
        ]
    },
    'sleep_start': {
        id: 'sleep_start',
        text: "도저히 몰려오는 잠을 이길 수 없어 침대에 몸을 던졌습니다. '딱 10분만 자고 일어나야지...' 하지만 정신은 맑은데 몸이 움직이지 않습니다. 가위눌림입니다. 그리고 방 천장 구석에서 검은 형체가 천천히 내려오는 것이 보입니다.",
        image: 'assets/bedroom_shadow.png',
        choices: [
            { text: "필사적으로 손가락을 움직여 깨어나려 노력한다", next: 'sleep_struggle' },
            { text: "눈을 질끈 감고 형체가 사라지길 기다린다", next: 'sleep_wait' }
        ]
    },

    // --- Story Logic ---
    'knock_check': {
        id: 'knock_check',
        text: "외시경으로 밖을 내다봅니다. 복도의 불은 꺼져 있지만, 문 바로 앞에 누군가 서 있는 실루엣이 보입니다. 그런데 그 사람, 머리 방향이 이상합니다. 목이 거꾸로 꺾인 채 당신을 빤히 바라보고 있습니다.",
        image: 'assets/knock_check.png',
        choices: [
            { text: "비명을 지르며 뒤로 물러난다", next: 'knock_run' },
            { text: "문을 벌컥 열어젖힌다", next: 'knock_confront' }
        ]
    },
    'knock_run': {
        id: 'knock_run',
        text: "방으로 뛰어 들어가 문을 잠급니다. 하지만 등 뒤에서 싸늘한 기운이 느껴집합니다. 창문에 비친 당신의 뒤편에, 아까 문 앞에 있던 그 형체가 이미 서 있습니다. '왜... 안 열어줬어?'",
        title: "배드 엔딩: 열리지 않은 환대",
        isEnding: true
    },
    'knock_confront': {
        id: 'knock_confront',
        text: "문을 열자 복도는 텅 비어 있습니다. 잠시 안도하는 순간, 당신이 미처 딛지 못한 신발장 아래에서 창백한 손들이 뻗어 나와 당신의 발목을 낚아챕니다.",
        title: "데드 엔딩: 신발 밑의 진실",
        isEnding: true
    },
    'knock_ignore': {
        id: 'knock_ignore',
        text: "노크 소리를 무시하고 책에 고개를 묻습니다. 하지만 노크 소리는 점점 더 커지고 빨라집니다. '똑똑똑똑똑똑!' 이젠 문이 부서질 듯 덜컹거립니다. 그리고 문틈 사이로 핏빛 액체가 흘러들어오기 시작합니다.",
        image: 'assets/door_blood.png',
        choices: [
            { text: "방문 쪽으로 도망쳐 문을 잠근다", next: 'knock_run' },
            { text: "책상을 밀어 현관문을 막는다", next: 'knock_ending_trapped' }
        ]
    },
    'knock_ending_trapped': {
        id: 'knock_ending_trapped',
        text: "책상을 밀어 문을 막았지만, 소용없었습니다. 그 형체는 벽을 통과해 당신의 눈앞에 나타납니다. 당신의 시험 점수보다 더 끔찍한 기록이 당신의 인생에 남게 되었습니다.",
        title: "데드 엔딩: F학점보다 무서운 것",
        isEnding: true
    },

    // --- Library Path ---
    'lib_approach': {
        id: 'lib_approach',
        text: "흐느낌 소리를 따라가니 책장 사이에서 한 여학생이 웅크리고 앉아 있습니다. '저기요, 괜찮으세요?'라고 묻자, 그녀가 고개를 천천히 듭니다. 얼굴이 있어야 할 곳에 커다란 입만이 가득 차 있습니다. '너... 내 시험지 훔쳐갔지?'",
        image: 'assets/lib_ghost.png',
        choices: [
            { text: "아니라고 강하게 부정하며 도망친다", next: 'lib_run' },
            { text: "가방에서 아무 종이나 꺼내 건네준다", next: 'lib_ending_trick' }
        ]
    },
    'lib_escape': {
        id: 'lib_escape',
        text: "본능적인 공포에 짐도 내팽개치고 엘리베이터로 달려갑니다. 버튼을 미친 듯이 누르자 문이 열립니다. 안도의 한숨을 내쉬며 1층 버튼을 누르는데, 거울에 비친 엘리베이터 천장에 누군가 거꾸로 매달려 당신을 내려다보고 있습니다.",
        image: 'assets/elevator_mirror.png',
        choices: [
            { text: "다음 층에서 열리자마자 튀어 나간다", next: 'lib_ending_elevator' },
            { text: "비상 벨을 누른다", next: 'lib_ending_trapped_lib' }
        ]
    },
    'lib_run': {
        id: 'lib_run',
        text: "뒤도 안 돌아보고 달립니다. 하지만 도서관 복도는 끝없이 이어지고, 뒤에선 기괴한 웃음소리가 점점 가까워집니다. 어느새 당신은 도서관 옥상 끝에 몰려 있습니다.",
        title: "데드 엔딩: 전학생의 질투",
        isEnding: true
    },
    'lib_ending_trick': {
        id: 'lib_ending_trick',
        text: "종이를 받은 그녀는 잠시 멈칫하더니 그것을 씹어 삼키기 시작합니다. 그 틈을 타 당신은 전력질주해 도서관을 벗어납니다. 다음 날 아침, 당신의 성적표에는 알 수 없는 붉은 얼룩이 가득했습니다.",
        title: "생존 엔딩: 임시방편의 대가",
        isEnding: true
    },
    'lib_ending_elevator': {
        id: 'lib_ending_elevator',
        text: "엘리베이터가 1층에 도착했습니다. 문이 열리자마자 밖으로 몸을 날립니다. 뒤를 돌아보니 엘리베이터 안에는 당신의 가방만이 덩그러니 놓여 있습니다. 도저히 다시 들어갈 엄두가 나지 않습니다.",
        title: "생존 엔딩: 가방은 두고 갈게",
        isEnding: true
    },
    'lib_ending_trapped_lib': {
        id: 'lib_ending_trapped_lib',
        text: "비상 벨을 눌렀지만 엘리베이터는 멈춰버렸습니다. 천장에서 들리는 '긁는 소리'가 점점 커집니다. 이제 당신이 탈출할 곳은 어디에도 없습니다.",
        title: "데드 엔딩: 멈춘 엘리베이터",
        isEnding: true
    },

    // --- Sleep Path ---
    'sleep_struggle': {
        id: 'sleep_struggle',
        text: "온 힘을 다해 새끼손가락부터 움직입니다. '뿌드득' 하는 소리와 함께 몸이 움직이기 시작합니다. 하지만 안심한 순간, 천장의 형체가 당신의 배 위로 순식간에 떨어집니다. 차가운 손이 당신의 목을 조릅니다.",
        image: 'assets/choke.png',
        choices: [
            { text: "옆방에 있는 가족을 부르려 비명을 지른다", next: 'sleep_scream' },
            { text: "형체의 눈을 똑바로 쳐다본다", next: 'sleep_stare' }
        ]
    },
    'sleep_wait': {
        id: 'sleep_wait',
        text: "눈을 감고 숫자를 셉니다. '일... 이... 삼...' 하지만 숫자를 셀수록 귓가에서 누군가 같이 숫자를 세는 목소리가 들립니다. 당신보다 딱 한 박자 빠르게. 그리고 그 목소리는 점점 당신의 목소리와 똑같아집니다.",
        image: 'assets/double.png',
        choices: [
            { text: "참지 못하고 눈을 뜬다", next: 'sleep_open_eye' },
            { text: "그대로 잠들려고 노력한다", next: 'sleep_ending_lost' }
        ]
    },
    'sleep_scream': {
        id: 'sleep_scream',
        text: "입을 열었지만 목소리가 나오지 않습니다. 대신 당신의 입안으로 검은 액체가 쏟아져 들어옵니다. 형체는 즐겁다는 듯 몸을 기괴하게 꺾으며 당신의 귓가에 속삭입니다. '시험... 끝나고 봐...'",
        title: "데드 엔딩: 소리 없는 아우성",
        isEnding: true
    },
    'sleep_stare': {
        id: 'sleep_stare',
        text: "당신이 눈을 똑바로 뜨자 형체가 멈칫합니다. 당신의 기세에 눌린 듯 형체는 서서히 연기처럼 흩어집니다. 창밖에서 아침 해가 떠오르는 것이 보입니다. 당신은 살아남았습니다. 하지만 오늘 시험은 망쳤군요.",
        title: "트루 엔딩: 정신력의 승리",
        isEnding: true
    },
    'sleep_open_eye': {
        id: 'sleep_open_eye',
        text: "눈을 뜬 순간, 코앞에 당신과 똑같이 생긴 존재가 당신을 내려다보고 있습니다. 그는 씨긋 웃으며 말합니다. '이제 내가 너 대신 시험 보러 갈게.'",
        title: "데드 엔딩: 도플갱어",
        isEnding: true
    },
    'sleep_ending_lost': {
        id: 'sleep_ending_lost',
        text: "결국 의식을 잃었습니다. 눈을 떴을 때는 이미 정오였습니다. 시험은 끝났고, 당신의 방에는 당신을 부르러 온 친구들의 부재중 전화만이 가득합니다. 하지만 당신의 거울에는 당신이 아닌 다른 존재가 비치고 있습니다.",
        title: "배드 엔딩: 빼앗긴 육체",
        isEnding: true
    }
};

let currentStory = null;
let isAudioOn = false;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const selectScreen = document.getElementById('select-screen');
const storyScreen = document.getElementById('story-screen');
const endingScreen = document.getElementById('ending-screen');
const sceneImage = document.getElementById('scene-image');
const sceneText = document.getElementById('scene-text');
const choiceContainer = document.getElementById('choice-container');
const audioToggle = document.getElementById('audio-toggle');
const audioIcon = document.getElementById('audio-icon');
const audioStatus = document.getElementById('audio-status');
const bgm = document.getElementById('bgm');
const selectDesc = document.getElementById('select-description');
const warningOverlay = document.getElementById('warning-overlay');
const revealBtn = document.getElementById('reveal-btn');

// Transition Function
function transitionToScreen(targetScreen) {
    [startScreen, selectScreen, storyScreen, endingScreen].forEach(s => {
        s.classList.remove('active');
    });
    targetScreen.classList.add('active');
}

// Typewriter Effect
let typewriterInterval = null;
function typeText(text, container, callback) {
    let i = 0;
    if (typewriterInterval) clearInterval(typewriterInterval);
    container.innerHTML = '';
    
    typewriterInterval = setInterval(() => {
        if (i < text.length) {
            container.innerHTML += text.charAt(i);
            i++;
            const appDiv = document.getElementById('app');
            if (appDiv) appDiv.scrollTop = appDiv.scrollHeight;
        } else {
            clearInterval(typewriterInterval);
            typewriterInterval = null;
            if (callback) callback();
        }
    }, 40);
}

// Show Choices
function showChoices(choices) {
    choiceContainer.innerHTML = '';
    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice.text;
        btn.className = 'choice-btn';
        btn.addEventListener('click', () => {
            loadStory(choice.next);
        });
        choiceContainer.appendChild(btn);
    });
    choiceContainer.style.display = 'grid';
}

// Load Story Node
function loadStory(id) {
    const story = stories[id];
    if (!story) {
        console.error("Story not found:", id);
        return;
    }
    
    currentStory = story;
    
    // Reset UI
    sceneText.innerHTML = '';
    choiceContainer.innerHTML = '';
    choiceContainer.style.display = 'none';
    
    // Reset Jump Scare State
    sceneImage.classList.remove('blurred');
    warningOverlay.style.display = 'none';
    
    // Update Image
    if (story.image) {
        sceneImage.style.opacity = '0';
        setTimeout(() => {
            sceneImage.src = story.image;
            
            // Handle Scary Image Blur
            if (story.scary === true) {
                sceneImage.classList.add('blurred');
                warningOverlay.style.display = 'flex';
                console.log("Scary scene detected: ", id);
            }
            
            sceneImage.style.opacity = '1';
        }, 300);
    }
    
    // Start Typing
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
    document.getElementById('ending-title').innerText = story.title;
    document.getElementById('ending-desc').innerText = story.text;
}

// Event Listeners
document.getElementById('start-btn').addEventListener('click', () => {
    transitionToScreen(selectScreen);
});

// Selection Button Listeners
const selectButtons = [
    { id: 'select-knock', storyId: 'knock_start' },
    { id: 'select-lib', storyId: 'lib_start' },
    { id: 'select-sleep', storyId: 'sleep_start' }
];

selectButtons.forEach(select => {
    const btn = document.getElementById(select.id);
    const card = btn.closest('.select-card');
    btn.addEventListener('click', () => {
        transitionToScreen(storyScreen);
        loadStory(select.storyId);
        if (isAudioOn) bgm.play().catch(e => console.log("Audio play failed"));
    });

    card.addEventListener('mouseenter', () => {
        selectDesc.innerText = btn.getAttribute('data-desc');
        selectDesc.style.color = '#ff0000';
    });

    card.addEventListener('mouseleave', () => {
        selectDesc.innerText = '운명을 선택하십시오...';
        selectDesc.style.color = '#888';
    });
});

document.getElementById('restart-btn').addEventListener('click', () => {
    transitionToScreen(startScreen);
});

audioToggle.addEventListener('click', () => {
    isAudioOn = !isAudioOn;
    if (isAudioOn) {
        bgm.play().catch(e => console.log("Autoplay blocked or audio error"));
        audioIcon.innerText = '🔊';
        audioStatus.innerText = '사운드 ON';
    } else {
        bgm.pause();
        audioIcon.innerText = '🔇';
        audioStatus.innerText = '사운드 OFF';
    }
});

// Share Button (Mock)
document.getElementById('share-btn').addEventListener('click', () => {
    alert("공포를 공유했습니다... 당신의 뒤에 있는 그것과 함께요.");
});
revealBtn.addEventListener('click', () => {
    sceneImage.classList.remove('blurred');
    warningOverlay.style.display = 'none';
});