import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-btn/custom-button.components'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions'
const CollectionItem = ({item , addItem})=>{
    const { name, price, imageUrl } = item;
    return(
        <div className="collection-item">
            <div className="image" style={
                {backgroundImage: `url(${imageUrl})`}
            }/>
            <div className="collection-footer">
                <span className="price">${price}</span>
                <span className="name">{name}</span>
            </div>
            <CustomButton inverted onClick={()=>addItem(item)}>ADD TO CART</CustomButton>
        </div>   
    )
}
const mapDispatchToProp = dispatch =>({
    addItem: item=>dispatch(addItem(item))
})

export default connect(null, mapDispatchToProp)(CollectionItem);