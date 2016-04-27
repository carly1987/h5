

MiniClouds = function()
{
	PIXI.DisplayObjectContainer.call(this);
	
	this.particals = [];
	//this.particalPool = new GAME.GameObjectPool(ParticalDust);
	this.max = HIGH ? 10 : 5//GAME.HIGH_MODE ? 100 : 10;
	this.count = 0;
	
	this.shadow = new PIXI.DisplayObjectContainer();
	this.addChild(this.shadow);
	
	for (var i=0; i < this.max; i++) 
	{
		var partical = new MiniCloud()//new this.particalPool.getObject();
			
		partical.home.y = Math.random() * height - height/2;
		partical.home.x = Math.random() * width - width/2//* 110640;
		
		partical.speed = new PIXI.Point(Math.random() * 1,0)//Math.random()*0.5, 0);
		this.particals.push(partical);
		
		this.addChild(partical);
		this.shadow.addChild(partical.shadow);
	};
			
	
		
	this.focalLength = 300;
}

// constructor
MiniClouds.constructor = MiniClouds;
MiniClouds.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

MiniClouds.prototype.update = function()
{
	//PIXI.Rope.prototype.updateTransform.call(this);
	var scaleRatio2 = this.focalLength/(this.focalLength+220);
		
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical =  this.particals[i];
		var scaleRatio = this.focalLength/(this.focalLength + partical.z);
		
		partical.scale.x = partical.scale.y = scaleRatio * 1.0;
		partical.shadow.scale.x = partical.shadow.scale.y = scaleRatio2 * 1.5;
		
		partical.home.x += partical.speed.x;
		partical.home.y += partical.speed.y;
		
		//if(partical.home.x > width/2)partical.home.x -= width;
		
		var h = height / scaleRatio2 + 200;
		var ypos = partical.home.y - camera.y +  h/2;
		ypos %= h;
		if(ypos < 0)ypos +=  h;
		ypos -=  h /2;
		
		var w = width / scaleRatio2 + 200;
		var xpos = partical.home.x +  w/2;
		xpos %= w;
		if(xpos < 0)xpos +=  w;
		xpos -=  w /2;
		
		partical.position.x = xpos * scaleRatio + width/2;//  * 1.5;
		partical.position.y = ypos * scaleRatio + height/2;
		
		partical.shadow.position.x = xpos * scaleRatio2 + width/2;//  * 1.5;
		partical.shadow.position.y = ypos * scaleRatio2 + height/2;
	
	};	
}

MiniClouds.prototype.resize = function(w, h)
{
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical = this.particals[i];
		partical.position.x = partical.home.x = Math.random() * 110640;
	}
}

MiniCloud = function()
{
		MiniCloud.globalCount++;
		PIXI.Sprite.call(this, PIXI.Texture.fromFrame(MiniCloud.frames[MiniCloud.globalCount % 3]));
	
		this.anchor.x = 0.5;
		this.anchor.y = 0.5;
		this.z = Math.random() * 100;
		this.rotation = Math.random() * Math.PI * 2;
		//this.scale.x = this.scale.y = this.z * 0.2 ;
		this.home = new PIXI.Point();
		
		this.shadow = PIXI.Sprite.fromFrame(MiniCloud.framesShadow[MiniCloud.globalCount % 3]);
		this.shadow.anchor.x = 0.5;
		this.shadow.anchor.y = 0.5;
		this.shadow.alpha = 0.5
		this.shadow.rotation = this.rotation;
}

MiniCloud.globalCount = 0;
MiniCloud.frames = ["cloud_01.png", "cloud_05.png", "cloud_06.png"];
MiniCloud.framesShadow = ["cloud1_shadow.png", "cloud5_shadow.png", "cloud6_shadow.png"];

MiniCloud.constructor = MiniCloud;
MiniCloud.prototype = Object.create( PIXI.Sprite.prototype );


