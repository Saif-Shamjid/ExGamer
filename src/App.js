import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Shared/PrivateRoute/PrivateRoute';
import Home from './pages/Home/Home/Home';
import CosNav from './pages/Shared/Nav/Nav';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Footer from './pages/Shared/Footer/Footer';
import PleaseOrder from './pages/PleaseOrder/PleaseOrder';
import AllGames from './pages/AllGames/AllGames';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound'



function App() {
  return (
    <div className="App primary-bg-color">
      <AuthProvider>
    <Router>
        <CosNav></CosNav>
        <Switch>
          <PrivateRoute path="/appointment">
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/allgames">
            <AllGames></AllGames>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/pleaseorder/:id">
            <PleaseOrder></PleaseOrder>
          </PrivateRoute>
          
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
    </AuthProvider>

    </div>
  );
}

export default App;
