const h1 = document.querySelector("h1")

let msgs=[]

//h1 címsor teszt
let msg = "h1:"

msg += h1 ? "✔" : "💩"
msgs = [...msgs, msg]
//msgs.push(msg)

msg = "h1 tartalma megfelelő"
msg += h1?.textContent === "Fontos alapelemek" ? "✔" : "💩"
msgs = [...msgs, msg]

// p tagek tesztelése
const pList = document.querySelectorAll("p.forras")
msg = "2 bekezdés forrás osztály jelölővel"
msg += pList.length === 2? "✔" : "💩"
msgs = [...msgs, msg]

const aList = document.querySelectorAll("p.forras a")
msg = "linkek létrehozva"
msg += aList.length === 2? "✔" : "💩"
msgs = [...msgs, msg]

const ol=document.createElement("ol")
msgs.forEach((msg)=>{
    const li = document.createElement("li")
    li.textContent = msg
    ol.appendChild(li)
})

document.body.appendChild(ol)