import React from 'react';
import { withRouter } from 'react-router-dom'
import './menu.styles.scss'


const MenuItems = ({ title, imageUrl, size, history, linkUrl, match })=>{
    console.log(history);
    return(
        <div className={`${size} menu-item`} onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>
            <div  className="background-image" style={{
                backgroundImage: `url(${imageUrl})`}}></div>
            <div className="content">
                <h1 className="title">{ title.toUpperCase() }</h1>
                <span className="subtitle">Shop</span>
            </div>
    </div>
    )
}


export default withRouter(MenuItems);