import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import IndexPage from './pages/index';
import AboutPage from './pages/about';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<IndexPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
