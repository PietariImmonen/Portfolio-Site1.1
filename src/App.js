import React from "react";
import './styles.css';
import Navbar from './components/Nav/Navbar';
import Home from './components/Main/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  const[isEnglish, setIsEnglish] = React.useState(true)

  function handleEnglish() {
    setIsEnglish(!isEnglish)
  }

  return (
    <Router>
      <div>
        <Navbar lang={isEnglish}/>
        <Switch>
          <Route path="/" exact><Home lang={isEnglish} handleClick={handleEnglish}/></Route>
          <Route path="/about"><About lang={isEnglish} /></Route>
          <Route path="/resume"><Resume lang={isEnglish} /></Route>
          <Route path="/portfolio"><Portfolio lang={isEnglish} /></Route>
          <Route path="/contact"><Contact lang={isEnglish} /></Route>
        </Switch>
      </div>
    </Router>
  );
}


