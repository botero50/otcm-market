## Getting Started

* To install the project : `npm install`
 
## To execute the tests
* Execute the tests with `npm test`

## To review the report
* Go to report/cucumber-html-report
* You can also review the excecution video on the videos folder 

### A sample Feature file
```gherkin
Scenario Outline: Login to the E-Shop Application with Wrong Password
    Given User launched eshop login page
    When User logged in eshop using the invalid emailid "<EmailID>" and the invalid password "<Password>"
    Then User should not get logged in

    Examples:
      | EmailID                    | Password  |
      | testuser_negative@shop.com | Testing$1 |
```