import React from 'react';
import CollectionOverview from '../../components/collections-overview/collectinsOverView.components'
import CollectionPage from '../collection/collection.components';
import { Route } from 'react-router-dom'


const ShopPage = ({ match }) => {
    
    return(
        <div>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>        
        </div> 
    )
} 



export default ShopPage;