// Soal 1
const luasLingkaran = (r) =>{
    return 3.14 * r**2
}

console.log(luasLingkaran(4))

const kelilingLingkaran =(r) =>{
    return 2 * 3.14 * r 
}

console.log(kelilingLingkaran(4))


// Soal 2
let kalimat = ""

const tambahKata = (kata) => {
    kalimat = `${kalimat} ${kata}`
    console.log(kalimat)
}

let kumpulanKata = ['saya','adalah','seorang','frontend','developer']
kumpulanKata.forEach(tambahKata)


// Soal 3
const newFunction = function literal(firstName, lastName){
    return {
        fullName(){
            console.log(firstName + " " + lastName)
      }
    }
}
   
//Driver Code 
newFunction("William", "Imoh").fullName()


// Soal 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject
console.log(firstName, lastName, destination, occupation)


// Soal 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
// const combined = west.concat(east)
//Driver Code
let combined = [...west, ...east]
console.log(combined)