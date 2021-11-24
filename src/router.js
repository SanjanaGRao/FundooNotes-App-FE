import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={CreateAccount} />
      <Route path="/login" exact component={Login} />
      <Route path="/forgot" exact component={ForgetPassword} />
      <Route path="/reset/:token" exact component={ResetPassword} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Router>
  );
}

export default Routes;
