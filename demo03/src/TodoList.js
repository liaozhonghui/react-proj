import React from 'react';

import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'

import { connect } from 'react-redux'

function TodoList(props) {
    const {inputValue, todoList, changeInputValue, addItem, deleteItem} = props
    return (
        <div>
            <div style={{ margin: '10px' }}>
                <input placeholder={inputValue} value={inputValue} onChange={changeInputValue} />
                <button onClick={addItem}>
                    提交
                    </button>
            </div>
            <ul>
                {
                    todoList.map((item, index) => {
                        return (
                            <li
                                key={item + index}
                                onClick={() => deleteItem(index)}
                            >
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}


const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        todoList: state.todoList
    }
}
const dispatchToProps = (dispatch) => {
    return {
        changeInputValue: (e) => {
            let action = {
                type: CHANGE_INPUT,
                value: e.target.value
            }
            console.log(action)
            dispatch(action)
        },
        addItem: () => {
            let action = {
                type: ADD_ITEM
            }
            dispatch(action)
        },
        deleteItem: (index) => {
            let action = {
                type: DELETE_ITEM,
                index: index
            }
            dispatch(action)
        }

    }
}

export default connect(stateToProps, dispatchToProps)(TodoList);