const ToDoService = {

    save: (text, id) => {
        try {
            let todoList = JSON.parse(localStorage.getItem('todo'))
            if (!todoList) {
                localStorage.setItem('todo', JSON.stringify({ text, id }))
            } else {
                todoList.push({ text, id })
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
            todoList = todoList.splice(index, 1)
            localStorage.setItem('todo', JSON.stringify(todoList))

        } catch (error) {
            throw error
        }
    }

}

export default ToDoService