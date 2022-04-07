import {useState} from 'react';

const initialState = {
    cart: [],
}

const useInitialState = ()=> {
    const [state, setState]= useState(initialState);
    const addToCar = (payload)=> {
        setState({
            ...state,
            cart:[...state.cart, payload]
        });
    };
    return{
        state,
        addToCar
    }
}
export default useInitialState;