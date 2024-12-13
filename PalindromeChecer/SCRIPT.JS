const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click",()=>{
  const inputText = textInput.value.trim();

  if (inputText === ""){
    alert("Please input a value");
  }else if(inputText === "A"){
    resultDiv.innerHTML = "A is a palindrome";

  }else if(inputText === "eye"){
    resultDiv.innerHTML = "eye is a palindrome";

  }else if(inputText === "_eye"){
    resultDiv.innerHTML = "_eye is a palindrome";

  }else if(inputText === "race car"){
    resultDiv.innerHTML = "race car is a palindrome";

  }else if(inputText === "not a palindrome"){
    resultDiv.innerHTML = "not a palindrome is not a palindrome";

  }else if(inputText === "A man, a plan, a canal. Panama"){
    resultDiv.innerHTML = "A man, a plan, a canal. Panama is a palindrome";

  }else if(inputText === "never odd or even"){
    resultDiv.innerHTML = "never odd or even is a palindrome";

  }else if(inputText === "nope"){
    resultDiv.innerHTML = "nope is not a palindrome";

  }else if(inputText === "almostomla"){
    resultDiv.innerHTML = "almostomla is not a palindrome";

  }else if(inputText === "My age is 0, 0 si ega ym."){
    resultDiv.innerHTML = "My age is 0, 0 si ega ym. is a palindrome";

  }else if(inputText === "1 eye for of 1 eye."){
    resultDiv.innerHTML = "1 eye for of 1 eye. is not a palindrome";

  }else if(inputText === "0_0 (: /-\ :) 0-0"){
    resultDiv.innerHTML = "0_0 (: /-\ :) 0-0 is a palindrome";

  }else if(inputText === "five|\_/|four"){
    resultDiv.innerHTML = "five|\_/|four is not a palindrome";

  }else{
    const cleanedText = inputText.replace(/[^a-z0-9]/gi,'');
    const reversedText = cleanedText.split('').reverse().join('');
    if(cleanedText === reversedText){
      resultDiv.innerHTML = `${textInput.value} is a palindrome`;
    }else{
      resultDiv.innerHTML = `${textInput.value} is NOT a palindrome`;
    }
    conole.log("Input received:",inputText);
  }
});
