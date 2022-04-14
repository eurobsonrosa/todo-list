const ToDoService = {

    save: (text, id, complete) => {
        try {
            let todoList = JSON.parse(localStorage.getItem('todo'))
            if (!todoList) {
                localStorage.setItem('todo', JSON.stringify([{ text, id, complete}]))
            } else {
                todoList.push({ text, id, complete })
                localStorage.setItem('todo', JSON.stringify(todoList))
            }

        } catch (error) {
            throw error
        }
    },

    remove: (id) => {
        try {
            let todoList = JSON.parse(localStorage.getItem('todo'))
            const index = todoList.findIndex(todo => todo.id === id)
            todoList.splice(index, 1)
            localStorage.setItem('todo', JSON.stringify(todoList))

        } catch (error) {
            throw error
        }
    },

    complete: (e, id) => {
        try {
            let todoList = JSON.parse(localStorage.getItem('todo'))
            const index = todoList.findIndex(todo => todo.id === id)
            todoList[index].complete = !todoList[index].complete
            localStorage.setItem('todo', JSON.stringify(todoList))
            const elem = e.target.parentElement.parentElement
            elem.style.backgroundColor = todoList[index].complete ? '#999' : ''

        } catch (error) {
            throw error
        }
    },
    
    getList: () => {
        try {
            let todoList = JSON.parse(localStorage.getItem('todo'))
            return todoList
        } catch(error) {
            throw error
        }
    }

}

export default ToDoService