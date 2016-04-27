/**
 * @author Mat Groves
 */


AlienSwarm = function()
{
	
	PIXI.DisplayObjectContainer.call(this);
	this.pool = new GAME.GameObjectPool(MiniAlien);
	this.aliens = [];
	this.count =0;
	this.focalLength = 300;
}

AlienSwarm.data = [546.7,73.9,-89.21058654785156,537.7,73.2,-90.30949401855469,526.9,72.45,-92.0457763671875,514.4,72,-94.03938293457031,500.15,71.85,-96.29374694824219,484.05,72.5,-98.8055419921875,466.15,73.85,-101.76046752929688,446.75,76.45,-104.57228088378906,425.85,80.6,-107.06285095214844,403.35,86,-109.7996826171875,379.4,93,-112.77784729003906,354.25,101.75,-115.80471801757813,328.3,113.15,-117.82106018066406,301.35,126.5,-118.09934997558594,272.9,140.8,-118.57345581054688,242.95,155.9,-119.05201721191406,212,173,-117.57157897949219,179.1,190,-115.55903625488281,143.95,206.55,-113.33518981933594,106.5,222.3,-111.31788635253906,66.9,237.15,-109.30671691894531,25.05,250.95,-107.27114868164063,-18.95,263.8,-105.0250244140625,-65.1,275.35,-102.56999206542969,-113.3,285.5,-99.53318786621094,-163.9,293.2,-96.04573059082031,-216.5,297.25,-93.25749206542969,-271.05,298.25,-91.54270935058594,-327.4,297.6,-89.95454406738281,-385.35,296.35,-85.22276306152344,-444.8,289.4,-81.22264099121094,-505.2,277.8,-77.74102783203125,-567.8,261.5,-73.7298583984375,-630.3,238.55,-72.64358520507813,559.3,75.5,-87.13829040527344]

AlienSwarm.constructor = AlienSwarm;
AlienSwarm.prototype =  Object.create( PIXI.DisplayObjectContainer.prototype );

AlienSwarm.prototype.updateTransform = function()
{
	if(!this.visible)return;
	
	
	PIXI.DisplayObjectContainer.prototype.updateTransform.call( this );
	
	this.count++;
	
//	this.rotation = Math.PI *-0.15 
///	this.position.x = 100;
	//this.position.y = 1000;
	//console.log(camera.y);
	if(this.count > 5 && camera.y < 408 && height > 900)
	{
		//	if(this.aliens.length < 30  )
		this.count =0
		var alien = this.pool.getObject();
		this.addChild(alien);
		this.aliens.push(alien);
		alien.scale.x = alien.scale.y = 1;
		alien.position.x = width;
		alien.count = 0;
		//alien.speed.x = -1;
	}
	
	var len = (AlienSwarm.data.length / 3) - 2;
	var scaly = width/1024;
	this.position.x = width/2// - 1024/2
	
	
	for (var i=0; i < this.aliens.length; i++) 
	{
		
		var alien = this.aliens[i];
		
		alien.count += alien.speed
		var index = len * alien.count;
		//index *= 3;
		
		var frameindex = index;
		var lowIndex = Math.floor(frameindex);
		var highIndex = Math.ceil(frameindex);

		
		var rotation = AlienSwarm.data[index + 2];
		
		var ratio = frameindex - lowIndex;
		
		// x pos
		var positionX1 =   AlienSwarm.data[lowIndex * 3];
		var positionX2 =   AlienSwarm.data[highIndex * 3];
		
		var interX = positionX1 + (positionX2 - positionX1) * ratio;
		
		var rotation1 =  AlienSwarm.data[lowIndex * 3 + 2];
		var rotation2 =  AlienSwarm.data[highIndex * 3 + 2];
		
		interRotation = rotation1 + (rotation2 - rotation1) * ratio;
		
		
		// y pos
		
		var positionY1 =   AlienSwarm.data[lowIndex * 3 + 1];
		var positionY2 =   AlienSwarm.data[highIndex * 3 + 1];
		
		var interY = positionY1 + (positionY2 - positionY1) * ratio;

		var scaleRatio = this.focalLength/(this.focalLength + alien.z);
		
		var size = 0.1 + alien.count * 2
		alien.scale.x = alien.scale.y = scaleRatio * size;
		
		
		alien.position.x = (interX + alien.offset) * scaly//* scaleRatio;
		alien.position.y = (interY + alien.offset) //* scaly;
		alien.rotation =  interRotation * (Math.PI / 180) + Math.PI/2;
		
		if(alien.count >=1)
		{
			this.removeChild(alien);
			this.aliens.splice(i,1);
			this.pool.returnObject(alien)
		}
	};
	
	
}

AlienSwarm.prototype.resize = function(w, h)
{
	this.width = w;
	this.div.style.width = w +"px";
}

MiniAlien = function()
{
	PIXI.Sprite.call(this, PIXI.Texture.fromFrame("alienSwarm_top.png"));
	this.anchor.x = 0.5//.15;
	this.anchor.y =  0.9;
	this.home = new PIXI.Point(0, Math.random() * 30);
	this.speed = 0.007+ Math.random() * 0.001//new PIXI.Point(1 + Math.random() * 3);
	this.rotation = Math.PI/2;
	this.power = Math.random() * 100;
	this.freq = Math.random() * 0.03;
	this.offset = Math.random() * 100;
	this.z = Math.random() * 200;
	this.count = 0;
}


MiniAlien.constructor = MiniAlien;
MiniAlien.prototype = Object.create( PIXI.Sprite.prototype );

