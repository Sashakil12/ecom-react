import React from 'react';
import './App.css';
import Homepage from './pages/home/homepage.component'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.components'
import signInPage from './pages/SignIn/signIn.components'
import Header from './components/header/header.components'
import {auth} from './firebase/firebase.utils'
class App extends React.Component {
  constructor(){
    super()
    this.state = { currentUser: null}
  }
  unSubscribeFromAuth = null;
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }
  render(){
    return (
      <div>
      <Header currentUser = {this.state.currentUser }/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path='/signin' component={signInPage}/>
          {/* <Homepage/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
