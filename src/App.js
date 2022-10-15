import Header from './component/Header/header';
import './App.css';
import Cartitems from './component/cart/cartitems';
import Item from './component/product/item';
//import Cartcontext from './component/Context/cartcontext';
import {useState } from 'react';


function App() {
  const [showc,setShowc] = useState(false)
  //const cont = useContext(Cartcontext);
  const showthecart = showc


  return (
    <div className="App">
      <Header setShowc ={setShowc}/>
      <div className='topimg' style={{ backgroundImage: `url('/resources/bg.jpg')` }}></div>
      {showthecart &&  <div className='cartitems'> <Cartitems setShowc={setShowc} /> </div> }
      <Item />
    </div>
  );
};

export default App;
