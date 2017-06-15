import React,{Component} from 'react';
import './index.less'
import {getList} from '../../../feath/home'
import ListItem from '../../../components/ListItem/ListItem'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../../actions/getList'

class RecList extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className="list-wraps">
                <div className="top-tip"><span>推荐转诊</span><a className="right">更多</a></div>
                <ListItem listData={this.listData = this.recommended()} block='btn-b'/>
                <div className="top-tip"><span>转诊过的医生/医院</span></div>
                <ListItem listData={this.listData = this.referral()}/>
            </div>
        )
    }
    recommended() {
        return this.props.getList.filter(item=>item.state === 1)
    }
    referral() {
        return this.props.getList.filter(item=>item.state === 2)
    }
    componentDidMount() {
        if(this.props.getList.length === 0) {
            this.getList()
        }
    }
    getList() {
        getList().then(res=>res.json()).then(listData=>{
            this.props.userActions.getList(listData)
        })
    }
}

export default connect(
    state=>{
        return {getList:state.getList}
    },
    dispatch=>{
        return {
            userActions: bindActionCreators(Actions,dispatch)
        }
    }
    )(RecList)
