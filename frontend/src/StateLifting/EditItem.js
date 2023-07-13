import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EditItem({editItem, editAmount, editQuantity, setitem2, 
    setamount2, setquantity2, updateList}) 
    {
    return (
        <>
            <div className="mx-auto container row">
                <div className="mx-auto col-sm-8 shadow p-4">
                    <form action="">
                        <h1 className="text-center text-muted display-6">Edit Item</h1>
                        <input defaultValue={editItem} type="text"  onChange={(e) => setitem2(e.target.value)} placeholder="item" name="item" id="" className="form-control my-3" />
                        <input defaultValue={editAmount} type="number"  onChange={(e) => setamount2(e.target.value)} placeholder="amount" name="amount" id="" className="form-control my-3" />
                        <input defaultValue={editQuantity} type="number"  onChange={(e) => setquantity2(e.target.value)} placeholder="quantity" name="quantity" id="" className="form-control my-3" />
                        {/* <input type="hidden" placeholder="text" value="" name="_id" className="form-control my-3" /> */}
                        <button onClick={updateList} className="btn btn-success">Modify Changes</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditItem