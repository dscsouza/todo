
// aqui serão tratadas as ações vindas do /actions/listAction.js
// ADD_ITEM, DELETE_ITEM , CHANGE_DONE
export default (state = [], action)=>{
    //dependendo do type da action, direciona para a solução específica
    switch (action.type) {
        case "ADD_ITEM":
            //retorna o state atual, ou seja, a lista atual,
            // mais o payload, que é exatamente o item adicionado
            //na action /actions/listAction.js. item = new Item(text)
            // esse item veio via action.payload 
            return [...state, action.payload]
        case "DELETE_ITEM":
            //filtre a lista atual (state)
            //somente com os items com id DIFERENTE do
            //que veio via action.payload
            return state.filter(item => item.id !== action.payload)

        case "CHANGE_DONE":
            //fazemos um map para sabermos somente o item
            // cujo id é igual ao id retornado via action.payload
            //se for igual, então altera o done para cumprido ou ñ cumprido
            return state.map(item => {
                if (item.id === action.payload){ 
                    item.done = !item.done;
                }
                return item;
            })   
        default:
            return state //caso não seja nenhuma dessas ações, retorna o state atual
    }

}