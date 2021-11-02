import React,{useContext} from 'react'
import './incom.css'
import { Globalcontext } from '../../content/globalstate'

export const Income = () => {

    let income = 0 ;
    let expense=0;

    let {transaction} = useContext(Globalcontext)
    for (let  item of transaction) {
        if (item.amount<0) {
            expense+=item.amount;
        }
        else{
            income+=item.amount;
        }
    }
    return (
        <div className="inc-ex-box">

            <div className="income">
                <h3>Income</h3>
                <p id="in-money" className="in money">+${ Math.abs(income).toFixed(2)}</p>
            </div> 

            <div className="expense">
                <h3>Expense</h3>
                <p id="ex-money" className="ex money">-${Math.abs(expense).toFixed(2)}</p>
            </div> 
            
        </div>
    )
}


export default Income