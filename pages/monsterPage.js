// export const url = "https://glitchitsystem.com/monster/";
// export const elements = {
//   elements: {
//     usernameLabel: {
//       selector:
//         "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(1) > div > div > label",
//     },
//     passwordLabel: {
//         selector: "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(2) > div > div > label",
//     }
//   },
// };

module.exports = {
  url: "https://glitchitsystem.com/monster/",
  elements: {
    usernameLabel: {
      selector:
        "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(1) > div > div > label",
    },
    passwordLabel: {
      selector:
        "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(2) > div > div > label",
    },
    loginButton: {
        selector: "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button",
    },
    usernameField: "#username",
    passwordField: "#password",
  },
};
