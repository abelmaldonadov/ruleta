class Item
{
    constructor(name){
        this.name = name
        let r = ((Math.random()*100).toFixed(0) % (COLOR.max-COLOR.min)) + COLOR.min
        let g = ((Math.random()*100).toFixed(0) % (COLOR.max-COLOR.min)) + COLOR.min
        let b = ((Math.random()*100).toFixed(0) % (COLOR.max-COLOR.min)) + COLOR.min
        this.color = `rgb(${r},${g},${b})`
    }

    getName() {
        return this.name
    }

    getColor(){
        return this.color
    }
}