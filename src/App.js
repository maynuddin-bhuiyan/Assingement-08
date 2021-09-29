import About from './Components/About/About';

import Friends from './Components/Friends/Friends';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';
import './App.css';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

import Nabvar from './Components/Nabvar/Nabvar';
import Friendtes from './Components/Friendtals/Friendtes';
import Contact from './Components/Contact/Contact';



function App() {
  return (
    <div className="simpel-site">
      <Router>
       <Nabvar></Nabvar>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <Friendtes>
              
            </Friendtes>
          </Route>
          <Route path="/contact">
            <Contact>

            </Contact>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
