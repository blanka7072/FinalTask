class HomePage {
  // Selectors
  get headerText() {
    return $("div=All Products");
  }

  get languageButton() {
    return $("[aria-label='Language selection menu']");
  }

  get pageSizeSelector() {
    return $("#mat-select-value-1");
  }

  get previousPageButton() {
    return $("[aria-label='Previous page']");
  }

  get nextPageButton() {
    return $("[aria-label='Next page']");
  }

  get accountBtn() {
    return $("#navbarAccount");
  }

  get loginBtn() {
    return $("#navbarLoginButton");
  }

  get notCustomerText() {
    return $("#newCustomerLink");
  }

  get projectsPerPageSelected() {
    return $("#mat-select-value-1 .mat-select-min-line");
  }

  get orderAndPayments() {
    return $("[role='menu'] [aria-label='Show Orders and Payment Menu']");
  }

  get paymentOptions() {
    return $("[aria-label='Go to saved payment methods page']");
  }

  get addNewCard() {
    return $("mat-panel-title=Add new card");
  }

  get cardName() {
    return $(
      "app-payment-method mat-form-field:nth-of-type(1) .mat-input-element"
    );
  }

  get cardNumber() {
    return $(
      "app-payment-method mat-form-field:nth-of-type(2) .mat-input-element"
    );
  }

  get cardExpiryMonth() {
    return $(
      "app-payment-method mat-form-field:nth-of-type(3) .mat-input-element"
    );
  }

  get cardExpiryYear() {
    return $(
      "app-payment-method mat-form-field:nth-of-type(4) .mat-input-element"
    );
  }

  // Methods
  async fillCardName(name) {
    await this.cardName.click();
    await this.cardName.setValue(name);
  }

  async fillCardNumber(number) {
    await this.cardNumber.setValue(number);
  }

  async selectCardExpiryMonth(attribute, value) {
    await this.cardExpiryMonth.selectByAttribute(attribute, value);
  }

  async selectCardExpiryYear(attribute, value) {
    await this.cardExpiryYear.selectByAttribute(attribute, value);
  }

  async clickAddNewCard() {
    await this.addNewCard.click();
  }

  async clickOrderAndPayments() {
    await this.orderAndPayments.click();
  }

  async clickPaymentOptions() {
    await this.paymentOptions.click();
  }

  async clickLanguageButton() {
    await this.languageButton.click();
  }

  async clickAccountButton() {
    await this.accountBtn.click();
  }

  async clickLoginButton() {
    await this.loginBtn.click();
  }

  async clickNotCustomerYetText() {
    await this.notCustomerText.click();
  }
}

export default new HomePage();
