
import './App.css';
import Aktualnosci from './components/Aktualnosci';
import Galeria from './components/Galeria';

import Header from './components/Header';
import Kontakt from './components/Kontakt';
import Main from './components/Main';
import Nav from './components/Nav';
import Partner from './components/Partner';

import { Route, Routes } from 'react-router';
import Seniorzy from './components/pages/Seniorzy';
import Rozgrywki from './components/pages/Rozgrywki';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' exact element={
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

          <Route path='/seniorzy' element={<Seniorzy></Seniorzy>}></Route>
          <Route path='/rozgrywki' element={<Rozgrywki></Rozgrywki>}></Route>
        

      </Routes>

   
      
    </div>
  );
}

export default App;
