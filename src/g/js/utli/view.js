define([
	'g/js/utli/event'
], function(Event){

	var isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

	var ClassID = 0;

	var ckTimer;

	var delegateEventsNameSpace = '.delegateEvents';

	var View = function(options){
		this.clsid = ClassID++;
		this._configure(options || {});
		this._ensureElement();
		this.initialize.apply(this, arguments);
		this.delegateEvents();
		// Mixin自定义事件处理
		$.extend(this, new Event);
	};

	// 视图实例集合
	var viewInstance = {};
	// 默认视图属性
	var viewDefaultOptions = ['el', 'id', 'attrs', 'className', 'tagName', 'model'];
	// 事件代理正则
	var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	$.extend(View.prototype, {

		// 默认标签名称
		tagName: 'div',

		// 默认构造方法，需要重写实现
		initialize: function(){},

		// 渲染视图，需要重写实现，返回this链式调用
		render: function(){
			return this;
		},

		// 返回子视图实例
		get: function(name){
			return viewInstance[name] || null;
		},

		// 返回从根节点查找的元素
		find: function(selector){
			return this.$el.find(selector);
		},

		// 删除视图
		remove: function(){
			this.$el.remove();
			this.undelegateEvents();
			this.unbind();
			return this;
		},

		// 创建Dom节点
		create: function(tagName, attrs, content) {
			var el = document.createElement(tagName);
			if (attrs) $(el).attr(attrs);
			if (content) $(el).html(content);
			return el;
		},

		// 更新视图Dom节点
		setElement: function(element, delegate) {
			if (this.$el) this.undelegateEvents();
			this.$el = (element instanceof $) ? element : $(element);
			this.el = this.$el[0];
			if (delegate !== false) this.delegateEvents();
			return this;
		},

		// 事件代理
		delegateEvents: function(events){
			if (!(events || (events = this.events))) return;
			this.undelegateEvents();
			for (var key in events) {
				var method = events[key];
				if (!$.isFunction(method)) method = this[events[key]];
				if (!method) continue;
				var match = key.match(delegateEventSplitter);
				var eventName = match[1], selector = match[2];
				method = method.bind(this);
				eventName = this._ensureTouch(eventName, selector);
				eventName += delegateEventsNameSpace + this.clsid;
				if (selector === '') {
					this.$el.on(eventName, method);
				} else {
					this.$el.on(eventName, selector, method);
				}
			}
			return this;
		},

		/**
		 * 清除事件代理（因绑定时method被指定为其它，固无法指定method解绑）
		 */
		undelegateEvents: function(eventName, selector) {
			var eventName = eventName ? this._ensureTouch(eventName) : '';
			this.$el.off(eventName + delegateEventsNameSpace + this.clsid, selector);
			return this;
		},

		// Model事件绑定
		modelEvents: function(model, modelSuf){
			modelSuf = '{' + ($.trim(modelSuf) || 'mod') + '} ';
			for (var e in this) {
				if(e.indexOf(modelSuf) === 0){
					model.bind(e.slice(modelSuf.length), this[e], this);
				}
			}
		},

		// 配置构造函数参数
		_configure: function(options){
			if (this.options) options = $.extend({}, this.options, options);
			for (var i = 0, l = viewDefaultOptions.length; i < l; i++) {
				var attr = viewDefaultOptions[i];
				if (options[attr]) this[attr] = options[attr];
			}
			this.options = options;
		},

		// 确保根节点Dom存在
		_ensureElement: function(){
			if (this.el) {
				this.setElement(this.el, false);
			} else {
				var attrs = this.attrs || {};
				if (this.id) attrs.id = this.id;
				if (this.className) attrs['class'] = this.className;
				this.setElement(this.create(this.tagName, attrs), false);
			}
		},

		// 不支持touch事件的设备转换成点击事件
		_ensureTouch: function(eventName, selector){
			if (isTouch && window.tudouClickStat) {
				// 只针对touch操作收集click、tap、singleTap点击, 其他touch手势操作不记录
				if ((eventName == 'click' || eventName == 'tap' || eventName == 'singleTap') && selector !== '') {
					var ckName = eventName + delegateEventsNameSpace + this.clsid;
					this.$el.on(ckName, selector, function(event){
						event.preventDefault();
						// 代发送点击统计
						if (!tudouClickStat.getStatTarget(event.target)) {
							if (event.pageX === undefined) {
								event.pageX = event.pageY = 0;
							}
							if (ckTimer) clearTimeout(ckTimer);
							ckTimer = setTimeout(function(){
								tudouClickStat.send(event, {}, function(){}, true);
							}, 10);
						}
					});
				}
				return eventName;
			}
			switch (eventName) {
				case 'tap':
				case 'singleTap':
					return 'click';
				case 'doubleTap':
					return 'dblclick';
			}
			return eventName;
		},

		// 清除视图中设置的定时器
		_clearTimer: function(){
			var args = arguments;
			for (var i = 0, l = args.length; i < l; i++) {
				var timer = args[i];			        
				if (timer) {
					clearTimeout(timer);
					clearInterval(timer);
				}
			}
			return null;
		}

	});

	// 创建实例
	View.create = function(name, options){
		// var self = this;
		// var args = Array.prototype.slice.call(arguments, 1);
		// var Klass = function(){ return self.apply(this, args); };
		// Klass.prototype = self.prototype;
		if (name && !viewInstance[name]) {
			// return viewInstance[name] = new Klass;
			return viewInstance[name] = new this(options);
		}
		return new this(options);
	};

	// 注册或返回视图实例
	View.instance = function(name, viewInst){
		if (name && !viewInstance[name]) {
			return viewInstance[name] = viewInst;
		}
		return viewInstance[name] || null;
	};

	// 删除视图实例
	View.destroy = function(name){
		if (name) {
			if (viewInstance[name]) {
				viewInstance[name].remove();
				delete viewInstance[name];
			}
		} else {
			for (var inst in viewInstance) {
				arguments.callee(inst);
			}
		}
	};

	// 视图继承
	View.extend = function(protoProps, staticProps) {
		var parent = this;
		var child = function(){ parent.apply(this, arguments); };

		$.extend(child, parent, staticProps);

		// 继承父类原型方法继承
		var Surrogate = function(){ this.constructor = child; };
		Surrogate.prototype = parent.prototype;
		child.prototype = new Surrogate;

		$.extend(child.prototype, protoProps);

		child.superClass = parent.prototype;

		return child;
	};

	return View;

});
