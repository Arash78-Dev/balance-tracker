import React , {useContext} from 'react'
import { Globalcontext } from '../../../content/globalstate'
import './transaction.css'


export const Transaction = () => {
const {transaction} = useContext(Globalcontext)
const {Deletetrans}=useContext(Globalcontext)

console.log(transaction)


let li
if (transaction.length!==0) {
    li = transaction.map((item)=>{
        let classes = "";
        let sign=""
        if (item.amount<0) {
            classes="red"
            sign="-"
        }
        else{
            classes="green"
            sign="+"
        }
        return(<li className={classes} key={item.id}>{item.text} <span>{sign}${Math.abs(item.amount)} </span> 
        <span onClick={()=>{Deletetrans(item.id)}}  className="delete">x</span> </li>)
    })
}
else{
    li= (<p className="paragraph">nothing is shared....</p>)
}

    return (
        <div className="lis">
            {li}
        </div>
    )
}



