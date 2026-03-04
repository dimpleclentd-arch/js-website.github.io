function showSection(id){
  document.querySelectorAll('.content').forEach(sec=>sec.style.display='none');
  document.getElementById(id).style.display='block';
  if(id==='outputDemo') outputDemo();
  if(id==='variablesDemo') variablesDemo();
  if(id==='calcDemo') calcDemo();
  if(id==='promptDemo') promptDemo();
  if(id==='ageCheck') ageCheck();
  if(id==='loopsDemo') loopsDemo();
}
function toggleTree(id){
  const el=document.getElementById(id);
  el.style.display=(el.style.display==='block')?'none':'block';
}

// Exercise 2
function outputDemo(){
  alert("Welcome to JavaScript!");
  console.log("This is my first JS program.");
  document.getElementById("output1").innerHTML="Alert + Console message shown.";
}
function variablesDemo(){
  let name="Client", age=25, isStudent=false;
  console.log(name, age, isStudent);
  document.getElementById("output2").innerHTML=`My name is ${name}, I am ${age} years old.`;
}
function calcDemo(){
  let a=10,b=5;
  document.getElementById("outputCalc").innerHTML=`Sum:${a+b}, Diff:${a-b}, Prod:${a*b}, Quot:${a/b}`;
}
function promptDemo(){
  let name=prompt("Enter your name:"), fav=prompt("Favorite nail color:");
  alert(`Hello ${name}! Your favorite color is ${fav}.`);
  document.getElementById("outputPrompt").innerHTML=`Hello ${name}, favorite color: ${fav}`;
}
function ageCheck(){
  let age=prompt("Enter age:");
  document.getElementById("outputAge").innerHTML=(age>=18)?"You are eligible.":"You are not eligible.";
}
function loopsDemo(){
  let out="";
  for(let i=1;i<=10;i++) out+=i+" ";
  let j=10; while(j>=1){out+=j+" "; j--;}
  document.getElementById("outputLoops").