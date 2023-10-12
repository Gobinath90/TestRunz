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


    Scenario: TC_TRUNZ_01_05: Verify when user does not logged In with empty credentials
        Given A web browser is at the Testrunz login page
        Then Leave the fields empty and directly click the next button in forgot

    Scenario: TC_TRUNZ_01_05: Verify when user does not logged In with empty credentials
        Given A web browser is at the Testrunz login page
        Then  Fill the fields and click the next button in forgot

