import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Animaldetail from './pages/Animaldetail'
import Animals from "./pages/Animals";
import AnimalFacts from "./pages/AnimalFacts";
import Wallpapers from "./pages/Wallpapers";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animals/:id" element={<Animaldetail />} />
        <Route path="/animals" element={<Animals/>}/>
        <Route path='/facts' element={<AnimalFacts />}/>
        <Route path='/wallpapers' element={<Wallpapers />}/>
        <Route path='/aboutus' element={<AboutUs />}/>
      </Routes>
    </Router>
  );
}

export default App;