import requestAsync from './request-async';

export default function convertCurrency(conversionData) {

	// Check if either currency is BitCoin

	if ( (conversionData.initialCurrencyType === "XBT" ||  conversionData.convertedCurrencyType === "XBT") &&  conversionData.initialCurrencyType !== conversionData.convertedCurrencyType ) {

		requestAsync('https://api.coindesk.com/v1/bpi/currentprice/gbp.json').then(function(data){
			console.log(data);
		});

	}

}
