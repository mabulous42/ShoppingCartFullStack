const shopListModel = require("../models/user.model");

const addToCart = async(req,res)=>{
    let {item, amount, quantity, subtotal} = req.body;
    try {
        const newList = new shopListModel({
            item,
            amount,
            quantity,
            subtotal
        })
        const result = await newList.save()
        console.log(result);
        return res.status(201).send({ message: "Items Added Successful", status: true })

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal server error", status: false })
    }
}

const viewList = async (req, res) => {
    try {
        const list = await shopListModel.find({}, {item: 1, amount: 1, quantity: 1, subtotal:1})
        console.log(list)
        res.status(200).send(list)
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "Internal server error", status: false })
    }
}

//DELETE
const del = async(req,res)=>{
    try {
        let {index} = req.body;
        console.log(index);
        const deleteItem = await shopListModel.findByIdAndDelete({_id:index});
        console.log(deleteItem);
        return res.status(201).send({ message: "Items Deleted Successful", status: true })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal server error", status: false })
    }
}

const edit = async(req,res)=>{
    try {
        let id = req.params.id;
        console.log(id);
        const entry = await shopListModel.findOne({_id:id});
        const {_id, item, amount, quantity} = entry;
        console.log(_id, item, amount, quantity); 
        res.status(200).send(entry)  
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal server error", status: false })
    }
}

const updateItem = async(req,res)=>{
    try {
        console.log(req.body);
        const {item, amount, quantity, subtotal, _id} = req.body;
        console.log(item, amount, quantity, subtotal, _id);
        const update = await shopListModel.findByIdAndUpdate({_id:_id}, {$set:{item:item, amount:amount, quantity:quantity, subtotal:subtotal}});
        console.log("updated: " +update);
        return res.status(201).send({ message: "Items Updated Successful", status: true })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal server error", status: false })
    }
}

module.exports = {addToCart, viewList, del, edit, updateItem}