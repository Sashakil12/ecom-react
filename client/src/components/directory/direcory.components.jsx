import React from 'react'
import MenuItems from '../menu-items/menu.components'
import './directory.styles.scss'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectDirectory } from '../../redux/Directory-Menu/directory.selector'


const Directory = ({ sections }) => ({
    render(){
        return(<div className="directory-menu" >
            {sections.map(({ id, ...otherSections}) =>(
                <MenuItems key={id} {...otherSections} />
            ))}
        </div>)
    }
})
const mapStateToProp = createStructuredSelector({
    sections: selectDirectory
})

export default connect(mapStateToProp)(Directory)