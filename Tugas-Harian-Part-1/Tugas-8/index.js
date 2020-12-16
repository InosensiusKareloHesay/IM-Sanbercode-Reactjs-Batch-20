var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// Soal 1
var sisaWaktu = 10000
var i = 0

function mulaiBaca(books,sisaWaktu,i){
    readBooks(sisaWaktu,books[i],function(waktu){
        i += 1
        if(waktu !== 0){
            mulaiBaca(books,waktu,i)
        }
    })
}

mulaiBaca(books,sisaWaktu,i)