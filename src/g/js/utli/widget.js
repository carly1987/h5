define([
	'g/js/utli/event',
	'g/js/utli/art'
], function(Event, Art) {

	// 分割 event key
	function splitEventKey(eventKey, defaultEventType) {
		var type;
		var selector;
		var arr = eventKey.split(' ');
		if (arr.length == 1) {
			type = defaultEventType;
			selector = eventKey;
		} else {
			type = arr.shift();
			selector = arr.join(' ');
		}
		return [type, selector];
	}

	var Widget = Event.extend({
		// 与 widget 关联的 DOM 元素 (jQuery对象)
		element : null,
		// 默认模板
		template : '<div></div>',
		// 默认事件类型
		eventType : 'click',
		// 默认数据
		model : {},
		// 事件代理，格式为：
		// {
		//     'mousedown .title': 'edit',
		//     'click .open': function(ev) { ... }
		// }
		events : {},
		// 组件的定位节点 (jQuery对象)
		targetNode : $(document.body),
		// 渲染方法，"append","prepend","before","after","replaceWith"
		renderMethod : 'append',
		// 构造方法
		initialize : function(config) {
			var self = this;
			config = config || {};
			Widget.superClass.initialize.call(self);

			self.model = $.extend(true, {}, self.model);
			self.events = $.extend(true, {}, self.events);

			$.each(['element', 'targetNode'], function() {
				(typeof config[this] !== 'undefined') && (self[this] = $(config[this]));
			});

			$.each(['template', 'eventType', 'renderMethod'], function() {
				(typeof config[this] !== 'undefined') && (self[this] = config[this]);
			});

			$.each(['model', 'events'], function() {
				(typeof config[this] !== 'undefined') && $.extend(self[this], config[this]);
			});
		},

		// 在 this.element 内寻找匹配节点
		find : function(selector) {
			return this.element.find(selector);
		},

		// 注册事件代理
		delegate : function(events, handler) {
			var self = this;
			// 允许使用：widget.delegate('click p', function(ev) { ... })
			if ($.type(events) == 'string' && $.isFunction(handler)) {
				var obj = {};
				obj[events] = handler;
				events = obj;
			}
			// key 为 'event selector'
			$.each(events, function(key, val) {
				var callback = function(e) {
					if ($.isFunction(val)) {
						return val.call(self, e);
					} else {
						return self[val](e);
					}
				};
				var arr = splitEventKey(key, self.eventType);
				self.element.on(arr[0], arr[1], callback);
			});
			return self;
		},

		// 卸载事件代理
		undelegate : function(eventKey) {
			var self = this;
			// key 为 'event selector'
			var arr = splitEventKey(eventKey, self.eventType);
			self.element.off(arr[0], arr[1]);
			return self;
		},

		// 将 widget 渲染到页面上
		render : function(model) {
			var self = this;

			if (!self.element || !self.element[0]) {
				self.element = $(Art.compile(self.template)($.extend({
					getUrl: this.getUrl || getUrl
				}, model || self.model)));
			}

			self.delegate(self.events);

			if (self.renderMethod) {
				self.targetNode[self.renderMethod](self.element);
			}

			return self;
		},
		update: function(data){
			if (this.renderMethod) {
				this.targetNode[this.renderMethod](Art.compile(this.template)($.extend({
					getUrl: this.getUrl || getUrl
				}, data)));
			}
		}
	});
	
	function getUrl(url){
		return url;
	}
	
	return Widget;

});
