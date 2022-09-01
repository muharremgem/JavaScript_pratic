

//* Event Listener ve Event Objesi

const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");
// btn.addEventListener("click", function(){
//     console.log("butona tıklandı");
// })

//? yukarıdaki gibi de butona tıklandıgında söyleyecektır  ama aşagıdakı gıbı fonkıyon olusturursak herzaman ve istedigimiz yerde bu fonksiyonu kullanabılecegız.
/*
btn.addEventListener("click", btnClick);
btn2.addEventListener("click", btnClick);//?burda yenıden kullanabıldık.

function btnClick(){
    console.log("butona tıklandı");
};
*/

//? bu kodda preventDefault kodunu kullanarak sayfanın herhangı bır yerınde butona tıklandıgında sayfanın basına gitmseini engellıyor tıklandıgı yrde sayfa kalıyor. (default oluyor.)

btn.addEventListener("click",function(a){
    let value;

    value = a;
    value = a.target;    //* btndeleteall butonuna tıklandıgını console da gösterıyor.
    value = a.target.id;    //* btndeleteall butonuna tıklandıgını console da id sini gösteriyor.
    value = a.target.classList;    //* console da class list lerini gösterir.
    value = a.type;  //* type ının click oldugunu gösterir.
    
    a.preventDefault();
    console.log(value)
})

//? BU DERSTE LİSNERE VE OBJELERİNİ ÖGRENDİK.