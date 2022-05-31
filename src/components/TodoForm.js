import React, { useState } from "react";

function TodoForm(props){
    const [text, setText] = useState("");
    

    function addItems(event){
        event.preventDefault();
        if (text){
            props.onAddItem(text)
            setText("")
        }
    }

    function handleChange(event){
        let t = event.target.value
        setText(t)
    }

    return(
        <form>
            <input type="text" onChange={handleChange} value={text}></input>
            <button onClick={addItems}>Add</button>
        </form>
    )

}

export default TodoForm;
