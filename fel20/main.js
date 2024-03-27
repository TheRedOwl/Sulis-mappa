import { id } from "./apiKey.js";
import { getData } from "./utils.js";

let page=1

let loading=true

const showLoader=()=>{
    document.querySelector(".loading").style.display="block"
}
const hideLoader=()=>{
    document.querySelector(".loading").style.display="none"
}

let url=`https://api.unsplash.com/photos?client_id=${id}&page=`

getData(url+page,renderImages)

function renderImages(data){
    loading=false
    hideLoader()
    const holder = document.querySelector(".holder")
    data.forEach(e => {
        holder.innerHTML += `<img src=${e.urls.small}>`
        const imageElement=document.createElement("img")
        imageElement.src=e.urls.small
        imageElement.alt=e.alt_description
        document.querySelector(".holder").appendChild(imageElement)
    })
}

window.addEventListener("scroll",handleScroll)
document.querySelector(".holder").addEventListener("click",showImg)

function handleScroll(){
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-200 && !loading){
        showLoader()
        loading=true
        getData(url+page,renderImages)
    }
}

function showImg(e){
    window.open(e.target.src,"_blank")
}

document.querySelector(".searchButton").addEventListener("click",search)

let queryString=document.getElementById("searchInput")

function search(){
    console.log(queryString);
}