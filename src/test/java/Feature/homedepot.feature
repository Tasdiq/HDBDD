Feature: homedepot search


@P1 
Scenario Outline: search products
	Given I enter search keywords as "<search>" 
	Then clickon "searchbutton"
	
	
	
	Examples: 
		|search|
		|drill|
		|sand|
		|hammer|
		