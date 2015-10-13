
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
	
	if (!transactionHash) {
		console.log ("Transaction hash argument is missing or invalid!");
	}
	
	if (limit === undefined || limit < 1) {
		limit = 2000;
	}
	
	var blockCursor = eth.getBlock("latest");
	console.log ("Searching ...");
	
	var limitCursor = limit;
	while (limitCursor > 0) {
		
		if (!blockCursor) {
			console.log ("Reached null block, transaction was not found!");
			return null;
		}
		
		var it = blockCursor.transactions.indexOf(transactionHash);
		
		if (it !== -1) {
			console.log("Found block");
			return blockCursor;
		}
		
		
		var nextBlockNumber = blockCursor.number - 1;
		blockCursor = eth.getBlock(nextBlockNumber);
		--limitCursor;
	}
	
	console.log("Reached " + limit + " limit, transaction was not found!");
	return null;
	
}
