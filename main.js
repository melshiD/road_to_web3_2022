const serverUrl = "https://w3lanyjsypwl.usemoralis.com:2053/server";
const appId = "VtT6uQ2vJwh8NpXLkTP9xwlylXvWZuZDBNngsib3";
Moralis.start({ serverUrl, appId });


// init = async () => {
//     window.Web3 = await Moralis.Web3.enable();
//     const user = await Moralis.User.current();
// }


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

  const defineNewObject = (data) => {
      const OnChainAccnCred = Moralis.Object.extend("OnChainAccnCred");
      const accnCred = new OnChainAccnCred();
      accnCred.set('indBal', data);
      accnCred.set('indBalTimestamp', 'more data');

      return accnCred;
  }
  
  document.getElementById("btn-login").onclick = login;
  document.getElementById("btn-logout").onclick = logOut;

const wallet_account_array = [];

// Moralis.onAccountChanged( async (account) => {
//     const confirmed = confirm("Link this address to your account?");
//     if (confirmed) {
//       await Moralis.link(account).then( () => console.log("it worked, you switched"));
//     }
//   });

Moralis.onAccountChanged(async ([account]) => {
    const confirmed = confirm("Link this address to your account?");
    if (confirmed) {
      await Moralis.link(account).then( () => console.log("it worked, you switched"));
    }
    console.log(ethAddresses);
});

function getStats() {
    const user = Moralis.User.current();
    if (user) {
        getUserTransactions(user);
    }
  }


async function getUserTransactions(user) {
    const query = new Moralis.Query("ethTransactions");
    query.equalTo("from_address", user.get("ethAddress"));
    const results = await query.find({useMasterKey: true});
    console.log(results);
}