 //****   ELEMENT GÜNCELLEME  */

 const cardHeader = document.querySelector(".card-header");

 const h2 = document.createElement("h2");
 h2.setAttribute("class", "card-header");
 h2.appendChild(document.createTextNode("Yeni listeler"));
 
 const parent = document.querySelector(".card");
 parent.replaceChild(h2,cardHeader);
 
 //*  bu şekılde elementlerın yerıne baska elementler ekleyerek  onu güncelleyebılıyoruz. */


 //****  class larda Güncelleme   ******/

 const taskList = document.querySelector("#task-list");

 let value;
 
 link = taskList.children[0].children[0];
 
 value = link.className;
 value = link.classList;
 //value = link.classList[0];
 //value = link.classList[2];

link.classList.add("new");  
link.classList.remove("new");
//** class ekledık ve sıldıkk */



//**   Attribute Güncelleme **** */

value = link.getAttribute("href");
value = link.setAttribute("href", "https://instagram.com/muharrem__gem");
//* bir link ekleddik.

value = link.hasAttribute("href");
//** var olup olmadıgını test etmek için hasattrıbute kukllanırız varsa true yoksa false degerını verır bıze. */



 console.log(value);