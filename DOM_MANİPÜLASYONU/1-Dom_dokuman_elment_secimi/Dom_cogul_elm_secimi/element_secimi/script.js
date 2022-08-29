
//* ELEMENTLERİ ÇAGIRMA METHODLARI AŞAGIDAKİ KODLARI YAZDIGIM SÜRECE CONSOLE DAN HEPSİNİ ÇAGIRIP VE DEĞİŞİKLER YAPABİLİRİZ.**//


/*


let veri ;

veri = window.document;
veri = window.document.head;
veri = window.document.body;
veri = window.document.URL;
veri = window.document.domain;
veri = window.document.images;
veri = window.document.forms;
veri = window.document.forms[0].id;
veri = window.document.forms[0].method;
veri = window.document.forms[0].action;
veri = window.document.scripts;
veri = window.document.scripts[2];


console.log(veri);

*/

//**  ELEMENTLERİN SEÇİLMESİ */
//** TEK ELEMENT SEÇİMİ  */

//** document.getElementById() metodu */
/*
let veri;

veri = document.getElementById("header");
veri = document.getElementById("header").id;
veri = document.getElementById("header").className;


veri = document.getElementById("header");     
//** bu kodu bırkere yazmamız yeterli daha sonra alttaki gibi kısa bir şekilde verinin id' sine ulaşabiliriz.

//* veri = veri.id;
//* veri = veri.className;

veri.style.color = "blue"  
//**  bu şekilde elemanlar üzerinde değişikler yapabılıyoruz verinin stilini mavi yaptık.

veri.style.fontSize= "50px"
 //** başlıgın fontsıze ını buyutttuk.

// veri.style.fontWeight= " bold"  
//** daha kalın yaptık başlıgı.

// veri.style.display= "none "  
//** başlııgın görünürlüğünü kapatmış olduk.

document.getElementById("header").innerText= "Yapılacaklar Listesi";
 //** Burda kolayca başlıgı değiştirebildik.


document.getElementById("header").innerHTML = "<b> ToDo List </b>"  //**  başlıgımız hem  degıstırdık yenıden hemde bold yaptık ama ınnerhtml kodu ıle degıstırebıldık burası onemlı html ögelerı kullanacaksak unutmamalıyız.

console.log(veri);
*/

//*********  document.querySelector()  metodu  ********** */

//* console.log(document.querySelector("#header"));
//* console.log(document.querySelector(".card-header"));
//* console.log(document.querySelector("div")); 

//document.querySelector("li").style.color="blue"; 
//* listenın ılk elemanını mavıye donusturdu.

//document.querySelector("li:last-child").style.color="green"; 
//*  last-chıld ile son ögeyi son cocugu secerek onun rengını yeşil yaptık.

//document.querySelector("li:nth-child(2").style.color="yellow";  

//* herhangı bır elemanı degıstırcemız zman nth kullanıyoruz ve ıkıncı elemanı secerek degıstırebılıyoruz.


//document.querySelector("li").className= "list-group-item list-group-item-danger";  
//* burada bootstrap kullandıgımızdan classı ile beackground unu danger kırmızı yaparak degıstırmıs olduk.


//document.querySelector("li:nth-child(2)").classList.add("active"); 
//* listeye ekleme yapmak için classlıst ı kullanıyoruz. active ile mavi yaptık.




