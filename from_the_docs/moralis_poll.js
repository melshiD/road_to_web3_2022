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
    buildPopulateDisplayForm();
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

// async function getTransactions(user){
async function getTransactions(accnAddy){
    // if(user){
        let options = { address: `${accnAddy}`};
        console.log(options);
        let transactions = await Moralis.Web3API.account.getTransactions(options);
        return transactions;
}

async function setup(index){
    let userAccounts = Moralis.User.current().attributes.accounts,
        accnNeeded = userAccounts[index];
    let transactions = [];
    await getTransactions(accnNeeded).then(res => transactions = res.result);
    return transactions;
}

async function getTokenBalances(index){
    let userAccounts = Moralis.User.current().attributes.accounts,
        accnNeeded = userAccounts[index];
    let balance = await Moralis.Web3API.account.getTokenBalances({address: accnNeeded});
    return balance;
    //let balance = await getTokenBalances(index);
}

function grabTokenIconLink(balance){
    return balance.logo;
}

function buildPopulateDisplayForm(){
    let userAccounts = Moralis.User.current().attributes.accounts;
    let userForm = document.createElement('form');
    userForm.classList.add('wallet-address');
    for(accn of userAccounts){
        let toggle = document.createElement('input');
        toggle.setAttribute('type', 'checkbox');
        toggle.setAttribute('id', accn);
        userForm.appendChild(toggle);
        let label = document.createElement('label');
        label.setAttribute('for', accn);
        label.innerHTML = accn;
        userForm.appendChild(label);
    }
    

    return userForm;
}


// let transactions;

// window.addEventListener('load', async () => {
//     transactions = await setup();
//     console.log(transactions);
// });

