import { CHANGE_INPUT, ADDITEM, DELETEITEM } from './actionTypes'
const defaultState = {
    inputValue: 'Writing Something',
    todoList: [
        '任务0',
        '任务1',
        '任务2',
        '任务3',
        '任务4',
        '任务5',
    ]
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
    return state;
}