import React, { Component } from 'react'

class App extends Component {
    render () {
        return (
            <div>
                Hello World
                <ul>
                    <li>{ true?'haha':'哈哈' }</li>
                    <li>{ true?'haha':'哈哈' }</li>
                    <li>{ true?'haha':'哈哈' }</li>
                </ul>
            </div>
        )
    }
}
export default App;