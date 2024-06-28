const times = ["매일매일", "주말마다", "갈수록", "자주", "문득", "매일저녁", "장마기간", "올겨울에",
    "아침마다", "올가을에", "12월에", "올해마지막날", "가까이에서", "첫눈 오는날", "비 오는날", "더운 날", "추운 날", "문득"];
const objects = ["웃음을😀", "용기를🦁", "휴식을🛋️", "취미를🎨", "뱃살을🤰", "건강을🏃‍♂️", "설렘을💕", "맛집을🍣", "모험을🧭", "추억을📸", "늦잠을🛌", "공부를📚",
    "여행을✈️", "휴가를🏝️", "매력을🧲", "샤워를🚿", "나눔을🎁", "배려를💖", "노력을💪", "연휴를🎉", "생각을💭", "열일을🔥", "칼퇴를🏃‍♂️", "할일을📝",
    "시간을⏰", "나다움을🌟", "달콤함을🍭", "새로움을🌈", "짜릿함을⚡", "자신감을💪", "반짝임을✨", "즐거움을😊", "신선함을🍃", "재활용을♻️", "짝사랑을💌",
    "기억을💭", "잔고를💰", "두근거림을❤️", "안정감을🛡️", "시작을🚀", "친구를👫", "차분함을🧘‍♂️", "나른함을😌", "기회를🎲", "희망을🌟", "에너지를🔋",
    "게임을🎮", "노래를🎵", "열일을🔥", "느긋함을😌", "놀라움을😲", "나다움을💖"];
const verbs = ["더해도돼", "더할거야", "더해볼래", "더해보자", "더할거야", "더할거야"];

const audio = new Audio('http://marun5.synology.me/event/더해도 돼.mp3');

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function startRoulette() {
    const plusButton = document.getElementById('plusButton');
    const againButton = document.getElementById('againButton');
    plusButton.classList.add('plus-disabled');
    plusButton.classList.remove('plus-active');
    againButton.classList.add('again-disabled');
    againButton.classList.remove('again-active');

    const timeElement = document.getElementById('time');
    const objectElement = document.getElementById('object');
    const verbElement = document.getElementById('verb');

    let timeInterval, objectInterval, verbInterval;

    timeInterval = setInterval(() => {
        timeElement.textContent = getRandomElement(times);
    }, 20);

    objectInterval = setInterval(() => {
        objectElement.textContent = getRandomElement(objects);
    }, 20);

    verbInterval = setInterval(() => {
        verbElement.textContent = getRandomElement(verbs);
    }, 20);

    setTimeout(() => {
        clearInterval(timeInterval);
    }, 2000);

    setTimeout(() => {
        clearInterval(objectInterval);
    }, 2500);

    setTimeout(() => {
        clearInterval(verbInterval);
        plusButton.classList.add('plus-disabled');
        plusButton.classList.remove('plus-active');
        againButton.classList.add('again-active');
        againButton.classList.remove('again-disabled');
    }, 3000);
}

document.getElementById('plusButton').addEventListener('click', () => {
    audio.play();
    startRoulette();
});

document.getElementById('againButton').addEventListener('click', () => {
    resetSlots();
    document.getElementById('plusButton').classList.add('plus-active');
    document.getElementById('plusButton').classList.remove('plus-disabled');
    document.getElementById('againButton').classList.add('again-disabled');
    document.getElementById('againButton').classList.remove('again-active');
});

function resetSlots() {
    document.getElementById('time').textContent = "???";
    document.getElementById('object').textContent = "???";
    document.getElementById('verb').textContent = "???";
}

