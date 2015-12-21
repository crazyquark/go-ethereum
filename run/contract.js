var primaryAddress = eth.accounts[0]
var abi = [{"constant": false, "type": "function", "name": "double(int256)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "int256", "name": "x"}]}]
var evmCode = "604380600b600039604e567c010000000000000000000000000000000000000000000000000000000060003504636ffa1caa81141560415760043560405260026040510260605260206060f35b505b6000f3"

var MyContract = eth.contract(abi);
var contract = MyContract.new({from: primaryAddress, data: evmCode, gas: 6000}, function(err, address) {
  if (!err) {
    console.log("address is " + JSON.stringify(address));
  } else {
    console.log(err);
  }
})
