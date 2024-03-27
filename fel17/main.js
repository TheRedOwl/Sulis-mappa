import { generateRandomNumber ,showSelectedImage } from "./utils.js";

document.querySelector("button").addEventListener("click", renderNumbers);

function renderNumbers() {
    document.querySelector(".holder").innerHTML=""
    for (let i = 0; i < 5; i++) {
        let randNr = generateRandomNumber(1, 90);
        document.querySelector(".holder").innerHTML += `
    <span>${randNr}</span>
    `;
    }
}

renderNumbers()

document.getElementById("photo").addEventListener("change",(e)=>showSelectedImage(e.target,"selectedPhoto"))

/*function showSelectedImage(e){
    console.log("change esemény", e.target.files[0]);
}*/

