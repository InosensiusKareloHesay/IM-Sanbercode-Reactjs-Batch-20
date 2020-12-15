// Soal 1
class Animal {
    constructor(name){
        this._name = name
        this._legs = 4
        this._cold_blooded = false
    }

    get name(){
        return this._name
    }

    get legs(){
        return this._legs
    }

    get cold_blooded(){
        return this._cold_blooded
    }
}

class Ape extends Animal{
    constructor(name){
        super(name)
        this._legs = 2
    }
    yell(){
        console.log("Auooo")
    }
}

class Frog extends Animal{
    constructor(name){
        super(name)
    }
    jump(){
        console.log("hop hop")
    }
}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop


// Soal 2
class Clock{
    constructor({template}){
        this._template = template
        this._timer = 0
    }

    start = () => {
        this.render()
        this._timer = setInterval(this.render, 1000)
    }
        
    stop = () => {
        clearInterval(this._timer);
    }

    render = () => {
        this._date = new Date()

        this._hours = this._date.getHours();
        if (this._hours < 10) this._hours = '0' + this._hours;
  
        this._mins = this._date.getMinutes();
        if (this._mins < 10) this._mins = '0' + this._mins;
  
        this._secs = this._date.getSeconds();
        if (this._secs < 10) this._secs = '0' + this._secs;

        var output = this._template
            .replace('h', this._hours)
            .replace('m', this._mins)
            .replace('s', this._secs)
    
        console.log(output);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 