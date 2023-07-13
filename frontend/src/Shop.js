import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Shop() {
    const navigate = useNavigate()
    const [item, setitem] = useState("");
    const [amount, setamount] = useState()
    const [quantity, setquantity] = useState()
    const [cart, setcart] = useState([])
    const [sum, setsum] = useState()

    const [editItem, seteditItem] = useState("")
    const [editAmount, seteditAmount] = useState()
    const [editQuantity, seteditQuantity] = useState()
    const [id, setid] = useState("")

    const addToCart = (e) => {
        e.preventDefault()
        let subtotal = (amount * quantity)
        const list = { item, amount, quantity, subtotal }
        console.log(list);
        const uri = "http://localhost:5050/shopping/addToCart"
        axios.post(uri, list).then((response) => {
            console.log(response);
            alert(response.data.message)
        }).then(()=>{
            viewList();
        })
        .catch((error) => {
            console.log(error);
        })

    }

    const viewList = () => {
        const uri = "http://localhost:5050/shopping/viewList"
        axios.get(uri).then((res) => {
            //   console.log(res.data);
            let result = res.data;
            setcart(result)
            console.log(cart);
            setsum(res.data.reduce((total, index) => { return index.subtotal + total }, 0));

        }).then(console.log(cart))
            .catch((err) => {
                console.log(err)
            })
    }

    const del = (index) => {
        console.log(index);
        const uri = "http://localhost:5050/shopping/deleteItem"
        axios.post(uri, { index }).then((response) => {
            console.log(response);
            alert(response.data.message)
        }).then(()=>{
            viewList();
        }).catch((error) => {
            console.log(error.response.data.message);
        })
    }

    const edit = (index) => {
        console.log(index);
        const uri = `http://localhost:5050/shopping/editItem/${index}`
        axios.get(uri).then((res) => {
            console.log(res.data);
            let { item, amount, quantity, _id } = res.data;
            seteditItem(item)
            seteditAmount(amount)
            seteditQuantity(quantity)
            setid(_id)
            navigate(`/editItem`)
            console.log(item, amount, quantity, _id);
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <>
    <div className="mx-auto container row">
                <div className="mx-auto col-sm-8 shadow p-4">
                    <form action="">
                        <h1 className="text-center text-muted display-6">Shopping List</h1>
                        <input type="text" onChange={(e) => {setitem(e.target.value)}} placeholder="item" name="" id="" className='form-control my-3' />
                        <input type="number" onChange={(e) => setamount(e.target.value)} placeholder="amount" name="amount" id="" className="form-control my-3" />
                        <input type="number" onChange={(e) => setquantity(e.target.value)} placeholder="quantity" name="quantity" id="" className="form-control my-3" />
                        <div className="d-flex align-items-center justify-content-between">
                            <button onClick={addToCart} className="btn btn-success">Add to List</button>
                            <h6>Total: <span>{sum}</span></h6>
                        </div>
                    </form>
                </div>
            </div>
                <div className='col-sm-9 shadow-lg p-5 mx-auto'>
                    <h6 className='text-muted display-6 text-center'>View Items List</h6>
                    <button className='btn btn-dark' onClick={viewList}>Click Me</button>
                    {
                        cart.map((items, index)=>(
                            <div key={index} className='d-flex justify-content-evenly my-3'>
                                <div>{index+1}.</div>
                                <div>Item: {items.item}</div>
                                <div>Amount: {items.amount}</div>
                                <div>Quantity: {items.quantity}</div>
                                <div>Subtotal: {items.subtotal}</div>
                                <div className='me-2'>
                                    <button onClick={()=>edit(cart[index]._id)} type="submit" className='btn btn-primary'>Edit</button>
                                </div>
                                <div>
                                    <button onClick={()=>del(cart[index]._id)} type="submit" className='btn btn-danger'>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
    </>
  )
}

export default Shop