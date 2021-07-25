class Talk
{
    show(item) {
        document.querySelector("#modal").classList.add("active")
        document.querySelector("#modal > .content").classList.add("active")
        document.querySelector("#modal > .content > .modal-header").innerHTML = `<h5>Ganador</h5>`
        document.querySelector("#modal > .content > .modal-body").innerHTML = item.getName()
    }

    hide() {
        document.querySelector("#modal").classList.remove("active")
        document.querySelector("#modal > .content").classList.remove("active")
    }
}
const ALERT = new Talk()