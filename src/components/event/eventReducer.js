


const initialState = [];


const eventReducer = (state=initialState,action)=>{
    switch(action.type){
        case "CREATE_EVENT":
            return [...state,Object.assign({},action.payload.event)];
        case "UPDATE_EVENT":
            return [
              ...state.filter(event=>event.id!==action.payload.event.id),
              Object.assign({},action.payload.event)
            ]
        case "DELETE_EVENT":
            return [...state.filter(event=>event.id!==action.payload.eventId)]
        case "FETCH_EVENTS":
            return action.payload.events
            
        default:
            return state;
    }
}
export default eventReducer;







// const initialState={
//     data:34
// }
// const testReducer = (state=initialState,action)=>{
//     switch(action.type){
//         case "INCREMENT"
//             return {...state,data:state.data+1};
//         case "DECREMENT"
//             return {...state,data:state.data-1};
//     }
// }
// export default testReducer;