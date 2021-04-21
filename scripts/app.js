const CANVAS = document.querySelector("#lienzo")
const WIDTH = (screen.width > 600) ? 520 : 260
const HEIGHT = WIDTH
const RADIUS = WIDTH/2
const COLOR = {min:195,max:255}
const TIME = 10

// RUN
document.querySelector("#btnInsert").addEventListener("click",insertar)
document.querySelector("#btnGirar").addEventListener("click",girar)
const ruleta = new Ruleta()
ruleta.dibujar()

function insertar() {
    let text = document.querySelector("#inpText").value
    if (text == "") { return }
    ruleta.insertItem(new Item(text))
    document.querySelector("#inpText").value = ""
    putEventEliminar()
}

function girar() {
    ruleta.girar()
}

function eliminar(e) {
    let index = e.target.id
    ruleta.eliminarItem(index)
    putEventEliminar()
}

function putEventEliminar() {
    let arrItems = document.querySelectorAll(".itemClose")
    for (const i of arrItems) {
        i.addEventListener("click",eliminar)
    }
}


