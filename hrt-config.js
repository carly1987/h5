var localRoot = __dirname;

exports.serverRoot = localRoot + '';
exports.map = [

	['http://csstest.cy.com/src', localRoot + '/src'],
	['http://csstest.cy.com/build', localRoot + '/src'],
	['http://csstest.cy.com/dist', localRoot + '/src'],

	['http://jstest.cy.com/src', localRoot + '/src'],
	['http://jstest.cy.com/build', localRoot + '/src'],
	['http://jstest.cy.com/dist', localRoot + '/src'],

	['http://css.cy.com/src', localRoot + '/src'],
	['http://css.cy.com/build', localRoot + '/src'],
	['http://css.cy.com/dist', localRoot + '/src'],

	['http://js.cy.com/src', localRoot + '/src'],
	['http://js.cy.com/build', localRoot + '/src'],
	['http://js.cy.com/dist', localRoot + '/src']

];

exports.before = function(url) {
	var Mall = this.util.loadPlugin('mall');

	url = Mall.stripVersionInfo(url);
	url = Mall.cssToLess(url);

	return url;
};

exports.merge = function(path, callback) {
	var Mall = this.util.loadPlugin('mall');

	Mall.merge.call(this, path, callback);
};
