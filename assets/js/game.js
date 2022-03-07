var playerName = window.prompt("What is your robot's name?");
var playerHealth= 100;
var playerAttack= 10;
var playerMoney= 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth= 50;
var enemyAttack= 12;

var fight = function (enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    //if a player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from the playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }   
        // if player chooses to fight, then fight
        //if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
    } else {
        window.alert( enemyName + " still has " + enemyHealth + " health left.");
    }
  // remove player's health by subtracting the amount set in the enemy attack variable
     playerHealth = playerHealth - enemyAttack   
     console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")    
    
     // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};  
    // function to start a new game
var startGame = function () {    

    //rest player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        //if player is still alive, keep fighting
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Galdiators " + (i + 1));
       
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        //reset enemyHealth before each match
        enemyHealth = 50;
        
        //debugger;

        fight(pickedEnemyName); 

        //if player is still alive and we're not at the last enemy in the array
        if (playerHealth >0 && i < enemyNames.length - 1) {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round");

            //if yes, take them to the store() function
            if (storeConfirm) {
                shop ();
            }
   
        }
     
    }
    //if player isn't alive, stop the game
    else {
        window.alert("You have lost your robot in battle! Game Over!");  
        break;          
    }
  }
 endGame();
};

var shop = function() {
    //ask player what they'd like to do
   var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a choice");

   //use switch to carry out action
   switch (shopOptionPrompt) {
       case "REFILL":
       case "refill":
        if (playerMoney >= 7) {   
           window.alert("Refilling player's health by 20 for 7 dollars");

        // increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney -7;
        break;
        }
        else {
            window.alert("You don't have enough money!");
        }
        case "UPGRADE":    
        case "upgrade":
        if (playerMoney >= 7) {    
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

        //increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
        break;
        
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

        // do nothing, so function will end
        break;
        
        default:
            window.alert("You did not pick a valid option. Try again.");

        // call shop() again to force player to pick a valid option
        shop();
        break;    
   }
};


//function to end the entire game
var endGame =function() {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    window.alert("The game has now ended. Let's see how you did!");
    }
    else {
        window.alert("You've lost your robot in battle");
    //ask player if they's like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restrt the game
        startGame ();
    } 
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }   
  }
};
startGame();