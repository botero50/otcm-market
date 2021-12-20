Feature: OTCM Market search feature
  Scenario Outline: Searching <market> quote and checking the market cap
    Given I am on the OTCMarkets page
    When I search "<market>" market on the quote page
      And I capture all the variables required by the test for "<market>"
      And I assert the Company name "<market>" and the Symbol
      And I open the security tab
    Then I check if the market cap on home is equal to the market cap on security page
      And I print the market cap and the date

      Examples:
      | market |
      | OTCM   |
      | RHHBY  |
      | ADBCF  |
