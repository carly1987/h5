
window.console = window.console || {};
console.log = console.log || function(){};

// 输出调试信息
require.debug = false;

// static根目录URL，根据script路径自动获取。
// 线上环境：输出"http://js.tudouui.com/mall"
// 测试环境：输出"http://jstest.tudouui.com/mall"
require.rootUrl = (function(){
	var script = document.getElementById('libjsnode');
	var url = '.';
	if (script) {
		var match = /^(.*)\/(?:dist|build|src)\//.exec(script.src || script.getAttribute('data-src'));
		if (match) {
			url = match[1];
		}
	}
	return url;
})();

// OzJS配置
require.config({
	baseUrl : require.rootUrl + '/src/',
	distUrl : require.rootUrl + '/dist/',
	enableAutoSuffix : false
});
