Feature:OrderBy
    As a user
    I want to order my search results

 	Scenario: Order by button is not visible
        Given the user is in "search page"
        When user query is "empty-string" 
        Then "orderBy" button will "be" visible

 	Scenario: Order by icon is visible

        When user query is "samsung" 
        Then "orderBy" button will "not be" visible

    Scenario: Search results are unordered
        When user query is "samsung"
        Then the the results should be "unordered"

     Scenario: Search results are order by highter to lower price
        When user query is "samsung"
        And user clicks "orderBy" button
        Then the the results should be "ordered by highter to lower price"

    Scenario: Search results are order by lower to higher price
        When user query is "samsung"
        And user clicks "orderBy" button
        Then the the results should be "ordered by lower to higner price"