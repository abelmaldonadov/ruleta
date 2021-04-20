class Alert
{
    constructor() {
        document.querySelector("#app").innerHTML += `
            <div class="alert" id="alert"></div>
        `
        document.querySelector("#alert").classList.add("hide")
    }

    show(item) {
        document.querySelector("#alert").innerHTML = `
            <div class="alertContent">
                <div class="alertBody">
                    <h3 class="subtitulo">${item.getName()}</h3>
                </div>
                <div class="alertFooter">
                    <button class="btn" id="hideAlert">Ok</button>
                </div>
            </div>
        `
        document.querySelector("#alert").classList.remove("hide")
        document.querySelector("#hideAlert").addEventListener("click",this.hide)
    }

    hide() {
        document.querySelector("#alert").classList.add("hide")
    }
}
const ALERT = new Alert()