import React from 'react';
import './App.css';
import Homepage from './pages/home/homepage.component'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.components'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        {/* <Homepage/> */}
      </Switch>
    </div>
  );
}

export default App;
