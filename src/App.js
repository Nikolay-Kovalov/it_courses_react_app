import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Cart from './components/Cart/Cart';
import SuccessfulPage from './pages/SuccessfulOrderPage/SuccessfulOrderPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        {/* <NavBar /> */}
        <div className="content">
          <Routes>
            <Route path='/' component={<Home />} />
            <Route path='/cart' component={<Cart />} />
            <Route path='/orderSuccessful' component={<SuccessfulPage />} />
              <Route path='/errorPage' component={<ErrorPage/> } />
          </Routes>
        </div>
        <Footer/>
      </div>
      </Router>
  );
}

export default App;
