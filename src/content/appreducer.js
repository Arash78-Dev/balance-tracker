

const appreducer=(state,action)=>{
    switch (action.type) {
        case 'DeleteTrans':
        return {
            ...state,
            transaction: state.transaction.filter(transaction=> transaction.id!== 
                action.payload)
        }
        case 'AddTrans':
        return {
            ...state,
            transaction:[action.payload,...state.transaction,]
        }
        default:
            return state
    }
}


export default appreducer