import {createContext , useReducer} from "react";
import appreducer from "./appreducer";
const initialstate={
    transaction:[]
}

export const Globalcontext = createContext(initialstate)

export const Globalprovider = ({children})=>{
    const[state,dispatch]=useReducer(appreducer,initialstate)


    function Deletetrans (id) {
        dispatch({
            type:'DeleteTrans',
            payload:id,
        });
        
    }
    function addtrans (trans) {
        dispatch({
            type:'AddTrans',
            payload:trans,
        });
        
    }

    return( 
            <Globalcontext.Provider value={{
                transaction: state.transaction,
                Deletetrans
                ,addtrans
            }}
            
            >
                {children}
            </Globalcontext.Provider>
          )
}
