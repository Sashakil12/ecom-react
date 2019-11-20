import React from 'react'
import './preview-collection.scss'
import CollectionItem from '../collection-item/collection-item.components' 

const CollectionPreview =({title, items})=>{
    return (<div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
        {items.filter((i, idx)=>idx<4).map(({id, ...others})=>{
            return (<CollectionItem key={id}{...others}></CollectionItem>)

        })}

        </div>
    </div>)
}


export default CollectionPreview;