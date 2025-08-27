import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/component/Card'

function App() {
  
  const [counter,setCounter] = useState(15)


  const addCount=()=>{

    //set counter always gives callback
    setCounter(counter => counter+1)
    setCounter(counter=> counter+1)
    setCounter(counter=> counter+1)
    setCounter(counter => counter+1)
  }

   const subCount=()=>{
    setCounter(counter => counter-1)
    setCounter(counter=> counter-1)
    setCounter(counter=> counter-1)
    setCounter(counter => counter-1)
  }

  return (
    <>
     <h1> Divyanshu | vite</h1>

     <button onClick={addCount}>{counter}Add</button>
     <br />
     <button onClick={subCount}>{counter}Substract</button>

      <Card
        title="Beautiful Sculpture"
        description="Handcrafted marble sculpture with fine detailing."
        imageUrl="https://via.placeholder.com/300x200"
      />
    </>
  )
}
export default App
