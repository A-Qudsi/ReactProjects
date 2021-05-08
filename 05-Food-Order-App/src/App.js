import React, { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProivder from './store/CartProvider'

const App = () => {

  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHanlder = () => {
    setCartIsShown(false);
  }

  return (
    <CartProivder>
      {cartIsShown && <Cart onClose={hideCartHanlder} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProivder>
  );
}

export default App;
