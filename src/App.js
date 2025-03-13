import './App.css';
import { BrowserRouter as Router, Link} from "react-router-dom";
import Registro from './paginas/Registro';
import Home from './paginas/Home';
import Loguearse from './paginas/Loguearse';
import Rutas from './componentes/Rutas';
import Footer from './componentes/Footer';


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
              Home
              </Link> </li>

              <li>
              <Link to='Loguearse' element={<Loguearse />} className='list'>
              Home
              </Link> </li>
          </ul>
        </nav>
      </div>
      <Rutas />
      <Footer />
    </Router>
  );
}

export default App;
