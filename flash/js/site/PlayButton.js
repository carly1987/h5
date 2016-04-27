/**
 * @author Mat Groves
 */

PlayButton = function(url, isHTML)
{
	this.url = url;
	this.anchor = new PIXI.Point();
	var textureId = "navTint.png"
	var textureId2 = "navTint.png"
	PIXI.DisplayObjectContainer.call(this);
	
	
	this.div = document.createElement("div");
	this.div.style.position = "fixed";
	this.div.style.cursor = "pointer"
	this.div.style.background = "#FF0000";
	this.div.style.opacity = 0;
	
	document.body.appendChild(this.div);
	this.tint = PIXI.Sprite.fromFrame("navTint.png");
	//this.addChild(this.tint);
	
	if(isHTML)
	{
		
		this.white = PIXI.Texture.fromFrame("playButtonHTML.png")//FrameId(textureId)// "nav_concW.png");
		this.yellow = PIXI.Texture.fromFrame("playButtonHTMLRoll.png")///FrameId(textureId2)//"nav_concG.png");
	}
	else
	{
		this.white = PIXI.Texture.fromFrame("playButtonFlash.png")//FrameId(textureId)// "nav_concW.png");
		this.yellow = PIXI.Texture.fromFrame("playButtonFlashRoll.png")///FrameId(textureId2)//"nav_concG.png");
	}
	
	this.sprite = new PIXI.Sprite(this.white);
	this.sprite.anchor.x = 0.5;
	this.sprite.anchor.y = 0.5;
		
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
	//this.tl.to(this.tint.position, 0.075, {y:0, ease:Sine.easeOut});
	this.tl.call(this.onReachTop.bind(this));
	this.tl.to(this.sprite.scale, 0.1, {x:1.2, y:1.2, ease:Sine.easeOut});
	//add another sequenced tween (by default, tweens are added to the end of the timeline which makes sequencing simple)
//	this.tl.to(this.sprite.position, 0.075, {y:15, ease:Sine.easeOut});
	 
	this.tl.stop()
	 
	//this.o
}


PlayButton.constructor = PlayButton;
PlayButton.prototype =  Object.create( PIXI.DisplayObjectContainer.prototype );

PlayButton.prototype.select = function()
{
	this.selected = true;
	this.over = true;
	this.tl.play();	
}


PlayButton.prototype.deselect = function()
{
	this.selected = false;
	this.tl.reverse();	
	this.over = false;
}


PlayButton.prototype.onMouseClick = function(event)
{
	if(HIGH)
	{
		window.open(this.url);
	}
	else
	{
		window.open(this.url, "_self");
	}
}


PlayButton.prototype.onMouseOver = function(event)
{
	if(this.selected)return;
	this.tl.play();	
	this.over = true;
}

PlayButton.prototype.onReachTop = function()
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

PlayButton.prototype.onMouseOut = function()
{
	if(this.selected)return;
	this.tl.reverse();	
	this.over = false;
}

PlayButton.prototype.updateTransform = function()
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
	
	this.div.style.width = 187 + "px";
	this.div.style.height = 98 + "px";
	
	var transform = this.worldTransform;
	
	
	var val =  "matrix(" + transform[0] + ", " +transform[3]+","+ transform[1] + "," +  
							transform[4] +"," + ( transform[2] - 187/2 + offset)+ "," + ( transform[5] - 98/2)+ ")";
							
	this.div.style["-webkit-transform"] = val;
	
	this.div.style["transform"] = val;
	
}
