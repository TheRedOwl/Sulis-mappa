let ol=document.createElement("ol")
ol.style.marginTop="20px"
ol.style.border="1px solid black"
document.body.appendChild(ol)

const showTestResults=(assert, result)=>{
    result ? ol.innerHTML+=(`<li>${assert} ✔</li>`) : ol.innerHTML+=(`<li>${assert} ❌</li>`);
}

let header=document.querySelector("header")
let headerStyle=window.getComputedStyle(header)

let h1=document.querySelector("h1")
let h1Style=window.getComputedStyle(h1)

let assert="h1 vízszintesen középen van a header-ben"
showTestResults(assert, header?.classList.contains("justify-content-center"))

assert="h1 függőlegesen középen van a header-ben"
showTestResults(assert, header?.classList.contains("align-items-center"))

assert="a header-nek a banner.jpg a háttere"
showTestResults(assert, headerStyle?.backgroundImage.includes("banner.jpg"))

assert="a header háttérképe a konténerhez van igazítva"
showTestResults(assert, headerStyle?.backgroundSize=="cover")

assert="h1 betűszíne fehér"
showTestResults(assert, h1Style?.color=="white")

assert="betűméret 4rem"
showTestResults(assert, h1Style?.fontSize=="4rem")