const getData=async (url)=>{
    const response = await fetch(url)
    const data=await response.json()
    render(data)
}



getData("https://api.github.com/users")
const render=(data)=>{
    console.log(data);
    let cardPlace = document.querySelector("body")
    data.forEach((element) => {
        cardPlace.innerHTML+=`<div class="card" style="width: 18rem;">
        <img src="${element.avatar_url}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${element.login}</h5>
          <p class="card-text">nincs adat</p>
          <a href="#" class="btn btn-primary">${element.html_url}</a>
        </div>
      </div>`
    });
}