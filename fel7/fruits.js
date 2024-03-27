let carousel = document.querySelector(".carousel-inner")
fruits.forEach((item,index) => {
    console.log(item.image);
    let className=index==0 ? "active" : ""
    carousel.innerHTML+=`
  <div class="carousel-item ${className}">
    <img src="img/${item.image}" class="d-block w-100" alt="${item.name}">
  </div>`
});

let cards = document.querySelector(".cards")
fruits.forEach((item) => {
    cards.innerHTML+=`<div class="card" style="width: 18rem;">
    <img src="img/${item.image}" class="card-img-top" alt="${item.name}">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="${item.name}" data-bs-content="Ez pont az aminek látszik">Nyomjad</button>
    </div>
  </div>`
});

function showDetail(domObj){
    console.log(domObj.id);
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})