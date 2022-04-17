import React, { useState } from "react";
import TodoService from '../service/todoService'
import Table from "./Table";

const Form = (props) => {

    const [text, setText] = useState('')
    const [id, setId] = useState(undefined)
    const [complete, setComplete] = useState(false)
    
    const HandleSubmit = async (e) => {
        e.preventDefault()      
        try {
            if (text !== '') {
                await TodoService.save(text, id, complete);
                setText('')
                setId(undefined)               
            }
        } catch (error) {
            throw error
        }
    }

    const HandleChange = (e) => {
        setText(e.target.value)
        setId(new Date())

    }
    return <form onSubmit={HandleSubmit}>
            <div className="form-group">
                <input type="text" className="form-control" value={text} onChange={e => HandleChange(e)} placeholder="What to do..." />
                    {props.children}
            </div>
        </form>
    
}

export default Form