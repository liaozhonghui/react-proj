import React, { Component, Fragment } from 'react'
import './style.css'
import Xiaojiejieitem from './Xiaojiejieitem'
import axios from 'axios'
import Boss from "./Boss";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '新服务',
            list: ['服务1', '服务2', '服务3']
        }
    }
   
    componentDidMount() {
        console.log('挂载后')
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
          .then((res) => {
              console.log(JSON.stringify(res))
          })
          .catch((err) => console.error(err))
    }
    shouldComponentUpdate() {
        console.log('should 更新')
        return true
    }
    componentWillUpdate() {
        console.log('will Update')
    }
    componentDidUpdate() {
        console.log('did Update')
    }
    
    render() {
        console.log('render')
        return (
            <Fragment>
                { /* 增加注释 */}
                <div>
                    <label htmlFor='name'>服务名称：</label>
                    <input
                        id='name'
                        className='input'
                        ref={(input) => { this.input = input }}
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index+item}
                                    >
                                        <Xiaojiejieitem key={index + item} content={item} index={index} deleteItem={this.deleteItem.bind(this)} />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss />
            </Fragment>
        )
    }
    inputChange(e) {
        console.log(e.target.value)
        this.setState({
            inputValue: this.input.value
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log(this.ul.querySelectorAll('li').length);
        })
    }
    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}
export default Xiaojiejie