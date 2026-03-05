// Show/hide sections
function showSection(id){
  document.querySelectorAll('.content').forEach(sec=>{
    sec.style.display='none';
    sec.style.opacity=0;
  });
  const section=document.getElementById(id);
  section.style.display='block';
  setTimeout(()=>section.style.opacity=1,50);
}

// Toggle sidebar tree
function toggleTree(id){
  const el=document.getElementById(id);
  el.style.display=(el.style.display==='block')?'none':'block';
}

/* ---------------- Student Basics (7 Activities) ---------------- */

// 1. Student Info
function variablesDemo(){
  let name=document.getElementById("studentName").value;
  let age=document.getElementById("studentAge").value;
  let course=document.getElementById("studentCourse").value;
  if(name==="" || age==="" || course===""){
    alert("Please fill in all fields.");
    return;
  }
  document.getElementById("output2").innerHTML=
    `<strong>Student Record</strong><br>Name: ${name}<br>Age: ${age}<br>Course: ${course}`;
  document.getElementById("studentName").value="";
  document.getElementById("studentAge").value="";
  document.getElementById("studentCourse").value="";
}

// 2. Fees Calculator
function calcDemo(){
  let f1=Number(document.getElementById("fee1").value);
  let f2=Number(document.getElementById("fee2").value);
  let f3=Number(document.getElementById("fee3").value);
  let total=f1+f2+f3;
  document.getElementById("outputCalc").innerHTML=`Total Fees: ₱${total}`;
  document.getElementById("fee1").value="";
  document.getElementById("fee2").value="";
  document.getElementById("fee3").value="";
}

// 3. Class Hours Loop
function loopsDemo(){
  let start=Number(document.getElementById("startHour").value);
  let end=Number(document.getElementById("endHour").value);
  if(!start || !end || start>end){
    alert("Please enter valid start and end hours.");
    return;
  }
  let schedule="Class hours: ";
  for(let i=start;i<=end;i++) schedule+=i+":00, ";
  document.getElementById("outputLoops").innerHTML=schedule;
  document.getElementById("startHour").value="";
  document.getElementById("endHour").value="";
}

// 4. Attendance Tracker
function attendanceDemo(){
  let present=Number(document.getElementById("presentDays").value);
  let total=Number(document.getElementById("totalDays").value);
  if(!present || !total || present>total){
    alert("Enter valid attendance values.");
    return;
  }
  let percent=(present/total*100).toFixed(1);
  document.getElementById("outputAttendance").innerHTML=`Attendance: ${percent}%`;
  document.getElementById("presentDays").value="";
  document.getElementById("totalDays").value="";
}

// 5. Subject List
function subjectDemo(){
  let subject=document.getElementById("subjectName").value;
  if(subject===""){ alert("Enter a subject."); return; }
  let li=document.createElement("li");
  li.textContent=subject;
  document.getElementById("subjectList").appendChild(li);
  document.getElementById("subjectName").value="";
}

// 6. GPA Calculator
function gpaDemo(){
  let g1=Number(document.getElementById("grade1").value);
  let g2=Number(document.getElementById("grade2").value);
  let g3=Number(document.getElementById("grade3").value);
  if(!g1||!g2||!g3){ alert("Enter all grades."); return; }
  let gpa=((g1+g2+g3)/3).toFixed(2);
  document.getElementById("outputGPA").innerHTML=`GPA: ${gpa}`;
  document.getElementById("grade1").value="";
  document.getElementById("grade2").value="";
  document.getElementById("grade3").value="";
}

// 7. Study Timer
let timerInterval;
function startTimer(){
  let minutes=Number(document.getElementById("studyMinutes").value);
  if(!minutes || minutes<=0){ alert("Enter valid minutes."); return; }
  let seconds=minutes*60;
  clearInterval(timerInterval);
  timerInterval=setInterval(()=>{
    let m=Math.floor(seconds/60);
    let s=seconds%60;
    document.getElementById("outputTimer").innerHTML=`Time Left: ${m}:${s<10?'0'+s:s}`;
    if(seconds<=0){ clearInterval(timerInterval); alert("Study session complete!"); }
    seconds--;
  },1000);
}

/* ---------------- Tools ---------------- */
document.addEventListener("DOMContentLoaded",()=>{
  const bgBtn=document.getElementById("bgBtn");
  if(bgBtn) bgBtn.addEventListener("click",()=>document.body.style.background="#fff5f8");

  const darkBtn=document.getElementById("darkBtn");
  if(darkBtn) darkBtn.addEventListener("click",()=>document.body.classList.toggle("dark"));

  const addItemBtn=document.getElementById("addItemBtn");
  if(addItemBtn) addItemBtn.addEventListener("click",()=>{
    let item=prompt("Enter school item:");
    if(item){
      let li=document.createElement("li");
      li.textContent=item;
      document.getElementById("list").appendChild(li);
    }
  });

  const removeParaBtn=document.getElementById("removeParaBtn");
  if(removeParaBtn) removeParaBtn.addEventListener("click",()=>{
    let p=document.getElementById("announcement");
    if(p) p.remove();
  });

  const essayInput=document.getElementById("essayInput");
  if(essayInput) essayInput.addEventListener("input",()=>{
    document.getElementById("charCount").textContent="Characters: "+essayInput.value.length;
  });

  const imgBtn=document.getElementById("imgBtn");
  if(imgBtn) imgBtn.addEventListener("click",()=>{
    let url=prompt("Enter image URL:");
    if(url) document.getElementById("image").src=url;
  });

  const addTodoBtn=document.getElementById("addTodoBtn");
  if(addTodoBtn) addTodoBtn.addEventListener("click",()=>{
    const month=todoMonth.value, date=todoDate.value, task=todoTask.value,
          priority=todoPriority.value, notes=todoNotes.value, reminder=todoReminder.value;
    if(task==="") return;
    let li=document.createElement("li");
    li.innerHTML=`<strong>${month} ${date}</strong><br>
                  Task: ${task}<br>
                  Priority: ${priority}<br>
                  Notes: ${notes}<br>
                  Reminder: ${reminder}`;
    document.getElementById("todoList").appendChild(li);
    todoMonth.value=""; todoDate.value=""; todoTask.value="";
    todoPriority.value=""; todoNotes.value=""; todoReminder.value="";
  });
});

/* ---------------- Calculator ---------------- */
function press(val){
  let screen=document.getElementById("calcScreen");
  if(val==="⌫"){ screen.value=screen.value.slice(0,-1); return; }
  if(val==="C"){ screen.value=""; return; }
  screen.value+=val;
}
function clearScreen(){ document.getElementById("calcScreen").value=""; }

function factorial(n){ if(n<0) return NaN; if(n===0) return 1; return n*factorial(n-1); }

function calculate(){
  let exp=document.getElementById("calcScreen").value;
  try{
    exp=exp.replace(/π/g,"Math.PI")
           .replace(/e/g,"Math.E")
           .replace(/sin\(/g,"Math.sin(")
           .replace(/cos\(/g,"Math.cos(")
           .replace(/tan\(/g,"Math.tan(")
           .replace(/ln\(/g,"Math.log(")
           .replace(/log\(/g,"Math.log10(")
           .replace(/sqrt\(/g,"Math.sqrt(")
           .replace(/cbrt\(/g,"Math.cbrt(");
    if(exp.includes("!")){
      exp=exp.replace(/(\d+)!/g,(match,num)=>factorial(parseInt(num)));
    }
    let result=eval(exp);
    document.getElementById("calcScreen").value=result;
  }catch{
    document.getElementById("calcScreen").value="Error";
  }
}

/* ---------------- Grades ---------------- */
document.addEventListener("DOMContentLoaded",()=>{
  let history=[];
  const calcGradeBtn=document.getElementById("calcGradeBtn");
  if(calcGradeBtn) calcGradeBtn.addEventListener("click",()=>{
    const quiz=Number(document.getElementById("quiz").value);
    const exam=Number(document.getElementById("exam").value);
    const project=Number(document.getElementById("mco").value);

    if(isNaN(quiz) || isNaN(exam) || isNaN(project)){
      alert("Please enter all grade values.");
      return;
    }

    const grade=(quiz*0.2)+(exam*0.3)+(project*0.5);
    let letter;
    if(grade>=90){ letter="A"; }
    else if(grade>=80){ letter="B"; }
    else if(grade>=70){ letter="C"; }
    else if(grade>=60){ letter="D"; }
    else { letter="F"; }

    let result=`Final Grade: ${grade.toFixed(1)} | Letter: ${letter}`;
    history.push(result);
    document.getElementById("result").innerHTML=
      result+`<br><br><strong>History:</strong><br>${history.join("<br>")}`;
  });

  const resetBtn=document.getElementById("resetBtn");
  if(resetBtn) resetBtn.addEventListener("click",()=>{
    document.getElementById("quiz").value="";
    document.getElementById("exam").value="";
    document.getElementById("mco").value="";
    document.getElementById("result").innerHTML="";
    history=[];
  });
});
