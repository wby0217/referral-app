import React,{Component} from 'react';
import './index.less'

class DtailHeadeer extends Component{
    render(){
        return (
            <div>
                {this.props.Hdata.map((item,index)=>(
                    <div key={index} className="detail-header">
                        <img src={item.img} alt=""/>
                        <h3>{item.name} <em>认证医生</em></h3>
                        <h3><span>{item.ks}</span><span>{item.docZ}</span><span>{item.hospital}</span></h3>
                    </div>
                ))}
            </div>
        )
    }
}
export default DtailHeadeer
