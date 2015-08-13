define([
	'g/js/utli/widget',
	'g/js/utli/art'
], function(Widget, Art) {
	var ProgressContent = Widget.extend({
		// 构造方法
		initialize : function(config) {
			var self = this;
			var defaults = {
				
			};
			config = $.extend(defaults, config || {});
			$(config.el).find('> div').fadeOut();
			var $go = $(config.go);
			setTimeout(function(){
				$go.fadeIn();
			},300);
		}
	});
	ProgressContent.go = function(o, cb){
		new ProgressContent({
			el: o.el,
			steps: o.steps,
			go: o.go
		});
	}
	return ProgressContent;
});