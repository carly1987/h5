/**
 * @author Mat Groves
 */

Menu = function()
{
	PIXI.DisplayObjectContainer.call( this );
	
	this.bg = PIXI.Sprite.fromFrame("navFade.png");
	this.bg.position.x = -160;
	this.addChild(this.bg);
	
	this.blackStrip = PIXI.Sprite.fromFrame("BGslit.png");
	this.blackStrip.anchor.x = 0.5;
	this.addChild(this.blackStrip);
		

	
	this.button1 = new PIXI.Button("nav_homeW.png", "nav_homeG.png");
	this.button2 = new PIXI.Button("nav_playW.png", "nav_playG.png");
	this.button3 = new PIXI.Button("nav_findW.png", "nav_findG.png");
	this.button4 = new PIXI.Button("nav_concW.png", "nav_concG.png");
	
	this.button1.id = 0;
	this.button2.id = 1;
	this.button3.id = 2;
	this.button4.id = 3;
	
	this.addChild(this.button1);
	this.addChild(this.button2);
	this.addChild(this.button3);
	this.addChild(this.button4);
	
	var pad = 60;
	this.button1.position.x = 0;
	this.button2.position.x = 52 + pad 
	this.button3.position.x = 52 + 39 + pad *2 ;
	this.button4.position.x = 52 + 39 + 74 +pad * 3;
	
	
	this.currentButton = this.button1;
	this.button1.select()
	var scope = this;
	
	this.button1.onClicked = function(){
		
		scope.selectButton(this, true)
	}
	
	this.button1.onClicked = function(){
		scope.selectButton(this, true)
	}
	
	this.button2.onClicked = function(){
		scope.selectButton(this, true)
	}
	
	this.button3.onClicked = function(){
		scope.selectButton(this, true)
	}
	
	this.button4.onClicked = function(){
		scope.selectButton(this, true)
	}
	
	this.progressBar = PIXI.Sprite.fromImage("/img/progressBar.png");
	
	this.progressBar.position.x = 37;
	this.addChild(this.progressBar);
	
	var positions = [-213.5 , -110.5 , 6.5 , 160.5];
	
	for (var i=0; i < positions.length; i++) {
	 	var arrow =  PIXI.Sprite.fromFrame("navArrow.png");
		this.addChild(arrow);
		arrow.anchor.x = 0.5;
		arrow.anchor.y = 0.5;
		arrow.position.x = positions[i]  + 213.5 + 37;
		arrow.position.y = 4
	};
	
	
	
}

Menu.constructor = Menu;
Menu.prototype =  Object.create( PIXI.DisplayObjectContainer.prototype );


Menu.prototype.selectById = function(id)
{
	if(id  == 0)
	{
		this.selectButton(this.button1);
	}
	else if(id  == 1)
	{
		this.selectButton(this.button2);
	}
	else if(id  == 2)
	{
		this.selectButton(this.button3);
	}
	else if(id  == 3)
	{
		this.selectButton(this.button4);
	}
}

Menu.prototype.selectButton = function(button, doCallback)
{
	if(this.currentButton == button)return;
	
	this.currentButton.deselect();
	this.currentButton = button;
	this.currentButton.select();
	
	if(doCallback)this.onMenuPressed(button.id);
}

Menu.prototype.updateProgress = function(frame)
{
	// 0 -- 660
	// first.. where are we?
	// 
	
	var index = 0;
	
	for (var i=0; i < position.length; i++) 
	{
		if(frame > position[i])
		{
			index = i//position[i];
		}
	};
	
	
	var indexRatio = frame - position[index];

	var total = position[index + 1] -  position[index] ;
	
	var totalMap =  positionReal[index + 1] - positionReal[index];
	
	
	var mappedRatio = (indexRatio/total) * totalMap;

	//	console.log(frame)//index + "  :  " + indexRatio);
	
	//if(index > 0)
	if(index < 3)
	{
		this.progressBar.scale.x = (positionReal[index] + mappedRatio)/660;//* //= progressTrack[Math.round(frame) * 2];
	}
	else
	{
		this.progressBar.scale.x = 1
	}
}

var positionReal = [0, 181, 387, 649];
var position =     [0, 386, 553, 649];
//var sectionLandPositions = [0, 376, 627,1224];

Menu.prototype.resize = function(w, h)
{
	this.blackStrip.width = w * 1.5;
//	this.blackStrip.position.x = -w/2
	this.position.x = w/2 -240;
}
