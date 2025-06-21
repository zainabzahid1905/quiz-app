let allResults = []; // Global array to store submissions

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  let name = document.getElementById("name").value;
  let score = 0;

  let correctAnswers = {
    q1: "maroon",
    q2: "burger",
    q3: "invisibility",
    q4: "kuch ni",
    q5: "baku",
    q6: "black",
    q7: "insta",
    q8: "ambivert",
    q9: "money",
    q10: "fatima"
  };

  let userAnswers = {};

  for (let q in correctAnswers) {
    let selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected) {
      userAnswers[q] = selected.value;
      if (selected.value === correctAnswers[q]) {
        score++;
      }
    } else {
      userAnswers[q] = "Not Answered";
    }
  }

  // Save result
  allResults.push({
    name: name,
    score: score,
    answers: userAnswers
  });

  // Show result
  document.getElementById("userNameOutput").textContent = name;
  document.getElementById("scoreOutput").textContent = score;
  document.getElementById("quizForm").style.display = "none";
  document.getElementById("result").style.display = "block";

  // Disable all inputs after submission
  const allInputs = document.querySelectorAll('input[type="radio"]');
  allInputs.forEach(input => input.disabled = true);

  console.log("All Submissions:", allResults); // View in browser console
});
