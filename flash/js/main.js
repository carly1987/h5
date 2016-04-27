
// $(document).ready(onReady)

// $(window).resize(onResize)
// window.onorientationchange = onResize;
// //window.onblur = function(){alert("DONE SON!")}

// window.mobilecheck = function() {
// var check = false;
// (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
// return check; }

// var pixi;
// var HIGH = false;
// var stage;
// var camera = new PIXI.Point();
// var items = [];
// var stats;
// var sections;
// var height;
// var clouds;
// var offset
// var space;
// var earthHigh;

// var scrollView;
// var scaleView;
// var touchMode;
// var targetScroll = 0;

// var jobAd;
// var fwa;
// var awards;
// var htmlVote;
// var flashVote;
// var loader;

// var trackpad;
// var conclusion;

// var stressTest;
// var cog;
// var cog2;
// var menu;
// var autoScroll;

// var htmlVoting;
// var flashVoting;

// var loading = true;
// var wasteLogo = PIXI.Sprite.fromImage("/img/loader/intro_waste.png");
// var playSchoolLogo = PIXI.Sprite.fromImage("/img/loader/intro_playschool.png");
// var htmlLogo = PIXI.Sprite.fromImage("/img/loader/intro_html5.png");
// //var flashLogo = PIXI.Sprite.fromImage("/img/loader/intro_flash.png");
// var logoContainer;
// var introTimeline;

// var black = document.createElement("div");
// black.className = "black";


// var pixiDust;
// var alienSwarm;

// var sectionPositions = [0, 386 - 100, 604 - 100,1069 - 100];// [0, 150, 300 ,683];
// var sectionLandPositions = [0, 386, 604,1069];

// var loaderGraphic = new PIXI.DisplayObjectContainer();
// var loaderMoon = PIXI.Sprite.fromImage("/img/loader/miniMoon.png");
// loaderMoon.anchor.x = loaderMoon.anchor.y = 0.5;

// var orbiter = PIXI.Sprite.fromImage("/img/loader/pollingOrbiter.png");
// orbiter.anchor.x = orbiter.anchor.y = 0.5;
// loaderGraphic.addChild(orbiter);
// loaderGraphic.alpha = 0;

// var innerOrbiter = PIXI.Sprite.fromImage("/img/loader/pollingOrbiter.png");
// innerOrbiter.anchor.x = innerOrbiter.anchor.y = 0.5;
// orbiter.addChild(innerOrbiter);
// orbiter.onTop = true;

// var isMobile = true//window.mobilecheck();
// if(isMobile)
// {
// 	var tiltPromt = new PIXI.DisplayObjectContainer();
// 	var tiltText = PIXI.Sprite.fromImage("/img/landscape.png");
// 	var phone = PIXI.Sprite.fromImage("/img/tv.png");
	
// 	tiltPromt.addChild(tiltText)
// 	tiltPromt.position.x = -110;
	
// 	phone.anchor.x = phone.anchor.y =0.5;
// 	phone.position.x = -60;
// 	phone.position.y = 13;
	
// 	tiltPromt.addChild(phone);
	
// 	var tl = new TimelineLite({onComplete:onPhoneFinished});
	
// 	//append a to() tween
// 	tl.to(phone, 0.3, {rotation:0, ease:Sine.easeInOut, delay:0.5});
// 	tl.to(phone, 0.3, {rotation:Math.PI/2, ease:Sine.easeOut, delay:0.5});
// 	tl.to(phone, 0.3, {rotation:0, ease:Sine.easeOut, delay:0.5});
// 	tl.call(onPhoneFinished)


// 	tl.play();
// }

// function onPhoneFinished()
// {
// 	if(!loading)return;
// 	tl.restart();
// }


// innerOrbiter.scale.x = innerOrbiter.scale.y = 0.4
// var orbitCount = 0;

// loaderGraphic.addChild(loaderMoon);
// //var sectionLandPositions = [-213.5 + 213.5 , -110.5 + 213.5 , 6.5 + 213.5, 160.5 + 213.5];

// //	document.getElementById("footer").style.display = "none";

// var startTime = new Date();

// var updateCounter = function () {
//     var currentTime = new Date();
//     var differenceInSeconds = Math.round((currentTime - startTime) / 1000, 0);
// }

// window.setInterval(updateCounter, 1000);

// function preload()
// {
// 	if(isMobile)
// 	{
// 		loader = new PIXI.AssetLoader(["/img/loader/miniMoon.png", "/img/loader/pollingOrbiter.png", "/img/landscape.png","/img/tv.png" ]);
// 	}
// 	else
// 	{
// 		loader = new PIXI.AssetLoader(["/img/loader/miniMoon.png", "/img/loader/pollingOrbiter.png"]);
// 	}
		
	
// 	loader.addEventListener( 'onComplete', function ( event ) {
// 		load();
// 	} );
	
// 	loader.load();
// }

// function load()
// {
	
// 	TweenLite.to(loaderGraphic, 0.6, {alpha:1, ease:Sine.easeInOut});

// 	setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
// 	loader = new PIXI.AssetLoader(["/img/space_BG.jpg", "/img/groundLevel.jpg", "/img/earth_BG.jpg", "/img/fighter.json","/img/MenuAssets.json", "/img/WorldAssets.json", "/img/ResultsAssets.json"])
	
// 	loader.addEventListener( 'onComplete', function ( event ) {
// 		showIntro()//
// 		//init();
// 		onResize();
// 	//	doStressTest();
// 	} );
	
// 	pixi = PIXI.autoDetectRenderer();
	
// 	pixi.view.style["transform"] = "translatez(0)";
	
// 	HIGH = (pixi instanceof PIXI.WebGLRenderer)
// 	document.body.appendChild(pixi.view);
// 	pixi.view.className = "pixi"
	
// 	stage = new PIXI.Stage(0x0d011a);
	
// 	logoContainer = new PIXI.DisplayObjectContainer();
// 	logoContainer.addChild(loaderGraphic)
// 	if(isMobile)logoContainer.addChild(tiltPromt);
// 	logoContainer.addChild(wasteLogo);
// 	logoContainer.addChild(playSchoolLogo);
// 	logoContainer.addChild(htmlLogo);
// 	//logoContainer.addChild(flashLogo);
	
// 	stage.addChild(logoContainer);
	
// 	wasteLogo.alpha = 0;
// 	wasteLogo.visible = false;
// 	playSchoolLogo.alpha = 0;
// 	playSchoolLogo.visible = false;
// 	htmlLogo.alpha = 0;
// 	htmlLogo.visible = false;
// //	flashLogo.alpha = 0;
// ///	flashLogo.visible = false;
	
// 	wasteLogo.anchor.x = 0.5;
// 	wasteLogo.anchor.y = 0.5;
	
// 	playSchoolLogo.anchor.x = 0.5;
// 	playSchoolLogo.anchor.y = 0.5;
	
// 	htmlLogo.anchor.x = 0.5;
// 	htmlLogo.anchor.y = 0.5;
	
// //	flashLogo.anchor.x = 0.5;
// 	//flashLogo.anchor.y = 0.5;
	
// 	onResize();
	
// 	requestAnimFrame(updateLoading);
// 	loader.load();
// }


// function updateLoading()
// {
// 	if(loading)requestAnimFrame(updateLoading);
// 	orbitCount-= 0.05;
// 	orbiter.position.x = Math.sin(orbitCount) * 150;
// 	orbiter.position.y = Math.cos(orbitCount) * 60;
	
// 	orbiter.rotation = orbitCount * 0.2;
// 	pixi.render(stage);
// 	orbiter.scale.x = orbiter.scale.y = 1 + Math.sin(orbitCount + Math.PI/2) * 0.2
// 	var onTop =orbiter.position.y < 0;
	
// 	if(onTop != orbiter.onTop)
// 	{
// 		orbiter.onTop = onTop;
		
// 		if(onTop)
// 		{
// 			loaderGraphic.addChild(loaderMoon)
// 		}
// 		else
// 		{
// 			loaderGraphic.addChild(orbiter)
// 		}
// 	}
	
// ///	phone.rotation += 0.01;
// 	innerOrbiter.position.x = -Math.sin(orbitCount) * 30;
// 	innerOrbiter.position.y = Math.cos(orbitCount) * 10;
	
	
// }

// function showIntro()
// {
// 	//create a TimelineLite instance
// 	introTimeline = new TimelineLite();
	
// 	wasteLogo.visible = true;
// 	playSchoolLogo.visible = true;
// 	htmlLogo.visible = true;
// //	flashLogo.visible = true;
	
// 	var delay = 1;//0.1//0.1;
// 	var fadeIn = 0.5;//0.5//0.1;
	
// 	//append a to() tween
// 	introTimeline.to(loaderGraphic, fadeIn, {alpha:0, ease:Sine.easeOut, delay:0.5});
	
// 	introTimeline.to(wasteLogo, fadeIn, {alpha:1, ease:Sine.easeIn});
// 	introTimeline.to(wasteLogo, fadeIn, {alpha:0, ease:Sine.easeOut, delay:delay});
	
// 	introTimeline.to(playSchoolLogo, fadeIn, {alpha:1, ease:Sine.easeIn});
// 	introTimeline.to(playSchoolLogo, fadeIn, {alpha:0, ease:Sine.easeOut, delay:delay});
	
// 	introTimeline.to(htmlLogo, fadeIn, {alpha:1, ease:Sine.easeIn});
// 	introTimeline.to(htmlLogo, fadeIn, {alpha:0, ease:Sine.easeOut, delay:delay});
	
// 	//introTimeline.to(flashLogo, fadeIn, {alpha:1, ease:Sine.easeIn});
// 	//introTimeline.to(flashLogo, fadeIn, {alpha:0, ease:Sine.easeOut, delay:delay});
	
	
// 	introTimeline.call(init);
	
// 	introTimeline.play();
// 	//introTimeline.to(this.tint.position, 0.075, {y:0, ease:Sine.easeOut});
// //	introTimeline.call(this.onReachTop.bind(this));
// 	//add another sequenced tween (by default, tweens are added to the end of the timeline which makes sequencing simple)
// 	//introTimeline.to(this.sprite.position, 0.075, {y:15, ease:Sine.easeOut});
	 
// }

// function init()
// {
// 	// fade in likes..
// 	document.body.appendChild(black);
	
// 	awards.style.opacity = 0;
// 	awards.style.display = "none";
	
// 	//$(window).focus(function() {requestAnimFrame(update);	});
	
// 	stage.removeChild(logoContainer);
// 	loading = false;
// 	trackpad = new Trackpad(document);
	
// 	//pixi = new PIXI.DOMRenderer();//
	
	
// 	requestAnimFrame(update);
	
// 	scrollView = new ScrollView(map);
// 	scaleView = new ScaleView(scales);
// 	rocketView = new RocketView();
	
// 	//stage.addChild(clouds);
// 	// stats!
// 	stats = new Stats();
// 	//document.body.appendChild( stats.domElement );
// 	stats.domElement.style.position = "fixed";
// 	stats.domElement.style.top = "0px";
	
// 	touchMode = true//!!('ontouchstart' in window);
	
	
// 	htmlVote = document.getElementById("htmlVote");	
// 	//$(htmlVote).fadeIn();
// 	flashVote = document.getElementById("flashVote");	
// 	//$(flashVote).fadeIn();
	
// 	flashVote.style.opacity = 1;
// 	htmlVote.style.opacity = 1;
	
// 	//htmlVote.style.display = "block";


// 	// BUILD VOTE
// 	htmlVoting = new PIXI.DisplayObjectContainer();
	
// 	var banner = PIXI.Sprite.fromFrame("voteHTML5.png");
// 	htmlVoting.addChild(banner);
// 	banner.position.x = -295;
// 	banner.position.y = -41 - 10;
	
// 	var littleHTML5 = PIXI.Sprite.fromFrame("littleHTML5.png");
// 	htmlVoting.addChild(littleHTML5);
// 	littleHTML5.position.x = -46;
// 	littleHTML5.position.y = -150;
	
// 	cog = PIXI.Sprite.fromImage("/img/orientationCog.png");
// 	cog.anchor.x = cog.anchor.y = 0.5;
// 	htmlVoting.addChild(cog);
	
// 	stage.addChild(htmlVoting);
	
// 	// BUILD VOTE 2
	
// 	flashVoting = new PIXI.DisplayObjectContainer();
	
// 	var banner = PIXI.Sprite.fromFrame("voteFlash.png");
// 	flashVoting.addChild(banner);
// 	banner.position.x = 80;
// 	banner.position.y = -41 - 10;
	
// 	var littleFlash = PIXI.Sprite.fromFrame("littleFlash.png");
// 	flashVoting.addChild(littleFlash);
// 	littleFlash.position.x = 6;
// 	littleFlash.position.y = -150;
	
// 	cog2 = PIXI.Sprite.fromImage("/img/orientationCog.png");
// 	cog2.anchor.x = cog2.anchor.y = 0.5;
// 	flashVoting.addChild(cog2);
	
// 	stage.addChild(flashVoting);
	
	
	
// 	menu = new Menu();
// 	menu.onMenuPressed = $.proxy(onMenuItemPressed, this);
// 	stage.addChild(menu);
	
// 	pixiDust = new PixiDust();
// 	stage.addChildAt(pixiDust, 19);
	
	
// //	stage.addChild(alienSwarm);
// 	onResize();
	
// 	$(black).delay(1000).fadeOut("slow");
	
// }

// function onMenuItemPressed(id)
// {
// 	// goto menu item!
// 	autoScroll = true;
// 	trackpad.lock();
// 	TweenLite.to(trackpad, 1.5, {value:(sectionLandPositions[id] )/  -0.1, onComplete:onAutoComplete, ease:Sine.easeInOut});
// }

// function onAutoComplete()
// {
// 	trackpad.unlock();
// 	autoScroll = false;
// }

// /*
// function onTouchStart(event)
// {
// 	event.preventDefault();
//     this.offset =  event.touches[0].clientY - targetScroll// -;
// }

// function onTouchEnd(event)
// {
// 	event.preventDefault();
// }

// function onTouchMove(event)
// {
// 	event.preventDefault();
//     targetScroll = (event.touches[0].clientY - this.offset) //* 0.1;
// }*/

// function update()
// {
// 	stats.begin();
	
	
	
	
// 	// AUTO MENU //
// 	if(!autoScroll)
// 	{
// 		var index = 0;
// 		trackpad.update();
		
// 		for (var i=1; i < sectionPositions.length; i++) 
// 		{
		  
// 		  if(camera.y > sectionPositions[i]+ 1)
// 		  {
// 		  	index++;
// 		  }
// 		};
		
// 		menu.selectById(index);
		
		
// 	}
// 	else
// 	{
		
// 	}
	
// 	camera.y += (trackpad.value * -0.1 - camera.y) * 0.1;
// 	// TODO ipad mode will have to be a little different
// 	cog.rotation = camera.y * 0.04;
// 	cog2.rotation = camera.y * -0.04;
	
// 	if(camera.y < 300)
// 	{
// 		pixiDust.update();
// 		pixiDust.visible = true;	
		
// 		pixiDust.alpha = ((290 - camera.y) / 10);
// 		if(pixiDust.alpha > 1)pixiDust.alpha = 1;
// 		else if(pixiDust.alpha < 0)pixiDust.alpha = 0;
// 	}
// 	else
// 	{
// 		pixiDust.visible = false;	
// 	}
	
// 	//console.log(index);
// 	//console.log(camera.y)
// 	// pause gap!
	
// 	var mainScrollPosition;
// 	var start = 540
// 	var size = 700;
// 	var realSize = 145;
	
// 	mainScrollPosition = camera.y
// 	if(camera.y > start)
// 	{
// 		var pos = mainScrollPosition - start;
		
// 		mainScrollPosition = start + (pos / size) * realSize;
		
// 		if(camera.y  > start + size)
// 		{
// 			mainScrollPosition = camera.y - size + realSize;
// 		}
// 	}
	
	
// 	scrollView.updatePosition(mainScrollPosition);
// 	scaleView.updatePosition(camera.y - start );
// 	rocketView.updatePosition(camera.y);
// 	pixi.render(stage);
// 	requestAnimFrame(update);	
// 	// window.setTimeout(update, 1000/60);
// 	stats.end();
	
// 	menu.updateProgress(mainScrollPosition);
// }

// function onReady() 
// {
// 	jobAd = document.getElementById("jobAd");
// 	fwa = document.getElementById("fwa");
// 	awards = document.getElementById("awards");
// 	if (window.mobilecheck())
// 	{
// 		jobAd.style.opacity = 0;
// 		jobAd.style.display = "none";
// 		fwa.style.opacity = 0;
// 		fwa.style.display = "none";
// 		awards.style.opacity = 0;
// 		awards.style.display = "none";
// 	}
// 	else
// 	{
// 		jobAd.style.opacity = 1;
// 		jobAd.style.left =  $(window).outerWidth() - 140 + "px";
// 		jobAd.style.top =  0 + "px";
// 		fwa.style.opacity = 1;
// 		fwa.style.left =  0 + "px";
// 		fwa.style.top =  0 + "px";
// 		awards.style.opacity = 1;
// 		awards.style.left =  20 + "px";
// 		awards.style.bottom =  20 + "px";
// 	}
	
// 	preload();
// }

// var pressMe;

// function onResize()
// {
// 	width = $(window).outerWidth(); 
// 	height = $(window).outerHeight(); 
// //	alert(width + " : " + height)
// 	var ratio = width / height
// 	if(ratio == 980/425 || ratio == 980/359)
// 	{
// 		//alert("!!!")
// 		if(!pressMe)
// 		{
// 			pressMe = PIXI.Sprite.fromImage("/img/pressMe.png");
// 			pressMe.anchor.x = 1;
// 			pressMe.anchor.y = 1;
			
// 			pressMe.position.x = width;
// 			pressMe.position.y = height;
// 		}
// 		pressMe.visible = true;
// 		stage.addChild(pressMe);
// 	}
// 	else
// 	{
// 		if(pressMe)pressMe.visible = false//(pressMe);
		
// 	}
	
// 	if(loading)
// 	{
// 		logoContainer.position.x = width/2;
// 		logoContainer.position.y = height/2;
// 		pixi.resize(width, height);	
// 		if(isMobile)
// 		{
// 			tiltPromt.position.y = height/2 - 160;
// 			tiltPromt.visible = (width < height)
			
// 		}
		
// 		jobAd.style.left =  width - 158 + "px";
// 		jobAd.style.top =  0 + "px"
		
// 		return;
// 	}
	
// 	//alert(window.devicePixelRatio);
	
// 	var testWidth = isMobile ? 960 * window.devicePixelRatio : 960;
	
// 	if(width < testWidth)
// 	{
// 		//menu.visible = false;
// 		flashVoting.visible = false;
// 		htmlVoting.visible = false;
// 		flashVote.style.display = "none"
// 		htmlVote.style.display = "none"
// 	}
// 	else
// 	{
// 		//menu.visible = true;
// 		flashVoting.visible = true;
// 		htmlVoting.visible = true;
// 		flashVote.style.display = "block"
// 		htmlVote.style.display = "block"
		
		
// 	}
	
// 	var pixiWidth = width// > 1500 ? 1500 : width;
	
	
	
// 	if(pixi instanceof PIXI.CanvasRenderer)
// 	{
// 		pixiWidth = width > 1600 ? 1600 : width;
// 	}
	
// 	htmlVote.style.left =  width/2 +  pixiWidth/2 -60+9 + "px"
// 	htmlVote.style.top = height - 64+ "px"
	
// 	flashVote.style.left = width/2 -pixiWidth/2 + 3 + "px"
// 	flashVote.style.top = height -64 + "px"
	
// 	jobAd.style.left =  width - 158 + "px";
// 	jobAd.style.top =  0 + "px"
	
	
	
// 	if(this.touchMode)
// 	{
// 		document.body.style.height = height + "px"
// 	}
	
	
// 		pixiDust.resize(	pixiWidth, height)
// 	//document.body.style.height = height * 2 + "px";
// 	pixi.resize(pixiWidth, height);
// 	scrollView.resize(pixiWidth, height);
// 	scaleView.resize(pixiWidth, height);
// 	rocketView.resize(pixiWidth, height);
// 	pixi.view.style.left = width/2 - pixiWidth/2 + "px"
	
// 	var scaley = width/1024;
	
// 	cog.scale.x = cog.scale.y = cog2.scale.x = cog2.scale.y = scaley > 1 ? 1 : scaley;
// 	htmlVoting.position.y = height - 10;
// 	flashVoting.position.y = height - 10;
// 	htmlVoting.position.x =pixiWidth// + scaley * 30;
// 	flashVoting.position.x =0;///scaley * 30;
// 	width = pixiWidth;
	
// 	menu.resize(width, height);//position.x = width/2 -240;
// }
