import React, { useState } from 'react'
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Shopping from './Shopping';
import EditItem from './EditItem';

function ListStateLifting() {
    const navigate = useNavigate()
    const [item, setitem] = useState("");
    const [amount, setamount] = useState()
    const [quantity, setquantity] = useState()
    const [cart, setcart] = useState([])
    const [sum, setsum] = useState(0)

    const [editItem, seteditItem] = useState("")
    const [editAmount, seteditAmount] = useState()
    const [editQuantity, seteditQuantity] = useState()
    const [id, setid] = useState("")

    const [item2, setitem2] = useState("");
    const [amount2, setamount2] = useState()
    const [quantity2, setquantity2] = useState()

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

    const updateList = (e) => {
        e.preventDefault()
        // let subtotal = (amount * quantity)
        let _id = id;
        let subtotal = amount2 * quantity2;
        let item = item2;
        let amount = amount2;
        let quantity = quantity2;
        const list = { item, amount, quantity, subtotal, _id }
        console.log(list);
        const uri = `http://localhost:5050/shopping/editItem`
        axios.post(uri, list).then((response) => {
            console.log(response);
            alert(response.data.message)
            navigate("/")
            viewList()
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <>
            <Routes>
                <Route path={"/"} element={
                    <Shopping
                        setitem={setitem}
                        setamount={setamount}
                        setquantity={setquantity}
                        addToCart={addToCart}
                        sum={sum}
                        cart={cart}
                        edit={edit}
                        del={del}
                        viewList={viewList}
                    />
                } />

                <Route path={"/editItem"} element={
                    <EditItem
                        editItem={editItem}
                        editAmount={editAmount}
                        editQuantity={editQuantity}
                        id={id}
                        setitem2={setitem2}
                        setamount2={setamount2}
                        setquantity2={setquantity2}
                        updateList={updateList}
                    />}
                />
            </Routes>
        </>
    )
}

export default ListStateLifting