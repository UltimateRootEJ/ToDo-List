
import '../css/App.css';
import SignIn from "./signIn";
import SignUp from "./signUp";
import Home from './home.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (

<Router>
      <Switch>
      <Route exact path="/" component={SignIn}/>
        <Route  path="/sign-up" component={SignUp}/>

        <Route path="/home" component={Home}>
      
        </Route>
       
        
      </Switch>
   


    </Router>
  );
}

export default App;


