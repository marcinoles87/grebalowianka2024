
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
import Info from './components/Info'
import Podsumowanie from './components/pages/Podsumowanie';
import Jublieusz from './components/pages/Jublieusz';
import Ciekawostki from './components/pages/Ciekawostki';
import Zarzad from './components/pages/Zarzad';
import Oboz from './components/pages/Oboz';
import Wynajem from './components/pages/Wynajem';
import Formularz from './components/pages/Formularz';


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
          <Route path='/info' element={<Info></Info>}></Route>
          <Route path='/podsumowanie' element={<Podsumowanie/>}></Route>
          <Route path='/jublieusz' element={<Jublieusz/>}></Route>
          <Route path='/ciekawostki' element={<Ciekawostki/>}></Route>
          <Route path='/zarzad' element={<Zarzad/>}></Route>
          <Route path='/oboz' element={<Oboz/>}></Route>
          <Route path='/wynajem' element={<Wynajem/>}></Route>
          <Route path='/kontakt' element={<Formularz/>}></Route>
        

      </Routes>

   
      
    </div>
  );
}

export default App;
