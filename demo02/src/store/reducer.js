import { CHANGE_INPUT, ADDITEM, DELETEITEM, GETLIST } from './actionTypes'
const defaultState = {
    inputValue: 'Writing Something',
    todoList: []
}
export default (state = defaultState, action) => {
    if (CHANGE_INPUT === action.type) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState;
    }
    if (ADDITEM === action.type) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.todoList.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (DELETEITEM === action.type) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.todoList.splice(action.value, 1);
        return newState;
    }
    if (GETLIST === action.type) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.todoList = action.data.todoList
        return newState;
    }
    
    return state;
}