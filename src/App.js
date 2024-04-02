import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ManageEventsPage from './pages/ManageEventsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/event-details/:id" component={EventDetails} />
          <Route path="/cart" component={CartPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/admin/dashboard" component={AdminDashboardPage} />
          <Route path="/admin/events" component={ManageEventsPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
