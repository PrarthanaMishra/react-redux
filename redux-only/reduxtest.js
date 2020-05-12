const {createStore} = require('redux');

const intialState = {
    age:21
}

const myReducer = (state=intialState, action) => {
    const newState = {...state}
    if ( action.type==='ADD' ) {
        newState.age+=action.val;
    }
    if ( action.type === 'SUBTRACT' ) {
        newState.age-=action.val;
    }
    return newState;
}


const store = createStore(myReducer);

store.subscribe(()=>{
    console.log('state changed', JSON.stringify(store.getState()));
})

store.dispatch({
    'type':'ADD',
    val:5
})
store.dispatch({
    'type':'SUBTRACT',
    val:5
})


// Note: store has two things state and reducer