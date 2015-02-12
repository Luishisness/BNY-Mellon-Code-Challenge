(function() {
  'use strict';
  
  var app= angular.module('BNYMellon', []);
  
    
  //next controller goes here
  app.controller('mainCtrl', ['$scope', '$filter', function($scope, $filter) {
	  
  	$scope.appTitle='Shawn Vega BNY Mellon Client App';
  	$scope.indexTitle='Welcome to BNY Mellon Client Portfolio';
  	$scope.addClientstitle='add a new client';
  	$scope.editClientsTitle='edit an existing client';
	 
    var orderBy = $filter('orderBy');
	
	$scope.clientsTable=[
	    {
	        "id": 1,
	        "name": "BK",
	        "description": "BNY Mellon",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 2,
	        "name": "TWX",
	        "description": "Time Warner",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 3,
	        "name": "AMAT",
	        "description": "Applied Materials",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 4,
	        "name": "CSCO",
	        "description": "Cisco Systems",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 5,
	        "name": "INTC",
	        "description": "Intel",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 6,
	        "name": "SPLS",
	        "description": "Staples",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 7,
	        "name": "PFE",
	        "description": "Pfizer",
	        "type": "IA",
	        "isDefault": "N"
	    },
	    {
	        "id": 8,
	        "name": "MSFT",
	        "description": "Microsoft",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 9,
	        "name": "LTD",
	        "description": "Limited Brands",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 10,
	        "name": "TYC",
	        "description": "Tyco International",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 11,
	        "name": "IACI",
	        "description": "InterActiveCorp",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 12,
	        "name": "DIS",
	        "description": "Disney",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 13,
	        "name": "DELL",
	        "description": "Dell",
	        "type": "IA",
	        "isDefault": "N"
	    },
	    {
	        "id": 14,
	        "name": "SYY",
	        "description": "Sysco",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 15,
	        "name": "LOW",
	        "description": "Lowe's",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 16,
	        "name": "CVS",
	        "description": "CVS Corp",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 17,
	        "name": "TXN",
	        "description": "Texas Instruments",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 18,
	        "name": "GE",
	        "description": "General Electric",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 19,
	        "name": "AA",
	        "description": "Alcoa",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 20,
	        "name": "WFC",
	        "description": "Wells Fargo",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 21,
	        "name": "CMCSA",
	        "description": "Comcast",
	        "type": "IA",
	        "isDefault": "N"
	    },
	    {
	        "id": 22,
	        "name": "HD",
	        "description": "Home Depot",
	        "type": "TRADING",
	        "isDefault": "N"
	    },
	    {
	        "id": 23,
	        "name": "VIAB",
	        "description": "Viacom B",
	        "type": "TRADING",
	        "isDefault": "N"
	    }
	];
	
	//Acsending and Descending table requirments
	
    $scope.order = function(predicate, reverse) {
      $scope.clientsTable = orderBy($scope.clientsTable, predicate, reverse);
    };
	
	
	//Begin Editing table data Portion 

	
    $scope.editingData = [];
    
    for (var i = 0, length = $scope.clientsTable.length; i < length; i++) {
      $scope.editingData[$scope.clientsTable[i].id] = false;
    }


    $scope.modify = function(clientsTable){
        $scope.editingData[clientsTable.id] = true;
    };


    $scope.update = function(clientsTable){
        $scope.editingData[clientsTable.id] = false;
    };
	

	
    $scope.delete = function(clientsTable){
	 	var index = $scope.clientsTable.indexOf(clientsTable)
	    $scope.clientsTable.splice(index, 1); 
    };
	
    $scope.cancelEdit = function(clientsTable){
 	   $scope.editingData[clientsTable.id] = null;
 
    };

	   
	//Begin Add new Users Section
	
		
	$scope.newClientname="Enter a name";
	$scope.newClientdescription="Enter a description";
	$scope.newClienttype="TRADING";

		
    $scope.confirm = function(clientsTable){
	
		//is default set to no unless user changes this value
		$scope.newClientisDefault="N";
	 	 
		$scope.clientsTable.push({
             id: $scope.clientsTable.length+1,
             name: $scope.newClientname,
   			 description: $scope.newClientdescription,
   			 type: $scope.newClienttype,
   			 isDefault: $scope.newClientisDefault
		 
         });
			
		   
			
   	    $scope.newClientname="Enter a name";
   	    $scope.newClientdescription="Enter a description";
   	   	$scope.newClienttype="TRADING";
	 			
	    alert("You successfully added a new client");

	};


	
     $scope.newReset = function() {
		 
  		$scope.newClientname="Enter a name";
 		$scope.newClientdescription="Enter a description";
 	   	$scope.newClienttype="TRADING";
		$scope.newClientisDefault="";
	   
     };

  }]);
  
  // Directives to help clean up index.html
  //Directives aren't working 
  app.directive('bnymellonaddClients', function() {
    return {
	  restrict: 'E',
	
      templateUrl: 'bny-mellon-add-clients.html'
    };
  });
  
  app.directive('bnymelloneditClients', function() {
    return {
	  restrict: 'E',
      templateUrl: 'bny-mellon-edit-clients.html'
    };
  });

})();