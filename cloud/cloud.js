Moralis.Cloud.define('getUserTransactionList', async (request) => {
    // create query
    const user = request.user;
    return 'here is your '+ user;
});

//Command script for listening to cloud folder
// moralis-admin-cli watch-cloud-folder --moralisApiKey ohTeQrLHl8DL0xN --moralisApiSecret 0rCf5JScGiN0Ssq --moralisCloudfolder C:/"Program Files"/User/davem/Coding/Hackathon/road_to_web3_2022/cloud --moralisSubdomain w3lanyjsypwl.usemoralis.com --autoSave 1
// | Listening folder: C:/Users1/davem/Coding/Hackathon/road_to_web3_2022/cloud