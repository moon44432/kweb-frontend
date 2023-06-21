const setRandomBgColor = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    const rgb = 'rgb(' + red + ', ' + blue + ', ' + green + ')';
    document.getElementById('color-box').style.backgroundColor = rgb;
};