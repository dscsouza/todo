import React, { useState } from "react";
import "./todoredux.css"
import List from "./components/List"
import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal";

// IMPORTAÇÕES REDUX
// configurações do Redux - antigo createstore
import {configureStore} from '@reduxjs/toolkit'; 
//Provider do pacote react-redux, que faz a ponte entre redux e react
import {Provider} from 'react-redux';
//listReducer criada por nós, contendo o switch das ações e o payload
import listReducer from "./reducers/listReducer";
//aqui é criada a store. Passamos como parâmetro para o configureStore, nossos reducers
const store = configureStore({reducer: listReducer});


const SAVED_ITEMS = "savedItems"

function TodoRedux(){
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    // const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false)

    // //esse useEffects vai ser executado apenas uma vez
    // //por isso o array [], ou seja,
    // //não está monitorando nenhuma variável
    // useEffect(()=>{
        
        
    //     console.log("local lido", savedItems );
    //     if (savedItems){
    //         setItems(savedItems);
    //         console.log("altearado", savedItems );
    //     }

    // }, [])

    // // esse useEffects vai ser executado todas as vezes que o estado
    // //de items for alterado
    // useEffect(()=>{
    //     localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));

    // }, [items])


    // function onAddItem(text){

    //     let it = new Item(text);
    //     setItems([...items, it]);
    //     onHideModal();
    // } 
    
    // function onItemDeleted(item){

    //     let filteredItems = items.filter(it => it.id !== item.id)
    //     setItems(filteredItems)

    // }

    // function onDone(item){
    //     let updateItems = items.map(it=>{
    //         if (it.id === item.id){ //se o item que veio do click for igual ao item salvo no array
    //             it.done = !it.done;  // o item salvo no array recebe o contrário dele
    //                                 // se done = true, então vai para false
    //         }
    //         return it;
    //     })

    //     setItems(updateItems) //atualiza o estado, ou seja redesenha a lista na tela
    // }

    function onHideModal(){
        setShowModal(false)
    }

    

    
    return(
        
        <Provider store={store}>
            <div className="container">
                <header className="header"><h1>ToDo</h1><button onClick={()=>{setShowModal(true)}} className="addButton">+</button></header>
                
                <List></List>
                <Modal show={showModal} onHideModal = {onHideModal}>
                    <TodoForm></TodoForm> 
                </Modal>
            </div>
        </Provider>
    )


}

export default TodoRedux;