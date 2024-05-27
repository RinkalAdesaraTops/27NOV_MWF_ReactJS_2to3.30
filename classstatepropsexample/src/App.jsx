import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifecycleClass from './components/LifecycleClass'
import Myfunction from './components/Myfunction'
import Reactlifecycle from './components/Reactlifecycle'

function App() {
  return (
    <>
      My First React + Vite Project
      {/* <LifecycleClass name="Xyzname" />*/}
      <Myfunction name="abc"/> 
      <Reactlifecycle />
    </>
  )
}

export default App
