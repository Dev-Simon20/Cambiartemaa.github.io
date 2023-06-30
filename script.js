const titulo=document.querySelector(".titulo");
const cuerpo=document.querySelector(".cuerpo");

var darkkk;
var wite;

function cli(){
  if(darkkk=titulo.classList.toggle("dark")){
    cuerpo.style.backgroundColor="#000027";
  }

   if(wite=titulo.classList.toggle("claro")){
    cuerpo.style.backgroundColor="#e3f2fd";
   }
   console.log(darkkk+"blue");
   console.log(wite+"blanco");
   


   
}

titulo.addEventListener("click",cli);
