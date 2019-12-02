import React from 'react'
import './preview-collection.scss'
import CollectionItem from '../collection-item/collection-item.components' 

const CollectionPreview =({id, title, items})=>{
    // console.log(props);
    return (<div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
        {items.filter((i, idx)=>idx<4)
        .map((item)=>{
            return (<CollectionItem key={item.id} item={item}></CollectionItem>)

        })}

        </div>
    </div>)
}


export default CollectionPreview;