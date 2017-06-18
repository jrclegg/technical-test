
	var myApp = angular.module("PlayersApp", []);

		myApp.controller("PlayersController", ["$scope", function($scope) {

		// Define an empty array called scope.players
			$scope.players = [];
		
		// Hide the create button at the 
			$scope.show = false;

			$scope.hide = true;

			$scope.playerlist = false;
		

		// Create a function to add players
			$scope.addPlayer = function () {

			// create an empty object to push into the array
				var squadList = {};

				squadList.name = $scope.playerName;
				squadList.skill = $scope.playerSkill;
				squadList.creativity = $scope.playerCreativity;
				squadList.tackling = $scope.playerTackling;

				$scope.players.push(squadList);

				if ($scope.players.length >= 16) {

					$scope.disabled = true;	
		

				} else {
					$scope.disabled = false;

				} 

				if ($scope.players.length >=10) {

					$scope.show = true;
				}

				if ($scope.players.length >=1) {

					$scope.playerlist = true;
				} 

				

			} 

			$scope.shuffle = function (array) {

			//console.log(array);

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

  			// slice the array

  			$scope.team1 = array.slice(0,5);
  			$scope.team2 = array.slice(5,10);

  			if ($scope.team1.length >=1) {

					$scope.hide = false;
				}

		}


		}]);	

			
