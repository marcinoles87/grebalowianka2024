
import './App.css';
import Aktualnosci from './components/Aktualnosci';
import Galeria from './components/Galeria';

import Header from './components/Header';
import Kontakt from './components/Kontakt';
import Main from './components/Main';
import Nav from './components/Nav';
import Partner from './components/Partner';

import { Route, Routes } from 'react-router';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='*' element={
              <>
                <Header></Header>
                <Nav></Nav>
                <Main></Main>
                <Aktualnosci></Aktualnosci>
                <Galeria></Galeria>
                <Partner></Partner>
                <Kontakt></Kontakt>
              </>
        }/>
        

      </Routes>
   
      
    </div>
  );
}

export default App;
