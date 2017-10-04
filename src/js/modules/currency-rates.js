export default function getCurrencyRates(conversionData) {

	// Check if either currency is BitCoin

	if ( (conversionData.initialCurrencyType === "XBT" ||  conversionData.convertedCurrencyType === "XBT")) {


		// Use CoinDesk API to retrieve the current Bitcoin to US Dollar exchange rate
		
		const bitcoinUSD = fetch('https://api.coindesk.com/v1/bpi/currentprice/usd.json').then(function(response){ 
			return response.json()
		}).then(function(data){
			return data.bpi.USD.rate_float;
		});
	

		// Use OpenExchangeRates API to retrieve the current US Dollar to Great British Pound exchange rate

		const usdGBP = fetch('https://openexchangerates.org/api/latest.json?app_id=00b59e9c79ba43c887c43fb006ba1d07').then(function(response){
			return response.json()
		}).then(function(data){
			return data.rates.GBP;
		});
	

		// Create a blank object with named attributes to store the exchange rates in

		const combinedData = {"bitcoinUSD":{},"usdGBP":{}};
	


		// Combine the two Fetch API requests into a single promise. The 'then' function which runs when the promise is resolved will only run if both APIs gave a response.

		const totalData = Promise.all([bitcoinUSD,usdGBP]).then(function(values){
			combinedData["bitcoinUSD"] = values[0];
			combinedData["usdGBP"] = values[1];

			return combinedData;
		});

		return totalData;


	}

}
