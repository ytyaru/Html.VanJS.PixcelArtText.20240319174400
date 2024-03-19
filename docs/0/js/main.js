window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const {h1, p, a} = van.tags
    const ici = new IndexedColorImage(16, 16)
    ici.colors.push([0,0,255,0])
    ici.colors.push([255,0,0,0])
    ici.pixcels[0][0] = 1
    ici.pixcels[0][2] = 1
    ici.pixcels[2][4] = 1
    ici.dot(3,5,1)
    console.log(ici.colors)
    console.log(ici.pixcels)
    console.log(ici.colors[ici.pixcels[0][0]])
    console.log(...ici.colors[ici.pixcels[0][0]])
    ici.make()
    console.log(typeof ici.canvas)
    console.log(ici.canvas)
    document.body.appendChild(ici.canvas)
    document.body.appendChild(document.createElement('p'))
//    van.add(document.querySelector('main'), ici.element)
    for (let i = 0; i < ici.imageData.data.length; i+=4) {
        ici.imageData.data[i + 0] = 190;  // R
        ici.imageData.data[i + 1] = 0;    // G
        ici.imageData.data[i + 2] = 210;  // B
        ici.imageData.data[i + 3] = 255;  // A
    }

    const cvs = document.querySelector('#test-canvas')
    const ctx = cvs.getContext(`2d`, {alpha:true, colorSpace:'srgb', desynchronized:false, willReadFrequently:true});
    const imageData = ctx.createImageData(100, 100);
    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i + 0] = 190;  // R
        imageData.data[i + 1] = 0;    // G
        imageData.data[i + 2] = 210;  // B
        imageData.data[i + 3] = 255;  // A
    }
    ctx.putImageData(imageData, 20, 20);
    /*
    const canvas = van.tags.canvas({id:'my-canvas'})
    const ctx = canvas.getContext(`2d`, {alpha:true, colorSpace:'srgb', desynchronized:false, willReadFrequently:true});
    const imageData = ctx.createImageData(100, 100);
    function dot(imageData, x, y, r, g, b, a) { // 点を打つ（指定した座標x,yに指定した色rgbaの）
        imageData.data[(x + y * imageData.width) * 4] = r
        imageData.data[(x + y * imageData.width) * 4 + 1] = g
        imageData.data[(x + y * imageData.width) * 4 + 2] = b
        imageData.data[(x + y * imageData.width) * 4 + 3] = a
    }
    const imageData = ctx.createImageData(100, 100);
    const author = 'ytyaru'
    van.add(document.querySelector('main'), 
        h1(a({href:`https://github.com/${author}/Html.VanJS.PixcelArtText.20240319174400/`}, 'PixcelArtText')),
        p('ドット絵をテキストファイルで表現する。'),
//        p('Express pixel art as a text file.'),
    )
    van.add(document.querySelector('footer'),  new Footer('ytyaru', '../').make())
    */
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

