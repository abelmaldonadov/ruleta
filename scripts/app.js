const CANVAS = document.querySelector("#lienzo")
const WIDTH = 520
const HEIGHT = 520
const RADIUS = 260
const arrItems = ["manzana", "pera", "platano", "papaya", "mandarina"]
const COLOR = {min:195,max:255}

// RUN
document.querySelector("#btnInsert").addEventListener("click",insertar)
const ruleta = new Ruleta()
ruleta.dibujar()

function insertar() {
    let text = document.querySelector("#inpText").value
    if (text == "") { return }
    ruleta.insertItem(new Item(text))
    document.querySelector("#inpText").value = ""
}






