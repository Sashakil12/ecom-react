import React from 'react';
import { connect } from 'react-redux'
import './header.styles.scss';

import CartIcon from '../cart-icon/cart-icon-component'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crowns.svg'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartVisibility } from '../../redux/cart/cart.selector'
import { userSignOutStart } from '../../redux/user/user.actions'

const Header = ({ currentUser, hidden, signOutStart})=>{
    return (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo" />
        </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {currentUser ?
                    (<div className="option" onClick={() => signOutStart()}>
                                SIGN OUT
                    </div>)
                :  
                    (<Link className="option" to="/signin">
                        SIGN IN
                    </Link>)
                }
                <CartIcon/>
            </div>
            {hidden? null : (<CartDropdown/>)}
    </div>)
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartVisibility
}) 

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(userSignOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)


// const mapStateToProps = (state) =>({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartVisibility(state)
// })

//Same as above; use createStructuredselector to repeatedly avoid passing (state)