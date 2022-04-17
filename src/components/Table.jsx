import React, { Component } from "react";
import TodoService from '../service/todoService'
import Button from "./Button";
import Form from "./Form";
import Header from "./Header";

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }

    componentWillMount() {
        try {
            this.setState({ list: TodoService.getList() })
        } catch (error) {
            throw error
        }
    }

    removeTask = (id) => {
        TodoService.remove(id)
        this.updateList()
    }

    completeTask = (e, id) => {
        TodoService.complete(e, id)
        this.updateList()
    }

    updateList ()  {
        this.setState({ list: TodoService.getList() })
    }

    renderCards() {
        return this.state.list && this.state.list.map(todo => {
            
            return <div complete={`${todo.complete}`} className="TodoCard" key={todo.id}>
                <div className="todoText">
                    <p>{todo.text}</p>
                </div>
                <div className="btnsCard">
                    {!todo.complete ? <Button name="success" icon="check" onclick={(e) => this.completeTask(todo.id)} /> :
                        <Button name="warning" icon="pencil" onclick={(e) => this.completeTask(todo.id)} />}
                    
                    <Button name="danger" icon="remove" onclick={() => this.removeTask(todo.id)} />
                </div>
            </div>
        })
    }

    renderForm() {
        return <Form>
            <Button name="primary" icon="plus" onclick={() => this.updateList()}/>
        </Form>
    }
    
    render() {
        return <React.Fragment>
            {this.renderForm()}
            {this.renderCards()}
        </React.Fragment>
    }
}

export default Table