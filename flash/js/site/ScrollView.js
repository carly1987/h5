/**
 * @author Mat Groves
 */
var PIXI = PIXI || {};

ScrollView = function(data)
{
	this.data = data;
	this.positionScale = new PIXI.Point(1,1);
	
	var tex = PIXI.Texture.fromFrame("arrowHint01.png");
	
	this.arrows = new PIXI.MovieClip([tex, tex,  tex,  tex,  tex,  tex,  tex,  tex,  tex,  tex,  tex, 
									  PIXI.Texture.fromFrame("arrowHint02.png"),
									  PIXI.Texture.fromFrame("arrowHint03.png"),
									  PIXI.Texture.fromFrame("arrowHint04.png")]);
	this.arrows.animationSpeed = 0.1;
	this.arrows.play();
	
	var earth = new PIXI.DisplayObjectContainer();
	earth.anchor = new PIXI.Point();
	var earthCurve = PIXI.Sprite.fromFrame("earth_BG_top.png");
	var earthImage = PIXI.Sprite.fromImage("/img/earth_BG.jpg");
	
	earth.addChild(earthCurve);
	earth.addChild(earthImage);
	earthImage.position.x = -512;
	earthImage.position.y = -373;
	
	earthCurve.position.x = -512;
	earthCurve.position.y = -407+1;
	
	this.footerContainer = new PIXI.DisplayObjectContainer();
	
	this.nebulae = new PIXI.DisplayObjectContainer();//
	this.nebulae.nebulaeInner = PIXI.Sprite.fromFrame("nebulae.png");
	this.nebulae.innerInner = new PIXI.DisplayObjectContainer();
	
	this.nebulae.nebulaeInner.anchor.x = 0.5;
	this.nebulae.nebulaeInner.anchor.y = 0.5;
	this.nebulae.innerInner.scale.y = 0.5 * 2;
	this.nebulae.innerInner.scale.x = 1.5 * 2;
	this.nebulae.addChild(	this.nebulae.innerInner )
	this.nebulae.innerInner.addChild(	this.nebulae.nebulaeInner );
	
	this.nebulae.anchor = new PIXI.Point();
	
	this.nebulae.nebulaeInner.blendMode = PIXI.blendModes.SCREEN;
	
	/*
	 * Create play buttons!
	 */
	
	this.playHTML = new PlayButton("html/", true)//PIXI.Sprite.fromImage("/img/playButton.png");
	this.playFlash = new PlayButton("flash/")//PIXI.Sprite.fromImage("/img/playButton.png");
	
	this.playIOS = new IOSButton("flash/")//PIXI.Sprite.fromImage("/img/playButton.png");
	
	/* 
	 * CREATE Swarm
	 */
	
	this.alienSwarm=  new AlienSwarm();
	
	/*
	 * BUILD THE HEAR NAV FLASH
	 */
	this.heartFlash = new PIXI.DisplayObjectContainer();
	var flashWedge = new PIXI.Sprite.fromImage("/img/flashWedge.png");
	var flashBanner = new PIXI.Sprite.fromImage("/img/flashBanner.png");
	var flashText = new PIXI.Sprite.fromFrame("weHeartFlash.png");
	
	flashWedge.anchor.x = 1;
	flashBanner.position.x = -49;
	flashBanner.position.y =  49;
	flashBanner.anchor.x = 1;
	flashBanner.scale.x = 20;
	
	flashText.position.x = - 385 - 49;
	flashText.position.y = 60;
	
	this.heartFlash.banner = flashBanner;
	
	this.heartFlash.addChild(flashWedge);
	this.heartFlash.addChild(flashBanner);
	this.heartFlash.addChild(flashText);
	
	this.heartFlash.position.x = 300;
	this.heartFlash.position.y = 100;
	
	/*
	 * BUILD THE HEAR NAV HTML
	 */
	this.heartHTML = new PIXI.DisplayObjectContainer();
	var htmlWedge = new PIXI.Sprite.fromImage("/img/htmlWedge.png");
	var htmlBanner = new PIXI.Sprite.fromImage("/img/htmlBanner.png");
	var htmlText = new PIXI.Sprite.fromFrame("weHeartHTML.png");
	
	htmlBanner.position.x = 49//-49/2;
	htmlBanner.position.y =  49;
	htmlBanner.anchor.x = 0;
	htmlBanner.scale.x = 20;
	
	htmlText.position.x = 58;
	htmlText.position.y = 60;
	
	this.heartHTML.banner = htmlBanner;
	
	
	this.heartHTML.addChild(htmlWedge);
	this.heartHTML.addChild(htmlBanner);
	this.heartHTML.addChild(htmlText);
	
	this.heartHTML.position.x = 300;
	this.heartHTML.position.y = 100;
	this.conclusion = new Conclusion();
	
	var imageMap = {
		space:"/img/space_BG.jpg",
		intro1:"introCopy_01.png",
		intro2:"introCopy_02.png",
		intro3:"introCopy_03.png",
		intro4:"introCopy_04.png",
		intro5:"introCopy_05.png",
		
		pentBlur01:"pentBlur01.png",
		pentBlur02:"pentBlur02.png",
		pentBlur03:"pentBlur03.png",
		pentBlur04:"pentBlur04.png",
		
		arrowHint01:"arrows",
		moon:"moon.png",
		rainbowFlare:"rainbowFlareFLAT.png",
		titleFlash:"titleFlash.png",
		titleHTML:"titleHTML.png",
		VS:"VS.png",
		CTA_scroll:"CTA_scroll.png",
		alienCurve:"swarm",
		nebulae:"nebulae",
		horizon:"horizon.png",
		whiteline:"/img/whiteline.png",
		flaredisc:"flareDisc.png",
		mainFlare:"mainFlare.png",
		flashDisc_Col:"flashDisc_Col.png",
		flashDisc_W:"flashDisc_W.png",
		htmlDisc_Col:"htmlDisc_Col.png",
		htmlDisc_W:"htmlDisc_W.png",
		screen01:"screeny_01.png",
		screen02:"screeny_02.png",
		screen03:"screeny_03.png",
		mobileIcon:"mobileIcon.png",
		desktopIcon:"desktopIcon.png",
		appDownload:"appDownload.png",
		chooseVersion:"invadersChoose.png",
		playButton:"play",
		VS_small:"VS_small.png",
		USBhead:"USB_head.png",
		
		cloudFade:"/img/cloudFade.png",
		cloud01:"cloud_01.png",
		cloud02:"cloud_02.png",
		cloud03:"cloud_03.png",
		cloud04:"cloud_04.png",
		cloud05:"cloud_05.png",
		cloud06:"cloud_06.png",
		alien:"alien",
		alienSmall:"alien",
		sun:"sun.png",
		earth:"earth",
		afterburner:"afterburner.png",
		jet:"fighter",
		inconclusion:"/img/inconclusion.png",
		heartFlash:"heartFlash",
		heartHTML:"heartHTML",
		richochet:"/img/richochet.png",
		basePanel:"basePanel",
		ground:"/img/groundLevel.jpg"
	}
	
	var resizeMap = {
		space: ScrollView.SCALE_FIT,
		rainbowFlare: ScrollView.SCALE_FIT_PRESERVE,
		alienSmall:ScrollView.SCALE_NONE,
		moon: ScrollView.SCALE_POSITION_Y,
		nebulae: ScrollView.SCALE_FIT_PRESERVE,
		horizon: ScrollView.SCALE_FIT,
		heartFlash: ScrollView.FOOTER,
		heartHTML: ScrollView.FOOTER,
		VS: ScrollView.SCALE_POSITION_Y,
		CTA_scroll: ScrollView.SCALE_NONE,
		arrowHint01:ScrollView.SCALE_POSITION_Y,
		//whiteline: ScrollView.SCALE_Y,
		flaredisc: ScrollView.SCALE_FIT_PRESERVE,
		mainFlare: ScrollView.SCALE_FIT_PRESERVE,
		cloud01: ScrollView.SCALE_FIT_PRESERVE,
		cloud02: ScrollView.SCALE_FIT_PRESERVE,
		cloud03: ScrollView.SCALE_FIT_PRESERVE,
		cloud04: ScrollView.SCALE_FIT_PRESERVE,
		cloud05: ScrollView.SCALE_FIT_PRESERVE,
		cloud06: ScrollView.SCALE_FIT_PRESERVE,
		cloudFade: ScrollView.SCALE_FIT,
		sun: ScrollView.SCALE_FIT_PRESERVE,
		mainFlare: ScrollView.SCALE_FIT_PRESERVE,
		earth: ScrollView.SCALE_FIT,
		afterburner: ScrollView.SCALE_FIT_PRESERVE,
		jet: ScrollView.SCALE_POSITION_Y,
		alien: ScrollView.SCALE_POSITION_Y,
		ground: ScrollView.SCALE_FIT,
		inconclusion:ScrollView.FOOTER,
		richochet:ScrollView.FOOTER,
		basePanel:ScrollView.FOOTER,
		blackBase:ScrollView.FOOTER,
		pentBlur01:ScrollView.SCALE_POSITION,
		pentBlur02:ScrollView.SCALE_POSITION,
		pentBlur03:ScrollView.SCALE_POSITION,
		pentBlur04:ScrollView.SCALE_POSITION
	}
	
	
	
	
	var count = 0;
	var jetCount = 0;
	var alienCount = 0;
	var playCount = 0;
	
	for(var i in this.data)
	{
		
		this.data[i].resize = resizeMap[this.data[i].view];
		if(!this.data[i].resize)this.data[i].resize =  ScrollView.SCALE_NONE;
		this.data[i].positionScale = new PIXI.Point(1,1);
		this.data[i].sizeScale = new PIXI.Point(1,1);
		
		
		var sprite
		var id = imageMap[this.data[i].view];
		
		
		if(id)
		{
		//	console.log(imageMap[i]);
			if(id == "earth")
			{
				sprite = earth;	
			}
			else if(id =="alien")
			{
				sprite = new Alien();//PIXI.Sprite.fromFrame("alien.png")
				if(alienCount < 6)
				{
					this.data[i].resize =  ScrollView.SCALE_NONE;	
				}
				else
				{
					//this.data[i].resize =  ScrollView.SCALE_POSITION
				}
				
				alienCount++;
			}
			else if(id == "fighter")
			{
				sprite = new Fighter();
				
				if(jetCount == 0)
				{
					sprite.updateTransform = sprite.updateTransformOne;
					this.data[i].resize =  ScrollView.SCALE_NONE;
				}
				if(jetCount == 3)
				{
					sprite.updateTransform = sprite.updateTransformTwo;
					this.data[i].resize =  ScrollView.FOOTER;
				}
				
				jetCount++;
				
			}
			else if(id == "nebulae")
			{
				sprite = this.nebulae;
			}
			else if(id == "heartFlash")
			{
				sprite = this.heartFlash;
				sprite.anchor = new PIXI.Point();
			}
			else if(id == "heartHTML")
			{
				sprite = this.heartHTML;
				sprite.anchor = new PIXI.Point();
			}
			else if(id == "basePanel")
			{
				sprite = this.conclusion;
				sprite.anchor = new PIXI.Point();
			}
			else if(id == "swarm")
			{
				sprite = this.alienSwarm;
				sprite.anchor = new PIXI.Point();
			}
			else if(id == "appDownload.png")
			{
				sprite = this.playIOS;
			}
			else if(id == "arrows")
			{
				sprite = this.arrows;
			}
			else if(id == "play")
			{
				if(playCount == 0)
				{
					sprite = this.playFlash;
					
				}
				else
				{
					sprite = this.playHTML;
				}
				
				playCount++;
			}
			else
			{
				try
				{
					sprite = PIXI.Sprite.fromFrame(id);//;imageMap[i]//["Space"]//this.data[i].id ];
				}
				catch(error)
				{
					sprite = PIXI.Sprite.fromImage(id);
				}			
			}
			
		//	if(id == "mainFlare")mainFlare.blendMode = PIXI.blendModes.SCREEN;
		//	else if(id == "flaredisc")mainFlare.blendMode = PIXI.blendModes.SCREEN;
		}
		else
		{
			sprite = PIXI.Sprite.fromImage("sun.png");
			console.log("could'nt find " + this.data[i].view)
		}
		
		//sprite.visible = false;
		sprite.anchor.x = sprite.anchor.y = 0.5;
		
		this.data[i].sprite = sprite;
		sprite.visible = false;
		if(this.data[i].resize == ScrollView.FOOTER)
		{
			this.footerContainer.addChild(sprite)
		}
		else
		{
			stage.addChild(sprite)//, this.data[i].depth);
		}			
	}
	
	stage.addChild(this.footerContainer)
	
	if(HIGH)
	{
		this.rain = new Rain();
		stage.addChild(this.rain);
		
		this.miniClouds = new MiniClouds();
		this.showCache = false;
	}
}


ScrollView.constructor = ScrollView;


ScrollView.prototype.updatePosition = function(position)
{
	if(position < 0)position = 0;
	if(position > 703)position = 703;
	//console.log(position)
	
	if(HIGH)
	{
		this.rain.mode = (position > 480 && position < 517) ? 0 : 1;
		this.rain.update();
		
		var showMini = position > 495;
		
		if(this.showCache != showMini)
		{
			this.showCache = showMini;
			
			if(showMini)
			{
				stage.addChildAt(this.miniClouds, 8);
			}
			else
			{
				stage.removeChild(this.miniClouds);
			}
		}
		
		if(showMini)this.miniClouds.update();
	}

	this.nebulae.nebulaeInner.rotation += 0.001;
	
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
			if(	data.resize == ScrollView.FOOTER)
			{
				data.sprite.position.x = interX //* data.positionScale.x  + width/2;
				data.sprite.position.y = interY  //+ this.h - 728/2 //this.h/2 + (768 /  data.positionScale.y)/2//interY + 768/2 + this.h/2//height/2//(interY) * data.positionScale.y + (768/2) ;
			}
			else
			{
				data.sprite.position.x = interX * data.positionScale.x  + width/2;
				data.sprite.position.y = interY * data.positionScale.y + height/2;
				
			}
			
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
			
			data.sprite.scale.x = interScaleX * data.sizeScale.x;
			data.sprite.scale.y = interScaleY * data.sizeScale.y;
			
			
			var interAlpha = 1;
			
			if(data.alpha)
			{
				var alpha1 =  data.alpha[lowIndex];
				var alpha2 =  data.alpha[highIndex];
				
				
				interAlpha = alpha1 + (alpha2 - alpha1) * ratio;
				
			}
			
			data.sprite.alpha = interAlpha
			
			if(data.rotation)
			{
				
				var rotation1 =  data.rotation[lowIndex];
				var rotation2 =  data.rotation[highIndex];
				
				interRotation = rotation1 + (rotation2 - rotation1) * ratio;
				
				data.sprite.rotation = interRotation * (Math.PI / 180)
			}
		
			//if(data.resize == ScrollView.SCALE_NONE)	
			//{
				//data.sprite.alpha = 0.3;
			//}
		}
		else
		{
			data.sprite.visible = false;
			
		}
	}
}

ScrollView.SCALE_NONE = 0;
ScrollView.SCALE_FIT = 1;
ScrollView.SCALE_FIT_PRESERVE = 2;
ScrollView.SCALE_X = 3;
ScrollView.SCALE_Y = 4;
ScrollView.SCALE_POSITION = 5;
ScrollView.SCALE_POSITION_Y = 6;
ScrollView.FOOTER = 7;
ScrollView.SCALE_POSITION_REAL = 8;

ScrollView.prototype.resize = function(w, h)
{
	this.w = w;
	this.h = h;
	this.positionScale.x =  w / 1024;
	this.positionScale.y =  h / 768;
	
	var toFitScale =  w / 1024 >  h / 768 ?  h / 768 : w / 1024;
	//toFitScale *= 0.9
	if(toFitScale > 1)toFitScale = 1;
	//toFitScale = 0.2
	//this.rocketView.position.y = height *
	for(var i in this.data)
	{
		var data = this.data[i];
	//	data.sizeScale.y = data.sizeScale.x =  toFitScale;
	//	data.positionScale.x = data.positionScale.y = toFitScale
		
		if(data.resize == ScrollView.SCALE_FIT) // both!
		{
			data.sizeScale = this.positionScale;
			data.positionScale = this.positionScale;
			
		}
		else if(data.resize == ScrollView.SCALE_FIT_PRESERVE) // just x
		{
			// smallest??
			data.sizeScale.x = data.sizeScale.y = this.positionScale.y;
			data.positionScale = this.positionScale;
		}
		else if(data.resize == ScrollView.SCALE_X ) // just y
		{
			data.sizeScale.x = this.positionScale.x;
			data.positionScale = this.positionScale;
		}
		else if(data.resize == ScrollView.SCALE_Y) // just y
		{
			data.sizeScale.y = this.positionScale.y;
			data.positionScale = this.positionScale;
		}
		else if(data.resize == ScrollView.SCALE_POSITION)
		{
		//	data.positionScale = this.positionScale;
			data.sizeScale.y = data.sizeScale.x = this.positionScale.y < 1 ? this.positionScale.y : 1;
		}
		else if(data.resize == ScrollView.SCALE_POSITION_REAL)
		{
		//	data.positionScale = this.positionScale;
			data.positionScale.x = this.positionScale.x;
			data.positionScale.y = this.positionScale.y;
		}
		else if(data.resize == ScrollView.SCALE_POSITION_Y)
		{
			data.positionScale.y = this.positionScale.y;
			data.positionScale.x = toFitScale
			data.sizeScale.y = data.sizeScale.x = toFitScale//this.positionScale.y < 1 ? this.positionScale.y : 1;
		}
		else if(data.resize == ScrollView.SCALE_NONE)
		{
			
			data.sizeScale.y = data.sizeScale.x =  toFitScale;
			data.positionScale.x = data.positionScale.y = toFitScale
		}
		else if(data.resize == ScrollView.FOOTER)
		{
			//data.sizeScale.y = data.sizeScale.x =  1//toFitScale;
			//data.positionScale.x = data.positionScale.y = toFitScale
		}
	}
	
	this.footerContainer.scale.x = this.footerContainer.scale.y = toFitScale;
	this.footerContainer.position.y = height - ( 728/2) * toFitScale;
	this.footerContainer.position.x = w/2 ///- (1024/2 )// * toFitScale;
	offset = width/2 - w/2;
	this.conclusion.resize(w/toFitScale, h);
	
	var newW = w/toFitScale;
	
	if(newW < 1024)newW = 1024;
	this.heartFlash.banner.scale.x = (newW/2) / 26;
	this.heartHTML.banner.scale.x = (newW/2) / 26;
	
	
}
