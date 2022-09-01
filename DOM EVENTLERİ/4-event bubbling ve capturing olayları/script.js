
//* Event Bubling  ( içten dışa dogru tetıklenme olur.)

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card = document.querySelector(".card");
const container = document.querySelector(".container");


// form.addEventListener("click",function(e){
//     console.log("form")
//     e.stopPropagation(); // tıkladımız yer cıksın ıstersek bu kodu yazarız 
// });


// cardBody.addEventListener("click",function(e){
//     console.log("car body")
//     e.stopPropagation(); // sadece bublıng de kullanıyoruz 
// });


// card.addEventListener("click",function(e){
//     console.log("card")
//     e.stopPropagation();
// });


// container.addEventListener("click",function(e){
//     console.log("container")
//     e.stopPropagation();
// });

//* Event Capturıng ( dıştan içe dogru tetıklenme olur.)




// form.addEventListener("click",function(e){
//     console.log("form")
    
// },true);


// cardBody.addEventListener("click",function(e){
//     console.log("car body")
    
// },true);


// card.addEventListener("click",function(e){
//     console.log("card")
    
// },true);


// container.addEventListener("click",function(e){
//     console.log("container")
    
// },true);

// const deleteItems = document.querySelectorAll(".fa-times");

// deleteItems.forEach(function(item){
//     item.addEventListener("click",function(e){
//         console.log(e.target);
//     })
// });

//* Aşagıdaki kod ile elementleri nasıl silebilecegimizin örnek kodu...

const ul = document.querySelector("ul");

ul.addEventListener("click",function(e){
    if(e.target.className === "fas fa-times"){
       e.target.parentElement.parentElement.remove();
    }
})