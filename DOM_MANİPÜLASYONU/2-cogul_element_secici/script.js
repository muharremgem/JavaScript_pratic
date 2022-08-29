//**  ÇOKLU ELEMENT SEÇİMİ */

//** document.getElementsByClassName() metodu */

let veri ;

veri = document.getElementsByClassName("list-group-item");
//***  Tüm ögeleri çagırdık burda.

//veri = document.getElementsByClassName("list-group-item")[0];
//veri = document.getElementsByClassName("list-group-item")[2];
//** burda istedigimiz indexe ulaşmış olduk.


//veri = veri [2] //* kısa yolla erişmek.

//veri[1].style.fontSize = "30px"
//* verinin fontsize ını büyüttük.

//veri[1].style.color="red";
//* rengini değiştirdik.

//veri[2].textContent= "New item";
//* veriyi değiştirdik. yeni ismi new item oldu.
/*
for(let i=0; i<veri.length; i++){
    console.log(veri[i].getElementsByClassName.color="orange");
    console.log(veri[i].textContent="New item");
}
*/
//** For döngüsü ile tüm elenmentlere şartlar vererek hepsinin rengini ve ismini çogul bır sekılde degıstırebiliriz.


//******* document.getElementsByTagname() metodu  ******/

// veri =document.getElementsByTagName("li");
// veri =document.getElementsByTagName("a");

//veri =document.getElementById("task-list").getElementsByTagName("a")
//* kümenın ıcındekı bı alt kumeyı secmıs olduk. task lıstın altındakı a elementlerını lıstelemıs olduk.


//************ document.querySelectorAll()   metodu   **************** */

veri = document.querySelectorAll("li");
//* nodelist olarak geldıgı zaman for dongusunu kullanmadan forEach ı kullanarak cagırabılırız.

veri.forEach(function(item, index){
    item.textContent=`${index} - item`;

});

//** index o dan baslayarak numaranlandırdı ve isimleri item olrak degıstırdı. 

//**  BU KONUDA COGUL İŞLEMLER NASIL SEÇİLİR VE ELAMANLARIN İSİMLERİ VS NASIL DEĞİŞTİRİLİR BUNLARI ÖGRENDİK. */


console.log(veri);