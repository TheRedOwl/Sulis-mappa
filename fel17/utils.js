export const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1))+min
}

export const showSelectedImage=(domObj, id)=>{
    console.log(domObj.files[0]);
    const reader= new FileReader()
    if(domObj.files[0]){
        //indul a fájl beolvasása
        reader.readAsDataURL(domObj.files[0])
        //amikor befejeződik a fájl feltöltés
        reader.onload=((e)=>document.getElementById(id).src=e.target.result)
    }
}