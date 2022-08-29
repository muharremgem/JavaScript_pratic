

//**   ELEMENT SİLME İŞLEMLERİ  */

const taskList = document.querySelector("#task-list");

//taskList.remove();
//* bu şekılde listedekı tüm elemanları silmiş oluyoruz.

//taskList.childNodes[3].remove();
//* burdaistediğimiz elemanı sileriz.


//taskList.children[3].remove();
//* yukardakını kullanmaktansa bunu kullanmak daha mantıklı.

//taskList.removeChild(taskList.children[2]);
//** alternatif bir başka silme yöntemi */


//*****    Attribute silme  *********/

//taskList.children[1].removeAttribute("class");
//* class attırbutunu silmiş oluyoruz yanı göruntusu css ı sılınmıs oluyor.


//*********** for dongusu ıle butun hepsını tek hamlede silme işlemi  ister class ister id lerı bu sekılde silebiliriz  ********** */

for(let i=0; i<taskList.children.length; i++){
    taskList.children[i].removeAttribute("class")

}

console.log(taskList);




