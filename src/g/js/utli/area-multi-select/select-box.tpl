
<table class="table">
	<%for(var key in data){%>
		
	<tr>
		<th width="100"><%=key%></th>
		<%data[key].forEach(function(v){%>
		<td width="100">
			<div class="checkbox">
				<label>
					<input type="checkbox" value="<%=v[0]%>" name="areaCheck"> <%=v[1]%>
				</label>
			</div>
		</td>
		<%})%>
		<%if(data[key].length<9){%>

		<%}%>
	</tr>
	<%}%>
</table>
<div class="form-group">
	<button type="button" class="btn btn btn-primary" id="areaConfirm">保存</button>
	<button type="button" class="btn btn-default ml-large" id="areaCancle">取消</button>
</div>