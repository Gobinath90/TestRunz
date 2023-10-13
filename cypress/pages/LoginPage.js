class LoginPage {
  elements = {
    emailInput: () => cy.xpath('//input[@placeholder="E-mail"]'),
    passwordInput: () => cy.xpath('//input[@type="password"]'),
    passwordEye: () => cy.xpath('//button[@aria-label="toggle password visibility"]'),
    remembermeCheckbox:()=> cy.xpath('//input[@value="remember"]'),
    forgotlinkText:()=> cy.xpath('//p[text()="Forget your password?"]'),
    loginBtn: () => cy.xpath('//button[text()="Log in"]'),
    signup:()=> cy.xpath('//span[text()="Click here to Sign up!"]'),
    emailRequired: () => cy.xpath('//p[text()="Email is required"]'),
    invalidemail:() => cy.xpath('//p[text()="Invalid email"]'),
    passwordRequired: () => cy.xpath('//p[text()="Password is required"]'),
    helplinktext:() => cy.xpath('//a[contains(text(),"Help")]'),
    termslinktext:() => cy.xpath('//a[contains(text(),"Terms")]'),
    loginpagetitle:() => cy.xpath('//a[contains(text(),"Privacy")]'),
    countrydrpdwn:() => cy.xpath('//div[text()="English (United states)"]'),
    forgottologin:() => cy.xpath('//span[text()="log in!"]'),
    signuptologin:() => cy.xpath('//span[text()="Click here to log in."]'),
  };

  loginUiElements(){
    this.elements.emailInput().should('exist');
    this.elements.passwordInput().should('exist');
    this.elements.passwordEye().should('exist');
    this.elements.remembermeCheckbox().should('exist');
    this.elements.forgotlinkText().should('exist');
    this.elements.loginBtn().should('exist');
    this.elements.helplinktext().should('exist');
    this.elements.termslinktext().should('exist');
    this.elements.loginpagetitle().should('exist');
    this.elements.countrydrpdwn().should('exist');


  }
  clickUsername() {
    this.elements.emailInput().click();
  }
  clickPassword() {
    this.elements.passwordInput().click();
  }
  clickpasswordvisible() {
    this.elements.passwordEye().click();
  }
  clickrememberme() {
    this.elements.remembermeCheckbox().click();
  }
  clickLogin() {
    this.elements.loginBtn().click();
  }
  clickforgot() {
    this.elements.forgotlinkText().click();
  }
  clicksignup() {
    this.elements.signup().click();
  }
  clickbacktologinfromforgot() {
    this.elements.forgottologin().click();
  }
  clickbacktologinfromsignup() {
    this.elements.signuptologin().click();
  }
  typeUsername(username) {
    this.elements.emailInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username,password){
    this.elements.emailInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
}

export const loginPage = new LoginPage();
