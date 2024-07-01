import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apicomponents from './components/Apicomponents'

function App() {
 console.log('App component called...');
  return (
    <>
      <h3>My Component</h3>
      <Apicomponents />
    </>
  )
}

export default App
