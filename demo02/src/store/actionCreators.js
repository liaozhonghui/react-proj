import {CHANGE_INPUT, ADDITEM, DELETEITEM} from './actionTypes'
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
