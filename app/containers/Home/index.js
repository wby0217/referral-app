import React,{Component} from 'react'
import IndexBtn from './subpage/IndexBtn'
import Slider from './subpage/Slider'
import HomeHeader from '../../components/HomeHdader/HomeHeader'
import RecList from './subpage/RecList'

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            btnData:[],
            listData:[]
        }
    }
    render(){
        return (
            <div>
                <HomeHeader block={true} HeaderName="转诊助手" />
                <Slider/>
                <IndexBtn/>
                <RecList/>
            </div>
        )
    }
}
export default Home