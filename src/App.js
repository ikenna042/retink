import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <BrowserRouter>
          <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/signup'
              element={<Signup />}
            />
          </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
