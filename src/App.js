import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Contact from './components/pages/Contact/Contact';
import Services from './components/pages/Services/Services';
import Footer from './components/Footer/index';
import AOS from "aos";
import "aos/dist/aos.css";


const App = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/services' exact component={Services} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
