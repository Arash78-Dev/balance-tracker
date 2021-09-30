import React from 'react'
import { Transaction } from './trans/transaction'
import './transactionlist.css'


export const Transactionlist = () => {
    return (
        <div className="trans"> 
            <h3>History</h3>
            <ul className="list">
                <Transaction/>
            </ul>  
        </div>
    )
}

