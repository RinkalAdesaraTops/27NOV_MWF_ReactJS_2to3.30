import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifecycleClass from './components/LifecycleClass'
import Myfunction from './components/Myfunction'
import Reactlifecycle from './components/Reactlifecycle'
import Component1 from './components/Component1'
import UseRefDemo from './components/UseRefDemo'
import UseMemoExample from './components/UseMemoExample'
import ApiComponent from './components/ApiComponent'
import CRUDExample from './components/CRUDExample'

function App() {
  return (
    <>
      My First React + Vite Project
      {/* <LifecycleClass name="Xyzname" />*/}
      {/* <Myfunction name="abc"/> 
      <Reactlifecycle /> */}
      {/* <Component1 name="Abc"/> */}
      {/* <UseRefDemo /> */}
      {/* <UseMemoExample /> */}
      {/* <ApiComponent /> */}
      <CRUDExample />
    </>
  )
}

export default App
