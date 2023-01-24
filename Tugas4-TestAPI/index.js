const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

app.get("/test", (req,res) => {
    let response = {
        message: "Ini end-point pertama",
        method: req.method,
        code: res.statusCode
    }
    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000")
})

app.get("/profil/:name/:age", (req,res) => {
    let name = req.params.name
    let age = req.params.age
    let response = {
        nama: name,
        umur: age
    }
    res.json(response)
})

app.post("/bujur_sangkar", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)

    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    res.json(response)
})