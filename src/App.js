import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
