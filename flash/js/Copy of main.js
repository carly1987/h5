
$(document).ready(onReady)

$(window).resize(onResize)
window.onorientationchange = onResize;

var pixi;
var stage;
var camera = new PIXI.Point();
var items = [];
var stats;
var sections;
var height;
var clouds;

var space;
var earthHigh;

function init()
{
	//pixi = new PIXI.DOMRenderer();//
	pixi = PIXI.autoDetectRenderer();
	document.body.appendChild(pixi.view);
	
	stage = new PIXI.Stage();
	
	pixi.view.className = "pixi"
	
	requestAnimFrame(update);
	
	space = PIXI.Sprite.fromImage("/img/space_BG.jpg");
	ScrollItem.call(space,)
	
	earthTop = PIXI.Sprite.fromImage("/img/horizon.png");
	ScrollItem.call(earthTop)
	
	earthHigh = new PIXI.DisplayObjectContainer();
	
	var earthCurve = PIXI.Sprite.fromImage("/img/earth_BG_top.png");
	var earthImage = PIXI.Sprite.fromImage("/img/earth_BG.jpg");
	
	earthHigh.addChild(earthCurve);
	earthHigh.addChild(earthImage);
	earthImage.position.y = 34;
	ScrollItem.call(earthHigh)
	
	
	stage.addChild(space);
	stage.addChild(earthHigh);
	stage.addChild(earthTop);
	var texture = PIXI.Texture.fromImage("/img/balloon3.png");
	
	for (var i=0; i < 1; i++) {
		
	 	var sprite = new PIXI.Sprite(texture);
	 	stage.addChild(sprite);
	 	makeScrollable.call(sprite);
	 	sprite.position.x = Math.random() * 1000;
	 	sprite.position.y = i / 100 * 10000;
	 	sprite.depth = Math.random();
	 	items.push(sprite);
	};
	
	
	sections = [];
	//sections[0] = PIXI.Sprite.fromImage("/img/section1.png");
	//sections[1] = PIXI.Sprite.fromImage("/img/section2.png");
	//sections[2] = PIXI.Sprite.fromImage("/img/section3.png");
	
	for (var i=0; i < sections.length; i++) 
	{
		sections[i].anchor.x = 0.5;
		makeScrollable.call(sections[i]);
		stage.addChild(sections[i]);
	};	
	
	clouds = new Clouds();
	//stage.addChild(clouds);
	// stats!
	stats = new Stats();
	document.body.appendChild( stats.domElement );
	stats.domElement.style.position = "fixed";
	stats.domElement.style.top = "0px";
	
}

function update()
{
	stats.begin();
	clouds.update();
	// TODO ipad mode will have to be a little different
	camera.y = window.pageYOffset * 0.05;
	
	//items[2]
	
	//console.log(camera.y);
	for (var i=0; i < sections.length; i++) 
	{
		var section = sections[i];
		section.position.y = height/2 - 600/2 + height * i;
	};
	
	
	pixi.render(stage);
	requestAnimFrame(update);	
	stats.end();
	
}

function onReady()
{
	init();
	onResize();
	
	
	
}


function onResize()
{
	pixi.resize(1024, 768);
	width = 1024;
	height = 768;
	return;
	width = $(window).width(); 
	height = $(window).height(); 
	
	var pixiWidth = width// > 1500 ? 1500 : width;
	
	document.body.style.height = height * 2 + "px";
	pixi.resize(pixiWidth, height);
	pixi.view.style.left = width/2 - pixiWidth/2 + "px"
	for (var i=0; i < sections.length; i++) 
	{
		var section = sections[i];
		section.position.x = pixiWidth/2;
	};
	
	space.width = pixiWidth;
	space.height = height;
	
	earthTop.width = pixiWidth;
	earthTop.scale.y = pixiWidth/1024;
	earthTop.anchor.y = 1;
	earthTop.position.y = height;

	earthHigh.position.y = height;
	earthHigh.width = pixiWidth;
	earthHigh.height = height;
	
	earthHigh.position.y = height;
}

function makeScrollable(zIndex)
{
	if(!zIndex)zIndex = 1;
	
	this.zIndex = zIndex
	
	// TODO OPTIMIZE THIS!! with dirty
	this.updateTransform = function()
	{
		if(this.rotation != this.rotationCache)
		{
			this.rotationCach = this.rotation;
			this._sr =  Math.sin(this.rotation);
			this._cr =  Math.cos(this.rotation);
		}	
			
		this.localTransform[0] = this._cr * this.scale.x;
		this.localTransform[1] = -this._sr * this.scale.y
		this.localTransform[3] = this._sr * this.scale.x;
		this.localTransform[4] = this._cr * this.scale.y;
		
			///AAARR GETTER SETTTER!
		
		this.localTransform[2] = this.position.x - camera.x;
		this.localTransform[5] = ((this.position.y - camera.y - height/2) * zIndex) + height/2;
		
		
		// TODO optimize?
		mat3.multiply(this.localTransform, this.parent.worldTransform, this.worldTransform);
		this.worldAlpha = this.alpha * this.parent.worldAlpha;
		
		for(var i=0,j=this.children.length; i<j; i++)
		{
			this.children[i].updateTransform();	
		}
	}		
}