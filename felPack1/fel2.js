const colors = [
    "red","blue","yellow","green"
]

const ol = document.createElement("ol")

colors.forEach((item)=>{
    console.log(item);
    const li = document.createElement("li")
    li.textContent=item
    li.style.color=item
    li.style.fontSize="2rem"
    ol.appendChild(li)
})

console.log(ol)
document.querySelector("body").appendChild(ol)

colors.forEach((item)=>{
    document.querySelector("ul").innerHTML+=`<li>${item}</li>`
})