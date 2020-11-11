import logo from './logo.svg';
import './App.css';
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
