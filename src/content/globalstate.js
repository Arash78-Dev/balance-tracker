import {createContext , useReducer} from "react";
import appreducer from "./appreducer";
const initialstate={
    transaction:[
        {id:1,text:'flower', amount:-20},
        {id:2,text:'global warming', amount:230},
        {id:3,text:'ping pong', amount:-321},
    ]
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
