import Item from '../components/Item'


// ADICIONAR UM ITEM NA LISTA
export function addItem(text){
    // criamos o novo item da class Item, tendo como parâmetro o text digitado pelo usuário
    const item = new Item(text);
    // retornamos um objeto que vai ser lido pelo Redux (pasta Reducer), action: ADD_ITEM e o retorno vai ser o próprio item criado
    return {type: "ADD_ITEM", payload: item}
}

// DELETAR UM ITEM DA LISTA
export function deleteItem(id){
    // estamos retornando a action DELETE_ITEM  e o id
    //o filtro e demais ações serão executadas via Redux (pasta Reducer)
    return {type: "DELETE_ITEM", payload: id}
}

//ALTERAR STATUS DA TAREFA - CUMPRIDA OU NÃO CUMPRIDA
export function changeDone(id){
    return {type: "CHANGE_DONE", payload: id}
}