/**
 * 富文本组件
 * 
 */
define([
	'g/js/utli/view',
	'g/js/utli/art'
], function(View, Art){
	var K = View.extend({
		tpl: require.text('./wysiwyg.tpl'),
		initialize: function(){
			this.setElement(this.options.el);
			if(!this.$el.length) return;
			var html = Art.compile(this.tpl)({data:this.options.data});
			this.$el.html(html);
			$('#editor').wysiwyg();
		},
		events: {
			'click .btn-group .btn': 'btn',
			'change #uploadImgText': 'content'
		},
		btn: function(e){
			this.find('.btn-group .btn').removeClass('btn-info');
			$(e.currentTarget).addClass('btn-info');
		},
		content: function(e){
			var content = $(e.currentTarget).val();
			$('[name="content"]').val(content);
		}
	});

	return K;
})