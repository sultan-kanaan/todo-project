var name = prompt("What is your name ?");
var gender = prompt("Are you male or female ?");
var Age = prompt("How old are you ?");
var age = Number(Age);
confirm("Do you want to skip ? ");

if(age <= 0 ){
alert("your age is wrong !");
}

if(gender === "male" || gender === "Male"){
alert(`welcome Mr. ${name}`);
}
else  if(gender === "female"||gender === "Feale"){
alert(`welcome Ms. ${name}`);
}
else{
alert(`welcome  ${name});
}


