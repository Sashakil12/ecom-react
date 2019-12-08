import React from 'react';
import CollectionOverviewContainer from '../../pages/collection/collectionOverview-Container'
import CollectionPageContainer from '../../pages/collection/CollectionPageContainer'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/collection-items/collection.actions'




class  ShopPage extends React.Component {
    
    componentDidMount(){
        const { fetchCollectionStartAsync } = this.props
        fetchCollectionStartAsync()        
    }
    render(){
        const { match } = this.props
       return(
            <div>
                <Route exact path={`${match.path}`} 
                    component={CollectionOverviewContainer}/>
                
                <Route path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}/>        
            </div>
            )
        }
}   


const mapDispatchToProp = dispatch =>({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
export default connect(null, mapDispatchToProp)(ShopPage);