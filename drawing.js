const drawPixel = (elem, x, y, r, g, b) => {
    const index = (x + y * elem.x) * 4;

    elem.data.data[index + 0] = r;
    elem.data.data[index + 1] = g;
    elem.data.data[index + 2] = b;
    elem.data.data[index + 3] = 255; // alfa chanel
}

const drawBar = (elem, barH, x, r, g, b) => {
    for (let yy = gh; yy > gh - barH; yy--) {
        drawPixel(elem, x, yy, r, g, b)
    }
}

const updateCanvas = (elem) => {

    elem.ctx.putImageData(elem.data, 0, 0);
}

const getSin = (num, s, p) => {
    let val = num + (h * p);
    if (val > h) val -= h;

    if (val < h * s) {
        const prop = ((val / h) / s);
        const sin = Math.sin((2 * Math.PI * prop) + (-Math.PI / 2)) + 1;
        const res = sin * (gh / 2);
        return res;
    } else {
        return 0;
    }
}

const addGamma = (g, num) => {
    let res = num + g;
    if (res < 0) res = 0;
    if (res > 255) res = 255;
    return Math.round(res);
}

const getTileX = x => tiled ? (Math.floor(x / xT) * xT) + Math.floor(xT / 2) : x;

const getTileY = y => tiled ? (Math.floor(y / yT) * yT) + Math.floor(yT / 2) : y;

const drawGraph = (r, g, b, power, y) => {
    drawBar(obj.graph_R, r, y, power, 0, 0);
    drawBar(obj.graph_G, g, y, 0, power, 0);
    drawBar(obj.graph_B, b, y, 0, 0, power);
}

// ------------------- drawing


const draw = () => {
    const deference = xMax - xMin; // deference
    gammaStep = deference / w;

    for (let x = 0; x < w; x++) {

        const resX = getTileX(x);
        const barH = ((xMin + (gammaStep * resX)) / 2) + 128;

        drawBar(obj.gamma, barH, x, 128, 128, 128);
        drawPixel(obj.gamma, x, 128, 200, 0, 0);
    }

    for (let y = 0; y < h; y++) {

        const resY = getTileY(y);

        let r = getSin(resY, param.r.size, param.r.transition);
        let g = getSin(resY, param.g.size, param.g.transition);
        let b = getSin(resY, param.b.size, param.b.transition);
        for (let x = w; x >= 0; x--) {

            const resX = getTileX(x);

            const gamma = xMin + (gammaStep * resX);

            const resR = addGamma(gamma, r);
            const resG = addGamma(gamma, g);
            const resB = addGamma(gamma, b);

            drawPixel(obj.piker, x, y, resR, resG, resB)

            if (x % 8 == 0) {
                drawGraph(resR, resG, resB, 255 - (16 + ((x / w) * (255 - 16))), y)
            }
        }

    }

    for (let key in obj) {
        updateCanvas(obj[key]);
    }
}

draw();