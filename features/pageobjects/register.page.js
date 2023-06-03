class RegisterPage {
  // Selectors
  get username() {
    return $('[aria-label="Email address field"]');
  }

  get password() {
    return $('[aria-label="Field for the password"]');
  }

  get repeatPassword() {
    return $('[aria-label="Field to confirm the password"]');
  }

  get securityQuestion() {
    return $('[aria-label="Selection list for the security question"]');
  }

  get answer() {
    return $('[aria-label="Field for the answer to the security question"]');
  }

  get submitRegistrationButton() {
    return $('[aria-label="Button to complete the registration"]');
  }

  get eldestSiblingOption() {
    return $("span=Your eldest siblings middle name?");
  }

  get errorMessage() {
    return $(".error");
  }

  get pageTitle() {
    return $("h1=User Registration");
  }

  // Methods
  async typeUsername(username) {
    await this.username.setValue(username);
  }

  async typePassword(password) {
    await this.password.setValue(password);
  }

  async typePasswordAgain(repeatPassword) {
    await this.repeatPassword.setValue(repeatPassword);
  }

  async clickSecurityQuestion() {
    await this.securityQuestion.click();
  }

  async clickEldestSiblingOption() {
    await this.eldestSiblingOption.click();
  }

  async enterAnswer(answer) {
    await this.answer.setValue(answer);
  }

  async clickRegisterButton() {
    await this.submitRegistrationButton.click();
  }

  async validateErrorMessage() {
    await expect(this.errorMessage).toHaveText("Email must be unique");
  }

  async validateRegisterPageIsVisible() {
    await expect(this.pageTitle).toBeExisting();
  }
}

export default new RegisterPage();
