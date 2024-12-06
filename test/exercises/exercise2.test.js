describe("Exercise 2 Soultion", () => {
  beforeEach((browser) => {
    browser
      .url("https://glitchitsystem.com/monster/ ")
      .setValue("#username", "bob@bob.com")
      .setValue("#password", "Test123")
      .click(
        "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button"
      );
    // .pause(2000)
  });

  xit("Creates a test to check to make sure you are displaying the correct url and page title after login", (browser) => {
    browser
      .setValue("#username", "bob@bob.com")
      .setValue("#password", "Test123")
      .click(
        "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button"
      )
      .pause(2000);
    browser.expect.url().to.equal("https://glitchitsystem.com/monster/mine");
    browser.expect.title().to.equal("Monster Dream Team");
  });

  it("Create a test to add a name for the monster and check to make sure it is correct", (browser) => {
    browser
      .click(
        "body > app-root > div > div > div > app-monsters > div > div.col-md-5 > app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)"
      )
      .setValue("#name", "Prince");
    // browser.expect.element("#name").to.have.value.that.equals("Prince");
    browser.expect.element("#name").to.have.attribute('value').which.equals("Prince");
    browser.pause(2000);
  });

  xit("Create a test that checks that all radio buttons have the correct initial state", (browser) => {
    browser.click(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-5 > app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)"
    );
    browser.expect.element(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)"
    ).to.be.not.selected;
    browser.expect.element(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(5)"
    ).to.be.not.selected;
    browser.expect.element(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(7)"
    ).to.be.not.selected;
    browser.expect.element(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(9)"
    ).to.be.not.selected;
    browser.pause(2000);
  });

  xit("Add to that test a click on each radio option and verify after each click to make sure they have the correct state", (browser) => {
    browser.click(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-5 > app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)"
    );
    browser.expect.element(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)"
    ).to.be.not.selected;
    browser.click(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)"
    );
    browser.expect.element(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)"
    ).to.be.selected;

    browser.expect.element(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(5)"
    ).to.be.not.selected;
    browser.click(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(5)"
    );
    browser.expect.element(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(5)"
    ).to.be.selected;

    browser.expect.element(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(7)"
    ).to.be.not.selected;
    browser.click(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(7)"
    );
    browser.expect.element(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(7)"
    ).to.be.selected;

    browser.expect.element(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(9)"
    ).to.be.not.selected;
    browser.click(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(9)"
    );
    browser.expect.element(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(9)"
    ).to.be.selected;

    browser.expect.element(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(11)"
    ).to.be.not.selected;
    browser.click(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(11)"
    );
    browser.expect.element(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(11)"
    ).to.be.selected;

    browser.pause(2000);
  });

  xit("Add to that test checks to make sure each radio has the correct 'value' attribute", (browser) => {
    browser.click(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-5 > app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)"
    );

    browser.click(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)"
    );
    browser.expect
      .element(
        "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)"
      )
      .to.have.value.that.equals("soldier");

    browser.click(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(5)"
    );
    browser.expect
      .element(
        "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(5)"
      )
      .to.have.value.that.equals("medic");

    browser.click(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(7)"
    );
    browser.expect
      .element(
        "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(7)"
      )
      .to.have.value.that.equals("shield");

    browser.click(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(9)"
    );
    browser.expect
      .element(
        "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(9)"
      )
      .to.have.value.that.equals("thief");

    browser.click(
      "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(11)"
    );
    browser.expect
      .element(
        "body > app-root > div > div > div > app-monsters > div > div.col-md-7.rightPanel > app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(11)"
      )
      .to.have.value.that.equals("mage");

    browser.pause(2000);
  });
});
