import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Login from './component/login/Login';
import Restaurant from './component/restaurant/Restaurant';
import { Component } from 'react';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/restaurant' element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
