import getCurrencyRates from './modules/currency-rates';

document.querySelectorAll("[data-currency-conversion]").forEach(function(form){

	form.addEventListener("submit", function(e){

		const initialCurrencyAmount = this.querySelector("[data-initial-currency]").value;
		const initialCurrencyType = this.querySelector("[data-initial-currency-type]").value;
		const convertedCurrencyAmount = this.querySelector("[data-converted-currency]").value;
		const convertedCurrencyType = this.querySelector("[data-converted-currency-type]").value;
		let convertedCurrencyResult = 0;

		if (initialCurrencyType !== convertedCurrencyType){

			convertedCurrencyResult = getCurrencyRates({
				initialCurrencyAmount: initialCurrencyAmount,
				initialCurrencyType: initialCurrencyType,
				convertedCurrencyAmount: convertedCurrencyAmount,
				convertedCurrencyType: convertedCurrencyType
			}).then(function(data){

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

			}).then(function(convertedCurrencyTotal){
				document.querySelector("[data-converted-currency]").value = convertedCurrencyTotal;
			});

		} else{
			document.querySelector("[data-converted-currency]").value = initialCurrencyAmount;
		}



		e.preventDefault();
	});

	form.querySelectorAll("[data-linked-select]").forEach(function(selectBox){

		selectBox.addEventListener("change", function(){
			let selectID = this.attributes.id.value;

			form.querySelectorAll('[data-linked-to="'+selectID+'"]').forEach((element)=>{
				element.innerText = 'Amount in '+this.value;

				if (element.hasAttribute("placeholder")) {
					element.attributes.placeholder.value = 'Amount in '+this.value;
				}

			});
		});

	});
});