import React from 'react';
import './App.css';
import Homepage from './pages/home/homepage.component'
import { Route, Switch, Redirect } from 'react-router-dom'

import ShopPage from './pages/shop/shop.components'
import SignInPage from './pages/SignIn/signIn.components'
import Header from './components/header/header.components'

import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
class App extends React.Component {
 
  unSubscribeFromAuth = null;
  componentDidMount(){
    const { setCurrentUser } = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot( snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
        
      }else{
        setCurrentUser(userAuth)
      }
    })
}

  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }
  render(){
    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInPage/>}/>
          {/* <Homepage/> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProp = ({user})=>({
  currentUser: user.currentUser
})
const mapDispatchToProp = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProp, mapDispatchToProp)(App);
