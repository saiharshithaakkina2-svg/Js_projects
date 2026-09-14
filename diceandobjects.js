const playWithDice = document.getElementById("diceContainer")
const btn = document.getElementById("btn")
const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")
const result = document.getElementById("result");


btn.addEventListener ( "click" , function() {
    let play1 = Math.floor(Math.random () *6) +1
    let play2 = Math.floor(Math.random () *6) +1

    player1.textContent = play1
    player2.textContent = play2

    if(play1 > play2){
         result.textContent = "Player 1 Wins! ";
         console.log(result.textContent)


    }
    else if(play1 < play2) {
         result.textContent = "Player 2 Wins! ";
         console.log(result.textContent)

    }else{
         result.textContent = "Draw ";
         console.log(result.textContent)


    }


    })


 const ageCaluculator = document.getElementById("ageCalculator")
 const dob = document.getElementById("dob");
const calculate = document.getElementById("calculate");
const dobresult = document.getElementById("dobresult");

calculate.addEventListener("click" , function(){

     let today = new Date();
    let birtdate = new Date(dob.value);
    let age = today.getFullYear() - birtdate.getFullYear()
    let month = today.getMonth() - birtdate.getFullYear()
 

        if (
        month < 0 ||
        (month === 0 && today.getDate() < birtdate.getDate())
    ) {
        age--;
    }
        dobresult.textContent = `You are ${age} years old.`;


    console.log(today);
    console.log(birtdate);
    console.log(age)


})


   