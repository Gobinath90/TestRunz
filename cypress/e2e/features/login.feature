Feature: Login page

    Feature Login page will work depending on the user credentials.

    Scenario: TC_TRUNZ_01_01: Verify whether the application url is working
        Given A web browser is at the Testrunz login page
    
    Scenario: TC_TRUNZ_01_03: Verify the presence of the login page locator
        Given A web browser is at the Testrunz login page
        Then A Testrunz application contains following elements

    Scenario: TC_TRUNZ_01_04: Verify whether the text fields, buttons, links, checkbox and eye icon is clickable and its functions works properly
        Given A web browser is at the Testrunz login page
        Then Perform the click functions on the login page
 
    Scenario: TC_TRUNZ_01_05: Verify when user does not logged In with empty credentials
        Given A web browser is at the Testrunz login page
        Then Leave the fields empty and directly click the Log In button

    Scenario: TC_TRUNZ_01_06: Verify whether the user should not be logged In with invalid "email id" and valid "password"
        Given A web browser is at the Testrunz login page
        Then Enter the invalid email id
        Then Enter the registered password
        Then Click Log In button

    Scenario: TC_TRUNZ_01_07: Verify whether the user should not be logged In with valid "email id" and "invalid password"
        Given A web browser is at the Testrunz login page
        Then Enter the registered email id
        Then Enter the invalid password
        Then Click Log In button

    Scenario: TC_TRUNZ_01_08: Verify whether the user should not be logged In with invalid "email id" and "invalid password"
        Given A web browser is at the Testrunz login page
        Then Enter the invalid email id
        Then Enter the invalid password
        Then Click Log In button
    
    Scenario: TC_TRUNZ_01_09: Verify whether the user should be able to log In with valid credentials with clicking the checkbox
        Given A web browser is at the Testrunz login page
        Then Enter the registered email id
        Then Enter the registered password 
        Then Click the Remember me checkbox 
        Then Click Log In button

    Scenario: TC_TRUNZ_01_10: Verify whether the user should be able to log In with valid credentials without clicking the checkbox
        Given A web browser is at the Testrunz login page
        Then Enter the registered email id 
        Then Enter the registered password 
        Then Click Log In button
    
    Scenario: TC_TRUNZ_01_11: Verify whether the user is able to redirected to the corresponding page when the user clicks "forgot your password ?"
        Given A web browser is at the Testrunz login page
        Then User clicks the forgot your password? link text 

    Scenario: TC_TRUNZ_01_12: Verify whether the user is able to redirected to the corresponding page when the user clicks "click here to signup!"
        Given A web browser is at the Testrunz login page
        Then User clicks the click here to signup link text 
    
    Scenario: TC_TRUNZ_01_13: Verify whether the eye icon is present in the password field is should be clickable
        Given A web browser is at the Testrunz login page
        Then Click the eye icon and the field shows the password characters.
        Then Again, click the eye icon and the field hides the password characters and vice versa.
