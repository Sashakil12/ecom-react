import SHOP_DATA from './shop.data';
import React from 'react';
import CollectionPreview from '../../components/preview-collection/preview-collection';



class ShopPage extends React.Component {
    constructor(){
        super();

        this.state = {data:SHOP_DATA}
    }

    render(){

        return(
            <>{this.state.data.map(({id, ...otherSections})=>{
                return <CollectionPreview key={id}{...otherSections}></CollectionPreview>
            })}</> 
        )
    }
}

export default ShopPage;