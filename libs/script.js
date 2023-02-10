//panzoom/----------------------------------------------------------------------------------------------------------------------------------------/
$( document ).ready(function() {
    const mapElement = $(".map .svg")[0];
    const panzoom = Panzoom(mapElement, { contain: 'outside', startScale: 1.5 });
  
    mapElement.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)
    mapElement.parentElement.addEventListener('wheel', function (event) {
    if (!event.shiftKey) return
    panzoom.zoomWithWheel(event)
    
  })
});



//global variables/----------------------------------------------------------------------------------------------------------------------------------------/
var civilisationArray = [];


//-------------------------------------------------------------
//troop types (json statsheets)
let knight = {attacks:3, strength:5, save:5, cost:5}; //like 40k, using math.random as dice, 3+ saves etc.
let archer = {attacks:6, strength:5, save:6, cost:10};
let horseman = {attacks:1, strength:3, save:3, cost:15};



//Auto increaes/----------------------------------------------------------------------------------------------------------------------------------------/

//-------------------------------------------------------------
//starting money
let money = 500;
$("#eboMoney").text(money);

//-------------------------------------------------------------
// Add money ever x seconds 
window.setInterval(function () {
    var money = parseInt($('#eboMoney').text());
    $('#eboMoney').text(money+1);
}, 5000);



//main stats JSONS/----------------------------------------------------------------------------------------------------------------------------------------/


//-------------------------------------------------------------
//county statistics (json statsheets)

function createCivilisations() {

    var paths = document.getElementsByTagName("path");
    var pathsArray = []
    
    for (let i=0; i < paths.length; i++){

        let diceRoll = Math.floor(Math.random()* 6) +1;
        let cultures = ['', 'Rome', 'Greece', 'Gaul', 'Scythia', 'Parthia', 'Egypt']

            pathsArray.push($(paths[i]).attr('name'))
            
            civilisationArray.push({
                id: i,
                name: pathsArray[i],
                economy: 1,
                buildings: {
                    barracks: 0,
                    market: 2,
                    castle: 1
                    },
                military: {
                    knights: 1,
                    archers: 5,
                    horsemen: 1
                    },
                population: 100,
                diplomacy: {
                    allies: ['Rome', ' Greece'],
                    enemies: ['Parthians'],
                    neutral: ['Gaul']
                },
                culture: cultures[diceRoll]
            })
        
            $(paths[i]).attr('id', i)

        }
}



//fight functions/----------------------------------------------------------------------------------------------------------------------------------------/


//-------------------------------------------------------------
//atacking function
function attacking(aggressor, defenderNumber){
    let diceRoll = Math.floor(Math.random()* 6) +1;
    if (diceRoll > aggressor.strength) {
        let eboKnights = parseInt($(defenderNumber).text());
        $(defenderNumber).text(eboKnights-1);
    } else {
        alert("you missed")
    }
}


$("#fightDover").on("click", function() {
    attacking(knight, '#eboKnights')
})


// this would be a nice way of tidying the code up
function fighting(
                knightsNumberA, 
                archersNumberA, 
                horseNumberA, 
                knightsNumberB, 
                archersNumberB, 
                horsenumberB 
) 
            {


}

$("#fight").on("click", function() {

    let knightsA = parseInt($('#knightsA').text()); 
    let archersA = parseInt($('#archersA').text()); 
    let horseA = parseInt($('#horseA').text());

    let knightsB = parseInt($('#knightsB').text()); 
    let archersB = parseInt($('#archersB').text()); 
    let horseB = parseInt($('#horseB').text());
    
    let knightsAttacksA = parseInt(knightsA * knight.attacks);
    let archersAttacksA = parseInt(archersA * archer.attacks);
    let horseAttacksA = parseInt(horseA * horseman.attacks);

    let knightsAttacksB = parseInt(knightsB * knight.attacks);
    let archersAttacksB = parseInt(archersB * archer.attacks);
    let horseAttacksB = parseInt(horseB * horseman.attacks);

    //a

    for (let i = 0; i < archersAttacksA; i++) {
        
        let diceRoll = Math.floor(Math.random()* 6) +1;
        let saveRoll = Math.floor(Math.random()* 6) +1;
        
        if (diceRoll > archer.strength && saveRoll > archer.save) {

            if (knightsB > 0) {
                $('#knightsB').text(knightsB-1); 
                console.log("You win!")  
            } else if (archersB > 0) {
                $('#archersB').text(archersB-1);
            } else if (horseB > 0) {
                $('#horseB').text(horseB-1);
            } else {
                console.log("You win!")
            }

        } else {
            console.log("archerA miss")
        }
    }

    for (let i = 0; i < horseAttacksA; i++) {
        
        let diceRoll = Math.floor(Math.random()* 6) +1;
        let saveRoll = Math.floor(Math.random()* 6) +1;
        
        if (diceRoll > horseman.strength && saveRoll > horseman.save) {

            if (knightsB > 0) {
                $('#knightsB').text(knightsB-1);
            } else if (archersB > 0) {
                $('#archersB').text(archersB-1);
            } else if (horseB > 0) {
                $('#horseB').text(horseB-1);
            } else {
                console.log("You win!")
            }

        } else {
            console.log("horseA miss")
        }
    }

    for (let i = 0; i < knightsAttacksA; i++) {
        
        let diceRoll = Math.floor(Math.random()* 6) +1;
        let saveRoll = Math.floor(Math.random()* 6) +1;
        
        if (diceRoll > knight.strength && saveRoll > knight.save) {

            if (knightsB != -1) {
                $('#knightsB').text(knightsB--);
                console.log("knight killed knight")   
            } else if (archersB != -1) {
                $('#archersB').text(archersB--);
                console.log("knight killed archer")
            } else if (horseB != -1) {
                $('#horseB').text(horseB--);
                console.log("knight killed horse")
            } else {
                console.log("You win!")
            }

        } else {
            console.log("knightA miss")
        }
    }

    //b
    
    for (let i = 0; i < archersAttacksB; i++) {
        
        let diceRoll = Math.floor(Math.random()* 6) +1;
        let saveRoll = Math.floor(Math.random()* 6) +1;
        
        if (diceRoll > archer.strength && saveRoll > archer.save) {

            if (knightsA > 0) {
                $('#knightsA').text(knightsA-1); 
                console.log("You win!")  
            } else if (archersA > 0) {
                $('#archersA').text(archersA-1);
            } else if (horseA > 0) {
                $('#horseA').text(horseA-1);
            } else {
                console.log("You win!")
            }

        } else {
            console.log("archerA miss")
        }
    }

    for (let i = 0; i < horseAttacksB; i++) {
        
        let diceRoll = Math.floor(Math.random()* 6) +1;
        let saveRoll = Math.floor(Math.random()* 6) +1;
        
        if (diceRoll > horseman.strength && saveRoll > horseman.save) {

            if (knightsA > 0) {
                $('#knightsA').text(knightsA-1);
            } else if (archersA > 0) {
                $('#archersA').text(archersA-1);
            } else if (horseA > 0) {
                $('#horseA').text(horseA-1);
            } else {
                console.log("You win!")
            }

        } else {
            console.log("horseA miss")
        }
    }

    for (let i = 0; i < knightsAttacksB; i++) {
        
        let diceRoll = Math.floor(Math.random()* 6) +1;
        let saveRoll = Math.floor(Math.random()* 6) +1;
        
        if (diceRoll > knight.strength && saveRoll > knight.save) {

            if (knightsA != -1) {
                $('#knightsA').text(knightsA--);
                console.log("knight killed knight")   
            } else if (archersA != -1) {
                $('#archersA').text(archersA--);
                console.log("knight killed archer")
            } else if (horseA != -1) {
                $('#horseA').text(horseA--);
                console.log("knight killed horse")
            } else {
                console.log("You win!")
            }

        } else {
            console.log("knightA miss")
        }
    }

})



//move units/----------------------------------------------------------------------------------------------------------------------------------------/


//-------------------------------------------------------------
//move units function
function moveUnit(oldLocation, newLocation) {
    let unitAmount = parseInt($(oldLocation).text());
    let newAmount = parseInt($(newLocation).text());
    $(newLocation).text(newAmount+unitAmount);
    $(oldLocation).text(unitAmount-unitAmount);
}


$("#knightFromEboToBrighton").click(function() {
    moveUnit("#eboKnights", "#btownKnights" )
})

$("#knightFromBrightonToHastings").click(function() {
    moveUnit("#btownKnights", "#hastingsKnights" )
})



$("#moveAllToFightA").click(function() {
    moveUnit("#eboKnights", "#knightsA" )
})

$("#moveAllToFightB").click(function() {
    moveUnit("#btownKnights", "#knightsB" )
})



//buy units/----------------------------------------------------------------------------------------------------------------------------------------/


//-------------------------------------------------------------
//buy function
function buy(unitCost, unitLocation) {
    
    let location = parseInt($(unitLocation).text());
    $(unitLocation).text(location+1); 

    let money = parseInt($('#eboMoney').text());
    $('#eboMoney').text(money - unitCost); 

}

$("#buyKnight").click(function() {
    buy(knight.cost, "#eboKnights")
})

$("#buyArcher").click(function() {
    buy(archer.cost, "#eboArchers")
})

$("#buyHorse").click(function() {
    buy(horse.cost, "#eboHorse")
})



//on clicks/----------------------------------------------------------------------------------------------------------------------------------------/


//-------------------------------------------------------------
// Click on country borders
$("#GBR2677").on("click", function() {
    $("#GBR2677").attr('fill', 'blue');
})


//Find nearest ID and change colour
$( "#svg" ).on("click", function( event ) {

    
    //---------------------------------------------------
    //County sidepanel text



        //nearest name / colour
        //------------------
        
        //variables
        var nearestName = $(event.target).attr('name');
        let nearestID = (event.target.id);
        let nearest = "#" + nearestID;
        let nearestInt = parseInt(nearestID);
     
        

        //nearest colour
        const paths = document.getElementsByTagName("path");
        
        for (let i=0; i < paths.length; i++){
                $(paths[i]).attr('fill', '#6E8898')

                if (civilisationArray[i].culture === 'Rome') {
                    let thisCulture = [i]
                    $(paths[thisCulture]).attr('fill', 'blue')
                } else if (civilisationArray[i].culture === 'Greece') {
                    let thisCulture = [i]
                    $(paths[thisCulture]).attr('fill', 'green')
                } else if (civilisationArray[i].culture === 'Gaul') {
                    $(paths[i]).attr('fill', 'orange')
                } else if (civilisationArray[i].culture === 'Scythia') {
                    $(paths[i]).attr('fill', 'purple')
                } else if (civilisationArray[i].culture === 'Parthia') {
                    $(paths[i]).attr('fill', 'green')
                } else if (civilisationArray[i].culture === 'Egypt') {
                    $(paths[i]).attr('fill', 'black')
                }
        }

        $('#exampleModal').modal('toggle');
        $(nearest).attr('fill', '#2E5266')


        //resets
        //--------------------

        //top right
        $("#location").text('')

        
        //military sidebar reset
        $('#countyHeader').text('Choose a county')
        
        $('#modalTitle').text(nearestName)
        $('#countyHeader').text(nearestName)
        
        $('#countyBody').empty();
        $('#countyBody').append(
            '<h1>Military</h1>',
            '<p>Knights: <span id="knights"></span></p>',
            '<p>Archers: <span id="archers"></span></p>',
            '<p>Horsemen: <span id="horsemen"></span></p>',
            '<button id="buyKnightCounty">Buy Knight</button>'
        )
        $("#buyKnightCounty").on("click", function() {
            let oldKnights = civilisationArray[nearestInt].military.knights;
            civilisationArray[nearestInt].military.knights = oldKnights + 1;
            $("#knights").text(civilisationArray[nearestInt].military.knights)
            //needs to cost too (rebuild buy function)
        })

        
        //buildings sidebar reset
        $('#countyBuildingsHeader').text('Choose a county')
        $('#countyBuildingsBody').empty();
        $('#countyBuildingsBody').append(
            '<h1>Buildings</h1>',
            '<p>Barracks: <span id="barracks"></span></p>',
            '<p>Market: <span id="market"></span></p>',
            '<p>Castles: <span id="castle"></span></p>'
        )
        
        //diplomacy sidebar reset
        $('#countyDiplomacyHeader').text('Choose a county')
        $('#countyDiplomacyBody').empty();
        $('#countyDiplomacyBody').append(
            '<h1>Diplomacy</h1>',
            '<p>Culture: <span id="culture"></span></p>',
            '<p>Allies: <span id="allies"></span></p>',
            '<p>Enemies: <span id="enemies"></span></p>',
            '<p>Neutrual: <span id="neutral"></span></p>'
        )


        //sidebar content filling
        //--------------------------------
        
        //military body text
        $("#location").text(nearestName);
        $("#pathsName").text(civilisationArray[nearestInt].name)
        $("#knights").text(civilisationArray[nearestInt].military.knights)
        $("#archers").text(civilisationArray[nearestInt].military.archers)
        $("#horsemen").text(civilisationArray[nearestInt].military.horsemen)

        //county buildings body text
        $('#countyBuildingsHeader').text(civilisationArray[nearestInt].name)
        $("#barracks").text(civilisationArray[nearestInt].buildings.barracks)
        $("#market").text(civilisationArray[nearestInt].buildings.market)
        $("#castle").text(civilisationArray[nearestInt].buildings.castle)

        //county diplomacy body text
        $('#countyDiplomacyHeader').text(civilisationArray[nearestInt].name)
        $('#culture').text(civilisationArray[nearestInt].culture)
        $("#allies").text(civilisationArray[nearestInt].diplomacy.allies)
        $("#enemies").text(civilisationArray[nearestInt].diplomacy.enemies)
        $("#neutral").text(civilisationArray[nearestInt].diplomacy.neutral)

})



//modals/----------------------------------------------------------------------------------------------------------------------------------------/

//Find nearest ID and create a modal with its info on
function buildModal() {
    
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})



//starting functions/----------------------------------------------------------------------------------------------------------------------------------------/

createCivilisations()