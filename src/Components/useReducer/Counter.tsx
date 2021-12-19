import { useReducer } from "react";

const DECREMENT_COUNT = "DECREMENT_COUNT";
const INCREMENT_COUNT = "INCREMENT_COUNT";

type counterState = {
    count: number,
}

type counterAction = {
 type: string,
 payload: number,
}

const initialState: counterState = { count: 0 };

const reducer = (state: counterState, action: counterAction) => {
    switch(action.type){
        case DECREMENT_COUNT: {
            return { count: state.count + action.payload }
        }
        case INCREMENT_COUNT: {
            return { count: state.count - action.payload }
        } 
        default: {
            return state;
        }
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>count is equal to {state.count}</h1>
            <button onClick={()=> dispatch({type: DECREMENT_COUNT, payload: 10})} >increment count</button>
            <button onClick={()=> dispatch({type: INCREMENT_COUNT, payload: 10})} >decrement count</button>
        </div>
    )
};