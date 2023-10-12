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
  cy.wait(5000);
  loginPage.clickbacktologinfromforgot();
  cy.wait(5000);
  loginPage.clicksignup();
  cy.wait(5000);
  loginPage.clickbacktologinfromsignup();
  })

  Then("Leave the fields empty and directly click the Log In button", () => {
    loginPage.clickUsername();
    loginPage.clickPassword();
    loginPage.clickLogin();
    })






Then("Leave the fields empty and directly click the next button in forgot", ()=>{
   cy.wait(2000);
   forgotPage.linkTextForgot();
   cy.wait(2000);
   forgotPage.clicknext();
})









Then("Fill the fields and click the next button in forgot", ()=>{
  cy.wait(2000);
  forgotPage.linkTextForgot();
  cy.wait(2000);
  //cy.xpath('//input[@placeholder="E-Mail"]').type('myUsername');
  forgotPage.typeUsername("Gobinath")
  forgotPage.clicknext();
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
