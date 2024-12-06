describe("Expect Test Suite", () => {
  beforeEach((browser) => {
    browser.url("https://glitchitsystem.com/monster/");
  });
  xit("Uses Visible and not.visible", (browser) => {
    browser.expect.element(
      "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(1) > div > div > label"
    ).to.be.visible;
    // browser.expect.element("body > app-root > div > div > div > app-login > div > div > form > div:nth-child(1) > div > div > label").to.not.be.visible;
    browser.pause(2000);
  });

  xit("Uses text with equal/contain and equals/contains", (browser) => {
    browser.expect
      .element(
        "body > app-root > app-header > nav > div > div.collapse.navbar-collapse > ul > li > a"
      )
      .text.to.equal("My Monster Team");
    browser.expect
      .element(
        "body > app-root > app-header > nav > div > div.collapse.navbar-collapse > ul > li > a"
      )
      .text.to.not.equal("My Monster");
    browser.expect
      .element(
        "body > app-root > app-header > nav > div > div.collapse.navbar-collapse > ul > li > a"
      )
      .text.to.contain("Monster Team");
    browser.expect
      .element(
        "body > app-root > app-header > nav > div > div.collapse.navbar-collapse > ul > li > a"
      )
      .text.to.not.contain("Prince");
    browser.pause(2000);
  });

  xit("Uses value with equals/contains and not.equals/not.contains", (browser) => {
    browser.setValue("#username", "prince");
    browser.expect.element("#username").to.have.value.that.equals("prince");
    browser.expect.element("#username").to.have.value.that.contains("pri");

    browser.expect.element("#username").to.have.value.that.not.equals("price");
    browser.expect.element("#username").to.have.value.that.not.contains("pdri");
    browser.pause(2000);
  });

  xit("Uses url and title with contain/equal/endWith", (browser) => {
    browser.expect.url().to.contain("glitch");
    browser.expect.url().to.endWith("monster/");
    browser.expect.url().to.equal("https://glitchitsystem.com/monster/");

    browser.expect.title().to.contain("Monster");
    browser.expect.title().to.endWith("Team");
    browser.expect.title().to.equal("Monster Dream Team");
    browser.expect.title().to.not.equal("Dream Team");
    browser.pause(1000);
  });

  xit("Uses enabled", (browser) => {
    browser.expect.element(
      "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button"
    ).to.be.not.enabled;
    browser.setValue("#username", "prince@gmail.com");
    browser.setValue("#password", "prince");
    browser.expect.element(
      "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button"
    ).to.be.enabled;
    browser.pause(1000);
  });

  xit("Uses selected", (browser) => {
    browser
      .setValue("#username", "bob@bob.com")
      .setValue("#password", "Test123")
      .click(".btn-success")
      .click("body > app-root > div > div > div > app-monsters > div > div.col-md-5 > app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)")
      browser.expect.element("body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)").to.be.not.selected;
      browser.click("body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)");
      browser.expect.element("body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)").to.be.selected;
      browser.pause(2000)
  });
});
