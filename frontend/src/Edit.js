import axios from 'axios'
import React, { useState } from 'react'

function Edit() {
    const [editItem, seteditItem] = useState("")
    const [editAmount, seteditAmount] = useState()
    const [editQuantity, seteditQuantity] = useState()

    const [item2, setitem2] = useState("");
    const [amount2, setamount2] = useState()
    const [quantity2, setquantity2] = useState()

    const updateList = (e) => {
        e.preventDefault()
        // let subtotal = (amount * quantity)
        // let _id = id;
        let { item, amount, quantity } = { editItem, editAmount, editQuantity }
        const list = { item, amount, quantity }
        console.log(list);
        const uri = "http://localhost:5050/shopping/addToCart"
        axios.post(uri, list).then((response) => {
            console.log(response);
            alert(response.data.message)
        }).catch((error) => {
            console.log(error);
        })
    }

  return (
    <>
        <div className="mx-auto container row">
                <div className="mx-auto col-sm-8 shadow p-4">
                    <form action="">
                        <h1 className="text-center text-muted display-6">Edit Item</h1>
                        <input type="text" value={editItem} onChange={(e) => setitem2(e.target.value)} placeholder="item" name="item" id="" className="form-control my-3" />
                        <input type="number" value={editAmount} onChange={(e) => setamount2(e.target.value)} placeholder="amount" name="amount" id="" className="form-control my-3" />
                        <input type="number" value={editQuantity} onChange={(e) => setquantity2(e.target.value)} placeholder="quantity" name="quantity" id="" className="form-control my-3" />
                        {/* <input type="hidden" placeholder="text" value="" name="_id" className="form-control my-3" /> */}
                        <button onClick={updateList} className="btn btn-success">Modify Changes</button>
                    </form>
                </div>
            </div>
    </>
  )
}

export default Edit