/**
 * @author Mat Groves
 */
var PIXI = PIXI || {};

ScaleView = function(data)
{
	this.data = data;
	this.positionScale = new PIXI.Point(1,1);
	
	
	var resizeMap = {}
	
	var count = 0;
	
	for(var i in this.data)
	{
		var sprite
		var id = this.data[i].view//imageMap[];
		
		if(id)
		{
		//	console.log(imageMap[i]);
			sprite = PIXI.Sprite.fromFrame(id + ".png")
		}
		else
		{
			sprite = PIXI.Sprite.fromImage("/img/smoke.png")
		}
			
		
		sprite.anchor.x = sprite.anchor.y = 0.5;
		this.data[i].sprite = sprite;
		this.data[i].resize = resizeMap[this.data[i].view]
		this.data[i].positionScale = new PIXI.Point(1,1);
		
		stage.addChild(sprite)//, this.data[i].depth);
	}
}


ScaleView.constructor = ScaleView;


ScaleView.prototype.updatePosition = function(position)
{
	if(position < 0)position = 0;
	if(position > 455)position = 455;
	
	for(var i in this.data)
	{
		var data = this.data[i];
	
		
		if(position >= data.startFrame && position < data.endFrame-1)
		{
			
			data.sprite.visible = true;
			//data.sprite.alpha  =0.5;
			var frameindex = position-data.startFrame;
			var lowIndex = Math.floor(frameindex);
			var highIndex = Math.ceil(frameindex);
			
			var ratio = frameindex - lowIndex;
			
			// x pos
			var positionX1 =  data.position[lowIndex * 2];
			var positionX2 =  data.position[highIndex * 2];
			
			var interX = positionX1 + (positionX2 - positionX1) * ratio;
			
			// y pos
			
			var positionY1 =  data.position[lowIndex * 2 + 1];
			var positionY2 =  data.position[highIndex * 2 + 1];
			
			var interY = positionY1 + (positionY2 - positionY1) * ratio;
			
			
			frameindex = Math.round(frameindex);
			
			data.sprite.position.x = interX *this.positionScale.x  + width/2;
			data.sprite.position.y = interY *this.positionScale.y + height/2;
			
			var interScaleX = 1;
			var interScaleY = 1;
			
			if(data.scale)
			{
				var scaleX1 =  data.scale[lowIndex * 2];
				var scaleX2 =  data.scale[highIndex * 2];
				
				interScaleX = scaleX1 + (scaleX2 - scaleX1) * ratio;
				
				var scaleY1 =  data.scale[lowIndex * 2 + 1];
				var scaleY2 =  data.scale[highIndex * 2 + 1];
				
				interScaleY = scaleY1 + (scaleY2 - scaleY1) * ratio;
			}
			
			data.sprite.scale.x = interScaleX * data.positionScale.x;
			data.sprite.scale.y = interScaleY * data.positionScale.y;
			
			var interAlpha = 1;
			
			if(data.alpha)
			{
				var alpha1 =  data.alpha[lowIndex];
				var alpha2 =  data.alpha[highIndex];
				
				
				interAlpha = alpha1 + (alpha2 - alpha1) * ratio;
				
			}
			
			data.sprite.alpha = interAlpha;
			
			var interRotation = 0;
		
			if(data.rotation)
			{
				
				var rotation1 =  data.rotation[lowIndex];
				var rotation2 =  data.rotation[highIndex];
				
				interRotation = rotation1 + (rotation2 - rotation1) * ratio;
				
			}
			
			data.sprite.rotation = interRotation * (Math.PI / 180)
		}
		else
		{
			data.sprite.visible = false;
		}
	}
}


ScaleView.prototype.resize = function(w, h)
{
	var scale = w / 1024;
	scale *= 0.9;
	if(scale > 1)scale = 1;
	this.positionScale.x = 	this.positionScale.y = scale;
	//this.positionScale.y =  h / 768;
	
	//this.rocketView.position.y = height *
	for(var i in this.data)
	{
		var data = this.data[i];
		data.positionScale = this.positionScale;
		if(data.resize == ScrollView.SCALE_FIT) // both!
		{
		}
		else if(data.resize == ScrollView.SCALE_FIT_PRESERVE) // just x
		{
			// smallest??
			data.positionScale.x = data.positionScale.y = this.positionScale.y;
		}
		else if(data.resize == ScrollView.SCALE_X) // just y
		{
			data.positionScale.x = this.positionScale.x;
		}
		else if(data.resize == ScrollView.SCALE_Y) // just y
		{
			data.positionScale.y = this.positionScale.y;
		}
	}
}

