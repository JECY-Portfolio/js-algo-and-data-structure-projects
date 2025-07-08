

document.getElementById('check-btn').addEventListener('click', function () {
  const input = document.getElementById('text-input').value;

  if (input.trim() === "") {
    alert("Please input a value");
    return;
  }

  const resultElement = document.getElementById('result');

  const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
const reversed = cleanInput.split('').reverse().join('');

if (cleanInput === reversed) {
  resultElement.textContent = `${input} is a palindrome`;
} else {
  resultElement.textContent = `${input} is not a palindrome`;
}
});


