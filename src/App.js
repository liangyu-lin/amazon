import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
