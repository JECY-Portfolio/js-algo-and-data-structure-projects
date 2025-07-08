

const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');
const userInput = document.getElementById('user-input');

checkBtn.addEventListener('click', function () {
  const input = userInput.value;

  if (input === '') {
    alert("Please provide a phone number");
    return;
  }

  const validUSPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  if (validUSPhoneRegex.test(input)) {
    resultsDiv.textContent = `Valid US number: ${input}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${input}`;
  }
});

clearBtn.addEventListener('click', function () {
  resultsDiv.textContent = '';
});


