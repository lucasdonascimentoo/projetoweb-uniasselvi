import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/Home';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import Filmes from './layout/Filmes'
import Series from './layout/Series'
import Search from './scripts/Search';
import PageMovie from './pages/PageMovie'
import PageSeries from './pages/PageSeries';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/filmes" element={<Filmes/>}/>
          <Route path="/movie/:id" element={<PageMovie/>}/>
          <Route path="/series" element={<Series/>}/>
          <Route path="/tvshow/:id" element={<PageSeries/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
