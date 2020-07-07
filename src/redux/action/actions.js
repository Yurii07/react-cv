import {TOGGLE_TAB_ID} from "./actionTypes";



export function onToggleTabId (tabId) {
    return {
        type: TOGGLE_TAB_ID,
        payload: tabId
    }
}

// let nextTodoId = 0
// export const addTodo = text => ({
//     type: 'ADD_TODO',
//     id: nextTodoId++,
//     text
// })
//
// export const setVisibilityFilter = filter => ({
//     type: 'SET_VISIBILITY_FILTER',
//     filter
// })
//
// export const toggleTodo = id => ({
//     type: 'TOGGLE_TODO',
//     id
// })
//
// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }