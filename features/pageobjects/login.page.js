class LoginPage {
  // Selectors
  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get dismissBtn() {
    return $("[aria-label='Close Welcome Banner']");
  }

  get accountBtn() {
    return $("[aria-label='Close Welcome Banner']");
  }

  get loginPageText() {
    return $("h1=Login");
  }

  get forgotPasswordLink() {
    return $("[href='#/forgot-password']");
  }

  get emailField() {
    return $("#email");
  }

  get passField() {
    return $('[name="password"]');
  }

  get securityQuestionField() {
    return $('[aria-label="Field for the answer to the security question"]');
  }

  get newPasswordField() {
    return $('[aria-label="Field for New Password"]');
  }

  get repeatPasswordField() {
    return $('[aria-label="Field to confirm the new password"]');
  }

  get changeButton() {
    return $('[aria-label="Button to confirm the changes"]');
  }

  get passwordChangeMessage() {
    return $("div=Your password was successfully changed.");
  }

  get loginBtn() {
    return $("#loginButton");
  }

  // Methods
  async clickDismissBtn() {
    await this.dismissBtn.click();
  }

  async openLoginPage() {
    await browser.url("");
    await browser.maximizeWindow();
  }

  async validateLoginPageIsDisplayed() {
    await expect(this.loginPageText).toBeExisting();
  }

  async clickForgotPassword() {
    await browser.url("http://159.223.1.129/#/forgot-password");
  }

  async fillInEmail(email) {
    await this.emailField.setValue(email);
  }

  async fillInPassword(pass) {
    await this.passField.setValue(pass);
  }

  async clickOnSecurityQuestion() {
    await this.securityQuestionField.click();
    await browser.pause(2200);
  }

  async fillInSecurityQuestion(text) {
    await this.securityQuestionField.setValue(text);
  }

  async fillInNewPassword(pass) {
    await this.newPasswordField.setValue(pass);
  }

  async fillInRepeatNewPassword(pass) {
    await this.repeatPasswordField.setValue(pass);
  }

  async clickChangeButton() {
    await this.changeButton.click();
  }

  async clickLoginBtn() {
    await this.loginBtn.click();
  }

  async verifyPasswordChangeMessageIsDisplayed() {
    await expect(this.passwordChangeMessage).toBeExisting();
  }
}

export default new LoginPage();
