import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class ListItem extends Component {
    render() {
        return(
            <div  className="list-wrap">
                {
                    this.props.listData?this.props.listData.map((item,index)=>{
                            return(
                                <Link to={'/detail/'+item.id} className="list-item" key={index}>
                                    <img src={item.img} alt=""/>
                                    <div className="left">
                                        <h2><span>{item.name}</span><span>{item.ks}</span><span>{item.docZ}</span></h2>
                                        <h3>{item.hospital}</h3>
                                        <p>{item.cont}</p>
                                    </div>
                                </Link>
                            )
                        }):<div>加载中...</div>
                }
                <div className={"bom-btn "+`${this.props.block}`}><a>去添加你常用的对象吧</a></div>
            </div>
        )
    }
}

export default ListItem;
