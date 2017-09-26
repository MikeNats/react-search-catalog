Feature: Search list
    As a user
    I want to be able to find the product of my choice

    Scenario: Product item not found
        Given the user is in "search page" 
        When user query is "noproduct"
        Then the error message "No results found!" is displayed
   
    Scenario: One product item found

	    When user query is "iPhone 7 Plus"
	    Then "only one" product will be vissible
	    And visible "product" title will contains "iPhone 7 Plus"

    Scenario: Multiple product items found

	    When user query is "samsung"
	    Then "more than one" product will be vissible
	    And visible "products" title will contains "samsung"

    Scenario: User deletes his existing query

	    When user query is "empty string"
	    Then "no" product will be vissible