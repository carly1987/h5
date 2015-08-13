<div class="btn-toolbar" data-role="editor-toolbar" data-target="#editor">
	<div class="btn-group">
		<a class="btn dropdown-toggle" data-toggle="dropdown" title="Font"><i class="fa fa-font"></i><b class="caret"></b></a>
		<ul class="dropdown-menu">
	  <li><a data-edit="fontName Serif" style="font-family:'Serif'">Serif</a></li><li><a data-edit="fontName Sans" style="font-family:'Sans'">Sans</a></li><li><a data-edit="fontName Arial" style="font-family:'Arial'">Arial</a></li><li><a data-edit="fontName Arial Black" style="font-family:'Arial Black'">Arial Black</a></li><li><a data-edit="fontName Courier" style="font-family:'Courier'">Courier</a></li><li><a data-edit="fontName Courier New" style="font-family:'Courier New'">Courier New</a></li><li><a data-edit="fontName Comic Sans MS" style="font-family:'Comic Sans MS'">Comic Sans MS</a></li><li><a data-edit="fontName Helvetica" style="font-family:'Helvetica'">Helvetica</a></li><li><a data-edit="fontName Impact" style="font-family:'Impact'">Impact</a></li><li><a data-edit="fontName Lucida Grande" style="font-family:'Lucida Grande'">Lucida Grande</a></li><li><a data-edit="fontName Lucida Sans" style="font-family:'Lucida Sans'">Lucida Sans</a></li><li><a data-edit="fontName Tahoma" style="font-family:'Tahoma'">Tahoma</a></li><li><a data-edit="fontName Times" style="font-family:'Times'">Times</a></li><li><a data-edit="fontName Times New Roman" style="font-family:'Times New Roman'">Times New Roman</a></li><li><a data-edit="fontName Verdana" style="font-family:'Verdana'">Verdana</a></li></ul>
	</div>
	<div class="btn-group">
		<a class="btn dropdown-toggle" data-toggle="dropdown" title="Font Size"><i class="fa fa-text-height"></i>&nbsp;<b class="caret"></b></a>
		<ul class="dropdown-menu">
		  <li><a data-edit="fontSize 5"><font size="5">Huge</font></a></li>
		  <li><a data-edit="fontSize 3"><font size="3">Normal</font></a></li>
		  <li><a data-edit="fontSize 1"><font size="1">Small</font></a></li>
		</ul>
	</div>
	<div class="btn-group">
		<a class="btn" data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="fa fa-bold"></i></a>
		<a class="btn" data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="fa fa-italic"></i></a>
		<a class="btn" data-edit="strikethrough" title="Strikethrough"><i class="fa fa-strikethrough"></i></a>
		<a class="btn" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="fa fa-underline"></i></a>
	</div>
	<div class="btn-group">
		<a class="btn" data-edit="insertunorderedlist" title="Bullet list"><i class="fa fa-list-ul"></i></a>
		<a class="btn" data-edit="insertorderedlist" title="Number list"><i class="fa fa-list-ol"></i></a>
		<a class="btn" data-edit="outdent" title="Reduce indent (Shift+Tab)"><i class="fa fa-outdent"></i></a>
		<a class="btn" data-edit="indent" title="Indent (Tab)"><i class="fa fa-indent"></i></a>
	</div>
	<div class="btn-group">
		<a class="btn" data-edit="justifyleft" title="Align Left (Ctrl/Cmd+L)"><i class="fa fa-align-left"></i></a>
		<a class="btn" data-edit="justifycenter" title="Center (Ctrl/Cmd+E)"><i class="fa fa-align-center"></i></a>
		<a class="btn" data-edit="justifyright" title="Align Right (Ctrl/Cmd+R)"><i class="fa fa-align-right"></i></a>
		<a class="btn" data-edit="justifyfull" title="Justify (Ctrl/Cmd+J)"><i class="fa fa-align-justify"></i></a>
	</div>
	<div class="btn-group">
		<a class="btn dropdown-toggle" data-toggle="dropdown" title="Hyperlink"><i class="fa fa-link"></i></a>
		<div class="dropdown-menu input-append">
			<input class="span2" placeholder="URL" type="text" data-edit="createLink"/>
			<button class="btn" type="button">添加</button>
		</div>
		<a class="btn" data-edit="unlink" title="Remove Hyperlink"><i class="fa fa-cut"></i></a>
	</div>	
	<div class="btn-group">
		<a class="btn" role="uploadImg" data-stage="editor"><i class="fa fa-image"></i></a>
		<!-- <a class="btn" title="Insert picture (or just drag & drop)" id="pictureBtn"><i class="fa fa-picture"></i></a>
		<input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" /> -->
	</div>
	<div class="btn-group">
		<a class="btn" data-edit="undo" title="Undo (Ctrl/Cmd+Z)"><i class="fa fa-undo"></i></a>
		<a class="btn" data-edit="redo" title="Redo (Ctrl/Cmd+Y)"><i class="fa fa-repeat"></i></a>
	</div>
	<div class="btn-group">
		<a class="btn" data-edit="source" title="view source code"><i class="fa fa-eye"></i></a>
	</div>
	<input type="text" data-edit="inserttext" id="voiceBtn" x-webkit-speech="">
</div>
<textarea class="form-control hide" name="editor" id="uploadImgText"></textarea>
<div id="editor"></div>