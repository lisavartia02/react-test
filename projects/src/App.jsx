import React from 'react'
import { useState } from 'react'
import './App.css'
import Cards from "./components/Cards.jsx"
import data from "./data.js"


function App() {
const cards = data.map(item => {
  return (
    <Cards
        key={item.id}
       item={item} 
    />
)
})

const [name, setName] = useState("Daji")

function handleClick(){
  setName = "Lisa"
}

  return (
    <div className="App">
      <h1>Hello World</h1>
      <section className='card--full'>
      {cards}
      </section>
      <p>{ name }</p>
      <button onClick={handleClick}>Click Me!</button>
      
    </div>
  )
}

export default App
