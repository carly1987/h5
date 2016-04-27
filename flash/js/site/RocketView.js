/**
 * @author Mat Groves
 */
var PIXI = PIXI || {};

RocketView = function()
{
	this.rockets = rockets.rockets;
	this.dust = rockets.dust;
	
	this.positionScale = new PIXI.Point(1,1);
	
	this.rocketView = new PIXI.DisplayObjectContainer();
	
	stage.addChildAt(this.rocketView, 20)
	
	var textureIds = ["missileCloud01.png", "missileCloud02.png", "missileCloud03.png"];
	var count = 0;
	
	
	for(var i in this.rockets)
	{
		var sprite = PIXI.Sprite.fromFrame("phoenix.png")
		sprite.anchor.x = sprite.anchor.y = 0.5;
		sprite.fire = PIXI.Sprite.fromFrame("phoenixPlume.png")
		sprite.addChild(	sprite.fire);
		sprite.fire.anchor.x = 0.5;
		sprite.fire.position.y = 30;
		sprite.fire.rotation = 0.0001
		sprite.anchor.y = 0.6;
		
		this.rockets[i].sprite = sprite;
		this.rockets[i].positionScale = new PIXI.Point(1,1);
		
		this.rocketView.addChild(sprite);
	}
	
	this.rockets[i].sprite.id = "rocket";
	
	for(var i in this.dust)
	{
		var sprite = PIXI.Sprite.fromFrame(textureIds[count % 3]);
		count++;
		sprite.anchor.x = sprite.anchor.y = 0.5;
		this.dust[i].sprite = sprite;
		this.dust[i].random = Math.random() * Math.PI * 2;
		this.dust[i].randomSign = Math2.randomPlusMinus();
		
		this.dust[i].positionScale = new PIXI.Point(1,1);
		//this.dust[i].position[4] = 0;
		this.dust[i].position[3] = 0;
		this.rocketView.addChild(sprite);
	}
}

RocketView.constructor = ScrollView;

RocketView.prototype.updatePosition = function(position)
{
	
	position -= 277;
	position *= 3//1.75// * 2;
	
	var offset = 150;
	
	
	if(position < 0 || position > 100)
	{
		this.rocketView.visible = false;
		return;
	}
	else
	{
		this.rocketView.visible = true;
	}
	
	if(position < 0)position = 0;
	if(position > 390)position = 390;
	
	var first = true;
	for(var i in this.rockets)
	{
		var data = this.rockets[i];
	//	console.log(data.sprite.visible)
		data.sprite.fire.alpha = 0.7+ Math.random() * 0.3;
		
		if(position >= data.startFrame && position < data.endFrame)
		{
			
			data.sprite.visible = true;
	//		data.sprite.alpha  = 1;
			var frameindex = position-data.startFrame - 1;
			var lowIndex = Math.floor(frameindex);
			var highIndex = Math.ceil(frameindex);
			
			var ratio = frameindex - lowIndex;
			
			// x pos
			var positionX1 =  data.position[lowIndex * 3];
			var positionX2 =  data.position[highIndex * 3];
			
			var interX = positionX1 + (positionX2 - positionX1) * ratio;
			
			var positionY1 =  data.position[lowIndex * 3 + 1];
			var positionY2 =  data.position[highIndex * 3 + 1];
			
			var interY = positionY1 + (positionY2 - positionY1) * ratio;
			
			frameindex = Math.round(frameindex);
			
			
			data.sprite.position.x = interX * this.positionScale.x  + width/2;
			data.sprite.position.y = (interY + offset) * this.positionScale.y + height/2;
			data.sprite.scale.x = data.sprite.scale.y =  0.7 * this.sizeScale;
			var rotation1 =  data.position[lowIndex * 3 + 2];
			var rotation2 =  data.position[highIndex * 3 + 2];
			var interRotation = rotation1 + (rotation2 - rotation1) * ratio;
			data.sprite.rotation = (Math.PI - interRotation)// * (Math.PI/180)// * data.positionScale.x;
		
			
			
		}
		else
		{
			data.sprite.visible = false;
		}
	}
	
	for(var i in this.dust)
	{
		var data = this.dust[i];
		
		if(position >= data.startFrame && position < data.endFrame)
		{
			
			data.sprite.visible = true;
			data.sprite.alpha  = 1;
			var frameindex = position-data.startFrame;
			var lowIndex = Math.floor(frameindex);
			var highIndex = Math.ceil(frameindex);
			
			var ratio = frameindex - lowIndex;
			
			// x pos
			var positionX1 =  data.position[lowIndex * 5];
			var positionX2 =  data.position[highIndex * 5];
			
			var interX = positionX1 + (positionX2 - positionX1) * ratio;
			
			var positionY1 =  data.position[lowIndex * 5 + 1];
			var positionY2 =  data.position[highIndex * 5 + 1];
			
			var interY = positionY1 + (positionY2 - positionY1) * ratio;
			
			frameindex = Math.round(frameindex);
			
			data.sprite.position.x = interX *this.positionScale.x  + width/2;
			data.sprite.position.y =  (interY + offset)  *this.positionScale.y + height/2;
			
			var rotation1 =  data.position[lowIndex * 5 + 2];
			var rotation2 =  data.position[highIndex * 5 + 2];
			var interRotation = rotation1 + (rotation2 - rotation1) * ratio;
			data.sprite.rotation = (interRotation * (Math.PI/180) + data.random) * 2 * data.randomSign // * data.positionScale.x;
		
		
			var scaleX1 =  data.position[lowIndex * 5 + 3];
			var scaleX2 =  data.position[highIndex * 5 + 3];
			var interScaleX = scaleX1 + (scaleX2 - scaleX1) * ratio;
			data.sprite.scale.x = data.sprite.scale.y = interScaleX * 4 * this.sizeScale;// * 0.7
		
			var alpha1 =  data.position[lowIndex * 5 + 4];
			var alpha2 =  data.position[highIndex * 5 + 4];
			var interAlpha = alpha1 + (alpha2 - alpha1) * ratio;
			data.sprite.alpha = interAlpha// * data.positionScale.x;
	
		}
		else
		{
			data.sprite.visible = false;
		}
	}
}

RocketView.prototype.resize = function(w, h)
{
	this.positionScale.x =  w / 1024 ;
	this.positionScale.y =  h / 768;
	this.sizeScale = h / 768;
	if(this.sizeScale > 1)this.sizeScale = 1;
	if(this.positionScale.x > 1)this.positionScale.x = 1;
	if(this.positionScale.y > 1)this.positionScale.y = 1;

//	this.rocketView.position.y = h/4
	for(var i in this.data)
	{
		var data = this.data[i];
		if(data.resize)
		{
			data.positionScale = this.positionScale;
		}
	}
}
