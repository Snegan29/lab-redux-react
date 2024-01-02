
import React from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Increase your CHARM!.</h1>
      <p>{count}💖</p>
      <button onClick={() => dispatch(increment())}>Like</button>
      <button onClick={() => dispatch(decrement())}>Unlike</button>
    </div>
  );
}

export default App;
