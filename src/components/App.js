import React from 'react';
import { Provider } from 'mobx-react';
// import { MuiThemeProvider, withStyles } from 'material-ui/styles';
import { ThemeProvider } from 'react-css-themr';

// import DevTools from "mobx-react-devtools";
import Layout from '../components/Layout'
import Game from '../components/Game'
import GameModel from '../models/GameModel'

const App = () => {

    const mainStore = new GameModel();

    return (
        <Provider mainStore={mainStore} >
            <ThemeProvider>
                {/*<DevTools />*/}
                <Layout>
                    <Game/>
                </Layout>
            </ThemeProvider>
        </Provider>
    );

}

export default (App);