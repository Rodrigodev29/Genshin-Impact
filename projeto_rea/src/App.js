
import './App.css';
import Home from './home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from './pages/profile/profile.js';
import Fotos from './pages/fotos/fotos';

function App() {
  return (
<>
<BrowserRouter>
   <Routes>
   <Route path = '/' element = {<Home/>}/>;
   <Route path = '/profile' element = {<Profile/>}/>;
   <Route path='/fotos' element = {<Fotos/>}/>;
   </Routes>
</BrowserRouter>
</>
  );
}

export default App;
