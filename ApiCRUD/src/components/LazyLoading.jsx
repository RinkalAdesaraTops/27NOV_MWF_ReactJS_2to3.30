import React, { Suspense } from 'react'
// import Home from './Home'
// import Contact from './Contact'
import { lazy } from 'react'
const Home = lazy(()=>import('./Home'))
const Contact = lazy(()=>import('./Contact'))


const LazyLoading = () => {
  return (
    <div>
      <h2>Lazy Loading Example</h2>
      <Suspense fallback={<div>Loading.....</div>}>
        <Home />
      </Suspense>
      <Suspense fallback={<div>Plz Wait.....</div>}>
        <Contact />
      </Suspense>
    </div>
  )
}

export default LazyLoading
