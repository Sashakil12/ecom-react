import React from 'react';
import './collectionsOverview.styles.scss';
import CollectionPreview from '../preview-collection/preview-collection'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import selectCollections from '../../redux/collection-items/collectionSelector'


const CollectionOverview = ({ data: { collections} }) =>{
    console.log(collections);
    return(
    <div className= "collections-overview">
        {collections.map(({ id, ...otherSections }) => {
            return <CollectionPreview key={id}{...otherSections}></CollectionPreview>
        })}
    </div>
)}

const mapStateToProp = createStructuredSelector({
    data: selectCollections
})

export default connect(mapStateToProp)(CollectionOverview);