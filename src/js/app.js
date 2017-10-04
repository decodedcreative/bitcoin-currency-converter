import getCurrencyRates from './modules/currency-rates';

document.querySelectorAll("[data-currency-conversion]").forEach(function(form){
	form.addEventListener("submit", function(e){

		var
		initialCurrencyAmount = this.querySelector("[data-initial-currency]").value,
		initialCurrencyType = this.querySelector("[data-initial-currency-type]").value,
		convertedCurrencyAmount = this.querySelector("[data-converted-currency]").value,
		convertedCurrencyType = this.querySelector("[data-converted-currency-type]").value,
		convertedCurrencyResult;

		

		convertedCurrencyResult = getCurrencyRates({
			initialCurrencyAmount: initialCurrencyAmount,
			initialCurrencyType: initialCurrencyType,
			convertedCurrencyAmount: convertedCurrencyAmount,
			convertedCurrencyType: convertedCurrencyType
		}).then(function(data){
			console.log(data);

			if (initialCurrencyType === convertedCurrencyType){
				return initialCurrencyAmount;
			}
			else{

				const poundsInDollars = 1 / data.usdGBP;
				const bitcoinsInDollars = initialCurrencyAmount * data.bitcoinUSD;
				const dollarsInBitcoins = 1 / data.bitcoinUSD;


				if (initialCurrencyType === "XBT" && convertedCurrencyType === "GBP") {

					const bitcoinsInPounds = bitcoinsInDollars / poundsInDollars;

					return bitcoinsInPounds;
				}

				if (initialCurrencyType === "GBP" && convertedCurrencyType === "XBT") {

					const poundsInBitcoins = dollarsInBitcoins / data.usdGBP;

					return poundsInBitcoins;

				}

			}
		}).then(function(convertedCurrencyTotal){
			document.querySelector("[data-converted-currency]").value = convertedCurrencyTotal;
		});



		e.preventDefault();
	});
});