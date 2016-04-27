/*
 * 	param: the html element that will be scrolled
 */
Trackpad = function(target)
{
	this.target = target;
	this.value = 0;
	this.easingValue = 00;
	this.dragOffset = 0;
	this.dragging;
	this.speed= 0;
	this.prevPosition = 0;
	
	$(this.target).mousedown($.proxy(this.onMouseDown, this));
	this.target.onmousewheel = $.proxy(this.onMouseWheel, this);
	
	// not forgetting touchs!
	this.target.ontouchstart = $.proxy(this.onTouchStart, this);
		
	// stop dragging!
	$(document).keydown( $.proxy(this.onArrow, this))//function(e){
   
	//this.target.ondragstart = function(){return false;}
}

// set constructor
Trackpad.constructor = Trackpad;

// create the functions

Trackpad.prototype.unlock = function()
{
	this.locked = false;
	this.speed = 0;
	this.easingValue = this.value;
}

Trackpad.prototype.lock = function()
{
	this.locked = true;
}

Trackpad.prototype.update = function()
{
	if(this.easingValue > 0)this.easingValue = 0;
	if(this.easingValue < -10700)this.easingValue = -10700;
	this.value = this.easingValue;
	
	if(this.dragging)
	{
		var newSpeed = this.easingValue - this.prevPosition;
		newSpeed *= 0.7;
		
		this.speed += (newSpeed - this.speed) *0.5;//+= (newSpeed - this.speed) * 0.5;
		this.prevPosition = this.easingValue;
	}
	else
	{
		this.speed *= 0.9;
		this.easingValue +=  this.speed;
		
		if(Math.abs(this.speed) < 1)this.speed = 0;
	}
}

Trackpad.prototype.onArrow = function(event)
{
	 if (event.keyCode == 38) { 
     // UP
     this.speed = 4;
       return false;
    }
    else  if (event.keyCode == 40) { 
     // UP
     this.speed -= 4
       return false;
    }
}

Trackpad.prototype.onMouseWheel = function(event)
{
	event.preventDefault();
	this.speed = event.wheelDelta * 0.1;
}


Trackpad.prototype.startDrag = function(newPosition)
{
	if(this.locked)return;
	this.dragging = true;
	this.dragOffset = newPosition - this.value;	
}

Trackpad.prototype.endDrag = function(newPosition)
{
	if(this.locked)return;
	this.dragging = false;
}

Trackpad.prototype.updateDrag = function(newPosition)
{
	if(this.locked)return;
	this.easingValue = (newPosition - this.dragOffset);
}

/*
 * MOUSE
 */
Trackpad.prototype.onMouseDown = function(event)
{
	if(event)event.preventDefault();

	event.returnValue = false;
	
	$(document).mousemove($.proxy(this.onMouseMove, this));
	$(document).mouseup($.proxy(this.onMouseUp, this));
	
	this.startDrag(event.pageY);	
}

Trackpad.prototype.onMouseMove = function(event)
{
	if(event)event.preventDefault();
	this.updateDrag(event.pageY);
}

Trackpad.prototype.onMouseUp = function(event)
{	
	//$(this.target).mousemove(null);
	$(document).unbind('mousemove');
	$(document).unbind('mouseup');
	//this.target.onmousemove = null;
	
	this.endDrag();// = false;
}

/*
 * TOUCH!
 */
Trackpad.prototype.onTouchStart = function(event)
{
	//event.preventDefault();
	
	this.target.ontouchmove = $.proxy(this.onTouchMove, this);
	this.target.ontouchend = $.proxy(this.onTouchEnd, this);

	this.startDrag(event.touches[0].clientY);
}

Trackpad.prototype.onTouchMove = function(event)
{
	
	event.preventDefault();
	this.updateDrag(event.touches[0].clientY);
}
	
Trackpad.prototype.onTouchEnd = function(event)
{
	this.target.ontouchmove = null;
	this.target.ontouchend = null;
	this.endDrag();
}
		

