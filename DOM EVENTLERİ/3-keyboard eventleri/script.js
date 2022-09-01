
//* keyboard eventleri

const text = document.getElementById("txtTaskName");

//*  Focus 

//text.addEventListener("focus",run);

//* Blur 

//text.addEventListener("blur",run)

//* Paste  (kullanıcı input alanına birşey alıp yapıştırdıgında tetıklenen olay )

//text.addEventListener("paste", run);

//* Copy  (input dan herhangı bırseyı kopyaladıgında console da copy  cıktısı gelır.)

//text.addEventListener("copy",run);

//* Cut 

// text.addEventListener("cut",run);

//* select (seçim gerçekleştırdııgımız de gerçekleşiyor.)

//text.addEventListener("select",run);

//* Keydown  (klavyeden bir tuşa bastıgımızda tetiklenir.)

//text.addEventListener("keydown",run);

//* Keyup (tuşu bıraktıgında tetıklenır ve ayrıca functıondakı kodu yazdıgımızda harflerın cıktısını verir bize)

text.addEventListener("keyup",run); 

function run(e){
    console.log(e.type);
    console.log(e.target.value);  //* bu kodla hangı harfe tıkladıgımızı console da gösterir.

}

