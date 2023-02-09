Conquest
--------

- Strategy game




First jobs
----------

- Change the buy unit functions to use the money from that IDs JSON (money: $10 etc.)
- This adds to the unit amount in that IDs JSON ([i].military.archers+1 etc.)
- Then it runs the function that updates the side county panel

- Do the same for a few test buildings
- Their functions can be added in later (i.e roll modifiers)

- add all the other bits for the side panel (unit types, amount of buildnigs etc.)
- have these on different pages / side bars (e.g a buildings one, a military one, a diplomacy one)

- The next jobs after that will be to update the fight functions 
- They'll need to use the JSON data instead of the html
- Maybe give this pop up / modal / animation if it works well
- Says if you win/lose and by how much



Notes 
----------

map generator 

- could use the below. It's quite clean
- https://github.com/stravid/mapgenerator
- it also sorts the adjacent tiles stuff


time

- Have a time / date counter
- Every xxx days, roll a dice for each county. If that roll > xxx, increase their population etc.
- Have roll modifiers for certain building types / cultures 

buildings

- As part of the JSON, have buildings
- I.e. markets: 1 / barracks: 2 / castle: 1
- market would give you a modifier for how much a county earns 
- have tech level that unlocks certain buildings (also depends if you have the version before (e.g. barracks level 1/2/3)

AI wars

- Eventually have low chance dice rolls that they'll auto fight any neighbours they aren't allied with
- This means the JSON needs 'allied', 'neutral' & 'enemy' arrarys with relevant IDs in each

culture / player

- have a culture stat (e.g. roman / greek) that gives you certain bonuses / colours
- have ownedBy stat which gives the path fill of your faction
- later these will control who you have control of and who you can fight)

buy/fight buttons

- create buttons that buy units for that county
- button to fight (with dynamically created list that dictates who you can fight)
- buttons to buy / upgrade buildings




older ideas 
-----------

- rts with 40k style dice roles
- potentially as rpg, as if commander on battfield with same text style as Darlene?
- if not, go full div style grid but with 40k style logic
- still have the issue of AI

- one way you could get rid of AI issues is having it be more survival
- like Banished, you just need to have enough food etc.
- for the fights, you could just have orc raids?
- make it more of a very miniturised dwarf fortress clone instead
- more horror instead of fantasy though, weird aliens after you crash land?
- would be a cool way of introducing narrative to RTS, giving you more story each season you survive
- the full map would be easier graphics though
- could go more for ants?
- make different kinds, attack, strength ants etc. and have wars
- AI would just get allocated a random rate of expansion


- ever increasing money
- same for AI enemies
- financial policies etc. (taxation?)

- map
- towns/cities

- attack settlement
- move from one to another
- take a certain amount of time to do so, depending on how far 
- make enemies do this automatically every x time goes by
 
- build units
- build buildings
- take over settlment 

- weather / seasons
- i.e. no movement in winter without serious detriment

- maybe have food as well, which increases depending on buildings, grows less in winter
- electricity if scifi, which you need power buildings for etc.
- or replace this with religion, so you need churches (piety)
- clothing / drink / tools / pets / fresh water / sugar / tobacco / slaves / workers

- you could have people die in old age, and if you don't have places to bury them people are sad and can do less

- I think having it be more like dwarf fortress or Crusader Kings, where the world and its inhabitants would move as if you're not there anyway.
- It's just a giant simulation that you can take a part in, and you'll usually die but that's fun too.
- A cool theme could be landing on Navan 1,000 years ago with the first Order ships.
- You get a load of good stuff, but you won't get any support for a full rote. 
- There are inhabitants there, some savages perhaps, some monstrous creatures. 
- Or it could be an old colony that the order had lost touch with, assumed it had just failed and lost contact.
- Depending on how much piety / prestige you get in that year depends what the Order will send you next year. 

- On completing the game, there are a ton of if/else statements
- if < x of your population was enslaved, you get a nice ending
- if > x you get a nasty ending 
- if > x survived from the original party you get certain text
- And so on





//-------------------------------------------------------------
// old commented code


// $("#svg").on("hover", function( event ) {

//     let nearestID = (event.target.id);
//     let nearest = "#" + nearestID;
//     console.log(nearest)

//     console.log(event.target)
    

//     $(nearest).attr('fill', 'black')
    
// });


// $("#buyKnight").click(function() {
//     let eboMoney = $("#eboMoney").html();
    
//     if (eboMoney > 4) {
//         let eboKnights = parseInt($('#eboKnights').text());
//         $("#eboKnights").text(eboKnights+1);

//         let beforeMoney = $("#eboMoney").html(); 
//         let afterMoney = beforeMoney - 5;
//         $("#eboMoney").html(afterMoney);

//     } else {
//         alert("You can't afford that.")
//     }
// })

// //buy archer
// $("#buyArcher").click(function() {
//     let eboMoney = $("#eboMoney").html();
    
//     if (eboMoney > 4) {
//         let eboArchers = parseInt($('#eboArchers').text());
//         $("#eboArchers").text(eboArchers+1);

//         let beforeMoney = $("#eboMoney").html(); 
//         let afterMoney = beforeMoney - 10;
//         $("#eboMoney").html(afterMoney);

//     } else {
//         alert("You can't afford that.")
//     }
// })

 // //roll dice
    // for (i = 0; i < 20; i++) {
    //     let diceRoll = Math.floor(Math.random()* 6) +1;
    //     console.log(diceRoll);
    // }
    
    

    // let eboArchers = parseInt($('#eboArchers').text());

    // //if ()

    // let attacker = 1;

    // let defender = 2;

    // function fight(attacker, defender) {
    //     if (attacker > defender) {
    //         alert("attacker one")
    //     } else {
    //         alert("attacker lost")
    //     }
    // }



    //in testing/----------------------------------------------------------------------------------------------------------------------------------------/


// //-------------------------------------------------------------
// // create county variables for each path

var countyData = []

function createCountyVariables(){
    
        var paths = document.getElementsByTagName("path");

        for (let i=0; i < paths.length; i++) {
            //countyData.push()
             var paths = document.getElementsByTagName("path");
             countyData.push($(paths).attr('name'));
            
         }     
}

//county variables function (in testing - not that necessary now?)
    createCountyVariables()
