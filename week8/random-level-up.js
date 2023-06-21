const probability = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];
let attempt = 0;
let lvl = 0;

const getRandomBinaryResult = prob => {
    return (Math.floor(Math.random() * 100) < prob);
};

const tryLevelUp = () => {
    const loopId = setInterval(() => {
        const isSucceed = getRandomBinaryResult(probability[lvl]);
        attempt++;
        if (isSucceed) {
            lvl++;
            document.getElementById('gauge-bar').style.width = lvl * 10 + '%';
            document.getElementById('current-level').innerText = lvl;
        }
        document.getElementById('attempts').innerText = attempt;
        if (lvl >= 10) clearInterval(loopId);
    }, 50);
};