const { init } = require("express/lib/application");

const serverUrl = "https://w3lanyjsypwl.usemoralis.com:2053/server";
const appId = "VtT6uQ2vJwh8NpXLkTP9xwlylXvWZuZDBNngsib3";
Moralis.start({ serverUrl, appId });

//authentication
async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  
  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }

  defineNewObject = async () => {
      const OnChainAccnCred = Moralis.Object.extend("OnChainAccnCred");
      const accnCred = new OnChainAccnCred();
      accnCred.set('indBal', 'variable with data');
      accnCred.set('indBalTimestanp');

      await accnCred.save();
  }
  
  document.getElementById("btn-login").onclick = login;
  document.getElementById("btn-logout").onclick = logOut;
  
  init();