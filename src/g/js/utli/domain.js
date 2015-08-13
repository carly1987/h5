define([
], function(require, exports) {

	var domainMap = {
		main: 'www.phansky.com:58081',
		module: 'www.phansky.com:58082',
		css: 's.tudouui.com',
		js: 's.tudouui.com',
		img: 's.tudouui.com'
	};

	var domain = {};

	function join(domainMap) {
		$.each(domainMap, function(key, val) {
			domain[key] = domain[key] || 'http://' + val;
		});
	}

	join(domainMap);

	exports.join = join;
	exports.url = exports.domain = domain;

});
