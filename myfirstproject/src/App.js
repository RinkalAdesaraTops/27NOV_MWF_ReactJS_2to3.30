import logo from './logo.svg';
import './App.css';
import Mycomponent from './Mycomponent';
import SecondComponent from './SecondComponent';
import MyStyleComponent from './MyStyleComponent';
import Menu from './Menu';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Menu />
      <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
      </Routes>      
      </BrowserRouter>
      {/* <Mycomponent /> */}
      {/* <SecondComponent /> */}
      {/* <MyStyleComponent /> */}
    </div>
  );
}

export default App;
