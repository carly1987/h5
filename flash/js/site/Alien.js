/**
 * @author Mat Groves
 */

Alien = function()
{
	Alien.textures = [];
	
	for (var i=0; i < 20; i++) 
	{
		var frameName = "alienAnim_"//25"
		
		var frameId = (i)//*4)
		if(frameId <= 9)frameName += "0";
		frameName += frameId + ".png";
	//	console.log(frameName)
		Alien.textures.push(PIXI.Texture.fromFrame(frameName));
	};	
	
	this.framy = 0;
	PIXI.Sprite.call(this, Alien.textures[0]);
}


Alien.constructor = Alien;
Alien.prototype =  Object.create( PIXI.Sprite.prototype );

Alien.prototype.updateTransform = function()
{
	this.anchor.x = this.anchor.y = 0;
	PIXI.Sprite.prototype.updateTransform.call(this);
	var ypos = this.position.y;
	
	this.framy+= 0.2;
		
	var frame = this.framy//(ypos / height) * 29///Math2.map(ypos, 0, height, 0, 28);
	if(frame < 0)frame= 0;
	if(!frame)frame = 0;
	
	var tex = Alien.textures[Math.round((frame) % 19)];
	
	this.setTexture(tex);
	
	var realFrame = tex.realSize;
	//this.anchor.x = -((realFrame.x - (175*0.5)) / realFrame.w);
	//this.anchor.y = -((realFrame.y - (200*0.5)) / realFrame.h);
	
	
}


Alien.prototype.updateTransformOne = function()
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
	
	this.anchor.x = -((realFrame.x - (175*0.5)) / realFrame.w);
	this.anchor.y = -((realFrame.y - (200*0.5)) / realFrame.h);
	
}

Alien.prototype.updateTransformTwo = function()
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
	
	this.anchor.x = -((realFrame.x - (175*0.5)) / realFrame.w);
	this.anchor.y = -((realFrame.y - (200*0.5)) / realFrame.h);
	
}
