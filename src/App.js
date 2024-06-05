
import './App.css';
import Aktualnosci from './components/Aktualnosci';
import Galeria from './components/Galeria';

import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
   
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Aktualnosci></Aktualnosci>
      <Galeria></Galeria>
    </div>
  );
}

export default App;
