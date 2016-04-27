/**
 * @author Mat Groves http://matgroves.com/
 */
var PIXI = PIXI || {};


PIXI.StressTest = function()
{
	this.stage = new PIXI.Stage();
	this.renderer = PIXI.autoDetectRenderer(500, 500);
	document.body.appendChild(this.renderer.view);
	
	//
	this.duration = 5;
	
	var scope = this;
	this.texture = PIXI.Texture.fromImage("/img/testImage.png");
	this.texture.baseTexture.addEventListener( 'loaded', function(){ scope.begin()} );
	
	
	this.frameRate = [];
			
}

// constructor
PIXI.StressTest.constructor = PIXI.StressTest;

PIXI.StressTest.prototype.begin = function()
{
	this.testSprites = [];
	for (var i=0; i < 300; i++) 
	{
		var bunny = new PIXI.Sprite(this.texture);
		bunny.anchor.x = 0.5;
		bunny.anchor.y = 0.5;
		this.stage.addChild(bunny);
		bunny.position.x = 50 + Math.random() * 400; 
		bunny.position.y = 50 + Math.random() * 400; 
		
		this.testSprites.push(bunny);
	};
	
	this.startTime = Date.now();
	this.lastTime = Date.now();
	var scope = this
	
	requestAnimFrame(function(){scope.update()});
}

PIXI.StressTest.prototype.update = function()
{
	var currentTime = Date.now();
	
	for (var i=0; i < this.testSprites.length; i++) {
	  this.testSprites[i].rotation += 0.3;
	};
	
	this.renderer.render(this.stage);
	
	var diff = currentTime - this.lastTime;
	diff *= 0.06;
	
	//diff *= 60;
	
	this.frameRate.push(diff);
	
	this.lastTime = currentTime;
	
	var elapsedTime = currentTime - this.startTime;
	
	if(elapsedTime < this.duration * 1000)
	{
		var scope = this
		requestAnimFrame(function(){scope.update()});
		
	}
	else
	{
		// end!
		console.log(this.frameRate);
		console.log(this.frameRate.length/5);
		alert(this.frameRate.length/5)
	}
	
}


