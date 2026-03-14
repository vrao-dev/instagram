function showpassword(){
   let image='';

   const img = document.getElementById("show-img");
   
  

   const input = document.getElementById("password");
   if(input.type==="password"){
      input.type="text";
      image='show';
      
   }
   else{
      input.type="password";
      image='hide';
   }
   

   img.src=`images/${image}.png`;

}

function incorrect (){


   
         let input = document.querySelector('.input-password');
         let input1=input.value;

         let password = document.querySelector('.incorrect-password');
        

 

         if(input1===''){
            password.innerHTML=`<p>${'Enter Password'}</p>`;
         }
         else if (input==='venky'){
            correctPassword();
         }
         else{
            password.innerHTML=`<p>${'Incorrect Username or password'}</p>`;
         }

        

 
}

function accountPage(){
   
         let input = document.querySelector('.input-password');
         let input1=input.value;

         let inputElement = document.querySelector('.input-username');
         let inputElement1=inputElement.value;

         console.log(inputElement1);
         console.log(input1);



         if(inputElement1==='leela_7997'&& input1==='leelasiri'){

            window.location.href = "leela-insta-page.html";

         }
         

}

   
function keydown(event){

   if (event.key==='Enter'){
      incorrect();
      accountPage();
   }
}
