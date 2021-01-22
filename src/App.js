import './App.css';
import {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Navbar from './Components/Layout/Navbar'

const App = ()  => {
  return (
    <Router>
    <Fragment className="App">
     <Navbar/>
     <div className="container">
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/about' component={About}/>
       </Switch>
     </div>
    </Fragment>
    </Router>
  );
}

export default App;
