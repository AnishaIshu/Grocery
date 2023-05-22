import './App.css';
import Cart from './components/Cart';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/layouts/Layout';

function App() {
  return (
  <BrowserRouter >
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={< Home/>} />
        <Route path='cart' element={<Cart />} />
      </Route>
           
      </Routes>
  </BrowserRouter>


  );
}

export default App;
