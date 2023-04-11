import React from 'react'
import { useState } from 'react'
import './App.css'
import Cards from "./components/Cards.jsx"
import data from "./data.js"
import boxes from "./boxes.js"
import Box from "./components/Box.jsx"


function App() {
const cards = data.map(item => {
  return (
    <Cards
        key={item.id}
       item={item} 
    />
)
})

const [quote, setQuote] = useState("I wonder what happens when you press the button 🤔")

function handleClick(){
  setQuote("Do you want a cookie?")
}

const [count, setCount] = useState(0)
    
function add() {
setCount(prevCount => prevCount + 1) // using a callback function
}
function subtract() {
  setCount(prevCount => prevCount - 1)
}


const [squares, setSquares] = useState(boxes)

function toggle(id){
  setSquares(prevSquares => {
      return prevSquares.map((square) => {
       return square.id === id ? {...square, on: !square.on} : square
      })
  })
}

const squareElements = squares.map(square => (
    <Box  
        key={square.id} 
        id={square.id}
        on={square.on} 
        toggle={toggle}
    />
))


  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <section className='card--full'>
      {cards}
      </section>
      <div className='quote--text'>
         <p>{ quote }</p>
      </div>
     
      <button onClick={handleClick}>Click Me!</button>
      <hr />
      <div className="counter">
            <h2>Counter</h2>
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h2>{count}</h2>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
        <hr />
        <h2>Toggle boxes</h2>
      <div className='boxes'>
        {squareElements}
      </div>
      
      

    </div>
  )
}

export default App
