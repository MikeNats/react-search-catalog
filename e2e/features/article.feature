Feature: Article
    As a user
    I want to see the content of the search results

 	Scenario: User click on a search result
        Given the user is in "search page"
        When user query is "samsung"
        And user clicks "product" button 
        Then user should be moved to "product" page
        And user should see the "product" page content

 	Scenario: User wants to navigate back
        Given the user is in "search page"
        When user query is "samsung"
        And user clicks "product" button
        Then user should be moved to "product" page
        And user clicks "back" button 
        Then user should be moved to "index" page

