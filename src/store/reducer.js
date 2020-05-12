const intialState={
    age:21,
    history:[]
}
const reducer=(state=intialState, action) => {
    console.log(action);
    switch(action.type) {
        case 'AGE_UP':
            console.log('fdsdfdsf');
            return {
                ...state,
                loading :false,
            age:state.age + action.value,
            history:state.history.concat({id:Math.random(),age:state.age+action.value})  
            }
        case 'AGE_DOWN':
            return {
                ...state,
                age:state.age - action.value,
                history:state.history.concat({id:Math.random(),age:state.age-action.value})
            }
        case 'LOADING':
            return {
                ...state,
                loading : true
            }
        case 'DEL_ITEM':
            return {
                ...state,
                history:state.history.filter(el=> el.id !== action.key)
            }
         default:
             return state;   
    }
}
export default reducer;