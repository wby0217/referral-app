import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/index'
import {Provider} from 'react-redux'
import {configureStore} from './store'
import './assets/index.less'
let store = configureStore()
ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>,
    document.getElementById('app')
)