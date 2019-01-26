import React,{Component} from 'react';

import '../assets/css/my.css';

import lbxx from '../assets/images/timg.jpg';

class Attrs extends Component{
    constructor(){
        super();

        this.state = {
            title : '哈哈，我是title',
            color_red : 'color-red',
            for : '我只是个label',
            imgStyle : {
                width : '60px'
            },
            list1 : ['1','2','3'],
            list2 : [<h5 key="1">还能这么写</h5>,<h5 key="2">牛*</h5>],
            list3 : [
                {name :'张三',age:20,address :'湖北'},
                {name :'李四',age:23,address :'湖南'},
                {name :'王五',age:24,address :'广西'}
            ]
        }
    }

    render(){
        return (
            <div>
                <h2>绑定属性</h2>
                <p title={this.state.title}>title属性绑定</p>
                <p className={this.state.color_red}>class属性绑定</p>
                <label htmlFor={this.state.for}>我是label</label>
                <div style={{"backgroundColor":"green"}}>
                style行内样式写法:
                </div>
                {/* 注释内容 */} 
                引入本地图片1：
                <img src={lbxx} style={this.state.imgStyle}></img>
                引入本地图片2：
                <img src={require('../assets/images/lbxx2.jpg')} style={this.state.imgStyle}></img>
                引入远程图片：
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1547995037&di=25df88caaa180c5ad11453ccaa18ed4f&src=http://img3.duitang.com/uploads/item/201601/03/20160103155011_maUJF.thumb.700_0.jpeg" style={this.state.imgStyle}></img>
                /**
                 数组遍历：
                 */
                <h3>数组遍历</h3>
                {this.state.list1}
                {this.state.list2}
                <table style={{margin: "0 auto"}}>
                    <thead>
                        <tr>
                            <td>姓名</td>
                            <td>年龄</td>
                            <td>地址</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list3.map(function(value,key){
                                return (
                                    <tr key={key}>
                                        <td>{value.name}</td>
                                        <td>{value.age}</td>
                                        <td>{value.address}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Attrs;