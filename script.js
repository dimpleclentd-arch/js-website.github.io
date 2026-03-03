// Section Switching Function
function showSection(section) {
  let sections = [
    "homeSection","aboutSection","contactSection",
    "activity1","activity2","activity3",
    "activity4","activity5","activity6","activity7"
  ];
  sections.forEach(id => document.getElementById(id).style.display = "none");
  document.getElementById(section).style.display = "block";

  // Run activity code when section is shown
  if(section === "activity1") activity1();
  if(section === "activity2") activity2();
  if(section === "activity3") activity3();
  if(section === "activity4") activity4();
  if(section === "activity5") activity5();
  if(section === "activity6") activity6();
  if(section === "activity7") activity7();
}

// Activity 1: Output
function activity1(){
  alert("Welcome to JavaScript!");
  console.log("This is my first JS program.");
}

// Activity 2: Variables
function activity2(){
  let name = "Dimple";
  let age = 20;
  let isStudent = true;
  console.log(name, age, isStudent);
  console.log("My name is " + name + ", I am " + age + " years old.");
}

// Activity 3: Calculator
function activity3(){
  let num1 = 10;
  let num2 = 5;
  console.log("Sum:", num1 + num2);
  console.log("Difference:", num1 - num2);
  console.log("Product:", num1 * num2);
  console.log("Quotient:", num1 / num2);
}

// Activity 4: User Input
function activity4(){
  let userName = prompt("Enter your name:");
  let favNumber = prompt("Enter your favorite number:");
  alert("Hello " + userName + "! Your favorite number is " + favNumber);
}

// Activity 5: Conditional
function activity5(){
  let userAge = prompt("Enter your age:");
  if(userAge >= 18){
    alert("You are eligible.");
  } else {
    alert("You are not eligible.");
  }
}

// Activity 6: Loops
function activity6(){
  for(let i=1; i<=10; i++){
    console.log(i);
  }
  let j=10;
  while(j>=1){
    console.log(j);
    j--;
  }
}

// Activity 7: Button
function activity7(){
  document.getElementById("activityButton").addEventListener("click", function(){
    alert("Button Clicked!");
  });
}
