import './App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home.jsx'
import ColoredMouse from './components/ColoredMouse'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import Projects from './pages/Project.jsx';
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className='app'>
      <ColoredMouse/>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div> 
  );
}

export default App;
