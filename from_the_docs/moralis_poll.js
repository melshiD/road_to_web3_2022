const serverUrl = "https://n38ddwysgkxq.usemoralis.com:2053/server";
const appId = "zL6vhCdAuZ4SqEgTDyqfys0xVLlvmL5ebHMS3kvA";
Moralis.start({ serverUrl, appId });

async function login(){
    await Moralis.authenticate().then( () => {
        printUser()
    });
}

function printUser(){
    const user = Moralis.User.current();
    return user;
}

function getEthAddress(){
    const user = printUser();
    console.log(user.get('ethAddress'));
}

Moralis.onAccountChanged( async (account) => {
    const confirmed = confirm("Link this address to your account?");
    if (confirmed) {
      await Moralis.link(account);
    }
  });
  
async function logOut(){
    await Moralis.User.logOut();
    console.log('logged out');
}