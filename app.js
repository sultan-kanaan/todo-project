// var name = prompt("What is your name ?");
// var gender = prompt("Are you male or female ?");
// var Age = prompt("How old are you ?");
// var age = Number(Age);



// var skip = confirm("Do you want to skip ? ");
// if  (skip == true){
//       console.log(skip);           
//      }
// else{

//     if(gender === "male" || gender === "Male"){
// alert(`welcome Mr. ${name}`);
// }
// else  if(gender === "female"||gender === "Feale"){
// alert(`welcome Ms. ${name}`);
// }
// else{
// alert(`welcome  ${name}`);
// }
   
//    }

//    if(age <= 0 ){
//     alert("your age is wrong !");
//     }

   var Relationship = prompt("Are you singel ? yes/no");
  var car = prompt("Do you have a car  ? yes/no");
  var playChess = prompt("Can you play chess? yes/no");

  var arrayTheAnswer = [];


  function answer(userAnswer){
    if(userAnswer === "yes"||userAnswer === "Yes" )
    {
      push("yes");

    }

    else if (userAnswer === "no" ||userAnswer === "No" )
    {
      push("no");

    }
    else
    {
      push("invalid") ;

    }
  }

  answer(Relationship);
  answer(car);
  answer(playChess);

  function push (add)
  {
    arrayTheAnswer.push(add);
  }

  function printAnswer(){

    for(let i=0 ;i<arrayTheAnswer.length;i++)
    {
      console.log(arrayTheAnswer[i])
    }


  }
  printAnswer(arrayTheAnswer);

  // with my love

