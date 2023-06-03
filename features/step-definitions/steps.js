import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page.js";
import HomePage from "../pageobjects/home.page.js";
import RegisterPage from "../pageobjects/register.page.js";

When("I close the welcome banner", async () => {
  await LoginPage.clickDismissBtn();
});

Then(/^I should see heading with (.*)$/, async (text) => {
  await expect(HomePage.headerText).toBeExisting();
  await expect(HomePage.headerText).toHaveText(text);
});

Then("I can see the language button", async () => {
  await expect(HomePage.languageButton).toBeExisting();
});

When("I can see the language change button", async () => {
  await HomePage.clickLanguageButton();
});

Then("I can see the language menu", async () => {
  await expect(HomePage.languageMenu).toBeExisting();
});

Then("I can see the side nav menu", async () => {
  await expect(SideNavPage.sideNavMenu).toBeExisting();
});

When("I click the side nav menu", async () => {
  await SideNavPage.clickSideNavMenu();
});

Then(/^I can see version (.*)$/, async (version) => {
  await expect(SideNavPage.appVersion).toHaveText(version);
});

Then("I can see Contact text", async () => {
  await expect(SideNavPage.contactText).toBeExisting();
});

Then("I can see About Us", async () => {
  await expect(SideNavPage.aboutUs).toBeExisting();
});

Then("I can see the page size selector", async () => {
  await expect(HomePage.pageSizeSelector).toBeExisting();
});

Then("I can see the previous page button", async () => {
  await expect(HomePage.previousPageButton).toBeExisting();
});

Then("I can see the next page button", async () => {
  await expect(HomePage.nextPageButton).toBeExisting();
});

Then(/^I can see (.*) per page selected$/, async (projectsPerPage) => {
  await expect(HomePage.projectsPerPageSelected).toHaveText(projectsPerPage);
});

Given(/^I open landing page$/, async () => {
  await LoginPage.openLoginPage();
});

When("I press not yet a customer", async () => {
  await HomePage.clickNotCustomerYetText();
});

When("I press log in", async () => {
  await HomePage.clickLoginButton();
});

When("I press on Account button", async () => {
  await HomePage.clickAccountButton();
});

When(/^I enter email (.*)$/, async (username) => {
  await RegisterPage.typeUsername(username);
});

When(/^I enter password (.*)$/, async (password) => {
  await RegisterPage.typePassword(password);
});

When(/^I repeat password again (.*)$/, async (repeatPassword) => {
  await RegisterPage.typePasswordAgain(repeatPassword);
});

When("I select security question about elder sibling", async () => {
  await RegisterPage.clickSecurityQuestion();
  await RegisterPage.clickEldestSiblingOption();
});

When(/^I enter answer(.*)$/, async (answer) => {
  await RegisterPage.enterAnswer(answer);
});

When("I press register button", async () => {
  await RegisterPage.clickRegisterButton();
});

Then("I see message about email must be unique", async () => {
  await RegisterPage.validateErrorMessage();
});

Then("I am in register page", async () => {
  await RegisterPage.validateErrorMessage();
});

When("I am on login page", async () => {
  await LoginPage.validateLoginPageIsDisplayed();
});

When("I press forgot password", async () => {
  await LoginPage.clickForgotPassword();
});

When(/^I enter (.*) in forgot email page$/, async (email) => {
  await LoginPage.fillInEmail(email);
});

When("I click on security question field", async () => {
  await LoginPage.clickOnSecurityQuestion();
});

When("I enter security question", async () => {
  await LoginPage.fillInSecurityQuestion("test");
});

When("I enter new password and confirm", async () => {
  await LoginPage.fillInNewPassword("11111111");
  await LoginPage.fillInRepeatNewPassword("11111111");
  await LoginPage.clickChangeButton();
});

Then("I see message about successfully changed password", async () => {
  await LoginPage.verifyPasswordChangeMessageIsDisplayed();
});

When(/^I have logged in$/, async () => {
  await HomePage.clickAccountButton();
  await HomePage.clickLoginButton();
  await LoginPage.fillInEmail("blankaTesting@test.com");
  await LoginPage.fillInPassword("11111111");
  await LoginPage.clickLoginBtn();
});

When("I click on Orders and Payment option", async () => {
  await HomePage.clickOrderAndPayments();
});

When("I click on My payment Options option", async () => {
  await HomePage.clickPaymentOptions();
});

When("I click add new card button", async () => {
  await HomePage.clickAddNewCard();
});

When("I fill in credit card information and submit", async (dataTable) => {
  await browser.pause(2000);
  const creditCardInfo = dataTable.hashes()[0];
  await HomePage.fillCardName(creditCardInfo["Name"]);
  await HomePage.fillCardNumber(creditCardInfo["Card Number"]);
  await HomePage.selectCardExpiryMonth("value", creditCardInfo["Expiry Month"]);
  await HomePage.selectCardExpiryYear("value", creditCardInfo["Expiry Year"]);
  await browser.pause(10000);
});
