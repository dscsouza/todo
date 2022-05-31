import React from "react";
import Card from './Card'
const widthBtn = 16; 

function ListItem(props){

    function DoneImg(props){
        if (props.done){
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width={widthBtn} height={widthBtn} fill="currentColor" className="bi bi-check-all" viewBox="0 0 16 16">
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
                </svg>
            )
        }else{
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width={widthBtn} height={widthBtn} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
            )
        }
    }

    return(          // className={item.done?"done item":"item"} <<< essa linha faz um condicional, se done for verdadeiro, a classe done é adicionada, senão, fica sem classe específica
                        <li>
                            {/* chama o componente Card, que faz, nada mais que aplicar um estilo e retornar os elementos que estão dentro dele */}
                            <Card className={props.item.done?"done item":"item"}>
                            {props.item.text}
                                <div>
                                    {/* ícone tarefa completa ou não */}
                                    <button className="btnSvg" onClick={()=>{props.onDone(props.item)}}>
                                        <DoneImg done={props.item.done}></DoneImg>

                                    </button>
                                                            
                                    {/* ícone lixeira */}
                                    <button className="btnSvg" onClick={()=>{props.onItemDeleted(props.item)}}> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width={widthBtn} height={widthBtn} fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                </div>
                            </Card>
                        </li>)

}

export default ListItem;
