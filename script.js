/* ==================== NAVIGATION ==================== */
function showSection(id) {
  document.querySelectorAll('.content').forEach(sec => {
    sec.style.display = 'none';
  });
  const section = document.getElementById(id);
  if (section) {
    section.style.display = 'block';
  }
}

function toggleTree(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = (el.style.display === 'block') ? 'none' : 'block';
  }
}

/* ==================== CALCULATOR ==================== */
let calcExpression = "";

function press(val) {
  calcExpression += val;
  document.getElementById("calcScreen").value = calcExpression;
}

function clearScreen() {
  calcExpression = "";
  document.getElementById("calcScreen").value = "";
}

function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function calculate() {
  let exp = document.getElementById("calcScreen").value;
  try {
    // Replace special symbols with Math functions
    exp = exp.replace(/π/g, "Math.PI")
             .replace(/e/g, "Math.E")
             .replace(/sin\$/g, "Math.sin(")
             .replace(/cos\$/g, "Math.cos(")
             .replace(/tan\$/g, "Math.tan(")
             .replace(/log\$/g, "Math.log10(")
             .replace(/ln\$/g, "Math.log(")
             .replace(/sqrt\$/g, "Math.sqrt(")
             .replace(/cbrt\$/g, "Math.cbrt(");

    // Handle power operations
    exp = exp.replace(/\^2/g, "**2")
             .replace(/\^3/g, "**3")
             .replace(/\^/g, "**");

    // Handle factorial
    if (exp.includes("!")) {
      exp = exp.replace(/(\d+)!/g, (match, num) => factorial(parseInt(num)));
    }

    // Handle percentage
    exp = exp.replace(/(\d+)%/g, "($1/100)");

    // Handle 1/x
    exp = exp.replace(/1\/(\d+)/g, "1/$1");

    // Handle negative sign
    exp = exp.replace(/±(\d+)/g, "-$1");

    let result = eval(exp);
    
    // Round to avoid floating point errors
    if (!isNaN(result) && isFinite(result)) {
      result = Math.round(result * 100000000) / 100000000;
    }
    
    document.getElementById("calcScreen").value = result;
    calcExpression = result.toString();
  } catch (error) {
    document.getElementById("calcScreen").value = "Error";
    calcExpression = "";
  }
}

/* ==================== TOOLS ==================== */
document.addEventListener("DOMContentLoaded", () => {
  
  // Background Color
  const bgBtn = document.getElementById("bgBtn");
  if (bgBtn) {
    bgBtn.addEventListener("click", () => {
      const colors = ["#fff5f8", "#e0f7fa", "#fff3e0", "#e8f5e9", "#f3e5f5"];
      document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
    });
  }

  // Dark Mode
  const darkBtn = document.getElementById("darkBtn");
  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // Add School Item
  const addItemBtn = document.getElementById("addItemBtn");
  if (addItemBtn) {
    addItemBtn.addEventListener("click", () => {
      const item = prompt("Enter school item:");
      if (item) {
        const li = document.createElement("li");
        li.textContent = item;
        document.getElementById("list").appendChild(li);
      }
    });
  }

  // Reminder Manager
  const addReminderBtn = document.getElementById("addReminderBtn");
  if (addReminderBtn) {
    addReminderBtn.addEventListener("click", () => {
      const reminder = document.getElementById("reminderInput").value;
      if (reminder) {
        const li = document.createElement("li");
        li.textContent = reminder;
        document.getElementById("reminderList").appendChild(li);
        document.getElementById("reminderInput").value = "";
      }
    });
  }

  // Character Count (Study Notes)
  const essayInput = document.getElementById("essayInput");
  if (essayInput) {
    essayInput.addEventListener("input", () => {
      const count = essayInput.value.length;
      document.getElementById("charCount").textContent = "Characters: " + count;
    });
  }

  // Change Profile Image (5 Images)
  const nextImgBtn = document.getElementById("nextImgBtn");
  const image = document.getElementById("image");

  const profileImages = [
    "images/profile1.jpg",
    "images/profile2.jpg",
    "images/profile3.jpg",
    "images/profile4.jpg",
    "images/profile5.jpg"
  ];

  let currentImageIndex = 0;

  if (nextImgBtn) {
    nextImgBtn.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % profileImages.length;
      image.src = profileImages[currentImageIndex];
    });
  }

  // To-Do List
  const addTodoBtn = document.getElementById("addTodoBtn");
  if (addTodoBtn) {
    addTodoBtn.addEventListener("click", () => {
      const month = document.getElementById("todoMonth").value;
      const date = document.getElementById("todoDate").value;
      const task = document.getElementById("todoTask").value;
      const priority = document.getElementById("todoPriority").value;
      const notes = document.getElementById("todoNotes").value;
      const reminder = document.getElementById("todoReminder").value;

      if (task === "") {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${month} ${date}</strong>: ${task}<br>
        <small>Priority: ${priority} | Notes: ${notes} | Reminder: ${reminder}</small>
      `;
      document.getElementById("todoList").appendChild(li);

      document.getElementById("todoTask").value = "";
      document.getElementById("todoPriority").value = "";
      document.getElementById("todoNotes").value = "";
      document.getElementById("todoReminder").value = "";
    });
  }
});

/* ==================== STUDENT BASICS ==================== */
function updateStudent() {
  const name = prompt("Enter new name:");
  const age = prompt("Enter new age:");
  if (name) document.getElementById("studentName").textContent = name;
  if (age) document.getElementById("studentAge").textContent = age;
}

function calcFees() {
  const tuition = parseFloat(document.getElementById("tuition").value) || 0;
  const misc = parseFloat(document.getElementById("misc").value) || 0;
  const total = tuition + misc;
  document.getElementById("feesResult").textContent = "Total Fees: $" + total.toFixed(2);
}

/* ==================== DYNAMIC GRADE CALCULATOR ==================== */
let quizCount = 0;

// Add a new quiz input field dynamically
function addQuizInput() {
  quizCount++;
  const quizContainer = document.getElementById('quizInputs');
  
  const inputGroup = document.createElement('div');
  inputGroup.className = 'quiz-input-group';
  inputGroup.innerHTML = `
    <input type="number" id="quizScore${quizCount}" placeholder="Quiz ${quizCount} Score" min="0" max="100" />
    <button class="remove-btn" onclick="removeQuizInput(${quizCount})">Remove</button>
  `;
  
  quizContainer.appendChild(inputGroup);
}

// Remove a quiz input field
function removeQuizInput(id) {
  const inputGroup = document.getElementById(`quizScore${id}`).parentElement;
  if (inputGroup) {
    inputGroup.remove();
  }
}

// Calculate the average grade from all inputs
function calculateGrade() {
  // Get quiz scores
  const inputs = document.querySelectorAll('.quiz-input-group input');
  let quizTotal = 0;
  let quizCount = 0;

  inputs.forEach(input => {
    const score = parseFloat(input.value);
    if (!isNaN(score)) {
      quizTotal += score;
      quizCount++;
    }
  });

  // Get exam and project scores
  const exam = parseFloat(document.getElementById("exam").value) || 0;
  const project = parseFloat(document.getElementById("project").value) || 0;

  // Calculate total and average
  const totalScore = quizTotal + exam + project;
  const maxScore = (quizCount * 100) + 100 + 100;
  const percentage = (totalScore / maxScore) * 100;
  
  let grade = "F";
  if (percentage >= 90) grade = "A";
  else if (percentage >= 80) grade = "B";
  else if (percentage >= 70) grade = "C";
  else if (percentage >= 60) grade = "D";
  
  document.getElementById("gradeResult").innerHTML = `
    <p><strong>Quiz Total: ${quizTotal}/${quizCount * 100}</strong></p>
    <p><strong>Exam: ${exam}/100</strong></p>
    <p><strong>Project: ${project}/100</strong></p>
    <p><strong>Total: ${totalScore}/${maxScore}</strong></p>
    <p><strong>Percentage: ${percentage.toFixed(2)}%</strong></p>
    <p><strong>Grade: ${grade}</strong></p>
  `;
}

// Reset all quiz inputs
function resetQuiz() {
  quizCount = 0;
  document.getElementById('quizInputs').innerHTML = '';
  document.getElementById("exam").value = "";
  document.getElementById("project").value = "";
  document.getElementById("gradeResult").innerHTML = '';
}

// Initialize with one quiz input
document.addEventListener("DOMContentLoaded", () => {
  addQuizInput();
});
