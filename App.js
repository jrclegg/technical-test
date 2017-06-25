 
	var myApp = angular.module("PlayersApp", []);

		myApp.controller("PlayersController", ["$scope", function($scope) {

		"use strict";

		// Create an empty array called scope.players
			$scope.players = []; 
		
		// Dont show squad list title and create teams button
			$scope.show = false;

		// Hide five a side teams title, team 1 title, team 2 title
			$scope.hide = true;

		// Create a function to add players
			$scope.addPlayer = function () {

			// Create an empty object 
				var squadList = {};

				/* Define object attributes in scope so they
				can be bound to ng model in the view */
				squadList.name = $scope.playerName;
				squadList.skill = $scope.playerSkill;
				squadList.creativity = $scope.playerCreativity;
				squadList.tackling = $scope.playerTackling;

				// Push squadList objects into players array
				$scope.players.push(squadList);

				/* Show the squad list title when a player 
				is added to the squad list */
				if ($scope.players.length >=1) {

					$scope.playerlist = true;
				} 	

				// Disable add player button when squad has reached 10 players
				if ($scope.players.length >= 10) {

					$scope.disabled = true;	
				} else {
					$scope.disabled = false;
				} 

				// Show create teams button when number of players is 10 
				if ($scope.players.length >=10) {

					$scope.show = true;
				}	

			} 

			/* NOTE I would have liked to have added form validation here and plan to
			begin building this functionality in the future */

			// Create a function to shuffle the players
			$scope.shuffle = function (array) {

  				var currentIndex = array.length, temporaryValue, randomIndex;

  				// While there remain elements to shuffle...
 				 while (0 !== currentIndex) {

    			// Pick a remaining element...
    			randomIndex = Math.floor(Math.random() * currentIndex);
    			currentIndex -= 1;

    			// And swap it with the current element.
    			temporaryValue = array[currentIndex];
    			array[currentIndex] = array[randomIndex];
    			array[randomIndex] = temporaryValue;

  				}

  				// Sort the array in descending order by attribute value
  				array.sort(function(a, b){

  					 return b.creativity - a.creativity;
  				});  

  				// Create two new empty arrays
  				var array2 = [];
  				var array3 = [];

  				/* Fair teams filter - the for loop pushes even 
  				and odd array indexes into the empty arrays */
				for (var i = 0;i < array.length; i++){

   					 if (i % 2 !==0) {

       					 array2.push(array[i]);

   						 }  else {

      					 array3.push(array[i]);
   						 }
					}		

  				// Assign the new arrays to teams in scope
  				$scope.team1 = array2;
  				$scope.team2 = array3;			


  				/* Show five a side team title, team 1 and team 2 titles 
  				when teams are created */
  				if ($scope.team1.length >=1) {

					$scope.hide = false;
				}
			}

		}]);	



		
