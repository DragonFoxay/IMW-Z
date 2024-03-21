let layers = [];
let layerSize = 90; // Adjust the maximum layer size as needed

function setup() {
    createCanvas(windowWidth, windowHeight);
    generateLayers();
}

function draw() {
    background(220);
    for (let i = 0; i < layers.length; i++) {
        layers[i].display();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    generateLayers();
}

function generateLayers() {
    layers = [];
    let numRows = ceil(windowHeight / layerSize);
    let numCols = ceil(windowWidth / layerSize);

    for (let y = -1; y < numRows + 1; y++) {
        for (let x = -1; x < numCols + 1; x++) {
            let size = random(layerSize / 2, layerSize); // Random size for each layer
            let offsetX = random(-size / 2, size / 2);
            let offsetY = random(-size / 2, size / 2);
            layers.push(new Layer(x * layerSize + offsetX, y * layerSize + offsetY, size, randomColor()));
        }
    }
}

function mousePressed() {
    for (let i = layers.length - 1; i >= 0; i--) {
        if (layers[i].contains(mouseX, mouseY)) {
            layers.push(layers.splice(i, 1)[0]);
            return;
        }
    }
}

function mouseDragged() {
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].dragging) {
            layers[i].x = mouseX;
            layers[i].y = mouseY;
            return;
        }
    }
}

function mouseReleased() {
    for (let i = 0; i < layers.length; i++) {
        layers[i].dragging = false;
    }
}

function randomColor() {
    return color(random(255), random(255), random(255));
}

class Layer {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = 300;
        this.color = color;
        this.dragging = false;
    }

    display() {
        noStroke(); // Disable stroke (border)
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
    }

    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.size / 2) {
            this.dragging = true;
            return true;
        } else {
            return false;
        }
    }
}