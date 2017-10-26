import React, {Component} from 'react'
import Header from './Header/Header'

const Layout = (props) => (
    <div>
        <Header/>
        {props.children}
    </div>
)

export default Layout;