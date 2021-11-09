import './App.css';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={CreateAccount} />
          <Route path="/login" exact component={Login} />
          <Route path="/forgot" exact component={ForgetPassword} />
          <Route path="/reset/:token" exact component={ResetPassword} />
      </Router>
    </div>
  );
}

export default App;
