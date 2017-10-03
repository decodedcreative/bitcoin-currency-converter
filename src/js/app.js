import convertCurrency from './modules/currency-converter';

console.log(convertCurrency);

document.querySelectorAll("[data-currency-conversion]").forEach(function(form){
	form.addEventListener("submit", function(e){

		var
		initialCurrencyAmount = this.querySelector("[data-initial-currency]").value,
		initialCurrencyType = this.querySelector("[data-initial-currency-type]").value,
		convertedCurrencyAmount = this.querySelector("[data-converted-currency]").value,
		convertedCurrencyType = this.querySelector("[data-converted-currency-type]").value,
		convertedCurrencyResult;

		

		convertedCurrencyResult = convertCurrency({
			initialCurrencyAmount: initialCurrencyAmount,
			initialCurrencyType: initialCurrencyType,
			convertedCurrencyAmount: convertedCurrencyAmount,
			convertedCurrencyType: convertedCurrencyType
		}).then(function(data){
			console.log(data);
		});


		e.preventDefault();
	});
});