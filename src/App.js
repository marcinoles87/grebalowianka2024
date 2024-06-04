
import './App.css';
import Aktualnosci from './components/Aktualnosci';

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
    </div>
  );
}

export default App;
