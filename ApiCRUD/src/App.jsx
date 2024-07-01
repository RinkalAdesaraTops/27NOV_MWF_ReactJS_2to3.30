import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apicomponents from './components/Apicomponents'
import LazyLoading from './components/LazyLoading'

function App() {
 console.log('App component called...');
  return (
    <>
      <h3>My Component</h3>
      {/* <Apicomponents /> */}
      <LazyLoading />
    </>
  )
}

export default App
