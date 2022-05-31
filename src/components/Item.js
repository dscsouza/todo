

class Item{
    static lastId = 0; //variável de classe

    constructor(text){
        this.id = Item.lastId++
        this.text = text;
        this.done = false;
        
    }
}

export default Item;