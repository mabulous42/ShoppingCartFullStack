import React, { useState } from 'react'



function Shopping({setitem, setamount, setquantity, addToCart, edit, del, viewList, sum, cart}) {
   

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
                            <h6>Total: <span>{Number(sum).toLocaleString()}</span></h6>
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

export default Shopping