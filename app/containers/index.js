import React,{Component} from 'react'
import RouterMap from '../routers/index'

class App extends Component{
    constructor(){
        super()
        this.state = {
            done:false
        }
    }
    render(){
        return (
            <div>
                {this.state.done?<RouterMap/>:<div>加载</div>}
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            done:true
        });
    }
}
export default App;