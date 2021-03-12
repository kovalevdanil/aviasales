import React from 'react'
import logo from '../../logo.svg'

import './Header.css'

const Header = (props) => {
    return <div className = 'header'>
        <img className='logo' src = {logo} alt = 'logo'/>
        <a href = "https://aviasales.ru" className = 'link'>
            aviasales.ru
        </a>
    </div>
}

export default Header
