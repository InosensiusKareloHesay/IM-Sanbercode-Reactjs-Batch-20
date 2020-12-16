var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

var sisaWaktu = 10000
var i = 0

function mulaiBaca2(books,sisaWaktu,i){
    readBooksPromise(sisaWaktu,books[i])
        .then(function (sisa) {
            i += 1
            if (i === 3){
                i = 0
            }
            mulaiBaca2(books,sisa,i)
        })
        .catch(function (error) {
        });
}


mulaiBaca2(books,sisaWaktu,i)