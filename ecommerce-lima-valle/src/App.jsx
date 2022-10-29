import { useState } from 'react'
import Header from './components/Header'
import './Header.css'
import ItenListContainer from './components/ItemListContainer'

function App() {

  return (
      <div className="main">
          <Header/>
          <ItenListContainer saludo="HOLA MUNDO"/>
      </div>
  )
}


export default App
