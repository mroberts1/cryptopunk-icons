module.exports = function() {




		 console.log('booting')


	var Web3 = require('web3');
  var web3 = new Web3();
  web3.setProvider(new web3.providers.HttpProvider());

	 var coinbase = web3.eth.coinbase;


	 console.log(coinbase)


	var cryptopunks_contract_address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"

	var market_abi = "";//read from file


	function getCryptopunkIcon(icon_id)
	{
		return "https://www.larvalabs.com/cryptopunks/cryptopunk"+icon_id+".png"
	}


};