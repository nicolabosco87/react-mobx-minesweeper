import React, {Component} from 'react'
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

import style from './Header.scss';

const Header = (props) => (
    <AppBar title="Minesweeper" theme={style} >
        <Navigation type="horizontal">
            <Link href="https://github.com/nicolabosco87" label="By Nicola Bosco" />
        </Navigation>
    </AppBar>
)

export default Header;