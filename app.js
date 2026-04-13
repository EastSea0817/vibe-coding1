const stories = {
    // --- 스토리 1: 새벽 2시 노크의 연속 ---
    'knock_start': {
        id: 'knock_start',
        text: "새벽 2시 17분. 문 밖에서 노크 소리 딱 3번. 핸드폰 시간 확인하면 2:17. 다시 봐도 2:17. 시간이 멈췄습니다.",
        image: 'assets/library.png', // 기본 어두운 이미지
        choices: [
            { text: "문을    'knock_2_open': {
        id: 'knock_2_open',
        text: "문틈으로 검은 그림자가 보입니다. '공부 열심히 했어?' 목소리가 들립니다. 그림자가 문 안으로 들어오려 합니다.",
        image: 'assets/shadow_door.png',
        choices: [
            { text: "그림자 향해 '누구세요?'", next: 'knock_3_ask' },
            { text: "침대 밑으로 숨기", next: 'knock_3_hide' }
        ]
    },
    'knock_3_ask': {
        id: 'knock_3_ask',
        text: "당신의 물음에 그림자가 멈춥니다. 그리고 기괴하게 목을 꺾으며 대답합니다. '...네 친구.' 그 순간 방안의 모든 불이 꺼집니다.",
        image: 'assets/shadow_door.png',
        choices: [
            { text: "핸드폰 플래시를 켠다", next: 'knock_4_light' },
            { text: "밖으로 뛰쳐나간다", next: 'knock_ending_bad' }
        ]
    },
    'knock_3_hide': {
        id: 'knock_3_hide',
        text: "침대 밑에서 그림자의 발만 보입니다. 낡은 구두를 신고 있습니다. 발소리가 멀어지는 듯하더니, 다시 당신의 침대 바로 앞으로 돌아옵니다.",
        image: 'assets/shadow_door.png',
        choices: [
            { text: "침대 밑에서 숨죽여 기다림", next: 'knock_4_wait' },
            { text: "갑자기 불을 켠다", next: 'knock_4_light' }
        ]
    },
    'knock_4_light': {
        id: 'knock_4_light',
        text: "불을 켜자 방 안에는 아무도 없습니다. 안도하며 숨을 돌리는데, 책상 위에 당신이 쓴 적 없는 글씨가 적혀 있습니다. '잘 자.'",
        image: 'assets/library.png',
        choices: [
            { text: "방을 나간다", next: 'knock_ending_good' },
            { text: "다시 침대에 눕는다", next: 'knock_ending_bad' }
        ]
    },
    'knock_4_wait': {
        id: 'knock_4_wait',
        text: "한참의 정적 후, 불을 켜보니 아무도 없습니다. 하지만 거울에 비친 당신의 얼굴 뒤에... 누군가 서 있습니다.",
        image: 'assets/library.png',
        choices: [
            { text: "거울을 바로 확인한다", next: 'knock_ending_bad' },
            { text: "아침까지 눈을 감고 기다린다", next: 'knock_ending_good' }
        ]
    },
    'knock_ending_good': {
        id: 'knock_ending_good',
        text: "'시험기간엔 절대 문 열지 마...' 창밖으로 아침 햇살이 비칩니다. 당신은 살아남았습니다.",
        title: "생존 엔딩: 새벽의 경고",
        isEnding: true
    },
    'knock_ending_bad': {
        id: 'knock_ending_bad',
        text: "거울 속의 '그것'과 눈이 마주친 순간, 당신의 의식은 끊겼습니다. 다음 날 당신은 방 안에서 발견되지 않았습니다.",
        title: "실종 엔딩: 거울 속의 손님",
        isEnding: true
    },

    // --- 스토리 2: 도서관 마지막 책상 ---
    'lib_start': {
        id: 'lib_start',
        text: "폐관 10분 전 도서관. 마지막 책상에 앉아있는데 뒤에서 종이 넘기는 소리가 들립니다. 돌아보니 아무도 없는데 소리는 점점 가까워집니다.",
        image: 'assets/library.png',
        choices: [
            { text: "책장 뒤로 가서 확인한다", next: 'lib_2_check' },
            { text: "가방을 챙겨 도망친다", next: 'lib_2_run' }
        ]
    },
    'lib_2_check': {
        id: 'lib_2_check',
        text: "책장 사이에 오래된 시험지 더미가 쌓여 있습니다. 맨 위 시험지에는 당신의 이름이 적힌 답안지가 놓여 있습니다.",
        image: 'assets/exam_paper.png',
        choices: [
            { text: "답안지를 집어든다", next: 'lib_3_paper' },
            { text: "도서관 문으로 달린다", next: 'lib_2_run' }
        ]
    },
    'lib_3_paper': {
        id: 'lib_3_paper',
        text: "답안지에는 당신이 쓰지 않은 글씨가 적혀 있습니다. '이번 시험은 내가 대신 봤다.'",
        image: 'assets/exam_paper.png',
        choices: [
            { text: "시험지를 찢어버린다", next: 'lib_ending_scary' },
            { text: "그대로 주머니에 넣고 나간다", next: 'lib_ending_weird' }
        ]
    },
    'lib_ending_weird': {
        id: 'lib_ending_weird',
        text: "다음 날 시험 결과는 완벽했습니다. 하지만 당신은 그날 이후로 펜을 잡을 수 없게 되었습니다.",
        title: "기묘한 엔딩: 대리 시험",
        isEnding: true
    },
    'lib_2_run': {
        id: 'lib_2_run',
        text: "출구로 달렸지만 도서관 문은 이미 잠겨 있습니다. 등 뒤에서 누군가 천천히 걷는 소리가 들립니다.",
        image: 'assets/library.png',
        choices: [
            { text: "관리실로 숨는다", next: 'lib_ending_scary' },
            { text: "창문을 깬다", next: 'lib_ending_scary' }
        ]
    },
    'lib_ending_scary': {
        id: 'lib_ending_scary',
        text: "어둠 속에서 손 하나가 당신의 어깨를 잡았습니다. '폐관 시간입니다... 학생...'",
        title: "사망 엔딩: 영원한 낙제",
        isEnding: true
    },

    // --- 스토리 3: 기숙사 가위 누름 ---
    'sleep_start': {
        id: 'sleep_start',
        text: "새벽 4시. 시험공부의 피로로 간신히 잠든 순간, 몸이 움직이지 않습니다. 문 밖에서 기분 나쁜 웃음소리가 들립니다. '공부 열심히 했어?'",
        image: 'assets/library.png',
        choices: [
            { text: "정신을 집중해서 깨어나려 한다", next: 'sleep_2_focus' },
            { text: "소리를 내어 도움을 요청한다", next: 'sleep_2_help' }
        ]
    },
    'sleep_2_focus': {
        id: 'sleep_2_focus',
        text: "눈을 뜨려 노력하자 문틈으로 누군가 서 있는 것이 보입니다. '시험 잘 봤어?' 그가 묻습니다.",
        image: 'assets/shadow_door.png',
        choices: [
            { text: "그와 눈을 마주친다", next: 'sleep_3_eye' },
            { text: "고개를 돌려 외면한다", next: 'sleep_3_avoid' }
        ]
    },
    'sleep_2_help': {
        id: 'sleep_2_help',
        text: "목소리가 나오지 않습니다. 대신 귀 옆에서 차가운 숨결이 느껴집니다. '내가 공부 도와줄게...'",
        image: 'assets/shadow_door.png',
        choices: [
            { text: "'도와줘'라고 대답하려 한다", next: 'sleep_3_answer' },
            { text: "필사적으로 저항한다", next: 'sleep_3_avoid' }
        ]
    },
    'sleep_3_eye': {
        id: 'sleep_3_eye',
        text: "그의 눈은 칠흑같이 어둡습니다. '공부 대신... 영원히 쉬게 해줄까?' 차가운 손이 당신의 목을 향합니다.",
        image: 'assets/shadow_door.png',
        choices: [
            { text: "손을 뿌리치려 한다", next: 'sleep_4_struggle' },
            { text: "의식을 잃는다", next: 'sleep_ending_lost' }
        ]
    },
    'sleep_3_answer': {
        id: 'sleep_3_answer',
        text: "'도와줘'라고 말하자마자, 그의 얼굴이 당신의 코앞까지 다가옵니다. '그래, 영원히 도와줄게.'",
        image: 'assets/shadow_door.png',
        choices: [
            { text: "눈을 감는다", next: 'sleep_ending_lost' },
            { text: "비명을 지른다", next: 'sleep_ending_lost' }
        ]
    },
    'sleep_3_avoid': {
        id: 'sleep_3_avoid',
        text: "시선을 피하자 웃음소리가 커집니다. '외면한다고 달라질 건 없어.' 차가운 손이 발목을 잡습니다.",
        image: 'assets/shadow_door.png',
        choices: [
            { text: "필사적으로 발을 찬다", next: 'sleep_4_struggle' },
            { text: "다시 눈을 감는다", next: 'sleep_ending_lost' }
        ]
    },
    'sleep_4_struggle': {
        id: 'sleep_4_struggle',
        text: "차가운 손이 이번엔 발목을 잡고 끌어당깁니다. 침대 끝으로 점점 몸이 밀려납니다.",
        image: 'assets/shadow_door.png',
        choices: [
            { text: "침대 프레임을 필사적으로 잡는다", next: 'sleep_ending_safe' },
            { text: "그의 손을 다시 잡는다", next: 'sleep_ending_lost' }
        ]
    },
    'sleep_ending_safe': {
        id: 'sleep_ending_safe',
        text: "눈을 뜨니 아침 햇살이 방을 비추고 있습니다. '시험기간엔 가위 눌리면 절대 대답하지 마라'는 선배의 말이 떠오릅니다.",
        title: "생존 엔딩: 아침의 해방",
        isEnding: true
    },
    'sleep_ending_lost': {
        id: 'sleep_ending_lost',
        text: "당신은 어둠 속으로 끌려 들어갔습니다. 다음 날 아침, 알람 소리만 빈 방을 울리고 있었습니다.",
        title: "사망 엔딩: 영원한 휴식",
        isEnding: true
    }
};

// ... (Initialization)
document.getElementById('start-btn').addEventListener('click', () => {
    transitionToScreen(storyScreen);
    const startKeys = ['knock_start', 'lib_start', 'sleep_start'];
    const randomStart = startKeys[Math.floor(Math.random() * startKeys.length)];
    loadStory(randomStart);
    if (isAudioOn) bgm.play();
});
��을 향합니다.",
        image: 'assets/shadow_door.png',
        choices: [
            { text: "손을 뿌리치려 한다", next: 'sleep_4_struggle' },
            { text: "의식을 잃는다", next: 'sleep_ending_lost' }
        ]
    },
    'sleep_4_struggle': {
        id: 'sleep_4_struggle',
        text: "차가운 손이 이번엔 발목을 잡고 끌어당깁니다. 침대 끝으로 점점 몸이 밀려납니다.",
        image: 'assets/shadow_door.png',
        choices: [
            { text: "침대 프레임을 필사적으로 잡는다", next: 'sleep_ending_safe' },
            { text: "그의 손을 다시 잡는다", next: 'sleep_ending_lost' }
        ]
    },
    'sleep_ending_safe': {
        id: 'sleep_ending_safe',
        text: "눈을 뜨니 아침 햇살이 방을 비추고 있습니다. '시험기간엔 가위 눌리면 절대 대답하지 마라'는 선배의 말이 떠오릅니다.",
        title: "생존 엔딩: 아침의 해방",
        isEnding: true
    },
    'sleep_ending_lost': {
        id: 'sleep_ending_lost',
        text: "당신은 어둠 속으로 끌려 들어갔습니다. 다음 날 아침, 알람 소리만 빈 방을 울리고 있었습니다.",
        title: "사망 엔딩: 영원한 휴식",
        isEnding: true
    }
};

let currentStory = null;
let isAudioOn = false;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const storyScreen = document.getElementById('story-screen');
const endingScreen = document.getElementById('ending-screen');
const sceneImage = document.getElementById('scene-image');
const sceneText = document.getElementById('scene-text');
const choiceContainer = document.getElementById('choice-container');
const audioToggle = document.getElementById('audio-toggle');
const audioIcon = document.getElementById('audio-icon');
const audioStatus = document.getElementById('audio-status');
const bgm = document.getElementById('bgm');

// Initialization
document.getElementById('start-btn').addEventListener('click', () => {
    transitionToScreen(storyScreen);
    // 메인 테마 선택창 대신 바로 첫 썰로 시작하거나 랜덤 선택 가능
    const startKeys = ['knock_start', 'lib_start'];
    const randomStart = startKeys[Math.floor(Math.random() * startKeys.length)];
    loadStory(randomStart);
    if (isAudioOn) bgm.play();
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

let typewriterInterval = null;

function loadStory(id) {
    const story = stories[id];
    if (!story) {
        console.error("Story not found:", id);
        return;
    }
    
    currentStory = story;
    
    // Reset UI
    if (typewriterInterval) clearInterval(typewriterInterval);
    sceneText.innerHTML = '';
    choiceContainer.innerHTML = '';
    choiceContainer.style.display = 'none';
    
    // Update Image
    if (story.image) {
        sceneImage.style.opacity = '0';
        setTimeout(() => {
            sceneImage.src = story.image;
            // Immediate restore attempt
            sceneImage.style.opacity = '1';
        }, 300);
    }
    
    // Typewriter effect
    typeText(story.text, sceneText, () => {
        if (story.isEnding) {
            setTimeout(() => showEnding(story), 2000);
        } else {
            choiceContainer.style.display = 'grid';
            showChoices(story.choices);
        }
    });
}

function typeText(text, container, callback) {
    let i = 0;
    typewriterInterval = setInterval(() => {
        if (i < text.length) {
            container.innerHTML += text.charAt(i);
            i++;
            container.scrollTop = container.scrollHeight;
        } else {
            clearInterval(typewriterInterval);
            typewriterInterval = null;
            if (callback) callback();
        }
    }, 40);
}

function showChoices(choices) {
    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice.text;
        btn.className = 'choice-btn';
        btn.addEventListener('click', () => {
            loadStory(choice.next);
        });
        choiceContainer.appendChild(btn);
    });
}

function showEnding(story) {
    transitionToScreen(endingScreen);
    document.getElementById('ending-title').innerText = story.title;
    document.getElementById('ending-desc').innerText = story.text;
}

function transitionToScreen(targetScreen) {
    [startScreen, storyScreen, endingScreen].forEach(s => {
        s.classList.remove('active');
    });
    targetScreen.classList.add('active');
}
