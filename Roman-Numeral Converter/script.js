

const romanNumerals = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];

document.getElementById('convert-btn').addEventListener('click', function(){
  const input = document.getElementById('number').value;
  const output = document.getElementById('output');
  
  if(input === ''){
    output.textContent = "Please enter a valid number";
    return;
  }

  let num = Number(input);

  if(num < 1){
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  if(num >= 4000){
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  let roman = "";
  for (let [romanChar, value] of romanNumerals){
    while(num >= value){
      roman += romanChar;
      num -= value;
  }
  }
   output.textContent = roman; 
});


