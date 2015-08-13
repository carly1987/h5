<div class="modal fade" id="<%=data.id%>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<%if(data.title != 'null'){%>
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title"><%=data.title%></h4>
			</div>
			<%}%>
			<div class="modal-body"><%==data.body%></div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
				<button type="button" class="btn btn-primary btn-validator" data-dismiss="submit"><b>确定</b><span class="form-validator n-top"></span></button>
			</div>
		</div>
	</div>
</div>