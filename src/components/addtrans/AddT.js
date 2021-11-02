import React , {useState , useContext} from 'react'
import { Globalcontext } from '../../content/globalstate';

import './addt.css'

export const AddT = () => {
const {addtrans}=useContext(Globalcontext)
const [text,settext]=useState('');
const [amount,setam]=useState(0);

const submittig = (e)=>{
e.preventDefault();
const newtrans={
    id:Math.floor(Math.random()*10000),
    text:text,
    amount:Number(amount),
}

addtrans(newtrans)
}
    return (
        <div>
            <h3 className="headadd">Add New Transaction</h3>
            <form onSubmit={submittig} className="form">
                <div className="formdata">
                    <label>Text:</label>
                    <input type="text" value={text} onChange={(event)=>{settext(event.target.value)}} placeholder="Enter text..."></input>
                </div>
                <div  className="formdata">
                    <label>Cash: <br/><span className="span">(negative-expense , positive-income)</span> </label>
                    <input type="number"   value={amount} onChange={(event)=>{setam(event.target.value)}} placeholder="Enter cash..."></input>
                </div>
                <button onClick={submittig}>Add New Transaction</button>
            </form>
        </div>
    )
}
