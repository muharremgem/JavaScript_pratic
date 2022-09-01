

//* MOUSE EVENTLERİ 

const btn = document.querySelector("#btnAddNewTask")
const ul = document.querySelector("#task-list")

//* click

//btn.addEventListener("click",run);
//ul.addEventListener("click",run);


//* double click event

//btn.addEventListener("dblclick",run); //? çift tıklama yapılınca console da göstrir.

//* mouse down

//btn.addEventListener("mousedown",run); //* basılı kaldıgında down çalısır,tıklama bıttıgınde up çalısır bas çek;

//* mouse up event

//btn.addEventListener("mouseup",run);


//* Mouseenter event

//btn.addEventListener("mouseenter",run); //* üzerine geldiginde çalısıyor.

//* mouse leave event

//btn.addEventListener("mouseleave",run); //* üzerınden ayrıldıgında çalısıyor.

//* mouseover event

//ul.addEventListener("mouseover",run);

//* mouseout event

//ul.addEventListener("mouseout",run);

//* mouse move event 

ul.addEventListener("mousemove",run); //* sitede yaptıgımız hareketlerın hareket mıktarını gösterır.

function run(event){
    console.log(`event type: ${event.type}`);
}