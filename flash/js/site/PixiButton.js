/**
 * @author Mat Groves
 */

PIXI.Button = function(textureId, textureId2)
{
	
	PIXI.DisplayObjectContainer.call(this);
	
	
	this.div = document.createElement("div");
	this.div.style.position = "fixed";
	this.div.style.cursor = "pointer"
	this.div.style.background = "#FF0000";
	this.div.style.opacity = 0;
	
	
	document.body.appendChild(this.div);
	this.tint = PIXI.Sprite.fromFrame("navTint.png");
	this.addChild(this.tint);
	
	this.white = PIXI.Texture.fromFrame(textureId)// "nav_concW.png");
	this.yellow = PIXI.Texture.fromFrame(textureId2)//"nav_concG.png");
	
	this.sprite = new PIXI.Sprite(this.white);
	
	this.sprite.position.y = 15;
	this.sprite.position.x = 10;
	this.tint.width = 	this.sprite.width + 20;
	this.tint.position.y = -50;
	this.width = this.tint.width
	this.height = 	this.tint.height
	
	this.addChild(this.sprite);
	$(this.div).mouseover($.proxy(this.onMouseOver, this));
	$(this.div).mouseout($.proxy(this.onMouseOut, this));
	$(this.div).click($.proxy(this.onMouseClick, this));
	
	//create a TimelineLite instance
	this.tl = new TimelineLite();
	 
	//append a to() tween
	this.tl.to(this.sprite.position, 0.075, {y:-20, ease:Sine.easeIn});
	this.tl.to(this.tint.position, 0.075, {y:-9, ease:Sine.easeOut});
	this.tl.call(this.onReachTop.bind(this));
	//add another sequenced tween (by default, tweens are added to the end of the timeline which makes sequencing simple)
	this.tl.to(this.sprite.position, 0.075, {y:15, ease:Sine.easeOut});
	 
	this.tl.stop()
	 
	//this.o
}


PIXI.Button.constructor = Conclusion;
PIXI.Button.prototype =  Object.create( PIXI.DisplayObjectContainer.prototype );

PIXI.Button.prototype.select = function()
{
	this.selected = true;
	this.over = true;
	this.tl.play();	
}


PIXI.Button.prototype.deselect = function()
{
	this.selected = false;
	this.tl.reverse();	
	this.over = false;
}


PIXI.Button.prototype.onMouseClick = function(event)
{
	this.onClicked();
}


PIXI.Button.prototype.onMouseOver = function(event)
{
	if(this.selected)return;
	this.tl.play();	
	this.over = true;
}

PIXI.Button.prototype.onReachTop = function()
{
	if(this.over)
	{
		this.sprite.setTexture(this.yellow)
		
	}
	else
	{
		this.sprite.setTexture(this.white)
	}
}

PIXI.Button.prototype.onMouseOut = function()
{
	if(this.selected)return;
	this.tl.reverse();	
	this.over = false;
}

PIXI.Button.prototype.updateTransform = function()
{
	PIXI.DisplayObjectContainer.prototype.updateTransform.call( this );
	
	if(this.visible)
	{
		this.div.style.display = "block";	
	}
	else
	{
		this.div.style.display = "none";	
	}
	
	this.div.style.width = this.width + "px";
	this.div.style.height = this.height + "px";
	
	var transform = this.worldTransform;
	var val =  "matrix(" + transform[0] + ", " +transform[3]+","+ transform[1] + "," +  
							transform[4] +"," + ( transform[2] + offset )+ "," + ( transform[5] )+ ")";
	
	this.div.style["-webkit-transform"] = val
	this.div.style["transform"] = val
	
	
}
