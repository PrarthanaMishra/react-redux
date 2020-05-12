const intialState={
    a:1
}
const reducer=(state=intialState, action) => {
    switch(action.type) {
        case 'UPDATE_A':
           return {
               ...state,
               a:state.a+action.b
           }
        case 'DEL_ITEM':
         default:
             return state;   
    }
}

export default reducer;