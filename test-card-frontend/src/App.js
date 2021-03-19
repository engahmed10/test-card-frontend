import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Tests  from "./components/tests"
import AddTest from "./components/addtests"
import About from "./components/about"
import NavBar from "./components/navbar"

function App() {
  return (
    <div className="App">
     <Router>
      <NavBar/>
      <Route exact path="/About"  render={routeProps => <About {...routeProps} /> }/>
      <Route exact path="/tests"  render={routeProps => <Tests {...routeProps} /> }/>
      <Route exact path="/createtest"  render={routeProps => <AddTest {...routeProps} /> }/>
     </Router>
    </div>
  );
}

export default App;
