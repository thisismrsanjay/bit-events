// eslint-disable-next-line
import uuid from 'uuid';


 const flashMessageReducer= (state=[],action={})=>{
    switch(action.type){
        case "ADD_FLASH_MESSAGE":
            return [
                ...state,
                Object.assign({id:uuid()},action.payload.message)
            ]

        default :return state;
    }
    
}

export default flashMessageReducer;