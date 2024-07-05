import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCrudComponent from './UserCrudComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Redux CRUD Example</h3>
      <UserCrudComponent />
    </>
  )
}

export default App
