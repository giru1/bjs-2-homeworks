function cachingDecoratorNew(func) {
	let cache = [];
	
	function wrapper(...args) {
		const hash = args.join(',');
		const idx = cache.findIndex( (item) => item.hash === hash )
		if(idx !== -1) {
			console.log("Из кэша: " + cache[idx].result);
			return "Из кэша: " + cache[idx].result;
		}
		let result = func(...args);
		cache.push({hash, result});
		
		if (cache.length > 5) {
			cache.push({hash, result});
		}
		
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}
	return wrapper;
}


function debounceDecoratorNew(func) {
	// Ваш код
}

function debounceDecorator2(func) {
	// Ваш код
}
