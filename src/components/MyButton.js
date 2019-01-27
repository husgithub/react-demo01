import React,{Component} from 'react';

class MyButton extends Component{
    constructor(){
        super();
        this.state = {
            msg :"瞎写的额！",
            changeMsg :"点击右侧按钮内容会变！"
        }

        this.getData2 = this.getData2.bind(this);
    }

    clickMe(){
        alert("弹出一点东西！");
    }

    getData(){
        alert(this.state.msg);
    }

    getData2(){
        alert(this.state.msg);
    }

    getData3=()=>{
        alert(this.state.msg);
    }

    setData=()=>{
        this.setState(
            {changeMsg:"没错变了！"}
        )
    }

    setDataWithParam=(data)=>{
        this.setState(
            {changeMsg:"没错变成了"+data+"！"}
        )
    }

    render(){
        return (
            <div>
                <h2>React事件绑定</h2>
                <button onClick={this.clickMe}>点我</button>
                <button onClick={this.getData.bind(this)}>获取数据</button>
                <button onClick={this.getData2}>获取数据2</button>
                <button onClick={this.getData3}>获取数据3</button>
                <br/>
                <span>{this.state.changeMsg}</span>
                <button onClick={this.setData}>改变数据</button>
                <button onClick={this.setDataWithParam.bind(this,'随便一点')}>方法传参</button>
            </div>
        )
    }
}

export default MyButton;