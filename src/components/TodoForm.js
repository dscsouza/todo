import React, { useState } from "react";
import { addItem} from '../actions/listAction'
import {useDispatch} from 'react-redux'

function TodoForm(props){
    const [text, setText] = useState("");
    const dispatch = useDispatch()
    

    function addItems(event){
        event.preventDefault();
        if (text){
            dispatch(addItem(text))
            setText("")
        }
    }

    function handleChange(event){
        let t = event.target.value
        setText(t)
    }

    return(
        <form autoFocus>
            <input type="text" onChange={handleChange} value={text}></input>
            <button onClick={addItems}>Add</button>
        </form>
    )

}

export default TodoForm;
