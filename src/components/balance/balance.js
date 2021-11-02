import React , {useContext} from 'react'
import './balance.css'
import { Globalcontext } from '../../content/globalstate'

export const Balance = () => {

  const transaction = useContext(Globalcontext)
  let balance=0;
  let color="green";
  let sign = ""
  
  for(let item of transaction.transaction){
    
    balance+=item.amount;
  }

  if (balance<0) {
    color="red"
    sign="-"
  }
    return (
        <>
          <h4 className="balance h4 ">Your Balance</h4>
          <h1 id={color} className="balance h" >{sign}${Math.abs(balance).toFixed(2)} </h1>  
        </>
    )
}

export default Balance