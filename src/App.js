import React, { useReducer } from 'react';
import './style.css';

const initialState = { count: 0, name: 'Qamar' };

function reducer(state, action) {
  switch (action.hmm) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function App() {
  const ref = React.useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* using ref */}
      <div>
        <button
          onClick={() =>
            (ref.current.innerText = parseInt(ref.current.innerText) + 1)
          }
        >
          +
        </button>
        <p ref={ref}>0</p>
        <button
          onClick={() =>
            (ref.current.innerText = parseInt(ref.current.innerText) - 1)
          }
        >
          -
        </button>
      </div>

      {/* using reducer */}
      <div>
        Count: {state.count}
        <button onClick={() => dispatch({ hmm: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ hmm: 'increment' })}>+</button>
      </div>
      {state.name}
    </div>
  );
}
