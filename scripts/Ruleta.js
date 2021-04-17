class Ruleta
{
    constructor() {
        this.arrItems = []
        this.itemSel
        this.dataPrueba = [new Item("manzana"), new Item("pera"), new Item("mandarina"), new Item("uva"), new Item("naranja")]
    }

    getItemSel() {
        return this.itemSel
    }

    insertItem(item) {
        this.arrItems.push(item)
        this.dibujar()
    }

    dibujar() {
        let data = this.obtenerData()
        CANVAS.width = WIDTH
        CANVAS.height = HEIGHT
        let context = CANVAS.getContext('2d')
        context.clearRect(0,0,WIDTH,HEIGHT)
        context.translate(WIDTH/2, HEIGHT/2)

        // DIBUJAR SECTORES CIRCULARES
        for (let i = 0; i < data.length; i++) {
            context.beginPath()
            context.moveTo(0, 0)
            context.arc(0, 0, RADIUS, 0, -2*Math.PI/data.length, true)
            context.lineTo(0, 0)
            context.fillStyle = data[i].getColor()
            context.fill()
            context.rotate(-2*Math.PI/data.length)
        }

        // ESCRIBIR TEXTO
        context.rotate(-2*Math.PI/(data.length*2))
        for (let i = 0; i < data.length; i++) {
            context.save()
            context.translate(70,0)
            context.lineWidth = 2
            context.font = "15px sans-serif"
            context.textAlign = "center"
            context.baseLine = "middle"
            context.fillStyle = "black"
            context.fillText(data[i].getName(),70,0)
            context.restore()
            context.rotate(-2*Math.PI/data.length)
        }
    }

    limpiar() {
        this.arrItems = []
        this.dibujar()
    }

    girar() {
        // clase css
        // setear itemSel
    }

    obtenerData() {
        // VALIDAR QUE TENGA MAS DE 1 ELEMENTO
        if (this.arrItems.length < 2) { return this.dataPrueba }
        else { return this.arrItems }
    }
}