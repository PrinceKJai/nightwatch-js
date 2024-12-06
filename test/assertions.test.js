describe("Assertions Test Suite", () => {
  beforeEach((browser) => {
    browser
    //for correct credentials
    // .url('https://glitchitsystem.com/monster/')
    // .setValue("#username", "bob@bob.com")
    // .setValue("#password", "Test123")
    // .pause(2000)
    // .click(".btn-success")
    // .pause(2000)

    //for incorrect credentials
      .url("https://glitchitsystem.com/monster/")
    //   .setValue("#username", "prince@test.com")
    //   .setValue("#password", "pcom")
    //   .click(".btn-success");
  });
  xit("should fail to login user if creds are incorrect", (browser) => {
    browser
      .url("https://glitchitsystem.com/monster/")
      .setValue("#username", "prince@test.com")
      .setValue("#password", "pcom")
      .pause(2000)
      .click(".btn-success")
      .pause(2000)
      .assert.visible(".notValid");
  });

  xit("should login user if creds are correct", (browser) => {
    browser
      .url("https://glitchitsystem.com/monster/")
      .setValue("#username", "bob@bob.com")
      .setValue("#password", "Test123")
      .pause(2000)
      .click(".btn-success")
      .pause(2000)
      .assert.urlContains("/mine")
      .pause(2000);
  });

  xit("should check assertions in the login form", (browser) => {
    browser.assert
      .visible(
        "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(1) > div > div > label"
      ) //username label
      .assert.visible(
        "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(2) > div > div > label",
        "password label is present"
      ) //pwd label
      .assert.visible(
        "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button",
        "button is present"
      ) //pwd label
      .pause(2000);
  });

  xit("Uses containsText, valueContains and value in the form element", (browser) => {
    browser.assert
      .textContains(
        "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(1) > div > div > label",
        "Username",
        "Label has Username"
      )
      .assert.textContains(
        "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(2) > div > div > label",
        "Password",
        "Label has Password"
      )
      .setValue("#username", "bob@bob.com")
      // .assert.valueContains("#username", "bob@bob.com", "Username input has value")
      .assert.valueEquals(
        "#username",
        "bob@bob.com",
        "Username input has value"
      )
      .setValue("#password", "Test123")
      // .assert.valueContains("#password", "Test123", "Password input has value")
      .assert.valueEquals("#password", "Test123", "Password input has value")
      .pause(3000);
  });

  xit("Uses titleEquals/titleContains and urlContains/urlEquals", (browser) => {
    browser.assert
      .titleEquals("Monster Dream Team")
      .assert.titleContains("Team")
      .assert.urlContains("/monster")
      .assert.urlEquals("https://glitchitsystem.com/monster/")
      .assert.urlMatches("^https")
      .pause(2000);
  });

  xit("Uses enabled/not.enabled and checks if login button is disabled initially and when value is filled it becomes enabled", (browser) => {
    browser.assert.not.enabled(
      "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button",
      "Login button is not enabled initially"
    )
    .setValue("#username", "prince@gmail.com")
    .setValue("#password", "prince123")
    .assert.enabled(
        "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button",
        "Login button is enabled when provided with username and password"
      )
    .pause(2000)
  });

  xit("Uses selected/not.selected  and checks if login button is disabled initially and when value is filled it becomes enabled", (browser) => {
    browser
    .click("body > app-root > div > div > div > app-monsters > div > div.col-md-5 > app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)")
    .assert.not.selected("body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)", "Radio button is not selected initially")
    .click("body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)")
    .assert.selected("body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)", "Radio button is selected")
    .pause(2000)
  });

  xit("Uses Elements attributes like: attributeContains/attributeEquals/attributeMatches/hasAttribute, cssProperty, hasClass", (browser) => {
    browser
    .assert.attributeEquals("#username", "placeholder", "example@example.com", "Username has placeholder text")
    .assert.attributeContains("#username", "placeholder", "example", "Username has placeholder text")
    .assert.attributeContains("#username", "type", "email", "Username has email type")
    .assert.hasAttribute("#username", "placeholder")
    .assert.cssProperty("#username", "height", "34px")
    .assert.hasClass("#username", "form-control")
    // .assert.hasClass("#username", ["form-control", "ng-dirty", "ng-touched", "ng-invalid"])
  })
});
