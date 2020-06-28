import {GET_MY_LIST, CHANGE_INPUT, ADDITEM, DELETEITEM, GETLIST} from './actionTypes'
import axios from 'axios'
export const changeInputAction =  (value) => ({
    type: CHANGE_INPUT,
    value
})
export const addItemAction =  () => ({
    type: ADDITEM,
})
export const deleteItemAction =  () => ({
    type: DELETEITEM,
})
export const getListAction =  (data) => ({
    type: GETLIST,
    data: data
})

export const  getTodoList = () => {
    return (dispatch)=> {
        axios.get('http://localhost:4000/data')
        .then(res => {
            const data = res.data;
            const action = getListAction(data);
            dispatch(action);
        })
    }
}

export const getMyListSaga= (data) => ({
    type: GET_MY_LIST,
    data: data
})

