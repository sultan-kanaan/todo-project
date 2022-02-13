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
   
    function answer(userAnswer){
        if(userAnswer === "yes"||userAnswer === "Yes" )
        {
            userAnswer = "yes";
            // console.log(userAnswer)

        }
        
        else if (userAnswer === "no" ||userAnswer === "No" )
        {
            userAnswer = "no";
            // console.log(userAnswer)

        }
        else
        {
            userAnswer = "invalid" ;
            // console.log(userAnswer)

        }
    }

    answer(Relationship);
    answer(car);
    answer(playChess);
    

    var arrayTheAnswer = [];

    function push (add)
    {
        arrayTheAnswer.push(add);
    }
    push(Relationship);
    push(car);
    push(playChess);
    
    function printAnswer(print){

        for(var i=0 ;i<arrayTheAnswer.length;i++)
        {
           answer(print[i])
        }

        
    }
printAnswer(arrayTheAnswer);

