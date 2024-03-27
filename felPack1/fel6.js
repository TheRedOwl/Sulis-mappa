const diakok=[
    {
        nev:"Joe",
        kor:18
    }
]

diakok.forEach((elem, index)=>{
    console.log(`${elem.nev} ${elem.kor} éves, a tömben a ${index}, indexen található`)
})

const szamok = [1,2,3,4,5,56,3,2,]

szamok.forEach((item,index,arr) => {
    arr[index] = item*2
});

console.log("A megduplázott lista:"+szamok)
const select = document.createElement("select")
const option = document.createElement("option")
option.textContent="Válasszon ki egy könyvet!"
select.appendChild(option)

books.forEach((item)=>{
    const option = document.createElement("option")

    option.textContent = item
    select.appendChild(option)
})

document.querySelector("body").appendChild(select)

books.forEach((item)=>{
    document.querySelector(".books").innerHTML+=`<option>${item}</option>`
})