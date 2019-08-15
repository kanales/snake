function toRad(x) {
    return x * Math.PI / 180;
}

function rgbToHex(r, g, b) {
    var hexValue = (r << 16) + (g << 8) + (b << 0);
    var hexString = hexValue.toString(16);
    hexString = '#' + Array(7 - hexString.length).join('0') + hexString;  //Add 0 padding
    return hexString;
}

class Canvas {
    constructor(id) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.WIDTH = this.canvas.width;
        this.HEIGHT = this.canvas.height;
    }

    fill(r, g, b) {
        this.ctx.fillStyle = rgbToHex(r, g, b);
    }
    stroke(r, g, b) {
        this.ctx.strokeStyle = rgbToHex(r, g, b);
    }

    strokeWidth(w) {
        this.ctx.lineWidth = w;
    }

    rect(x, y, w, h) {
        this.ctx.fillRect(x, y, w, h);
    }

    line(x1, y1, x2, y2) {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }

    arc(x, y, r, start, stop) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, toRad(start), toRad(stop));
        this.ctx.stroke();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    }

    font(font_str) {
        this.ctx.font = font_str;
    }

    fill_text(text, x, y) {
        this.ctx.fillText(text, x, y);
    }

    stroke_text(text, x, y) {
        this.ctx.strokeText(text, x, y);
    }

}