const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")

const app = express()

app.listen(8000, ()=>{
    console.log(" ---- Server Started ----");
})