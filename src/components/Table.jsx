import React, { useState, useEffect } from "react";
import TodoService from '../service/todoService'
import Button from "./Button";
import { connect, useSelector} from 'react-redux'
import { todoGetList } from '../redux/actions'

const Table = (props) => {

    const list = useSelector(state => state.todo)
 
    useEffect(() => {
        props.todoGetList()      
    }, [])

    const removeTask = (id) => {
        TodoService.remove(id)
        updateList()
    }

    const completeTask = (e, id) => {
        TodoService.complete(e, id)
        updateList()
    }

    const updateList = () => {
        props.todoGetList()  
    }


    return list && list.map(todo => {

        return <div complete={`${todo.complete}`} className="TodoCard" key={todo.id}>
            <div className="todoText">
                <p>{todo.text}</p>
            </div>
            <div className="btnsCard">
                {!todo.complete ? <Button name="success" icon="check" onclick={(e) => completeTask(todo.id)} /> :
                    <Button name="warning" icon="edit" onclick={(e) => completeTask(todo.id)} />}

                <Button name="danger" icon="remove" onclick={() => removeTask(todo.id)} />
            </div>
        </div>
    })



}

export default connect(null, { todoGetList })(Table)