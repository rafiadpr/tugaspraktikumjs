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

app.post("/decimal", (req,res) => {

    let decimal = Number(req.body.decimal)
    let biner = decimal.toString(2)
    let octal = decimal.toString(8)
    let hexadecimal = decimal.toString(16)

    let response = {
        angkaDecimal: decimal,
        result : {
        biner: biner,
        octal: octal,
        hexadecimal: hexadecimal
    }
}
    res.json(response)
})

app.post("/biner", (req,res) => {
    let biner = Number(req.body.biner)
    let decimal = parseInt(biner, 2)
    let octal = parseInt(biner, 2).toString(8)
    let hexadecimal = parseInt(biner, 2).toString(16).toUpperCase()

    let response = {
        angkaBiner: biner,
        result : {
        decimal: decimal,
        octal: octal,
        hexadecimal: hexadecimal
    }
}
    res.json(response)
})

app.post("/octal", (req,res) => {
    let octal = Number(req.body.octal)
    let decimal = parseInt(octal, 8).toString(10)
    let biner = parseInt(octal, 8).toString(2)
    let hexadecimal = parseInt(octal, 8).toString(16).toUpperCase()

    let response = {
        angkaOctal: octal,
        result : {
        decimal: decimal,
        biner: biner,
        hexadecimal: hexadecimal
    }
}
    res.json(response)
})

app.post("/hexadecimal", (req,res) => {
    let hexadecimal = Number(req.body.hexadecimal)
    let decimal = parseInt(hexadecimal, 16).toString(10)
    let biner = parseInt(hexadecimal, 16).toString(2)
    let octal = parseInt(hexadecimal, 16).toString(8)

    let response = {
        angkaHexadecimal: hexadecimal,
        result : {
        decimal: decimal,
        biner: biner,
        octal: octal
    }
}
    res.json(response)
})