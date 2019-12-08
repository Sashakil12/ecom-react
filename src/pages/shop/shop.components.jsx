import React from 'react';
import CollectionOverview from '../../components/collections-overview/collectinsOverView.components'
import CollectionPage from '../collection/collection.components';
import { Route } from 'react-router-dom'
import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {updateCollections} from '../../redux/collection-items/collection.actions'
import WithSpinner from '../../components/withSpinner/withSpinner.component'
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class  ShopPage extends React.Component {
    state = {
        loading: true,
    }
    unsubscribeFromSnapShot = null
    componentDidMount(){
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot =>{
            const cm = convertCollectionSnapShotToMap(snapshot)
            updateCollections(cm)
            this.setState({loading: false})
        })
    }
    render(){
        const { match } = this.props
        const { loading } = this.state
        return(
            <div>
                <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={ loading } {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading ={ loading }{...props} />} />        
            </div>
            )
        }
} 


const mapDispatchToProp = dispatch =>({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap)) 
})
export default connect(null, mapDispatchToProp)(ShopPage);