export default function requestAsync(url) {
	return new Promise(function(resolve, reject) {
		request(url, function(err, res, body) {
			if (err) {
				return reject(err);
			}
			return resolve([res, body]);
		});
	});
}