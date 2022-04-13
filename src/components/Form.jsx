import React, { useState } from "react";
import TodoService from '../service/todoService'
import Button from "./Button";



const Form = (props) => {

    const [text, setText] = useState('')
    const [id, setId] = useState(undefined)

    const HandleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (text !== '') {
                await TodoService.save(text, id);
                setText('')
            }
        } catch (error) {
            throw error
        }
    }

    const  HandleChange = (e) => {
        setText(e.target.value)
        setId(new Date())

    }

    return <form onSubmit={HandleSubmit}>
        <div className="form-group">
            <input type="text" className="form-control" value={text} onChange={e => HandleChange(e)} placeholder="What to do..." />
        </div>
        <Button name="primary" type="submit" icon="plus"/>
    </form>
}



export default Form