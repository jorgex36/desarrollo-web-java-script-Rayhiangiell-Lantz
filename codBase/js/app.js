var press=document.getElementsByClassName('tecla');
var pantalla=document.getElementById('display');



press[15].addEventListener("click", cero);
press[12].addEventListener("click", uno);
press[13].addEventListener("click", dos );
press[14].addEventListener("click", tres );
press[8].addEventListener("click", cuatro);
press[9].addEventListener("click", cinco );
press[10].addEventListener("click", seis );
press[4].addEventListener("click", siete);
press[5].addEventListener("click", ocho );
press[6].addEventListener("click", nueve );

press[0].addEventListener("click", ce );
press[16].addEventListener("click", coma );

setInterval(tam,300);

function tam(){
  for (i=0; i<press.length ; i++)
     press[i].style="padding:px;"
}



function cero(){
    press[15].style="padding:2px;";

if ((pantalla.innerHTML== 0 ) || (pantalla.innerHTML==localStorage.valor5))

        {pantalla.innerHTML=0;}
        else if (pantalla.innerHTML.length<8) {pantalla.innerHTML=pantalla.innerHTML+0;}
        else if ((pantalla.innerHTML%1)!=0 && (pantalla.innerHTML.length<9))           {pantalla.innerHTML=pantalla.innerHTML+0}

        else
          {}
   }

function uno(){


    press[12].style="padding:2px;";

if      ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length< 2)|| (pantalla.innerHTML==localStorage.valor5))                {pantalla.innerHTML=1;}
            else if ((pantalla.innerHTML!= 0 ) && (pantalla.innerHTML.length< 8))            {pantalla.innerHTML=pantalla.innerHTML+1;}
            else if ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length= 1))            {pantalla.innerHTML=pantalla.innerHTML+1;}
            else if ((pantalla.innerHTML%1)!=0 && (pantalla.innerHTML.length<9))           {pantalla.innerHTML=pantalla.innerHTML+1}
            else{}
   }

function dos(){
    press[13].style="padding:2px;";

        if      ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length< 2)|| (pantalla.innerHTML==localStorage.valor5))                {pantalla.innerHTML=2;}
            else if ((pantalla.innerHTML!= 0 ) && (pantalla.innerHTML.length< 8))            {pantalla.innerHTML=pantalla.innerHTML+2;}
            else if ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length= 1))            {pantalla.innerHTML=pantalla.innerHTML+2;}
            else if ((pantalla.innerHTML%1)!=0 && (pantalla.innerHTML.length<9))           {pantalla.innerHTML=pantalla.innerHTML+2}
            else{}
   }

function tres(){
    press[14].style="padding:2px;";

            if      ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length< 2)|| (pantalla.innerHTML==localStorage.valor5))            {pantalla.innerHTML=3;}
            else if ((pantalla.innerHTML!= 0 ) && (pantalla.innerHTML.length< 8))            {pantalla.innerHTML=pantalla.innerHTML+3;}
            else if ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length= 1))            {pantalla.innerHTML=pantalla.innerHTML+3;}
            else if ((pantalla.innerHTML%1)!=0 && (pantalla.innerHTML.length<9))           {pantalla.innerHTML=pantalla.innerHTML+3}
            else{}
   }

function cuatro(){
    press[8].style="padding:2px;";

if      ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length< 2)|| (pantalla.innerHTML==localStorage.valor5))                {pantalla.innerHTML=4;}
            else if ((pantalla.innerHTML!= 0 ) && (pantalla.innerHTML.length< 8))            {pantalla.innerHTML=pantalla.innerHTML+4;}
            else if ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length= 1))            {pantalla.innerHTML=pantalla.innerHTML+4;}
            else if ((pantalla.innerHTML%1)!=0 && (pantalla.innerHTML.length<9))           {pantalla.innerHTML=pantalla.innerHTML+4}
            else{}
   }

function cinco(){
    press[9].style="padding:2px;";

if      ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length< 2)|| (pantalla.innerHTML==localStorage.valor5))                {pantalla.innerHTML=5;}
            else if ((pantalla.innerHTML!= 0 ) && (pantalla.innerHTML.length< 8))            {pantalla.innerHTML=pantalla.innerHTML+5;}
            else if ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length= 1))            {pantalla.innerHTML=pantalla.innerHTML+5;}
            else if ((pantalla.innerHTML%1)!=0 && (pantalla.innerHTML.length<9))           {pantalla.innerHTML=pantalla.innerHTML+5}
            else{}
   }

function seis(){
    press[10].style="padding:2px;";

if      ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length< 2)|| (pantalla.innerHTML==localStorage.valor5))               {pantalla.innerHTML=6;}
            else if ((pantalla.innerHTML!= 0 ) && (pantalla.innerHTML.length< 8))            {pantalla.innerHTML=pantalla.innerHTML+6;}
            else if ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length= 1))            {pantalla.innerHTML=pantalla.innerHTML+6;}
            else if ((pantalla.innerHTML%1)!=0 && (pantalla.innerHTML.length<9))           {pantalla.innerHTML=pantalla.innerHTML+6}
            else{}
   }

function siete(){
    press[4].style="padding:2px;";

if      ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length< 2)|| (pantalla.innerHTML==localStorage.valor5))               {pantalla.innerHTML=7;}
            else if ((pantalla.innerHTML!= 0 ) && (pantalla.innerHTML.length< 8))            {pantalla.innerHTML=pantalla.innerHTML+7;}
            else if ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length= 1))            {pantalla.innerHTML=pantalla.innerHTML+7;}
            else if ((pantalla.innerHTML%1)!=0 && (pantalla.innerHTML.length<9))           {pantalla.innerHTML=pantalla.innerHTML+7}
            else{}
   }


   function ocho(){
          press[5].style="padding:2px;";

      if      ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length< 2) || (pantalla.innerHTML==localStorage.valor5))                {pantalla.innerHTML=8;}
            else if ((pantalla.innerHTML!= 0 ) && (pantalla.innerHTML.length< 8))            {pantalla.innerHTML=pantalla.innerHTML+8;}
            else if ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length= 1))            {pantalla.innerHTML=pantalla.innerHTML+8;}
            else if ((pantalla.innerHTML%1)!=0 && (pantalla.innerHTML.length<9))           {pantalla.innerHTML=pantalla.innerHTML+8}
            else{}
   }

function nueve(){
    press[6].style="padding:2px;";

            if      ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length< 2) || (pantalla.innerHTML==localStorage.valor5))             {pantalla.innerHTML=9;}
            else if ((pantalla.innerHTML!= 0 ) && (pantalla.innerHTML.length< 8))            {pantalla.innerHTML=pantalla.innerHTML+9;}
            else if ((pantalla.innerHTML== 0 ) && (pantalla.innerHTML.length= 1))            {pantalla.innerHTML=pantalla.innerHTML+9;}
            else if ((pantalla.innerHTML%1)!=0 && (pantalla.innerHTML.length<9))           {pantalla.innerHTML=pantalla.innerHTML+9}
            else{}

   }


function ce ()  {
    press[0].style="padding:2px;";
      pantalla.innerHTML=0
       localStorage.removeItem("valor1"); 
 localStorage.removeItem("valor2"); 
 localStorage.removeItem("valor3"); 
 localStorage.removeItem("valor4");
  localStorage.removeItem("valor5");
  }

function coma(){
    press[16].style="padding:2px;";

             if           (pantalla.innerHTML.length== 2 )               {pantalla.innerHTML=pantalla.innerHTML}
        else if       ((pantalla.innerHTML%1)!=0 && (pantalla.innerHTML.length<8))           {pantalla.innerHTML=pantalla.innerHTML}
          else if       ((pantalla.innerHTML%1)==0 && (pantalla.innerHTML.length<8))         {pantalla.innerHTML=pantalla.innerHTML+".";}
    
       }



press[18].addEventListener("click", sumar );
press[11].addEventListener("click", resta );
press[7].addEventListener("click", mult );
press[3].addEventListener("click", div );
press[17].addEventListener("click", igual );


function sumar() {
  press[18].style="padding:2px;";
    localStorage.valor1 = document.getElementById("display").innerHTML;
    pantalla.innerHTML=0;
}
function resta() {
    press[11].style="padding:2px;";
    localStorage.valor2 = document.getElementById("display").innerHTML;
    pantalla.innerHTML=0;
}
function mult() {
    press[7].style="padding:2px;";
    localStorage.valor3 = document.getElementById("display").innerHTML;
    pantalla.innerHTML=0;
}
function div() {
    press[3].style="padding:2px;";
    localStorage.valor4 = document.getElementById("display").innerHTML;
    pantalla.innerHTML=0;
}


function igual() {
    press[17].style="padding:2px;";
          var a=parseFloat(document.getElementById("display").innerHTML);
           localStorage.valor1=parseFloat(localStorage.valor1)
           localStorage.valor2=parseFloat(localStorage.valor2)
           localStorage.valor3=parseFloat(localStorage.valor3)
           localStorage.valor4=parseFloat(localStorage.valor4)

          
          if (resultado = parseFloat(localStorage.valor1)+a)             {"suma"}
          else if (resultado = parseFloat(localStorage.valor2)-a)             {"resta"}
          else if (resultado = parseFloat(localStorage.valor3)*a)             {"mult"}
            else if (resultado = parseFloat(localStorage.valor4)/a)             {"div"};
           
  
           pantalla.innerHTML=resultado.toPrecision(8);


 localStorage.valor5 = resultado;
 localStorage.removeItem("valor1"); 
 localStorage.removeItem("valor2"); 
 localStorage.removeItem("valor3"); 
 localStorage.removeItem("valor4");
               
}

press[1].addEventListener("click", masMenos );
function masMenos(){
 press[1].style="padding:2px;";
      pantalla.innerHTML= - pantalla.innerHTML   }
