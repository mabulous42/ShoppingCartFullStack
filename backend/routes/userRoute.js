const userRoutes = require("express").Router()
const {addToCart, viewList, del, edit, updateItem} = require("../controllers/userController");

userRoutes.post("/addToCart", addToCart);
userRoutes.get("/viewList", viewList);
userRoutes.post("/deleteItem", del);
userRoutes.get("/editItem/:id", edit)
userRoutes.post("/editItem", updateItem)

module.exports = userRoutes