/**
 * @author Mat Groves
 */

Fighter = function()
{
	Fighter.textures = [];
	
	for (var i=0; i < 29; i++) 
	{
		var frameName = "rollSequence00"//25"
		if(i < 9)frameName += "0";
		frameName += (i+1) + ".png";
		
		Fighter.textures.push(PIXI.Texture.fromFrame(frameName));
	};	
	
	PIXI.Sprite.call(this, Fighter.textures[0]);
	
	this.afterburner = PIXI.Sprite.fromFrame("afterburner.png");
	this.addChild(this.afterburner);
	this.afterburner.rotation = 0.0001;
	this.afterburner.anchor.x = 0.5;
	this.afterburner.position.y = 130;
	this.afterburner.position.x = 1;
	this.afterburner.blendMode = PIXI.blendModes.SCREEN;
}


Fighter.constructor = Fighter;
Fighter.prototype =  Object.create( PIXI.Sprite.prototype );

Fighter.prototype.updateTransform = function()
{
	this.anchor.x = this.anchor.y = 0;
	PIXI.Sprite.prototype.updateTransform.call(this);
	var ypos = this.position.y;
	
	var frame = (ypos / height) * 29///Math2.map(ypos, 0, height, 0, 28);
	if(frame < 0)frame= 0;
	if(!frame)frame = 0;
	
	var tex = Fighter.textures[Math.round((frame + 10) % 28)];
	
	this.setTexture(tex);
	
	var realFrame = tex.realSize;
	this.afterburner.alpha = 0.7 + Math.random() * 0.3; 
	this.anchor.x = -((realFrame.x - (175*0.5)) / realFrame.w);
	this.anchor.y = -((realFrame.y - (200*0.5)) / realFrame.h);
	
}


Fighter.prototype.updateTransformOne = function()
{
	this.anchor.x = this.anchor.y = 0;
	PIXI.Sprite.prototype.updateTransform.call(this);
	var ypos = this.position.y;
	
	var frame = (ypos / height) * 29///Math2.map(ypos, 0, height, 0, 28);
	if(frame < 0)frame= 0;
	if(!frame)frame = 0;
	
	if(frame > 15)frame = 15;	
	var tex = Fighter.textures[Math.round((frame + 14) % 28)];
	this.setTexture(tex);
	
	var realFrame = tex.realSize;
	
	this.afterburner.alpha = 0.7 + Math.random() * 0.3; 
	
	this.anchor.x = -((realFrame.x - (175*0.5)) / realFrame.w);
	this.anchor.y = -((realFrame.y - (200*0.5)) / realFrame.h);
	
}

Fighter.prototype.updateTransformTwo = function()
{
	this.anchor.x = this.anchor.y = 0;
	PIXI.Sprite.prototype.updateTransform.call(this);
	var ypos = this.position.y;
	
	var frame = (ypos / height) * 29///Math2.map(ypos, 0, height, 0, 28);
	if(frame < 0)frame= 0;
	if(!frame)frame = 0;
	
	if(frame > 15)frame = 15;	
	var tex = Fighter.textures[1];
	this.setTexture(tex);
	
	var realFrame = tex.realSize;
	
	this.afterburner.alpha = 0.7 + Math.random() * 0.3; 

	this.anchor.x = -((realFrame.x - (175*0.5)) / realFrame.w);
	this.anchor.y = -((realFrame.y - (200*0.5)) / realFrame.h);
	
}
