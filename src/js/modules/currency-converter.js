export default function convertCurrency(conversionData) {

	// Check if either currency is BitCoin

	if ( (conversionData.initialCurrencyType === "XBT" ||  conversionData.convertedCurrencyType === "XBT") &&  conversionData.initialCurrencyType !== conversionData.convertedCurrencyType ) {


		var bitcoinGBP = fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json').then(function(response){ 
			return response.json()
		}).then(function(data){
			return data.bpi.GBP.rate_float;
		});
	

		var bitcoinEUR = fetch('https://api.coindesk.com/v1/bpi/currentprice/eur.json').then(function(response){
			return response.json()
		}).then(function(data){
			return data.bpi.EUR.rate_float;
		});
	

		var combinedData = {"bitcoinGBP":{},"bitcoinEUR":{}};
	

		var totalData = Promise.all([bitcoinGBP,bitcoinEUR]).then(function(values){
			combinedData["bitcoinGBP"] = values[0];
			combinedData["bitcoinEUR"] = values[1];

			return combinedData;
		});

		return totalData;


	}

}
