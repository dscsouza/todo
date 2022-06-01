import React, { useEffect, useState } from "react";
import "./todoredux.css"
import List from "./components/List"
import Item from './components/Item'
import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal";

const SAVED_ITEMS = "savedItems"

function TodoRedux(){
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false)

    //esse useEffects vai ser executado apenas uma vez
    //por isso o array [], ou seja,
    //não está monitorando nenhuma variável
    useEffect(()=>{
        
        
        console.log("local lido", savedItems );
        if (savedItems){
            setItems(savedItems);
            console.log("altearado", savedItems );
        }

    }, [])

    // esse useEffects vai ser executado todas as vezes que o estado
    //de items for alterado
    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));

    }, [items])


    function onAddItem(text){

        let it = new Item(text);
        setItems([...items, it]);
        onHideModal();
    } 
    
    function onItemDeleted(item){

        let filteredItems = items.filter(it => it.id !== item.id)
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

    function onHideModal(){
        setShowModal(false)
    }

    

    
    return(
        <div className="container">
            <header className="header"><h1>ToDo</h1><button onClick={()=>{setShowModal(true)}} className="addButton">+</button></header>
            
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            <Modal show={showModal} onHideModal = {onHideModal}>
                <TodoForm onAddItem={onAddItem}></TodoForm> 
            </Modal>
        </div>
    )


}

export default TodoRedux;