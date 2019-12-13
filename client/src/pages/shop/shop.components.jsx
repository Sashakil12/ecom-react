import React, { useEffect } from 'react';
import CollectionOverviewContainer from '../../pages/collection/collectionOverview-Container'
import CollectionPageContainer from '../../pages/collection/CollectionPageContainer'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/collection-items/collection.actions'




const ShopPage = ({ fetchCollectionStart, match }) => {
    
    useEffect(()=>{
        console.log('Shop Page Mounted');
        fetchCollectionStart()
        return () => {
            console.log('Shop page unmounted');
        }
    }, [ fetchCollectionStart ])
  
    return(
            <div>
                <Route exact path={`${match.path}`} 
                    component={CollectionOverviewContainer}/>
                
                <Route path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}/>        
            </div>
            )
}


const mapDispatchToProp = dispatch =>({
    fetchCollectionStart: () => dispatch(fetchCollectionsStart())
})
export default connect(null, mapDispatchToProp)(ShopPage);