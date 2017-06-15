import React,{Component} from 'react'
import './index.less'

class IndexBtn extends Component {
    render() {
        return (
            <div className="btn-wrap">
                {
                    this.props.btnData.map((item,index)=>(
                        <a key={index} className={'btn'+`${index}`}><img src={item.img} alt=""/>{item.text}</a>
                    ))
                }
            </div>
        )
    }
}

export default IndexBtn;