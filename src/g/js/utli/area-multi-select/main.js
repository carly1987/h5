/**
 * 区域多选组件
 * 
 */
define([
	'g/js/utli/view',
	'g/js/utli/art',
	'./data-provinces'
], function(View, Art, DataProvinces){
	var K = View.extend({
		tpl: require.text('./select-box.tpl'),
		initialize: function(){
			this.setElement(this.options.el);
			if(!this.$el.length) return;
			var html = Art.compile(this.tpl)({data:DataProvinces});
			this.options.init(html);
		},
		events: {
			'click .td-cityName a': 'select',
			'click #areaConfirm': 'confirm',
			'click #areaCancle': 'cancle',
			'change input[name="areaCheck"]': 'newChecked'
		},
		select: function(e){
			var self = $(e.currentTarget);
			this.selector = self;
			var list = self.attr('data-id');
			this.renderChecked(list);
		},
		renderChecked: function(list){
			if(list){
				list = list.split(',');
			}else{
				list = [];
			}	
			$.each(list, function(i){
				$('input[name="areaCheck"][value="'+list[i]+'"]').prop('checked',true);
			});
			
		},
		confirm: function(e){
			var $checked = $('input[name="areaCheck"]:checked');
			var v = [];
			var map = [];
			$.each($checked, function(i){
				var checked = $($checked[i]);
				var id = checked.val();
				v.push(id);
				var index = checked.parents('tr').find('th').html();
				var data = {
					index: index,
					id: id
				}
				map.push(data);
			});
			map = this.getSelected(map);
			this.options.confirmFn(v,map,this.selector);
		},
		cancle: function(e){
			this.options.cancleFn(this.selector);
		},
		getSelected: function(map){
			var v = [];
			$.each(map, function(i){
				var index = map[i].index;
				var id = map[i].id;
				var arry = DataProvinces[index];
				$.each(arry, function(j){
					if( id == arry[j][0]){
						v.push(arry[j][1]);
					}
				});
			});
			return v;
		}
	});

	return K;
})