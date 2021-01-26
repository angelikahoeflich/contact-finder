import './App.css';
import {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Navbar from './Components/Layout/Navbar'
import ContactState from './Context/Contact/ContactState'
import AuthState from './Context/Auth/AuthState'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'

const App = ()  => {
  return (
    <AuthState>
    <ContactState>
    <Router>
    <Fragment className="App">
     <Navbar/>
     <div className="container">
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/about' component={About}/>
         <Route exact path='/register' component={Register}/>
         <Route exact path='/login' component={Login}/>
       </Switch>
     </div>
    </Fragment>
    </Router>
    </ContactState>
    </AuthState>
  );
}

export default App;
