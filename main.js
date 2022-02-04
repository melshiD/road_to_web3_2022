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
      accnCred.set('indBalTimestanp', 'more data');

      return accnCred;
  }

  async function saveEntry(){
      await this.save()
  }
  
  document.getElementById("btn-login").onclick = login;
  document.getElementById("btn-logout").onclick = logOut;

const wallet_account_array = [];
let newWallet = defineNewObject('input Data');
wallet_account_array.push(newWallet);
newWallet = defineNewObject('more Data');
wallet_account_array.push(newWallet);
newWallet = defineNewObject('so much Data');
wallet_account_array.push(newWallet);

console.log(wallet_account_array);

async function saveAllBalancesWithTimestamps(account_array){
    account_array.forEach( accn => {
        accn.saveEntry()
    });
}

// await saveAllBalancesWithTimestamps(wallet_account_array);