import TodoService from '../service/todoService'

export const TODO_ADD = 'todo/add'
export const TODO_REMOVE = 'todo/remove'
export const TODO_COMPLETE = 'todo/complete'
export const TODO_GETLIST = 'todo/getlist'

export const todoAdd = (text, id, complete) => ({
    type: TODO_ADD,
    todo: TodoService.save(text, id, complete),
    list: TodoService.getList()
})

export const todoRemove = (id) => ({
    type: TODO_REMOVE,
    id
})

export const todoComplete = (id) => ({
    type: TODO_COMPLETE,
    id
})

export const todoGetList = () => ({
    type: TODO_GETLIST,
    list: TodoService.getList()
})