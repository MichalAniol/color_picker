let w = 400,
    h = 600,
    xMin = -150, // max to white
    xMax = +100, // max to black
    colorVisibility = 1;

const gh = 256;
const param = {
    r: { size: colorVisibility, transition: 1 / 3 },
    g: { size: colorVisibility, transition: 0 },
    b: { size: colorVisibility, transition: 2 / 3 },
}

let gammaStep = null;

let tiled = false,
    numTileX = 20,
    numTileY = 30,
    xT = w / numTileX, // x size of tile 
    yT = h / numTileY; // y size of tile 

const obj = {
    piker: {
        canvas: document.getElementById('canvas'),
    },
    graph_R: {
        canvas: document.getElementById('graph_R'),
    },
    graph_G: {
        canvas: document.getElementById('graph_G'),
    },
    graph_B: {
        canvas: document.getElementById('graph_B'),
    },
    gamma: {
        canvas: document.getElementById('gamma'),
    }
}

const setSizes = () => {
    for (let key in obj) {
        const canvas = obj[key].canvas;

        x = key == 'piker' || key == 'gamma' ? w : h;
        y = key == 'piker' ? h : gh;

        obj[key].x = x;
        obj[key].y = y;

        canvas.width = x;
        canvas.height = y;

        const ctx = canvas.getContext("2d");
        obj[key].ctx = ctx;

        const data = ctx.getImageData(0, 0, x, y);
        obj[key].data = data;
    }
}
const resetImages = () => {
    for (let key in obj) {
        elem = obj[key];
        elem.ctx.clearRect(0, 0, elem.x, elem.y);

        const data = elem.ctx.getImageData(0, 0, x, y);
        elem.data = data;
    }
}

setSizes();