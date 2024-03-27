let ol=document.createElement("ol")
ol.style.marginTop="20px"
ol.style.border="1px solid black"
document.body.appendChild(ol)

const showTestResults=(assert, result)=>{
    result ? ol.innerHTML+=(`<li>${assert} ✔</li>`) : ol.innerHTML+=(`<li>${assert} ❌</li>`);
}

let container = document.querySelector("div.container")
let containerStyle = window.getComputedStyle(container)
let h1 = document.querySelector("h1")
let h1Style = window.getComputedStyle(h1)
let dinamo = document.querySelector("p.dinamo")
let dinamoStyle = window.getComputedStyle(dinamo)
let feltalalok = document.querySelector("div.feltalalok")
let feltalalokStyle = window.getComputedStyle(feltalalok)

//console.log(container);
assert = "Hozz létre egy container osztályjelölővel ellátott div taget"
showTestResults(assert,container)

containsA = document.querySelectorAll("div.container>h1,h2,p,div.feltalalok")
console.log(containsA.length)
assert = "Ebbe a div-be kerüljön bele az összes HTML tag."
showTestResults(assert,containsA.length==5)

assert = "A container maximális szélessége ne legyen 800px-nél több."
showTestResults(assert,containerStyle?.maxWidth=="800px")

assert = "A container -nek legyen 15px belső margója(helyköz)."
showTestResults(assert,containerStyle?.padding=="15px")

assert = "A h1-es címsor legyen középre igazítva"
showTestResults(assert,h1Style?.textAlign=="center")

assert = "A dinamo osztályjelölővel ellátott bekezdés legyen sorkizárt"
showTestResults(assert,dinamoStyle.textAlign=="justify")

assert = "A dinamo osztályjelölővel ellátott bekezdés első sorának legyen 15px behúzása."
showTestResults(assert,dinamoStyle?.textIndent=="15px")

assert = "A feltalalok osztályjelölővel ellátott div-nek a display tulajdonsága legyen flex."
showTestResults(assert,feltalalokStyle?.display=="flex")

assert = "A feltalalok osztályjelölővel ellátott div-ben levő felsorolás legyen középre igazíttott."
showTestResults(assert,feltalalokStyle?.justifyContent=="center")

assert = "A feltalalok betűmérete legyen 15px pixeles"
showTestResults(assert,feltalalokStyle.fontSize=="15px")