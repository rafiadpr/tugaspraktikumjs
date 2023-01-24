const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

app.listen(8000, () => {
    console.log("Server run on port 8000")
})

app.post("/bola", (req,res) => {
    let phi = Number(req.body.phi)
    let rusuk = Number(req.body.rusuk)

    let luasPermukaan = 4 * phi * rusuk ** 2
    let volume = 4/3 * phi * rusuk ** 3

    let response = {
        phi: phi,
        rusuk: rusuk,
        luasPermukaan: luasPermukaan,
        volume: volume
    }
    res.json(response)
})

app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi)

    let luasPermukaan = 6 * (sisi * sisi)
    let volume = sisi ** 3

    let response = {
        sisi: sisi,
        luasPermukaan: luasPermukaan,
        volume: volume
    }
    res.json(response)
})

app.post("/balok", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let luasPermukaan = 2 * ((panjang * lebar) + (lebar * tinggi) + (panjang * tinggi))
    let volume = panjang * lebar * tinggi

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luasPermukaan: luasPermukaan,
        volume: volume
    }
    res.json(response)
})

app.post("/kerucut", (req,res) => {
    let phi = Number(req.body.phi)
    let rusuk = Number(req.body.rusuk)
    let tinggi = Number(req.body.tinggi)
    let sisi = Number(req.body.sisi)

    let luasPermukaan = phi * rusuk * (rusuk + sisi)
    let volume = 1/3 * phi * rusuk ** 2 * tinggi

    let response = {
        phi: phi,
        rusuk: rusuk,
        tinggi: tinggi,
        sisi: sisi,
        luasPermukaan: luasPermukaan,
        volume: volume
    }
    res.json(response)
})