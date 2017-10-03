(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _modulesCurrencyConverter = require('./modules/currency-converter');

var _modulesCurrencyConverter2 = _interopRequireDefault(_modulesCurrencyConverter);

console.log(_modulesCurrencyConverter2["default"]);

document.querySelectorAll("[data-currency-conversion]").forEach(function (form) {
	form.addEventListener("submit", function (e) {

		var initialCurrencyAmount = this.querySelector("[data-initial-currency]").value,
		    initialCurrencyType = this.querySelector("[data-initial-currency-type]").value,
		    convertedCurrencyAmount = this.querySelector("[data-converted-currency]").value,
		    convertedCurrencyType = this.querySelector("[data-converted-currency-type]").value,
		    convertedCurrencyResult;

		convertedCurrencyResult = (0, _modulesCurrencyConverter2["default"])({
			initialCurrencyAmount: initialCurrencyAmount,
			initialCurrencyType: initialCurrencyType,
			convertedCurrencyAmount: convertedCurrencyAmount,
			convertedCurrencyType: convertedCurrencyType
		});

		e.preventDefault();
	});
});

},{"./modules/currency-converter":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = convertCurrency;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _requestAsync = require('./request-async');

var _requestAsync2 = _interopRequireDefault(_requestAsync);

function convertCurrency(conversionData) {

	// Check if either currency is BitCoin

	if ((conversionData.initialCurrencyType === "XBT" || conversionData.convertedCurrencyType === "XBT") && conversionData.initialCurrencyType !== conversionData.convertedCurrencyType) {

		(0, _requestAsync2["default"])('https://api.coindesk.com/v1/bpi/currentprice/gbp.json').then(function (data) {
			console.log(data);
		});
	}
}

module.exports = exports["default"];

},{"./request-async":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = requestAsync;

function requestAsync(url) {
	return new Promise(function (resolve, reject) {
		request(url, function (err, res, body) {
			if (err) {
				return reject(err);
			}
			return resolve([res, body]);
		});
	});
}

module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamFtZXNob3dlbGwvU2l0ZXMvYml0Y29pbi1jdXJyZW5jeS1jb252ZXJ0ZXIvc3JjL2pzL2FwcC5qcyIsIi9Vc2Vycy9qYW1lc2hvd2VsbC9TaXRlcy9iaXRjb2luLWN1cnJlbmN5LWNvbnZlcnRlci9zcmMvanMvbW9kdWxlcy9jdXJyZW5jeS1jb252ZXJ0ZXIuanMiLCIvVXNlcnMvamFtZXNob3dlbGwvU2l0ZXMvYml0Y29pbi1jdXJyZW5jeS1jb252ZXJ0ZXIvc3JjL2pzL21vZHVsZXMvcmVxdWVzdC1hc3luYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7d0NDQTRCLDhCQUE4Qjs7OztBQUUxRCxPQUFPLENBQUMsR0FBRyx1Q0FBaUIsQ0FBQzs7QUFFN0IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVMsSUFBSSxFQUFDO0FBQzdFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBUyxDQUFDLEVBQUM7O0FBRTFDLE1BQ0EscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEtBQUs7TUFDM0UsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLEtBQUs7TUFDOUUsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEtBQUs7TUFDL0UscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLEtBQUs7TUFDbEYsdUJBQXVCLENBQUM7O0FBSXhCLHlCQUF1QixHQUFHLDJDQUFnQjtBQUN6Qyx3QkFBcUIsRUFBRSxxQkFBcUI7QUFDNUMsc0JBQW1CLEVBQUUsbUJBQW1CO0FBQ3hDLDBCQUF1QixFQUFFLHVCQUF1QjtBQUNoRCx3QkFBcUIsRUFBRSxxQkFBcUI7R0FDNUMsQ0FBQyxDQUFDOztBQUVILEdBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztFQUNuQixDQUFDLENBQUM7Q0FDSCxDQUFDLENBQUM7Ozs7Ozs7O3FCQ3ZCcUIsZUFBZTs7Ozs0QkFGZCxpQkFBaUI7Ozs7QUFFM0IsU0FBUyxlQUFlLENBQUMsY0FBYyxFQUFFOzs7O0FBSXZELEtBQUssQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEtBQUssS0FBSyxJQUFLLGNBQWMsQ0FBQyxxQkFBcUIsS0FBSyxLQUFLLENBQUEsSUFBTSxjQUFjLENBQUMsbUJBQW1CLEtBQUssY0FBYyxDQUFDLHFCQUFxQixFQUFHOztBQUV4TCxpQ0FBYSx1REFBdUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUksRUFBQztBQUN4RixVQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQ2xCLENBQUMsQ0FBQztFQUVIO0NBRUQ7Ozs7Ozs7Ozs7cUJDZHVCLFlBQVk7O0FBQXJCLFNBQVMsWUFBWSxDQUFDLEdBQUcsRUFBRTtBQUN6QyxRQUFPLElBQUksT0FBTyxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUM1QyxTQUFPLENBQUMsR0FBRyxFQUFFLFVBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDckMsT0FBSSxHQUFHLEVBQUU7QUFDUixXQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQjtBQUNELFVBQU8sT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7R0FDNUIsQ0FBQyxDQUFDO0VBQ0gsQ0FBQyxDQUFDO0NBQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGNvbnZlcnRDdXJyZW5jeSBmcm9tICcuL21vZHVsZXMvY3VycmVuY3ktY29udmVydGVyJztcblxuY29uc29sZS5sb2coY29udmVydEN1cnJlbmN5KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWN1cnJlbmN5LWNvbnZlcnNpb25dXCIpLmZvckVhY2goZnVuY3Rpb24oZm9ybSl7XG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKXtcblxuXHRcdHZhclxuXHRcdGluaXRpYWxDdXJyZW5jeUFtb3VudCA9IHRoaXMucXVlcnlTZWxlY3RvcihcIltkYXRhLWluaXRpYWwtY3VycmVuY3ldXCIpLnZhbHVlLFxuXHRcdGluaXRpYWxDdXJyZW5jeVR5cGUgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pbml0aWFsLWN1cnJlbmN5LXR5cGVdXCIpLnZhbHVlLFxuXHRcdGNvbnZlcnRlZEN1cnJlbmN5QW1vdW50ID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY29udmVydGVkLWN1cnJlbmN5XVwiKS52YWx1ZSxcblx0XHRjb252ZXJ0ZWRDdXJyZW5jeVR5cGUgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jb252ZXJ0ZWQtY3VycmVuY3ktdHlwZV1cIikudmFsdWUsXG5cdFx0Y29udmVydGVkQ3VycmVuY3lSZXN1bHQ7XG5cblx0XHRcblxuXHRcdGNvbnZlcnRlZEN1cnJlbmN5UmVzdWx0ID0gY29udmVydEN1cnJlbmN5KHtcblx0XHRcdGluaXRpYWxDdXJyZW5jeUFtb3VudDogaW5pdGlhbEN1cnJlbmN5QW1vdW50LFxuXHRcdFx0aW5pdGlhbEN1cnJlbmN5VHlwZTogaW5pdGlhbEN1cnJlbmN5VHlwZSxcblx0XHRcdGNvbnZlcnRlZEN1cnJlbmN5QW1vdW50OiBjb252ZXJ0ZWRDdXJyZW5jeUFtb3VudCxcblx0XHRcdGNvbnZlcnRlZEN1cnJlbmN5VHlwZTogY29udmVydGVkQ3VycmVuY3lUeXBlXG5cdFx0fSk7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH0pO1xufSk7IiwiaW1wb3J0IHJlcXVlc3RBc3luYyBmcm9tICcuL3JlcXVlc3QtYXN5bmMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb252ZXJ0Q3VycmVuY3koY29udmVyc2lvbkRhdGEpIHtcblxuXHQvLyBDaGVjayBpZiBlaXRoZXIgY3VycmVuY3kgaXMgQml0Q29pblxuXG5cdGlmICggKGNvbnZlcnNpb25EYXRhLmluaXRpYWxDdXJyZW5jeVR5cGUgPT09IFwiWEJUXCIgfHwgIGNvbnZlcnNpb25EYXRhLmNvbnZlcnRlZEN1cnJlbmN5VHlwZSA9PT0gXCJYQlRcIikgJiYgIGNvbnZlcnNpb25EYXRhLmluaXRpYWxDdXJyZW5jeVR5cGUgIT09IGNvbnZlcnNpb25EYXRhLmNvbnZlcnRlZEN1cnJlbmN5VHlwZSApIHtcblxuXHRcdHJlcXVlc3RBc3luYygnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UvZ2JwLmpzb24nKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0fSk7XG5cblx0fVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0QXN5bmModXJsKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRyZXF1ZXN0KHVybCwgZnVuY3Rpb24oZXJyLCByZXMsIGJvZHkpIHtcblx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc29sdmUoW3JlcywgYm9keV0pO1xuXHRcdH0pO1xuXHR9KTtcbn0iXX0=
