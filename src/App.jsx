import { useState } from 'react';
import Menu from './menu/Menu';
import ItemListContainer from './components/ItemListContainer';
import SectionRemeras from './seccion/SectionRemeras';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Footer from './footer/Footer';
import Detail from './components/Detail';

function App() {

  return (
      <div className="main">
          <BrowserRouter>
              <Menu/>
            <main className='main'>
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/menu' element={<ItemListContainer/>}/>
                <Route path="/remeras" element={<SectionRemeras/>}/>
                <Route path='/remeras/:remeraId' element={<Detail/>}/>
              </Routes>
            </main>
            <Footer/>
         </BrowserRouter>
      </div>
  )
}


export default App
