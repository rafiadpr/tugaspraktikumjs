let barang = [
    {
        nama : "Rinso", 
        harga : 5000
    },
    {
        nama : "Moonlight",
        harga : 4000
    }
]
console.log ("Isi array barang")
console.log (barang)
console.log ('Jumlah Data = ' + barang.length)

console.log ("------------------------------")

barang.push (
    {
        nama : "Molto",
        harga : 1000
    }
)

console.log ("Isi array barang saat ini")
console.log (barang)
console.log ('Jumlah Data saat ini = ' + barang.length)