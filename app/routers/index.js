import React,{Component} from 'react';
import {
        HashRouter as Router, //路由容器
        Route, //单个路由
        Switch //只陪配一次
    } from 'react-router-dom'
import Home from '../containers/Home'
import Detail from '../containers/Detail'

class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/detail/:id' component={Detail}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default RouterMap;
