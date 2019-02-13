import React,{Component} from 'react';

import Child from './Child';

class Parent extends Component{
    constructor(props){
        super(props);
    }

    run=()=>{
        alert("我是父组件中的方法！");
    }

    goTo=(place)=>{
        alert("去\""+place+"\"！");
    }

    getChild=()=>{
        alert(this.refs.child.state.msg);
    }

    //jsx语法
    render(){
        return (
            <div>
                <h2>父组件</h2>
                <Child  mytext='父组件传给子组件的值' run={this.run} goTo={this.goTo} parent={this} ref='child'></Child>
                <button onClick={this.getChild}>获取子组件对象</button>
            </div>
            
        )
    }
}

export default Parent;