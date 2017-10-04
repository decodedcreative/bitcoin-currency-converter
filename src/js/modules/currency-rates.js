export default function getCurrencyRates(conversionData) {

	// Check if either currency is BitCoin

	if ( (conversionData.initialCurrencyType === "XBT" ||  conversionData.convertedCurrencyType === "XBT") &&  conversionData.initialCurrencyType !== conversionData.convertedCurrencyType ) {


		var bitcoinUSD = fetch('https://api.coindesk.com/v1/bpi/currentprice/usd.json').then(function(response){ 
			return response.json()
		}).then(function(data){
			return data.bpi.USD.rate_float;
		});
	

		var usdGBP = fetch('https://openexchangerates.org/api/latest.json?app_id=00b59e9c79ba43c887c43fb006ba1d07').then(function(response){
			return response.json()
		}).then(function(data){
			return data.rates.GBP;
		});
	

		var combinedData = {"bitcoinUSD":{},"usdGBP":{}};
	

		var totalData = Promise.all([bitcoinUSD,usdGBP]).then(function(values){
			combinedData["bitcoinUSD"] = values[0];
			combinedData["usdGBP"] = values[1];

			return combinedData;
		});

		return totalData;


	}

}
