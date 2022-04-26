import {TODO_ADD, TODO_REMOVE, TODO_COMPLETE, TODO_GETLIST} from './actions'

const INITIAL_STATE = {
    list: []
}

export function todoReducer(state = INITIAL_STATE.list, action) {
    switch(action.type) {
        case TODO_ADD: {
            return action.list            
        }
        
        case TODO_REMOVE: {
            return {

            }
        }

        case TODO_COMPLETE: {
            return {

            }
        }

        case TODO_GETLIST: 
            return action.list
        

        default: {
            return state
        }
    }
}