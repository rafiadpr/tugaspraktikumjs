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

app.get("/convert/:celcius/:temp", (req,res) => {
    let temp = req.params.temp

    let reamur = 4/5 * temp
    let fahrenheit = 9/5 * temp + 32
    let kelvin = 273 + temp * 1

        let response = {
            celcius: temp,
            result : {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
    res.json(response)
})

app.get("/convert/:reamur/:temp", (req,res) => {
    let temp = req.params.temp

    let celcius = 5/4 * temp
    let fahrenheit = 9/4 * temp + 32
    let kelvin = 5/4 * temp + 273

        let response = {
            reamur: temp,
            result : {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
    res.json(response)
})

app.get("/convert/:kelvin/:temp", (req,res) => {
    let temp = req.params.temp

    let celcius = temp - 273
    let reamur = 4/5 * (temp - 273)
    let fahrenheit = 9/5 * (temp - 273) + 32

        let response = {
            kelvin: temp,
            result : {
            celcius: celcius,
            fahrenheit: fahrenheit,
            reamur: reamur
        }
    }
    res.json(response)
})

app.get("/convert/:fahrenheit/:temp", (req,res) => {
    let temp = req.params.temp

    let celcius = 5/9 * (temp - 32)
    let reamur = 4/9 * (temp - 32)
    let kelvin = 5/9 * (temp - 32) + 273

        let response = {
            fahrenheit: temp,
            result : {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }
    res.json(response)
})