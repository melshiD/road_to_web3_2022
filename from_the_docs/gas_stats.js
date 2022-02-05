// connect to Moralis server

//one way:
// Moralis.initilize("APP ID from moralis.io");
// Moralis.serverURL = " the url";
const serverUrl = "https://w3lanyjsypwl.usemoralis.com:2053/server";
const appId = "VtT6uQ2vJwh8NpXLkTP9xwlylXvWZuZDBNngsib3";
Moralis.start({ serverUrl, appId });

async function login() {
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.Web3.authenticate();
    }
    console.log("logged in user:", user);
    getStats();
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}

// bind button click handlers
document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
document.getElementById("btn-get-stats").onclick = getStats;

function getStats() {
    const user = Moralis.User.current();
    if (user) {
        getUserTransactions();
    }
}

async function getUserTransactions() {
    const results = await Moralis.Cloud.run('getUserTransactionList');
    console.log("user transactions:", results);
}
