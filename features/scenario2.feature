Feature: Scenario 2

  Scenario Outline: Forgot password
    Given I open landing page
    When I close the welcome banner
    When I press on Account button
    And I press log in
    When I am on login page
    And I press forgot password
    And I enter <email> in forgot email page
    And I click on security question field
    And I enter security question
    And I enter new password and confirm
    Then I see message about successfully changed password

    Examples: 
      | email                   |
      | blankaTesting@test.com |
