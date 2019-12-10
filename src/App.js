import React from 'react';
import './App.css';
import Homepage from './pages/home/homepage.component'
import { Route, Switch, Redirect } from 'react-router-dom'

import ShopPage from './pages/shop/shop.components'
import SignInPage from './pages/SignIn/signIn.components'
import Checkout from './pages/checkout/checkout';
import Header from './components/header/header.components'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions'
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount(){
    const { checkUserSession } = this.props
    checkUserSession()
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInPage/>}/>
          <Route exact path="/checkout" component={Checkout}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
})
const mapDispatchToProp = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProp, mapDispatchToProp)(App);
