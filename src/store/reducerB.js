const intialState={
    b:1
}
const reducer=(state=intialState, action) => {
    switch(action.type) {
        case 'UPDATE_B':
            return {
                ...state,
                b:state.b+action.a
            }
        case 'DEL_ITEM':
         default:
             return state;   
    }
}

export default reducer;