describe("Assertions Test Suite", () => {
  beforeEach((browser) => {
    browser
      // .url('https://glitchitsystem.com/monster/')
      // .setValue("#username", "bob@bob.com")
      // .setValue("#password", "Test123")
      // .pause(2000)
      // .click(".btn-success")
      // .pause(2000)
      .url("https://glitchitsystem.com/monster/")
      .setValue("#username", "prince@test.com")
      .setValue("#password", "pcom")
      .click(".btn-success");
  });
  xit("should check if alerts is working as expected", (browser) => {
    browser
      .click(
        "body > app-root > div > div > div > app-monsters > div > div.col-md-5 > app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(3)"
      )
      .alerts.getText((alert) => {
        console.log("alert", alert.value);
      })
      .alerts.dismiss()
      .click(
        "body > app-root > div > div > div > app-monsters > div > div.col-md-5 > app-monster-list > div:nth-child(1) > div:nth-child(1) > button:nth-child(3)"
      )
      .alerts.accept()
      .pause(2000);
  });
});
