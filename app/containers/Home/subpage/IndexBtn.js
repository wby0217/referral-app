import React,{Component} from 'react';
import {getBtn} from '../../../feath/home'
import BtnItem from '../../../components/BtnItem/BtnItem'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../../actions/getBtn'

class IndexBtn extends Component{
    render(){
        return (
            <div>
                <BtnItem btnData={this.props.getBtn}/>
            </div>
        )
    }
    componentWillMount() {
        if(this.props.getBtn.length === 0 ) {
            this.getBtn()
        }
    }

    getBtn() {
        getBtn().then(res=>res.json()).then(btnData=>{
            this.props.indexBtn.getBtn(btnData)
        })
    }
}
export default connect(
    state=>{
        return {getBtn:state.getBtn}
    },
    dispatch=>{
        return {
            indexBtn: bindActionCreators(Actions,dispatch)
        }
    }
)(IndexBtn)
