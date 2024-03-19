class Canvas2D {
    constructor(w, h) {
        this._el = document.createElement('canvas')
        this._ctx = this._el.getContext(`2d`, {alpha:true, colorSpace:'srgb', desynchronized:false, willReadFrequently:true})
        this._d = this._ctx.createImageData(w, h);
    }
    get element() { return this._el }
    get context() { return this._ctx }
    get imageData() { return this._d }
    dot(x, y, r, g, b, a) {
        this._d.data[(x + y * this._d.width) * 4] = r
        this._d.data[(x + y * this._d.width) * 4 + 1] = g
        this._d.data[(x + y * this._d.width) * 4 + 2] = b
        this._d.data[(x + y * this._d.width) * 4 + 3] = a
    }
    put(dx=0, dy=0) { this._ctx.putImageData(this._d, dx, dy) }
}
class IndexedColorImage {
    constructor(w, h) {
        this._cvs = new Canvas2D(w, h)
        this._colors = []
//        this._pixcels = []
        this._pixcels = JSON.parse(JSON.stringify((new Array(w)).fill((new Array(h)).fill(0))));
    }
    get colors() { return this._colors }
    get pixcels() { return this._pixcels }
    get imageData() {
        for (let x=0; x<this._cvs.width; x++) {
            for (let y=0; y<this._cvs.height; y++) {
                const c = this._colors[this._pixcels[x][y]]
                //this._cvs.dot(x, y, c.R, c.G, c.B, c.A)
                this._cvs.dot(x, y, ...c)
            }
        }
        this._cvs.put();
    }
}
/*
class paletteRGB {
    constructor() {
        this._colors = []
    }
    add(color) { this._colors.push(color) }
}
class paletteColorRGB {
    constructor() {
        this._r = 0
        this._g = 0
        this._b = 0
    }
    get R() { return this._r }
    get G() { return this._g }
    get B() { return this._b }
    set isRange(v) { return (0 <= v && v <= 255) }
}

class paletteColorRGBA {

}
class Raster {
    constructor(w, h) {
        this._imgDt = 
    }
}
*/
