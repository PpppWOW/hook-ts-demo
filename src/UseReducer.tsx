import React, {Component, useReducer} from 'react';

interface stateType {
    count: number
}

enum actionType {
    'reset', 'decrement', 'increment'
}

const initialState = {count: 0}

function setState(st: stateType, at: actionType) {
    switch (at) {
        case actionType.reset:
            return initialState
        case actionType.increment:
            return {count: st.count + 1}
        case actionType.decrement:
            return {count: st.count - 1}
    }


}

function UseReducer({x = 0}) {
    const [state, dispatch] = useReducer(setState, {count: x})

        return (
            <div>
                Count: {state.count}
                <button onClick={() => dispatch(actionType.reset)}>reset</button>
                <button onClick={() => dispatch(actionType.decrement)}>decrement</button>
                <button onClick={() => dispatch(actionType.increment)}>increment</button>
            </div>
        );

}

export default UseReducer;