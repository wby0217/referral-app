import React,{Component} from 'react';
//import {Link} from 'react-router-dom'
import './index.less'
//import SearchInput from "../SearchInput/index"

class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header">
                {this.props.block?'':<img src='../mock/images/left-b.png' alt="" onClick={this.back.bind(this)}/>}
                {this.props.HeaderName}
            </div>
        )
    }
    back() {
       this.props.history.go(-1)
    }
}
export default HomeHeader
