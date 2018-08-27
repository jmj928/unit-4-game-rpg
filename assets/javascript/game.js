$(document).ready(function () {


var randomNumber = "";
//console.log(randomNumber);

var firstJewelValue = "";
var secondJewelValue = "";
var thirdJewelValue = "";
var fourthJewelValue = "";
var finalResult=0;
var wins =0;
var losses = 0;

generateNewValues();



$(".jewel-1").on("click", function(){
    
    console.log("Clicked box 1 " + firstJewelValue);
    updateResult(firstJewelValue);

});

$(".jewel-2").on("click", function(){
    
    console.log("Clicked box 2 " + secondJewelValue );
    updateResult(secondJewelValue);

});

$(".jewel-3").on("click", function(){
    
    console.log("Clicked box 3 " + thirdJewelValue);
    updateResult(thirdJewelValue);

});

$(".jewel-4").on("click", function(){
    
    console.log("Clicked box 4 " + fourthJewelValue);
    updateResult(fourthJewelValue);

});



function updateResult(result) {
    finalResult = result + finalResult;

    $("#currentTotal").html("<p>" + finalResult + "</p>");

    if(finalResult === randomNumber){
        wins++;
        $("#wins").html("<p>Wins : " + wins + "</p>");
        alert("You won!!");
        generateNewValues();
    }
    else if(finalResult > randomNumber){
        losses++;
        $("#losses").html("<p>Losses : " + losses + "</p>");
        alert("Sorry, you went over. You lose");
        generateNewValues();
    }

}

function generateNewValues(){
finalResult = 0;
randomNumber = Math.floor(Math.random() * (102)+ 19);
console.log(randomNumber);

firstJewelValue = Math.floor(Math.random() * (12)+ 1);
secondJewelValue = Math.floor(Math.random() * (12)+ 1);
thirdJewelValue = Math.floor(Math.random() * (12)+ 1);
fourthJewelValue = Math.floor(Math.random() * (12)+ 1);

$("#randomNumber").html("<p>" + randomNumber + "</p>");
$("#currentTotal").html("<p>" + finalResult + "</p>");


}






});