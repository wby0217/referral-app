import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHdader/HomeHeader'
import DetailHeader from './subpage/DetailHeader'

class Detail extends Component{
    render(){
        return (
            <div>
                <HomeHeader history={this.props.history} HeaderName="医生详情"/>
                <DetailHeader id={this.props.match.params.id}/>
            </div>
        )
    }
}
export default Detail;
