import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Xiaojiejieitem extends Component {

    // 第一次渲染dom时，函数不会被触发
    // 如果已经存在Dom中，函数才会被执行
    componentWillReceiveProps() {
        console.log('exec will receive props')
    }
    componentWillUnmount() {
        console.log('will ummount')
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        }
        return false;
    }
    render() {
        return (
            <li onClick={this.handleClick.bind(this)}>{this.props.content}</li>
        );
    }
    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}

Xiaojiejieitem.propTypes = {
    content: PropTypes.string.isRequired,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

Xiaojiejieitem.defaultProps = {
    content: '新服务'
}

export default Xiaojiejieitem;