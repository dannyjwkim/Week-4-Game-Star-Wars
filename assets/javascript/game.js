
function Player(name, power, attack, counter){
	this.name = name,
	this.hp = power,
	this.attackPower = function(){
		return attack += this.basePower;
	},
	this.counter = counter,
	this.basePower = attack;
}

var firstPlayer = new Player("Obi-Wan Kenobi", 111, 5, 10),
	secondPlayer = new Player("Luke SKy Walker", 100, 10, 20);


var players = $('.character'),
	clickedOperator = false;


function hpDecreasing(){
	$(".hp1").html(firstPlayer.hp);
	$(".hp2").html(secondPlayer.hp);
}




$('.character').on('click', function() { 


	  if (clickedOperator === false){         
	  		$('.myPlayerZone').html(this);
	  		clickedOperator = true;
	  	 } 

	  	 else {         
	  	 	$('.enemyZone').html(this);   
	  	}    
	});




	$('.attack').on('click', function(){

		if($(".myPlayerZone").html().trim() !== '' && $(".enemyZone").html().trim() !== '' ){
			secondPlayer.hp -= firstPlayer.attackPower();
			firstPlayer.hp -= secondPlayer.counter;
			hpDecreasing();



			if(firstPlayer.hp <= 0){
				console.log("I lost");
			}

			else if(secondPlayer.hp <= 0){
				console.log("We win!!!");
				$(".enemyZone").empty();
			}
	}
		

	
	});








	// secondPlayer = new Player("Luke SKy Walker", 100, 3, 19),
	// thirdPlayer = new Player("Darth Sidius", 120, 17, 2),
	// fourthPlayer = new Player("Darth Maul", 150, 9, 2);









// Fighting an enemy character
	// Change their background color to orange
	// When you fight them, their hp (number or power) decrease so are yours
	// If your hp equal 0, then you lose the game. 


// Attacking feature
	// Store attacking point for every single player
	// We attack by clicking the attack button
		// When you attack them, their hp decrease and so are yours.
		// Decrease the attacking point with their hp 
		// If I defeat first enemy, then increase my attacking point (15). 
		// Output the number of damage (remaining hp) that I cause the other enemy to the DOM
		// Output the number of damage (remaining hp) that the enemy cause to me.



// Defeated enemy
	// If the enemy remaining hp is equal to less than 0;
	// Make the disappear.
	// if there is no enemy, then output a message to the player



// Check and see how many enemies remaining
	// Every time I pick an enemy to fight with, then decrease their length
	// If 0 enemy remains,
		// Then I win
			// Show a restart to reset the game. 
			 // Reset the game
				// Generated a new random number for every single player
				// Put all players to their default zone


// Losing
	// If my hp is less than 0
		// I lost
			// Show a restart to reset the game. 
			 // Reset the game
				// Generated a new random number for every single player
				// Put all players to their default zone
				// 






//Done!


// Choosing an enemy to fight with
	// Change their background to red
	// Once you click on the remainings enemies
	// The chose one going to fight with you. 
	// When you click on the remaining enemies, the one you click on, go to the fighting zone


// The ability to pick a character to play with
	// If you click on any of those characters (4), that character become yours.
	// That character should be going to your fighting zone. 
	// and the remaining should be going to the enemy zones. 
	// and the remainers become your enemy to defeat

// We have 4 characters ['Obi-Wan Kenobi', 'Luke Sky Walker', 'Darth Sidious', 'Darth Maul']
	// Every one of these characters need to have their own hp (power)
















































































