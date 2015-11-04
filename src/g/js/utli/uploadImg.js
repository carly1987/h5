/**
 * 上传图片
 * 
 */
define([
	'g/js/utli/view',
	'g/js/utli/art',
	'g/js/utli/dialog',
	'g/js/ajax'
], function(View, Art, Dialog, Ajax){
	var K = View.extend({
		initialize: function(){
			this.setElement(this.options.el);
			if(!this.$el.length) return;
		},
		events: {
			'click [role="uploadImg"]': 'render',
			'click #uploadImgModal .thumbnail': 'select',
			'change #uploadImgModal .btn-file input': 'upload'
		},
		render: function(e){
			var self = $(e.currentTarget);
			var that = this;
			var fn = this.options.o.ajax;

			var data = {
				title: this.options.o.title
			}
			fn(function(html){
				data.body = html;
				new Dialog({
					id: 'uploadImgModal',
					data: data,
					cb: that.renderImg
				});
				that.stage = self.attr('data-stage');
				$('#uploadImgModal [data-dismiss="submit"]').attr('data-stage', that.stage);
			});
		},
		select: function(e){
			var self = $(e.currentTarget);
			self.toggleClass('active');
			var pic = self.find('img').attr('src');
			$('#uploadImgModal [data-dismiss="submit"]').attr('data-pic', pic);
		},
		upload: function(e){
			var self = e.currentTarget;
			var files = self.files[0];
			var FileController = "/api/upload/post";
			var form = new FormData();
            form.append("uid", 1);
            form.append("accountId", 2);  
            form.append("scId", 5);  
            form.append("upload", files);
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("load", uploadComplete, false);
            xhr.open("post", FileController, true);
            xhr.onload = function (result) {
                // alert("上传完成!");
            };
            xhr.send(form);
            function uploadComplete(evt) {
	            //接收完文件返回的结果
	            console.log(evt.target.responseText);
	            var img = 'http://s.phansky.com/'+JSON.parse(evt.target.responseText).result.join(',');
	            $('#uploadImgTag').attr('src', img).parent('a').removeClass('hide');
	            $('#uploadImgModal [data-dismiss="submit"]').attr('data-pic', img);
	        }
			// Ajax.uploadImg({
   //          	uid: config.uid,
   //          	accountId: config.accountId,
   //          	upload: files
   //          }, function(res){
   //          	console.log(res);
            	
   //          });
			// var readFileIntoDataUrl =function(fileInfo){
		 //        var loader = $.Deferred(),
		 //            fReader = new FileReader();
		 //        fReader.onload = function (e) {
		 //            loader.resolve(e.target.result);
		 //        };
		 //        fReader.onerror = loader.reject;
		 //        fReader.onprogress = loader.notify;
		 //        fReader.readAsDataURL(fileInfo);
		 //        return loader.promise();
		 //    };
		 //    $.each(files, function (idx, fileInfo) {
			// 	if (/^image\//.test(fileInfo.type)) {    
		 //            $.when(readFileIntoDataUrl(fileInfo)).done(function (dataUrl) {
		 //                $('#uploadImgTag').attr('src', dataUrl).parent('a').removeClass('hide');
		 //                $('#uploadImgModal [data-dismiss="submit"]').attr('data-pic', dataUrl);
		         
		 //            }).fail(function (e) {
		 //            	Dialog.alert('失败了');
		 //            });
	  //           } else {
	  //           	Dialog.alert('请上传图片');
	  //           }
	  //       });
		},
		renderImg: function(){
			var $modal = $('#uploadImgModal');
			var $submit = $('#uploadImgModal [data-dismiss="submit"]');
			var img = $submit.attr('data-pic');
			var stage = $submit.attr('data-stage');
			if(stage == 'form'){
				$('#uploadImgValueImg').attr('src', img);
				$('[name="coverUrl"]').val(img);
			}else if(stage == 'editor'){
				$('#editor').focus();
		  		document.execCommand('insertimage',false, img);
			}
			$modal.modal('hide');
			
		}
	});
	return K;
})