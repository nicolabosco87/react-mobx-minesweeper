import React from "react";
import { render } from "react-dom";
import { Provider } from 'mobx-react';
// import DevTools from "mobx-react-devtools";
import Layout from './components/Layout'
import Game from './components/Game'

import GameModel from './models/GameModel'


const App = () => {

    const mainStore = new GameModel();

    return (
        <Provider mainStore={mainStore} >
            <div>
                {/*<DevTools />*/}
                <Layout >
                    <Game/>
                </Layout>
            </div>
        </Provider>
    );

}


render(
  <App/>,
  document.getElementById("root")
);

// store.addTodo("Get Coffee");
// store.addTodo("Write simpler code");
// store.todos[0].finished = true;

// setTimeout(() => {
//   store.addTodo("Get a cookie as well");
// }, 2000);

// playing around in the console
// window.store = store;
