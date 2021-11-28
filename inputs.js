const inputW = document.querySelector('#inputW input');
const inputWVal = document.querySelector('#inputW span');

inputW.value = w;
inputWVal.innerHTML = w;

inputW.addEventListener("change", () => {
    w = inputW.value;
    inputWVal.innerHTML = w;
    setSizes();
    draw();
});

// -----------------------
const inputH = document.querySelector('#inputH input');
const inputHVal = document.querySelector('#inputH span');

inputH.value = h;
inputHVal.innerHTML = h;

inputH.addEventListener("change", () => {
    h = inputH.value;
    inputHVal.innerHTML = h;
    setSizes();
    draw();
});

// -----------------------
const inputXmin = document.querySelector('#inputXmin input');
const inputXminVal = document.querySelector('#inputXmin span');

inputXmin.value = xMin;
inputXminVal.innerHTML = xMin;

inputXmin.addEventListener("change", () => {
    xMin = Number(inputXmin.value);
    inputXminVal.innerHTML = xMin;
    setSizes();
    draw();
});

// -----------------------
const inputXmax = document.querySelector('#inputXmax input');
const inputXmaxVal = document.querySelector('#inputXmax span');

inputXmax.value = xMax;
inputXmaxVal.innerHTML = xMax;

inputXmax.addEventListener("change", () => {
    xMax = Number(inputXmax.value);
    inputXmaxVal.innerHTML = xMax;
    setSizes();
    draw();
});

// -----------------------
const inputSize = document.querySelector('#inputSize input');
const inputSizeVal = document.querySelector('#inputSize span');

inputSize.value = colorVisibility;
inputSizeVal.innerHTML = colorVisibility;

inputSize.addEventListener("change", () => {
    colorVisibility = Number(inputSize.value);
    inputSizeVal.innerHTML = colorVisibility;

    param.r.size = colorVisibility;
    param.g.size = colorVisibility;
    param.b.size = colorVisibility;

    setSizes();
    draw();
});

// -----------------------
const inputRpos = document.querySelector('#inputRpos input');
const inputRposVal = document.querySelector('#inputRpos span');

inputRpos.value = param.r.transition;
inputRposVal.innerHTML = param.r.transition.toFixed(4);

inputRpos.addEventListener("change", () => {
    param.r.transition = Number(inputRpos.value);
    inputRposVal.innerHTML = param.r.transition.toFixed(4);

    setSizes();
    draw();
});

// -----------------------
const inputGpos = document.querySelector('#inputGpos input');
const inputGposVal = document.querySelector('#inputGpos span');

inputGpos.value = param.g.transition;
inputGposVal.innerHTML = param.g.transition.toFixed(4);

inputGpos.addEventListener("change", () => {
    param.g.transition = Number(inputGpos.value);
    inputGposVal.innerHTML = param.g.transition.toFixed(4);

    setSizes();
    draw();
});

// -----------------------
const inputBpos = document.querySelector('#inputBpos input');
const inputBposVal = document.querySelector('#inputBpos span');

inputBpos.value = param.b.transition;
inputBposVal.innerHTML = param.b.transition.toFixed(4);

inputBpos.addEventListener("change", () => {
    param.b.transition = Number(inputBpos.value);
    inputBposVal.innerHTML = param.b.transition.toFixed(4);

    setSizes();
    draw();
});

// -----------------------
const inputTiled = document.querySelector('#inputTiled input');

inputTiled.checked = tiled;

inputTiled.addEventListener("change", () => {
    tiled = inputTiled.checked;

    setSizes();
    draw();
});

// -----------------------
const inputTileX = document.querySelector('#inputTileX input');
const inputTileXVal = document.querySelector('#inputTileX span');

inputTileX.value = numTileX;
inputTileXVal.innerHTML = numTileX;

inputTileX.addEventListener("change", () => {
    numTileX = Number(inputTileX.value);
    inputTileXVal.innerHTML = numTileX;
    xT = w / numTileX;

    setSizes();
    draw();
});

// -----------------------
const inputTileY = document.querySelector('#inputTileY input');
const inputTileYVal = document.querySelector('#inputTileY span');

inputTileY.value = numTileY;
inputTileYVal.innerHTML = numTileY;

inputTileY.addEventListener("change", () => {
    numTileY = Number(inputTileY.value);
    inputTileYVal.innerHTML = numTileY;
    yT = h / numTileY;

    setSizes();
    draw();
});