function createShoppingList(){
    let items=[]

    function addItem(item){
        items.push(item)
        return items
    }
    function getItems(){
        return items
    }
    function delItem(item){
        const index=items.indexOf(item)
        if(index!=-1) items.splice(index, 1)
        return items
    }
    return {
        addItem,
        getItems,
        delItem
    }
}
