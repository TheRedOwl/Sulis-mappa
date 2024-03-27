let msgArr=[]

const assert=(condition,message)=>{
    msgArr=condition ? [...msgArr, message+": good"] : [...msgArr, message+": shat"]
}

const showErrors=()=>{
    let ol=document.createElement("ol")
    document.querySelector("body").appendChild(ol)
    msgArr.forEach((msg)=>{
        ol.innerHTML+=`<li>${msg}</li>`
    })
}

const runTests = () =>{
    //címsor teszt:
    let h1=document.querySelector("h1")
    assert(h1, "h1 is")
    let h1Style=window.getComputedStyle(h1)
    assert(h1Style.textTransform=="uppercase","a címsor tartalma nagybetűs")

    //táblázat tesztelése:
    let table = document.querySelector("table")
    assert(table, "table is")
    showErrors()
}

runTests()