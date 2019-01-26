import React,{Component} from 'react';

class Home extends Component{
    constructor(){
        super();

        this.state = {
            msg :'放在state中的数据！',
            people :{
                name :'王麻子',
                age : 25,
                address :'中国'
            }
        }
    }

    //jsx语法
    render(){
        return (
            <div>
                <h2>Hello react !</h2>
                <p>如果有多行代码必须return必须加()</p>
                <p>并且所有html元素必须放在一个根节点下</p>
                <p>{this.state.msg}</p>
                <p>{this.state.people.name}</p>
            </div>
            
        )
    }
}
export default Home;