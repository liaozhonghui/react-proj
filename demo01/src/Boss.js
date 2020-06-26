import React, { Component } from 'react';

import { CSSTransition } from 'react-transition-group'
class Boss extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
    }
    render() {
        return (<div>
            <CSSTransition
                in={this.state.isShow}
                timeout={1000}
                classNames="boss-text"
                unmountOnExit
            >
            <div > Boss </div>
            </CSSTransition>
            <div> <button onClick={this.toToggle.bind(this)} > 召唤Boss</button> </div>
        </div>
        );
    }
    toToggle() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

export default Boss;