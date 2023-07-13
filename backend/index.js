const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoute");


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: "*" }))
app.use("/shopping", userRoutes)

app.listen("5050", ()=>{
    console.log("Server Started at port 5050");
})

const uri = "mongodb+srv://mabulous42:United4ever12345@cluster0.ubjmkrq.mongodb.net/FullStackShoppingList?retryWrites=true&w=majority"

const connect = async()=>{
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri);
    console.log("Moongoose is connected to MongoDB");
}

connect();