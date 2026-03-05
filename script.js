// Show/hide sections
function showSection(id) {
  document.querySelectorAll('.content').forEach(sec => {
    sec.style.display = 'none';
    sec.style.opacity = 0;
  });
  const section = document.getElementById(id);
  if (section) {
    section.style.display = 'block';
    setTimeout(() => section.style.opacity = 1, 50);
  }
}

// Toggle sidebar tree
function toggleTree(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = (el.style.display === 'block') ? 'none' : 'block';
  }
}

/* ---------------- Tools ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Background color changer (pink shades only)
  const bgBtn = document.getElementById("bgBtn");
  if (bgBtn) bgBtn.addEventListener("click", () => {
    document.body.style.background =
      document.body.style.background === "rgb(255, 227, 236)" ? "#ffc1d6" : "#ffe3ec";
  });

  // Dark mode toggle
  const darkBtn = document.getElementById("darkBtn");
  if (darkBtn) darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Add school item
  const addItemBtn = document.getElementById("addItemBtn");
  if (addItemBtn) addItemBtn.addEventListener("click", () => {
    let item = prompt("Enter school item:");
    if (item) {
      let li = document.createElement("li");
      li.textContent = item;
      document.getElementById("list").appendChild(li);
    }
  });

  // Remove announcement
  const removeParaBtn = document.getElementById("removeParaBtn");
  if (removeParaBtn) removeParaBtn.addEventListener("click", () => {
    let p = document.getElementById("announcement");
    if (p) p.remove();
  });

  // Essay character count
  const essayInput = document.getElementById("essayInput");
  if (essayInput) essayInput.addEventListener("input", () => {
    document.getElementById("charCount").textContent =
      "Characters: " + essayInput.value.length;
  });

  // Change profile image
  const imgBtn = document.getElementById("imgBtn");
  if (imgBtn) imgBtn.addEventListener("click", () => {
    let url = prompt("Enter image URL:");
    if (url) document.getElementById("image").src = url;
  });

  // To‑Do list
  const addTodoBtn = document.getElementById("addTodoBtn");
  if (addTodoBtn) addTodoBtn.addEventListener("click", () => {
    const month = todoMonth.value, date = todoDate.value, task = todoTask.value,
      priority = todoPriority.value, notes = todoNotes.value, reminder = todoReminder.value;
    if (task === "") return;
    let li = document.createElement("li");
    li.innerHTML = `<strong>${month} ${date}</strong><br>
                    Task: ${task}<br>
                    Priority: ${priority}<br>
                    Notes: ${notes}<br>
                    Reminder: ${reminder}`;
    document.getElementById("todoList").appendChild(li);
    todoMonth.value = ""; todoDate.value = ""; todoTask.value = "";
    todoPriority.value = ""; todoNotes.value = ""; todoReminder.value = "";
  });
});

/* ---------------- Calculator ---------------- */
function press(val) {
  let screen = document.getElementById("calcScreen");
  if (val === "⌫") { screen.value = screen.value.slice(0, -1); return; }
  if (val === "C") { screen.value = ""; return; }
  screen.value += val;
}
function clearScreen() { document.getElementById("calcScreen").value = ""; }

function factorial(n) { if (n < 0) return NaN; if (n === 0) return 1; return n * factorial(n - 1); }

function calculate() {
  let exp = document.getElementById("calcScreen").value;
  try {
    exp = exp.replace(/π/g, "Math.PI")
      .replace(/e/g, "Math.E")
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/ln\(/g, "Math.log(")
      .replace(/lg\(/g, "Math.log10(")
      .replace(/sqrt\(/g, "Math.sqrt(")
      .replace(/cbrt\(/g, "Math.cbrt(");
    if (exp.includes("!")) {
      exp = exp.replace(/(\d+)!/g, (match, num) => factorial(parseInt(num)));
    }
    let result = eval(exp);
    document.getElementById("calcScreen").value = result;
  } catch {
    document.getElementById("calcScreen").value = "Error";
  }
}

/* ---------------- Grades ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  let history = [];
  const calcGradeBtn = document.getElementById("calcGradeBtn");
  if (calcGradeBtn) calcGradeBtn.addEventListener("click", () => {
    const quiz = Number(document.getElementById("quiz").value);
    const exam = Number(document.getElementById("exam").value);
    const project = Number(document.getElementById("mco").value);

    if (isNaN(quiz) || isNaN(exam) || isNaN(project)) {
      alert("Please enter all grade values.");
      return;
    }

    const grade = (quiz * 0.2) + (exam * 0.3) + (project * 0.5);
    let letter;
    if (grade >= 90) { letter = "A"; }
    else if (grade >= 80) { letter = "B"; }
    else if (grade >= 70) { letter = "C"; }
    else if (grade >= 60) { letter = "D"; }
    else { letter = "F"; }

    let result = `Final Grade: ${grade.toFixed(1)} | Letter: ${letter}`;
    history.push(result);
    document.getElementById("result").innerHTML =
      result + `<br><br><strong>History:</strong><br>${history.join("<br>")}`;
  });

  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) resetBtn.addEventListener("click", () => {
    document.getElementById("quiz").value = "";
    document.getElementById("exam").value = "";
    document.getElementById("mco").value = "";
    document.getElementById("result").innerHTML = "";
    history = [];
  });
});
