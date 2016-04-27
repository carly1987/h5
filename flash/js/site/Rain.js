

Rain = function()
{
	PIXI.DisplayObjectContainer.call(this);
	this.pool = new GAME.GameObjectPool(ParticalRain);
	
	this.particals = [];
	this.mode = 0;
	this.count = 0;
}

// constructor
Rain.constructor = Rain;
Rain.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

Rain.prototype.update = function()
{
	if(this.mode == 0)
	{
		this.count += 1
		
	//	if(this.count > 1)
	//	{
		
		for (var i=0; i < 5; i++)
		{
		
			if(this.particals.length > 100)return;
			
			this.count = 0;
			var partical = this.pool.getObject();
			this.particals.push(partical);
			this.addChild(partical);
			partical.alpha = 1 * 0.5;
			partical.life = 20 + Math.random() * 50;
			partical.position.x = Math.random() * width;
			partical.position.y = Math.random() * height;
		};
	//	} 
	}
	else if(this.mode == 1)
	{
		for (var i=0; i < this.particals.length; i++) 
		{
		  var partical = this.particals[i];
		  partical.life--;
		  
		  if(partical.life < 50)
		  {
			partical.alpha = (partical.life/50) * 0.5;			
			if(partical.life <= 0)
			{
				this.pool.returnObject(partical);
				this.removeChild(partical);
				this.particals.splice(i, 1);
				i--;
			}
		  }
		};
	}
	else if(this.mode == 2)
	{
		
	}
}

Rain.prototype.resize = function(w, h)
{
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical = this.particals[i];
		partical.position.x = partical.home.x = Math.random() * 110640;
	}
}

ParticalRain= function()
{
	
	PIXI.Sprite.call(this, PIXI.Texture.fromFrame(ParticalRain.frames[ParticalRain.globalCount % 4]));
	ParticalRain.globalCount++;

	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	//this.scale.x = this.scale.y = this.z * 0.2 ;
}

ParticalRain.globalCount = 0;
ParticalRain.frames = ["dropplet_01.png", "dropplet_02.png","dropplet_03.png", "dropplet_04.png"];

ParticalRain.constructor = ParticalRain;
ParticalRain.prototype = Object.create( PIXI.Sprite.prototype );


