import React,{Component} from 'react';


class Child extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:'子组件有的东西！'
        }
        
    }

    goTo=(place)=>{
        this.props.goTo(place);
    }

    //jsx语法
    render(){
        return (
            <div>
                <h2>子组件</h2>
                <p>{this.props.mytext}</p>
                <button onClick={this.props.run}>使用父组件中的方法</button>
                <button onClick={this.goTo.bind(this,'北京')}>使用父组件中的带参方法（1）</button>
                <button onClick={this.props.parent.run}>通过获取父组件对象方式使用父组件中的方法</button>
                <button onClick={this.props.goTo.bind(this,'北京')}>使用父组件中的带参方法（2，和一效果一样）</button>
            </div>
            
        )
    }
}

export default Child;