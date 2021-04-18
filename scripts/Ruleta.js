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
        this.escribir()
    }

    eliminarItem(index) {
        this.arrItems.splice(index,1)
        this.dibujar()
        this.escribir()
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

        // DIBUJAR TEXTO
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

    escribir() {
        // ESCRIBIR EN BOX
        document.querySelector("#box").innerHTML = ""
        for (let i = 0; i < this.arrItems.length; i++) {
            document.querySelector("#box").innerHTML += `
                <div class="item">
                    <span>${this.arrItems[i].getName()}</span>
                    <span class="itemClose" id="${i}">&times;</span>
                </div>
            `
        }
    }

    limpiar() {
        this.arrItems = []
        this.dibujar()
        this.escribir()
    }

    girar() {
        console.log("girando...")
        document.querySelector("#lienzo").style = "--angulo:3600deg"
        document.querySelector("#lienzo").className = "girar"
        // setear itemSel
    }

    obtenerData() {
        // VALIDAR QUE TENGA MAS DE 1 ELEMENTO
        if (this.arrItems.length < 2) { return this.dataPrueba }
        else { return this.arrItems }
    }
}