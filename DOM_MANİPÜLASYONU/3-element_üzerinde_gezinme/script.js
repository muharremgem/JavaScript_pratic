///**  ELEMENTLER ÜZERİNDE GEZİNME */

let value;

const todoList = document.querySelector(".list-group");

const todo = document.querySelector(".list-group-item:nth-child(2)");

const card = document.querySelector(".card");




value = todoList;
value = todo;
value = card;

//***  Child Nodes metodu

value = todoList.childNodes; 
//* burda 9 adet liste gösteriyor sebebı ise text leri ve her bir li yi de aldıgı için normalde bizim 4 adt listemiz vardır.

value = todoList.children; 
//* sadece elementlerı seçti yukarda ıse tüm ögelerı seçmişti suan 4 tanesı cıkmıs oldu.

value = todoList.children[0];
//* burda ise sadece indexle hangısını cagırdıysak o geldı yanni 

value = todoList.children[todoList.children.length-1] 
//* bu şekılde sopn elemanına ulaşmış olduk.

value = todoList.children[1].textContent="değişen madde ";
//* ulaştıgımızın elemanın text ını değiştirmek.

value = card;
value = card.children;

value = card.children[1].children[0].textContent="MERHABA";
//* classı card olan a 1 ındexı ıle erısıp onun altındakı chıldren 0 a ulasarak text ını degıstırmış olduk.


value = todoList;
//value = todoList.children[0];
value = todoList.firstElementChild;
//* firstElementChild ile daha kısa yolla todolıstın ılk cocuguna erısmıs olduk.

value = todoList.lastElementChild;
//* son elemana eriştik.

value = todoList.children.length;
//* elemntlerın sayısına bu sekılde ulasabılırız.

value = todoList.childElementCount;
//* buda element sayısına kısa yoldan ulaşmak için kullanılır.

value = card;
value = card.parentElement;
//* normalde yukardan asagı cocuga ulasıyorduk şimdi ise çocukdan babaya ulasıyoruz ana elemnte ulasmış oluyoruz bu şekilde.

value = card.parentElement.parentElement;
//* bu sekıldede dede ye ulasmıs oluyoruz oda body kısmı zaten.

value = todo;
value = todo.previousElementSibling;
//* bi öncekı ne gecmıs olduk
value = todo.nextElementSibling;
//* next element sıblıng le bir sonrakı elamana ulasmıs olduk.

value = todo.nextElementSibling.nextElementSibling;
//* burda bir ilerisine ulastık yanı 4.elemana ulasmıs oluyoruz.

value = todo.previousElementSibling.previousElementSibling;
//* burda null verır cunku ebevyne ulasamamıs ouyoruz. elemanlar uzerınde gecıs saglanabılıyor bu sekılde.


console.log(value)