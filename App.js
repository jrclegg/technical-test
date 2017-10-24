 
	var myApp = angular.module("PlayersApp", []);

		myApp.controller("PlayersController", ["$scope", function($scope) {

		"use strict";

		// Create an empty array called scope.players
			$scope.players = []; 

		// ADD PLAYER SECTION

		// Create a function to add players
			$scope.addPlayer = function () {

			// Create an empty object 
				var squadList = {};

				/* Define player attributes in scope so they
				can be bound to ng model in the form view */
				squadList.name = $scope.playerName;
				squadList.skill = $scope.playerSkill;
				squadList.creativity = $scope.playerCreativity;
				squadList.tackling = $scope.playerTackling;

				// Push squadList objects into players array
				$scope.players.push(squadList);

				// Show Squad List Title
				$scope.squadtitle = true;
					
				/* Disable the add player function, show the create 
				teams button and show the reset button when 
				ten players have been added  */
				if ($scope.players.length >= 10) {

          // disable add player
					$scope.disabled = true;
          // show create teams button
					$scope.create = true;
          // show reset button
					$scope.reset = true;
				}
			} 

		// DELETE PLAYER SECTION 

			// Create a function to delete players
			$scope.deletePlayer = function (players) {

				// splice the players array at index 1
  				$scope.players.splice(players, 1);

  				/* if the players array is empty then 
  				hide the squad title  */
  				if ($scope.players.length < 1) {

					$scope.squadtitle = false;		
				} 
  		}

		// CREATE TEAMS SECTION

			// Create a function to shuffle the players
			$scope.shuffle = function (array) {

  				var currentIndex = array.length, temporaryValue, randomIndex;

  				// While there remain elements to shuffle
 				  while (0 !== currentIndex) {

    			// Pick a remaining element
    			randomIndex = Math.floor(Math.random() * currentIndex);
    			currentIndex -= 1;

    			// And swap it with the current element
    			temporaryValue = array[currentIndex];
    			array[currentIndex] = array[randomIndex];
    			array[randomIndex] = temporaryValue;	

  				}

  				// Sort the array in descending order of skill, creativity and tackling (make the teams fair)
  				array.sort(function(a, b){

  				 b.skill - a.skill && b.creativity - a.creativity && b.tackling - a.tackling;

           return array;

          }); 

          console.log(array);


  		}
  			/* Create a function to split the array into two teams 
  			equally based on the creativity attribute */
  			$scope.filter = function (array) {

  				// Create two new empty arrays
  				var array2 = [];
  				var array3 = [];

  				/* Fair teams filter - the for loop pushes even 
  				and odd array indexes into the empty arrays */
				  for (var i = 0; i < array.length; i++){

					  if (i % 2 !==0) {

       				array2.push(array[i]);

   					} else { 

   						array3.push(array[i]);
   					}
				  }	
  				// Assign the new arrays to teams in scope
  				$scope.team1 = array2;
  				$scope.team2 = array3;
          
  				// Show picked teams titles
  				$scope.pickedteams = true;
  			}

  		// RESET TEAMS SECTION 
  			// Create a function to reset the page at any stage
  			$scope.resetTeams = function () {
          
  				$scope.players = [];
  				$scope.team1 = [];
  				$scope.team2 = [];
  				$scope.pickedteams = false;
  				$scope.squadtitle = false;
  				$scope.create = false;
  				$scope.disabled = false;
  				$scope.reset = false;
  			}

		}]);	



		
