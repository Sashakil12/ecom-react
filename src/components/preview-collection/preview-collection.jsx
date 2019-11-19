import React from 'react'
import './preview-collection.scss'


const CollectionPreview =({title, items})=>{
    return (<div className="collectionPreview">
        <h1 className="title">{title}</h1>
        <div className="preview">
        {items.filter((i, idx)=>idx<4).map(i=>{
            return (<div key={i.id}>{i.name}</div>)

        })}

        </div>
    </div>)
}


export default CollectionPreview;