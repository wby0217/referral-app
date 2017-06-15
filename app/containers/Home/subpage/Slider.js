import React,{Component} from 'react'
import {getSlider} from '../../../feath/home'
import ReactSwipe from 'react-swipe'
import './index.less'

class Slider extends Component{
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }
    render(){
        let opts = {
            continuous: true,
            callback:(index) => {
                this.setState({
                    index
                })
            }
        }
        return (
            <div className="slider-wrap">
                <ReactSwipe className="carousel" swipeOptions={opts}>
                        {this.state.data.map((item,index)=>(
                            <div key={index}>
                                <a href={item.link}>
                                    <img src={item.img} alt=""/>
                                </a>
                            </div>
                        ))}
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index==0?'active':''}></li>
                    <li className={this.state.index==1?'active':''}></li>
                    <li className={this.state.index==2?'active':''}></li>
                </ul>
            </div>
        )
    }
    componentDidMount() {
        getSlider().then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        })
    }
}

export default Slider;

