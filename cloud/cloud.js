Moralis.Cloud.define('getUserTransactionList', async (request) => {
    // create query
      const user = Moralis.User.current();
    const query = new Moralis.Query("EthTransactions");
    query.equalTo("from_address", user.get("ethAddress"));
    // run query
    const results = await query.find({useMasterKey:true});

      return results;
});