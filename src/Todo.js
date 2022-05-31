import React, { useState } from "react";
import "./todo.css"
import List from "./components/List"
import Item from './components/Item'
import TodoForm from "./components/TodoForm";

function Todo(){
    const [items, setItems] = useState([]);

    function onAddItem(text){

        let it = new Item(text);
        setItems([...items, it])
    } 
    
    function onItemDeleted(item){

        let filteredItems = items.filter(it => it.id != item.id)
        setItems(filteredItems)

    }

    function onDone(item){
        let updateItems = items.map(it=>{
            if (it.id === item.id){ //se o item que veio do click for igual ao item salvo no array
                it.done = !it.done;  // o item salvo no array recebe o contrário dele
                                    // se done = true, então vai para false
            }
            return it;
        })

        setItems(updateItems) //atualiza o estado, ou seja redesenha a lista na tela
    }

    
    return(
        <div className="container">
            <h1>Todo</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
        </div>
    )


}

export default Todo;