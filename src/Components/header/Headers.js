import React, { Component } from 'react'
import MenuOne from './menu_info/MenuOne';
import MenuTwo from './menu_search/MenuTwo';

export default class Headers extends Component {
    render() {
        return (
            <header className="header">
                <div className="grid wide">
                     <MenuOne/>
                     <MenuTwo/> 
                </div>
            </header>
        )
    }
}
