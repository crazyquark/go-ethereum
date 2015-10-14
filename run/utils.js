
function checkAllBalances() { 
	var i =0; 	
	eth.accounts.forEach( function(e){
		console.log("  eth.accounts["+i+"]: " +  e + " \tbalance: " + web3.fromWei(eth.getBalance(e), "ether") + " ether"); 
		i++; 
	})
};

function h() {
	console.log("Hashrate is " + miner.hashrate);
}

function b() {
        checkAllBalances()
}

function findBlockByTransactionHash(transactionHash, limit) {
	
	try {
		return eth.getBlock(eth.getTransaction(transactionHash).blockNumber);
	} catch (err) {
		return null;
	}
	
}
