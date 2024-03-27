const chai = window.chai;
const expect=chai.expect;

describe("bevásárlólista funkcionalitása", ()=>{
    it("új elemet tudunk adni a listához", ()=>{
        const shoppingList=createShoppingList()
        shoppingList.addItem("alma")
        shoppingList.addItem("víz")
        expect(shoppingList.getItems()).to.deep.equal(["alma","víz"])
    })
    it("megfelelő számú elem lesz a listában", ()=>{
        const shoppingList=createShoppingList()
        shoppingList.addItem("alma")
        shoppingList.addItem("víz")
        expect(shoppingList.getItems().length).to.equal(2)
    })
    it("törlés", ()=>{
        const shoppingList=createShoppingList()
        shoppingList.addItem("alma")
        shoppingList.addItem("víz")
        expect(shoppingList.delItem()).to.deep.equal("víz")
    })
})