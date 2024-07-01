import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterComponent from './CounterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h3>Redux Example</h3>
     <CounterComponent />
    </>
  )
}

export default App
