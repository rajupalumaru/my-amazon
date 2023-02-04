import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Components/Checkout/Checkout';
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Header/>}></Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
