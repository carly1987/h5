/**
 * @author Mat Groves
 */
var PIXI = PIXI || {};

ScrollItem = function(data)
{
	this.data = data;
	
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
		
		var index = Math.floor(camera.y);
		index %= this.data.length / 2
	//	if(index > this.data.length / 2);
		{
			var xpos = this.data
			this.localTransform[2] =  this.data.position[index*2]///this.position.x - camera.x;
			this.localTransform[5] =  this.data.position[index*2 + 1]//((this.position.y - camera.y - height/2)) + height/2;
		}
	
		
		
		// TODO optimize?
		mat3.multiply(this.localTransform, this.parent.worldTransform, this.worldTransform);
		this.worldAlpha = this.alpha * this.parent.worldAlpha;
		
		for(var i=0,j=this.children.length; i<j; i++)
		{
			this.children[i].updateTransform();	
		}
	}		
}

