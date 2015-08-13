define([
	'g/js/utli/art',
	'g/js/utli/widget'
], function(Art,Widget){
	var win = $(window);
	var body = $('body');
	var Dialog = Widget.extend({
		// 构造方法
		initialize : function(config) {
			var self = this;
			var defaults = {
				tpl: require.text('./tpl/dialog.tpl')
			};
			config = $.extend(defaults, config || {});
			var data = config.data || [];
			data.id=config.id;
			body.append(Art.compile(config.tpl)({data:data}));
			// Dialog.superClass.initialize.call(this, config);

			
			var $modal = $('#'+config.id);
			self.show($modal);
			self.targetNode.delegate('[data-dismiss="submit"]','click', function(e){
				e.preventDefault();
				config.cb && config.cb($modal);
			});
		},
		show: function($modal){
			$modal.modal('show');
			$modal.on('hidden', function () {
				$modal.remove();
			});
		},
		hide: function($modal){
			$modal.modal('hide');
		}
	});
	Dialog.confirm = function(o, cb){
		var $modal = $('#confirmModal');
		new Dialog({
			id: 'confirmModal',
			cb: cb,
			data: o
		});
	}
	Dialog.alert = function(o, cb){
		var html = require.text('./tpl/alert.tpl');
		var $modal = $('#alertModal');
		new Dialog({
			id: 'alertModal',
			tpl: html,
			data: o
		});
		$modal.modal('show');
		$modal.on('hidden', function () {
			$modal.remove();
		});
		setTimeout(function(){
			cb && cb($modal);
			$modal.modal('hide');
		},2000);
	};
	return Dialog;
});
