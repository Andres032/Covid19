import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './routes/PrivateRoute'
import './css/App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </Switch>
        </AuthProvider>
        
      </Router>
    </div>
    
  );
}

export default App;