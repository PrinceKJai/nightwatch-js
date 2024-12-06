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

let loginCommands = {
  loginToApp: function(username, password) {
    return this
    .setValue("@usernameField", username)
    .setValue("@passwordField", password)
    .click("@loginButton")
  }
}

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
  commands: [loginCommands]
};

//using pages with sections
// module.exports = {
//   url: "https://glitchitsystem.com/monster/",
//   sections: {
//     login: {
//       selector: "",
//       elements: {
//         usernameLabel: {
//           selector:
//             "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(1) > div > div > label",
//         },
//         passwordLabel: {
//           selector:
//             "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(2) > div > div > label",
//         },
//         loginButton: {
//           selector:
//             "body > app-root > div > div > div > app-login > div > div > form > div:nth-child(3) > div > button",
//         },
//         usernameField: "#username",
//         passwordField: "#password",
//       },
//     },
//   },
// };
