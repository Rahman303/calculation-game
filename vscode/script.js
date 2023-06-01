 const number1 = document.getElementById("Number1");
 const number2 = document.getElementById("Number2");
 const operator = document.getElementById("Operator");
 const result = document.getElementById("result");
 const click = document.getElementById("answer");
 const True = document.getElementById("True");
 const False = document.getElementById("False");


 function randomNumber (min,max){
   const number = Math.floor(Math.random()*(max-min)+min);
   return number;
 };

 function newQuestion(){
   const operation = ["+","-","*","/"];
   operator.textContent = operation[randomNumber(0,4)];
   number1.textContent = randomNumber(0,50);
   number2.textContent = randomNumber(0,50);

   if(operator.textContent == "/"){
      while(true){
         number2.textContent=randomNumber(0,50);
         if(number1.textContent % number2.textContent == 0){   //number1 number2'ə bölündüyü 
            break;                                             //zaman qalıq sıfır qalır
         }
      }
   };
 };

// Oyun başlanğıcında və ya sual təxmini sonrası yeni sual yaranması
window.onload = function(){
   newQuestion();
};

//"Click" düyməsinə basılan zaman düz və ya səhv cavabın verilməsi
click.onclick=function(){
   let ans;
   const n1 = Number (number1.textContent);   
   const n2 = Number (number2.textContent);
   switch(operator.textContent){
      case "+":ans = n1 + n2;
      break;
      case "-":ans = n1 - n2;
      break; 
      case "*":ans = n1 * n2;
      break; 
      case "/":ans = n1 / n2;
      default:break; 
   }
   if(result.value==ans){
      True.textContent = Number(True.textContent)+1;
   } else if(document.getElementById("result").value == ""){
      window.alert("You have to enter your answer")
   }
    else{
      False.textContent = Number(False.textContent)+1;
   };
   try {
      if(isNaN(document.getElementById("result").value))
      throw ("You only have to enter a number")
   } catch (error) {
      window.alert(error)
   }
   result.value = ""
   newQuestion()   
}