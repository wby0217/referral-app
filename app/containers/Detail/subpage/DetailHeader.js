import React,{Component} from 'react';
import DtailHeadeer from '../../../components/DetailHeader/DetailHeader'
import {getDoc} from '../../../feath/detail/index'
import {connect} from 'react-redux'
import * as Actions from '../../../actions/getDoc'
import {bindActionCreators} from 'redux'

class DetailHeader extends Component{
    constructor() {
        super()
    }
    render(){
        return (
            <div>
                <DtailHeadeer Hdata={this.props.getDoc}/>
            </div>
        )
    }
    componentWillMount() {
        if(this.props.getDoc == 0) {
            this.getDoc()
        } else {

        }
    }
    getDoc() {
        getDoc().then(res=>res.json()).then(detail=>{
            detail = detail.filter(item=>(item.id == this.props.id));
            this.props.DocActions.getDoc(detail);
        })
    }
}
export default connect(
    state=>{
        return {getDoc:state.getDoc}
    },
    dispatch=>{
        return {
            DocActions: bindActionCreators(Actions,dispatch)
        }
    }
)(DetailHeader)
