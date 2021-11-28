const pickerRect = obj.piker.canvas.getBoundingClientRect();
const dataX = document.getElementById('data-x');
const dataY = document.getElementById('data-y');
const dataColor = document.getElementById('data-color');
const dataHexColor = document.getElementById('data-hex-color');
const pikeColor = document.getElementById('piker-color');

const decColorToHex = (r, g, b) => {
    const getBigHex = num => {
        const getHex = n => {
            if (n < 10) return n;
            return String.fromCharCode(87 + n) // 97 is char 'a'
        }

        if (num > 255) num = 255;
        if (num < 0) num = 0;
        const num16 = num % 16;
        const num255 = Math.floor(num / 16);

        return `${getHex(num255)}${getHex(num16)}`;
    }

    return `#${getBigHex(r)}${getBigHex(g)}${getBigHex(b)}`;
}

obj.piker.canvas.addEventListener('mousemove', e => {

    const x = Math.round(e.clientX - pickerRect.x);
    const y = Math.round(e.clientY - pickerRect.y);

    dataX.innerHTML = x;
    dataY.innerHTML = y;

    const resX = getTileX(x);
    const resY = getTileY(y);

    let r = getSin(resY, param.r.size, param.r.transition);
    let g = getSin(resY, param.g.size, param.g.transition);
    let b = getSin(resY, param.b.size, param.b.transition);

    const gamma = xMin + (gammaStep * resX);

    const resR = addGamma(gamma, r);
    const resG = addGamma(gamma, g);
    const resB = addGamma(gamma, b);

    dataColor.innerHTML = `${resR}, ${resG}, ${resB}`;
    const hex = decColorToHex(resR, resG, resB);
    dataHexColor.innerHTML = hex;
    pikeColor.style.backgroundColor = hex;
})