var Fs = require('fs');

exports.root = __dirname;

exports.jira_host = 'http://jira.intra.tudou.com';

exports.deploy_mail = 'webtest_fabu@tudou.com';

exports.useClientMail = false; // 是否使用系统自带email发邮件

exports.autoSvnAdd = true; // build、dist目录中新增文件时是否自动执行svn add

exports.jsSrcPath = '/src'; // 实际项目中默认的前缀

exports.cssSrcPath = '/src'; // 实际项目中默认的前缀

exports.main = {
	"js" : [
		
	],
	"css" : [
		'dskiss/css/index.less',
		'dskiss/css/main.less',
		'dskiss/css/form.less'
	]
};

exports.libjs = {
	"g/js/lib.js" : ["g/js/lib/jquery.js", "g/js/lib/fix.js", "g/js/lib/oz.js", "g/js/lib/config.js"],
	// "g/js/autodomain.js" : ["g/js/module/domain.js", "g/js/autodomain.js"],
};

exports.ignoreJs = [ // 打包时 PC端在以下文件中出现的子包不被加入
	"g/js/g.js"
];
exports.ignoreMobileJs = [ // 打包时 移动端在以下文件中出现的子包不被加入
	"g/js/m.js"
];

exports.globaljs = [ // 以下文件无视 ignore 的设定
	"g/js/g.js",
	"m/js/m.js"
];
