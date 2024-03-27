const udvozol=()=>{
    console.log("hello")
    document.querySelector(".cimsor").innerHTML="nincs szünet"
    const p=document.createElement("p")
    p.innerText="html tag létrehozása"
    document.body.appendChild(p)
}
udvozol()
const olvas=()=>{
    let str=document.querySelector("p").textContent
    console.log(str);
}
olvas()
