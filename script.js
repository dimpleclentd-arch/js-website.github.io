// Show/hide sections with fade
function showSection(id){
  document.querySelectorAll('.content').forEach(sec=>{
    sec.style.display='none';
    sec.style.opacity=0;
  });
  const section=document.getElementById(id);
  section.style.display='block';
  setTimeout(()=>section.style.opacity=1,50);

  if(id==='variablesDemo') variablesDemo();
  if(id==='calcDemo') calcDemo();
  if(id==='loopsDemo') loopsDemo();
}

// Toggle sidebar tree
function toggleTree(id){
  const el=document.getElementById(id);
  el.style.display=(el.style.display==='block')?'none':'block';
}

/* ---------------- Student Basics ---------------- */

// Student Info
function variablesDemo(){
  let name=document.getElementById("studentName").value;
  let age=document.getElementById("studentAge").value;
  let course=document.getElementById("studentCourse").value;

  if(name==="" || age==="" || course===""){
    alert("Please fill in all fields.");
    return;
  }

  // Show submitted info
  let output=document.getElementById("output2");
  output.innerHTML=`<strong>Student Record</strong><br>
                    Name: ${name}<br>
                    Age: ${age}<br>
                    Course: ${course}`;

  // Clear inputs after submit
  document.getElementById("studentName").value="";
  document.getElementById("studentAge").value="";
  document.getElementById("studentCourse").value="";
}

// Fees Calculator
function calcDemo(){
  let f1=Number(document.getElementById("fee1").value);
  let f2=Number(document.getElementById("fee2").value);
  let f3=Number(document.getElementById("fee3").value);
  let total=f1+f2+f3;
  document.getElementById("outputCalc").innerHTML=`Total Fees: ₱${total}`;

  // Clear inputs
  document.getElementById("fee1").value="";
  document.getElementById("fee2").value="";
  document.getElementById("fee3").value="";
}

// Class Hours Loop
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

  // Clear inputs
  document.getElementById("startHour").value="";
  document.getElementById("endHour").value="";
}

/* ---------------- Student Tools ---------------- */
document.addEventListener("DOMContentLoaded",()=>{

  // Background Color (whole page)
  const bgBtn=document.getElementById("bgBtn");
  if(bgBtn) bgBtn.addEventListener("click",()=>document.body.style.background="#fff5f8");

  // Dark Mode
  const darkBtn=document.getElementById("darkBtn");
  if(darkBtn) darkBtn.addEventListener("click",()=>document.body.classList.toggle("dark"));

  // Add School Item
  const addItemBtn=document.getElementById("addItemBtn");
  if(addItemBtn) addItemBtn.addEventListener("click",()=>{
    let item=prompt("Enter school item to buy/pay:");
    if(item){
      let li=document.createElement("li");
      li.textContent=item;
      document.getElementById("list").appendChild(li);
    }
  });

  // Remove Announcement
  const removeParaBtn=document.getElementById("removeParaBtn");
  if(removeParaBtn) removeParaBtn.addEventListener("click",()=>{
    let p=document.getElementById("announcement");
    if(p) p.remove();
  });

  // Essay Character Count
  const essayInput=document.getElementById("essayInput");
  if(essayInput) essayInput.addEventListener("input",()=>{
    document.getElementById("charCount").textContent="Characters: "+essayInput.value.length;
  });

  // Profile Image Change
  const imgBtn=document.getElementById("imgBtn");
  if(imgBtn) imgBtn.addEventListener("click",()=>{
    let url=prompt("Enter image URL for your profile/notes:");
    if(url) document.getElementById("image").src=url;
  });

  // To-Do List Expanded (Month, Date, Task, Priority, Notes, Reminder)
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

/* ---------------- Calculator Keypad ---------------- */
function press(val){document.getElementById("calcScreen").value+=val;}
function calculate(){
  let exp=document.getElementById("calcScreen").value;
  try{
    document.getElementById("calcScreen").value=eval(exp);
  }catch{
    document.getElementById("calcScreen").value="Error";
  }
}

/* ---------------- Student Grades ---------------- */
document.addEventListener("DOMContentLoaded",()=>{
  let history=[];
  const calcGradeBtn=document.getElementById("calcGradeBtn");
  if(calcGradeBtn) calcGradeBtn.addEventListener("click",()=>{
    const quiz=Number(document.getElementById("quiz").value);
    const exam=Number(document.getElementById("exam").value);
    const project=Number(document.getElementById("mco").value);
    const grade=(quiz*0.2)+(exam*0.3)+(project*0.5);
    let letter=grade>=90?"A":grade>=80?"B":grade>=70?"C":grade>=60?"D":"F";
    let result=`Final Grade: ${grade.toFixed(1)} | Letter: ${letter}`;
    history.push(result);
    document.getElementById("result").innerHTML=result+`<br><br>History:<br>${history.join("<br>")}`;
  });

  const resetBtn=document.getElementById("resetBtn");
  if(resetBtn) resetBtn.addEventListener("click",()=>{
    document.getElementById("quiz").value="";
    document.getElementById("exam").value="";
    document.getElementById("mco").value="";
    document.getElementById("result").innerHTML="";
  });
});