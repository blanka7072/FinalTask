Feature: Scenario 1

  Scenario Outline: Attempt to register with already registered user
    Given I open landing page
    When I close the welcome banner
    When I press on Account button
    And I press log in
    When I press not yet a customer
    And I enter email <emailAddress>
    And I enter password <password>
    And I repeat password again <passwordRepeatedly>
    And I select security question about elder sibling
    And I enter answer <answer>
    And I press register button
    Then I see message about email must be unique
    And I am in register page

    Examples: 
      | emailAddress            | password | passwordRepeatedly | answer |
      | blankaTesting@test.com | 123123123 |            123123123 | test   |
