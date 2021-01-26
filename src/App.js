import './App.css';
import {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Navbar from './Components/Layout/Navbar'
import ContactState from './Context/Contact/ContactState'
import AuthState from './Context/Auth/AuthState'
import Alerts from './Components/Layout/Alerts'
import AlertState from './Context/Alert/AlertState'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'

const App = ()  => {
  return (
    <AuthState>
    <ContactState>
    <AlertState>
    <Router>
    <Fragment className="App">
     <Navbar/>
     <div className="container">
       <Alerts/>
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/about' component={About}/>
         <Route exact path='/register' component={Register}/>
         <Route exact path='/login' component={Login}/>
       </Switch>
     </div>
    </Fragment>
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
  );
}

export default App;
