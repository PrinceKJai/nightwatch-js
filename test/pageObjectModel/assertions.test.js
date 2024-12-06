describe("Assertions Test Suite With Page Object", () => {
  beforeEach((browser) => {
    browser.page.monsterPage().navigate();
  });

  xit("should check assertions in the login form", (browser) => {
    const monsterPage = browser.page.monsterPage();
    monsterPage.assert.visible("@usernameLabel", "username label is present");
    monsterPage.assert.visible("@passwordLabel", "password label is present");
    monsterPage.assert.visible("@loginButton", "button is present");
    browser.pause(2000);
  });

  xit("Uses containsText, valueContains and value in the form element", (browser) => {
    const monsterPage = browser.page.monsterPage();
    monsterPage.assert.textContains(
      "@usernameLabel",
      "Username",
      "Label has Username"
    );
    monsterPage.assert.textContains(
      "@passwordLabel",
      "Password",
      "Label has Password"
    );
    monsterPage.setValue("@usernameField", "bob@bob.com");
    monsterPage.assert.valueEquals(
      "@usernameField",
      "bob@bob.com",
      "Username input has value"
    );
    monsterPage.setValue("@passwordField", "Test123");
    monsterPage.assert.valueEquals(
      "@passwordField",
      "Test123",
      "Password input has value"
    );
    browser.pause(3000);
  });
});
