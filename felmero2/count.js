let ol=document.createElement("ol")
ol.style.marginTop="20px"
ol.style.border="1px solid black"
document.body.appendChild(ol)

const showTransactions=(description, amount)=>{
    ol.innerHTML+=(`<li>${description} : ${amount} Ft</li>`)
}

let totalBalance = 0
let h2= document.querySelector("h2.balance")

const addTransaction =()=>{
    let descript = document.getElementById("description").value
    let num =+ document.getElementById("amount").value
    console.log(descript,num);

    totalBalance=totalBalance+num

    showTransactions(descript, num)
    h2.innerHTML=`Total balance: ${totalBalance}`
}