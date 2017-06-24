
	var myApp = angular.module("PlayersApp", []);

		myApp.controller("PlayersController", ["$scope", function($scope) {

		// Create an empty array called scope.players
			$scope.players = [];
		
		// Dont show squad list title and create teams button 
			$scope.show = false;

		// Hide five a side teams title, team 1 title, team 2 title
			$scope.hide = true;

		// Create a function to add players
			$scope.addPlayer = function () {

			// create an empty object 
				var squadList = {};

				/* defining object attributes in scope so they
				can be bound to ng model in the view*/
				squadList.name = $scope.playerName;
				squadList.skill = $scope.playerSkill;
				squadList.creativity = $scope.playerCreativity;
				squadList.tackling = $scope.playerTackling;

				// push squadList object into players array
				$scope.players.push(squadList);

				/* show the squad list title when a player 
				is added to the squad list */
				if ($scope.players.length >=1) {

					$scope.playerlist = true;
				} 	

				// disable add player button when squad has reached 16 players
				if ($scope.players.length >= 10) {

					$scope.disabled = true;	
				} else {
					$scope.disabled = false;
				} 

				// show create teams button when number of players is 10 or more
				if ($scope.players.length >=10) {

					$scope.show = true;
				}	

			} 

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

  				// sort the array in descending order by creativity
  				array.sort(function(a, b){

  					 return b - a;
  				});  

  				Arr2 = [];
  				Arr3 = [];

				for (var i=0;i<=array.length;i++){
   					 if (i % 2==0) {
       					 Arr3.push(array[i]);
   						 }
   						 else {
      					  Arr2.push(array[i]);
   						 }
					}		

  				// slice the array
  				$scope.team1 = Arr2;
  				$scope.team2 = Arr2;			


  				/* show five a side team title and team 1 and team 2 titles 
  				when teams are created */
  				if ($scope.team1.length >=1) {

					$scope.hide = false;
				}
			}


		}]);	

/*	

  				// slice the array
  				$scope.team1 = Arr2;
  				$scope.team2 = Arr2;

  				 // slice the array
  				$scope.team1 = array.slice(0,5);
  				$scope.team2 = array.slice(5,10);
  				 
	*/

			
