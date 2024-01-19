import { BrowserRouter as Router , Switch, Route} from "react-router-dom/cjs/react-router-dom.min";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Router>
          <Header />
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/detail/:id'>
            <Details />
          </Route>
          <Route path='*'>
            <div style={{marginTop: '80px'}}> page no fond </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
