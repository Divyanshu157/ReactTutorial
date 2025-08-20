import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(5)
  // let counter = 5
  const addValue = () => {
    setCounter(counter + 1);
    console.log("Counter:", counter);
  }

  const subValue =()=>{
    setCounter(counter - 1);
    console.log("Counter:", counter);
  }

  
  return (
    <>
    <h1>Hello Vite + React! | Divyanshu</h1>
    <h2>Counter: {counter}</h2>

    <button
    onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={subValue}>Subs Value {counter}</button>
      
      <footer>{counter}</footer>

    </>
  )
}

export default App
