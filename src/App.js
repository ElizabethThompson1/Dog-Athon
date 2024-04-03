import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './components/common/Footer';
import Home from './pages/Home';
import Nav from './components/common/Header';
// import Events from './pages/Events';
// import EventDetails from './pages/EventsDetails';
// import CartPage from './pages/CartPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import AdminDashboardPage from './pages/AdminDashboardPage';
// import ManageEventsPage from './pages/ManageEventsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Uncomment and update the following routes as needed, using the element prop
          <Route path="/events" element={<Events />} />
          <Route path="/event-details/:id" element={<EventDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/events" element={<ManageEventsPage />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
export default App;