import React from 'react';
import './collection.styles.scss';
import { selectCollection } from '../../redux/collection-items/collectionSelector'
import CollectionItem from '../../components/collection-item/collection-item.components'
import { connect } from 'react-redux'
const CollectionPage = ({collection}) =>{
        const { title, items } = collection;
    return(
    <div className='collection-page'>
        <h2 className="title">{ title }</h2>
        <div className='items'>
            {
                items.map( item => <CollectionItem key={item.id} item={item}/>)
            }
        </div>
    </div>
)}

const mapStateToProp = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProp)(CollectionPage);

//mapStateToProps takes two arguments one is "state" 
            //- the state that comes from its reducer
//Another is Own props - props that are passed by Router or any other
    //HoC;
    //You have to pass the own props inside custom selector functions
    //and then pass the state