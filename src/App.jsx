import { useState } from 'react'
import NavBar from './components/NavBar'
import LayoutPins from './components/LayoutPins.jsx'
import LoadingState from './components/LoadingState.jsx'

function App() {

    return (
        <>
          <LoadingState/>
          <NavBar/>
          <LayoutPins/>
        </>
    )
}

export default App
