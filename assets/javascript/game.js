$(document).ready(function () {

	var obiWan;
	var lukeSkywalker;
	var darthSidious;
	var darthMaul;

	var allCharacters = [];
	var yourCharacter = null;
	var allDefenders = [];
    var currentDefender = null;
    

    resetToBeginning();

function resetToBeginning() {

    //make each character an object

    obiWan = {
        id: 0,
        name: "Obi-Wan Kenobi",
        healthPoints: 120,
        baseAttack:10,
        attackPower: 10,
        counterAttackPower: 8,
        img:"assets/images/obi-wan.jpg"
    }

    lukeSkywalker = {
        id: 1,
        name: "Luke Skywalker",
        healthPoints: 100,
        baseAttack:8,
        attackPower: 8,
        counterAttackPower: 5,
        img:"assets/images/luke-skywalker.jpg"
    }

    darthSidious = {
        id: 2,
        name: "Darth Sidious",
        healthPoints: 150,
        baseAttack:9,
        attackPower: 9,
        counterAttackPower: 10,
        img:"assets/images/darth-sidious.jpg"
    }

    darthMaul = {
        id: 3,
        name: "Darth Maul",
        healthPoints: 180,
        baseAttack:12,
        attackPower: 12,
        counterAttackPower: 12,
        img:"assets/images/darth-maul.jpg"
    }



    //set characters
    allCharacters = [obiWan, lukeSkywalker, darthSidious, darthMaul ];


    for(var i = 0; i < allCharacters.length; i++)
    {
        //console(allCharacters.length);
        var newCharacter = $("<div>").addClass("col-sm-3 card players text-center").attr("id",allCharacters[i].id);
        $("<div>").addClass("card-header").html(allCharacters[i].name).appendTo(newCharacter);
        $("<div>").addClass("card-body").append("<img src='" + allCharacters[i].img + "'>").appendTo(newCharacter);
        $("<div>").addClass("card-footer").append("<span>" + allCharacters[i].healthPoints + "</span>").appendTo(newCharacter);

        $("#listOfCharacters").append(newCharacter);
    }
    }

    $(".players").on("click", function(){
        //get ID of what charaacter you clicked on
        var getId = parseInt($(this).attr("id"));
        yourCharacter = allCharacters[getId].id;

        //create loop to add selected and remaining characters to correct location
        for(var i =0; i < allCharacters.length;i++)

        if(allCharacters[i].id === yourCharacter){

        $("#"+ yourCharacter).appendTo("#character");

        }
        else{
            //add enemies to array
            allDefenders.push(allCharacters[i].id);
            $("#"+ allCharacters[i].id).appendTo("#defenderArea");

        }



    });


});