const left= document.getElementById("left");
const right= document.getElementById("right");
const img1= document.getElementById("img1"); 
const imgBig= document.querySelector(".imgBig");
const titel =document.getElementById("titel");
const arrayImages=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"]
const arrayCity=["Muğla","Edremit","Çamlıyayla","Yalova","Sinop","Toroslar","Ölüdeniz","Manavgat","Neuss","Trabzon"]


var user;

function footerImages(item){
   user= item.getAttribute("data");
   
   imgBig.setAttribute("src", "images/" + arrayImages[user]);
   
   titel.innerHTML=arrayCity[user];
    console.log(user);
   
}

function total() {
    titel.innerHTML=arrayCity[user];
   imgBig.setAttribute("src", "images/" + arrayImages[user]);
 }


  function ileri() {
    if (user >= arrayImages.length - 1) user = -1;
    user++;
    total();
  }
  
  function geri() {
    if (user <= 0) user = arrayImages.length;
    user--;
    total();
    
  }

 
 