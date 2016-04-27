

PixiDust = function()
{
	PIXI.DisplayObjectContainer.call(this);
	
	this.particals = [];
	//this.particalPool = new GAME.GameObjectPool(ParticalDust);
	this.max = HIGH ? 50 : 5//GAME.HIGH_MODE ? 100 : 10;
	this.count = 0;
	
	for (var i=0; i < this.max; i++) 
	{
		var partical = new ParticalDust()//new this.particalPool.getObject();
			
		partical.home.y = Math.random() * -height;
		partical.position.x = partical.home.x = Math.random() * 110640;
		partical.speed = new PIXI.Point((Math.random() -0.5)*0.1, (Math.random() -1) *0.2 );
		this.particals.push(partical);
		
		this.addChild(partical);
	};
			
			
	this.focalLength = 150;
}

// constructor
PixiDust.constructor = PixiDust;
PixiDust.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

PixiDust.prototype.update = function()
{
	//PIXI.Rope.prototype.updateTransform.call(this);
	
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical =  this.particals[i];
		var scaleRatio = this.focalLength/(this.focalLength + partical.z);
		
		partical.scale.x = partical.scale.y = scaleRatio * 1.0;
		
		partical.position.x+= partical.speed.x;
		partical.home.y += partical.speed.y;
		partical.position.y = (partical.home.y - camera.y * 10 ) * scaleRatio  * 1.5;
		
		partical.position.y %= height;
		if(partical.position.y < 0)partical.position.y += height;
		
		partical.position.x %= width;
		if(partical.position.x < 0)partical.position.x +=width;
		
		partical.rotation += partical.rotationSpeed
		
	};	
}

PixiDust.prototype.resize = function(w, h)
{
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical = this.particals[i];
		partical.position.x = partical.home.x = Math.random() * 110640;
	}
}

ParticalDust = function()
{
	
	ParticalDust.debrieCount++;
	
	//if(ParticalDust.debrieCount ==1)
	{
		ParticalDust.globalCount++;
		ParticalDust.debrieCount = 0;
		PIXI.Sprite.call(this, PIXI.Texture.fromFrame(ParticalDust.frames[ParticalDust.globalCount % 4]));
	
		this.anchor.x = 0.5;
		this.anchor.y = 0.5;
		this.z = Math.random() * 500;
		this.rotation = Math.random() * Math.PI * 2;
		this.rotationSpeed =(Math.random()-0.5) * 0.01;
		//this.scale.x = this.scale.y = this.z * 0.2 ;
		this.home = new PIXI.Point();
	}
/*	else
	{
		
		PIXI.Sprite.call(this, PIXI.Texture.fromFrame(ParticalDust.framesRocks[ParticalDust.globalCount % 5]));
	
		this.anchor.x = 0.5;
		this.anchor.y = 0.5;
		this.z = Math.random() * 500;
		this.rotation = Math.random() * Math.PI * 2;
		this.rotationSpeed =(Math.random()-0.5) * 0.002;
		//this.scale.x = this.scale.y = this.z * 0.2 ;
		this.home = new PIXI.Point();
		this.visible = false;
	}
	*/
	
	this.alpha = 0.5 + Math.random() * 0.5;
}

ParticalDust.globalCount = 0;
ParticalDust.debrieCount = 0;
ParticalDust.framesRocks = ["rock01.png", "rock02.png","rock03.png", "rock04.png", "beam.png"];
ParticalDust.frames = ["spacedust.png", "spacedust.png", "spacedust.png", "spacedust.png"];

ParticalDust.constructor = ParticalDust;
ParticalDust.prototype = Object.create( PIXI.Sprite.prototype );


