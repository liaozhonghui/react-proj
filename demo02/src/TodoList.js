import React, { Component } from 'react';
import 'antd/dist/antd.css'

import store from './store/index'
import { changeInputAction, addItemAction, deleteItemAction, getMyListSaga} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                todoList={this.state.todoList}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
        )
    }
    componentDidMount() {
        const action = getMyListSaga();
        store.dispatch(action);
    }
    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action);
    }
    deleteItem(index) {
        const action = deleteItemAction()
        store.dispatch(action)
    }
}

export default TodoList;