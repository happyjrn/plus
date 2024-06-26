const times = [
    "퇴근길에", "주말에", "일상에", "저녁마다", "휴식에", "여행에", "꿈에",
    "올 가을에", "올 겨울에", "세상에", "비오는 날", "매일매일", "매일 아침", "연말에"
];
const objects = [
    "웃음을😀", "음악을🎵", "모험을🗺️", "여유를😌", "반짝임을✨", "영화를🎬", "달콤함을🍬",
    "추억을📸", "희망을🌟", "기대감을🎈", "자부심을🏅", "자신감을💪", "비밀을🤫", "설렘을💓",
    "행복을😊", "추억을📸", "낭만을🌹", "여행을✈️", "해외여행을🌍", "향기를🌸", "신선함을🍃",
    "활력을⚡", "에너지를🔋", "지혜를🧠", "기억을💭", "시간을⏰", "휴가를🏖️", "새로움을🌱",
    "친구를👫", "기회를🎁", "희망을🌈", "달콤함을🍭", "집중을🎯", "게임을🎮", "소통을💬",
    "건강을🍎", "용기를🦁", "감동을😭", "열정을🔥", "따뜻함을🔥", "두근거림을💓", "짜릿함을⚡",
    "맥주를🍺", "커피를☕", "약속을🤝", "잔고를💰", "늦잠을🛌", "낮잠을🛌", "휴식을🛋️",
    "빈둥거림을😴", "뱃살을🍔", "안정감을😌", "도전을🚀", "충전을🔌", "나름함을🎨", "차분함을🧘",
    "재충전을🔄", "느긋함을😌", "나자신을🧍", "운동을🏋️", "골프를🏌️"
];
const verbs = [
    "더할거야!", "보탤거야!", "채울거야!", "더해볼래?", "채워볼래!", "담을거야!",
    "얹을거야!", "더해도돼!", "더해도돼?", "더하면돼!"
];

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
    }, 50);

    objectInterval = setInterval(() => {
        objectElement.textContent = getRandomElement(objects);
    }, 50);

    verbInterval = setInterval(() => {
        verbElement.textContent = getRandomElement(verbs);
    }, 50);

    setTimeout(() => {
        clearInterval(timeInterval);
    }, 2000);

    setTimeout
