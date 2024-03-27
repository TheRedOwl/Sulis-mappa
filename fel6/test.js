let ol=document.createElement("ol")
ol.style.marginTop="20px"
ol.style.border="1px solid black"
document.body.appendChild(ol)

const showTestResults=(assert,result)=>{
    if(result){
        console.log(`${assert} ✔`)
        ol.innerHTML+=(`<li>${assert} ✔</li>`)
    }
    else{
        console.log(`${assert} ❌`)
        ol.innerHTML+=(`<li>${assert} ❌</li>`)
    }
}

//állítás:
let assert="1-es szintű címsor létrehozva"
let h1 = document.querySelector("h1")

showTestResults(assert, h1)
/*if(h1)
    console.log(`${assert} ✔`)
else
    console.log(`${assert} ❌`)*/

assert="Az 1-es szintű címsor tartalma a mintának megfelelő"

showTestResults(assert,h1?.textContent=="Javascript alapok")
/*if(h1?.textContent=="Javascript alapok")
    console.log(`${assert} ✔`)
else
    console.log(`${assert} ❌`)*/

assert = "Az 1-es címsor betűszíne piros legyen."
let h1Style = window.getComputedStyle(h1)

console.log(h1Style.color)
showTestResults(assert, h1Style?.color == "rgb(255, 0, 0)")

assert="Az 1-es címsornak legyen folytonos kerete."
console.log(h1Style.borderStyle, h1Style.borderColor);
showTestResults(assert, h1Style?.borderStyle=="solid")

assert="Az 1-es címsornak fekete színű a kerete"
showTestResults(assert, h1Style?.borderColor=="rgb(0, 0, 0)")

assert="Hozz létre egy leiras osztályjelölővel ellátott bekezdést"
let p = document.querySelector("p.leiras")
showTestResults(assert,p)

assert="A bekezdés tartalma a minta szerint legyen"
showTestResults(assert, p.textContent=="A JS egy szkript nyelv.")

assert="A bekezdés belsejébe span tag létrehozva"
let span=document.querySelector("p>span")
showTestResults(assert,span)

assert="A span tartalma megfelelő"
showTestResults(assert,span?.textContent=="szkript")

assert="a span-ben levő szöveg betűmérete legyen 2-szerese az alapértelmezett böngésző betűméretének"
let spanStyle = window.getComputedStyle(span)
console.log(spanStyle.fontSize);
showTestResults(assert, spanStyle?.fontSize=="32px")