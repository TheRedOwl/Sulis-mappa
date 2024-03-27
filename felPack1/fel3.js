const numbers = [3,5,8,1,6,7]
let sum = 0
numbers.forEach((item)=>{
    sum += item
})
console.log(sum);
let p = document.createElement("p")
p.innerHTML = `A számok összege:<b>${sum}</b>`
document.body.appendChild(p)