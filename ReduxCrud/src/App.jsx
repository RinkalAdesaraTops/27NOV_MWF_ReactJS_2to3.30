import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCrudComponent from './UserCrudComponent'
import Countercomponent from './Countercomponent'

function App() {
  return (
    <>
      <h3>Redux CRUD Example</h3>
      {/* <UserCrudComponent /> */}
      <Countercomponent />
    </>
  )
}

export default App
