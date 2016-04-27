/**
 * @author Mat Groves
 */

Conclusion = function()
{
	
	PIXI.DisplayObjectContainer.call(this);
	
	this.div = document.getElementById("footer")//createElement("div");
	this.copy =  document.getElementById("copy");
	
	document.body.appendChild(this.div);
	
}


Conclusion.constructor = Conclusion;
Conclusion.prototype =  Object.create( PIXI.DisplayObjectContainer.prototype );

Conclusion.prototype.updateTransform = function()
{
	PIXI.DisplayObject.prototype.updateTransform.call( this );
	
	if(this.visible)
	{
		this.div.style.display = "block";	
	}
	else
	{
		this.div.style.display = "none";	
	}
	
	
	var transform = this.worldTransform;
	
	
	var val = "matrix(" + transform[0] + ", " +transform[3]+","+ transform[1] + "," +  
							transform[4] +"," + ( transform[2] - this.width/2 + offset)+ "," + ( transform[5] - 17 * transform[4] )+ ")";
	
	this.div.style["-webkit-transform-origin"] = "50% 0%";
	this.div.style["transform-origin"] = "50% 0%";
	//-ms-transform-origin:20% 40%;						
							
	this.div.style["-webkit-transform"] = val
	
	
	this.div.style["transform"] = val
							
	
	
}

Conclusion.prototype.resize = function(w, h)
{
	if(w < 1024)w = 1024;
	this.width = w
	this.div.style.width = w +"px";
//	this.copy.left = ""
}