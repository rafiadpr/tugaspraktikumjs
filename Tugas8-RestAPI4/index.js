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

app.post("/bmi", (req, res) => {
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)
    let bmi = berat / (tinggi * tinggi)

    let status = ""
    if (bmi < 18.5){
        status = "Kekurangan Berat Badan"
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        status = "Berat Badan Normal"
    }
    else if (bmi >= 25 && bmi <= 29.9){
        status = "Kelebihan Berat Badan"
    }
    else {
        status = "Obesitas"
    }

    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: status
    }

    res.json(response)
})