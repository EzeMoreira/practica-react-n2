import './App.css';
import { BrowserRouter as Router, Link} from "react-router-dom";
import Registro from './paginas/Registro';
import Home from './paginas/Home';
import Loguearse from './paginas/Loguearse';
import Rutas from './components/Rutas';
import logo from './img/elije-tu-lenguaje.png'
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <h2>Titulo de prueba</h2>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to='/' element={<Home />} className='list'>
              Home
              </Link> </li>

              <li>
              <Link to='Registro' element={<Registro />} className='list'>
              Registro
              </Link> </li>

              <li>
              <Link to='Loguearse' element={<Loguearse />} className='list'>
              Loguearse
              </Link> </li>
          </ul>
        </nav>
        <img src={logo} className='AppLogo' alt='banner' />
      </div>
      <Rutas />
      <Footer />
    </Router>
  );
}

export default App;
