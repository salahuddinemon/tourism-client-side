import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/Home/About/About';
import Blog from './components/Home/Blog/Blog';
import Contact from './components/Home/Contact/Contact';
import Footer from './components/Home/Footer/Footer';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import Notfound from './components/Home/Notfound/Notfound';
import Register from './components/Home/Register/Register';
import Services from './components/Home/Services/Services';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
