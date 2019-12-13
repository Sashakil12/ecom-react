import React from 'react';
import './collectionsOverview.styles.scss';
import CollectionPreview from '../preview-collection/preview-collection'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/collection-items/collectionSelector'


const CollectionOverview = ({ data }) =>{
    return(
    <div className= "collections-overview">
        {data.map(({ id, ...otherSections }) => {
            return <CollectionPreview key={id}{...otherSections}></CollectionPreview>
        })}
    </div>
)}

const mapStateToProp = createStructuredSelector({
    data: selectCollectionsForPreview
})

export default connect(mapStateToProp)(CollectionOverview);