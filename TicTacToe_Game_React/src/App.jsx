import { useState } from 'react';
import './App.css'
import Board from './Board';


function App() {

  let [count, setCount] = useState(0);

  function Increment(){
    setCount(count+1);
  }

  

  return (
    <>
     

      <Board/>

    </>
  )
}

export default App
