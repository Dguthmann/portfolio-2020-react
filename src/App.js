import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavTabs/>
        <Switch>
        <Route exact path="/">
          <About/>
        </Route>
        <Route exact path="/portfolio" >
          <Portfolio/>
        </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
