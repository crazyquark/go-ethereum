var greeterSource = 'contract mortal { address owner; function mortal() { owner = msg.sender; } function kill() { if (msg.sender == owner) suicide(owner); } } contract greeter is mortal { string greeting; function greeter(string _greeting) public { greeting = _greeting; } function greet() constant returns (string) { return greeting; } }'
var greeterCompiled = web3.eth.compile.solidity(greeterSource)

var _greeting = "Hello World!"
var greeterContract = web3.eth.contract(greeterCompiled.greeter.info.abiDefinition);

// Require 73200 and have 69774
// dataGas = 200 * len(data) = 200 * 366 = 73200
// cgas = 100226
var estimate = eth.estimateGas({from:web3.eth.accounts[0], data: greeterCompiled.greeter.code})
console.log("Estimated gas usage: " + estimate + "\n");
console.log(JSON.stringify(greeterContract))
var greeter = greeterContract.new(_greeting,{from:web3.eth.accounts[0], data: greeterCompiled.greeter.code, gas: 157138, gasPrice: 50000000001}, function(e, contract){
  if(!e) {

    if(!contract.address) {
      console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");

    } else {
      console.log("Contract mined! Address: " + contract.address + "\n");
      console.log(contract);
    }

  }
})
