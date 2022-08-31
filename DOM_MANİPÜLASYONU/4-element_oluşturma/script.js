

//* ELEMENT OLUŞTURMA ****/

const li = document.createElement("li");  //* burda li elementı olusturduk.

//* add class

li.className = "list-group-item list-group-item-secondary";
//* burda oluşturduğumuz li elementine class ismi vermiş olduk.

//* attribute*/
li.setAttribute("title","new item")
li.setAttribute("data-id" , "5");
//* title,item ve id eklemiş olduk.

const text = document.createTextNode("new item");
li.appendChild(text);
//* burda new item yazısını ekledik.


const a = document.createElement("a");
a.setAttribute("href", "#");
a.className = ("delete-item float-right");
a.innerHTML = (`<i class="fas fa-times"></i>`);

//* burada a elementi ni olusturduk ve birazdan li ye eklememiz gerekecek kşi ekranda olusturdugumuz seyı görelım.

li.appendChild(a);
document.querySelector("#task-list").appendChild(li);
//* bu sekılde new item elemanı en sona gelmiştiR*/

console.log(li);

//******* BU DERSTE YENI BIR ELEMAN NASIL OLUSTURULUR VE OLUSTURDUGUMUZ ELAMANI LİSTEYE NASIL EKLERIZ... BUNLARI ÖGRENDİK.    ***** */


