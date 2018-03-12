var fs = require('fs');
var colors = require('colors');

fs.readdir('./katalog', 'utf8', function(err, files) {
	if (err) throw err;
	console.log('Zawartość folderu o nazwie katalog to:\n'.green + files);
		fs.writeFile('./katalog/nowy.txt', files, function(err) {
		if (err) throw err;
		console.log('Zawartość folderu o nazwie "katalog" zapisano do pliku\n nowy.txt'.red);
	});
});