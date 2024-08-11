import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home.jsx'
import ColoredMouse from './components/ColoredMouse'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import Skills from './components/Skills.jsx';
import Projects from './pages/Project.jsx';

function App() {
  return (
    <>
      <ColoredMouse/>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </> 
  );
}

export default App;
