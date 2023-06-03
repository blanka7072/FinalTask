Feature: Scenario 3

  Scenario: Make a purchase
    Given I open landing page
    When I close the welcome banner
    And I have logged in
    When I press on Account button
    And I click on Orders and Payment option
    And I click on My payment Options option
    And I click add new card button
    And I fill in credit card information and submit
        | Name | Card Number | Expiry Month | Expiry Year |
        | John Goodman | 1234567812345678 | 4 | 2085 |