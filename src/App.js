import './App.css';
// import { Header, SecondHeader } from './layout';
import { Home,About, Service, Register, ContactUs, NFT, PhsicalCoin,Login } from './module';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
      <div className="coin_proj">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<About/>} />
        <Route path='/services' element={<Service/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/nft' element={<NFT/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/physical-coin' element={<PhsicalCoin/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      </div>
  );
}

export default App;
