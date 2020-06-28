import {
    GET_LIST,
    ADD_ITEM,
    DELETE_ITEM,
    CHANGE_INPUT
} from './actionTypes'

const initStates = {
    inputValue: 'Write Something',
    todoList: []
}

export default (state=initStates, action) => {
    if ( CHANGE_INPUT=== action.type) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (GET_LIST === action.type) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.todoList = action.data.todoList
        return newState
    }
    if (ADD_ITEM === action.type) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.todoList.push(newState.inputValue)
        return newState
    }
    if (DELETE_ITEM === action.type) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.todoList.splice(action.index, 1)
        return newState
    }
    return state
}