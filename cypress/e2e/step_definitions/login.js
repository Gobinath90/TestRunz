import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage';
import { forgotPage } from "@pages/ForgotPage";

Given("A web browser is at the Testrunz login page", () => {
  cy.viewport(1920, 1080)
  cy.visit("/login/");
  cy.wait(1000);

});

Then("A Testrunz application contains following elements", () => {
loginPage.loginUiElements();
cy.wait(1000);

})

Then("Perform the click functions on the login page", () => {
  loginPage.clickUsername();
  cy.wait(1000);
  loginPage.clickPassword();
  cy.wait(1000);
  loginPage.clickLogin();
  cy.wait(1000);
  loginPage.clickforgot();
  cy.wait(2000);
  loginPage.clickbacktologinfromforgot();
  cy.wait(2000);
  loginPage.clicksignup();
  cy.wait(2000);
  loginPage.clickbacktologinfromsignup();
  })

  Then("Leave the fields empty and directly click the Log In button", () => {
    loginPage.clickLogin();
    cy.xpath('//p[text()="Email is required"]').should('exist');
    cy.xpath('//p[text()="Password is required"]').should('exist');
    cy.screenshot()
    })
  
  Then("Enter the invalid email id", () => {
      loginPage.typeUsername("sample@yopmail.com");
    })
  
  Then("Enter the registered email id", () => {
      loginPage.typeUsername("sample@yopmail.com");
    })

  Then("Enter the invalid password", () => {
      loginPage.typePassword("sample@yopmail.com");
    })  

  Then("Enter the registered password", () => {
      loginPage.typePassword("sample@yopmail.com");
    })
  
  Then("Click the Remember me checkbox", () => {
      loginPage.clickrememberme;
    })
  
  Then("Click Log In button", () => {
      loginPage.clickLogin;
      cy.screenshot()
    })

  Then("User clicks the forgot your password? link text", () => {
      loginPage.clickforgot;
      cy.screenshot()

    })
  Then("User clicks the click here to signup link text", () => {
      loginPage.clicksignup;
      cy.screenshot()

    })

  Then("Click the eye icon and the field shows the password characters.", () => {
      loginPage.clickpasswordvisible;
    })

  Then("Again, click the eye icon and the field hides the password characters and vice versa.", () => {
      loginPage.clickpasswordvisible;
    })












// When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
//   loginPage.submitLogin(username,password)
  
// });

// When("A user provides incorrect credentials, and clicks on the login button", (table) => {
//   table.hashes().forEach((row) => {
//     cy.log(row.username);
//     cy.log(row.password);
//     loginPage.submitLogin(row.username, row.password)

//   });
// });
// Then("the url will contains the inventory subdirectory", () => {
//   cy.url().should("contains", "/inventory.html");
// });
// Then("The error message {string} is displayed", (errorMessage) => {
//   loginPage.elements.errorMessage().should("have.text", errorMessage);
// });
