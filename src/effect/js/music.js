require([
	'g/js/utli/view',
], function(View){
	var __flyFastSlow = "cubic-bezier(.09,.64,.16,.94)";
	var __time_val = null;
    var __time_wind = null;
	var k = View.extend({
		el: '.u-globalAudio',
		steamMaxSize: 30,
		steamInterval: 500,
		steamFlyTime: 5e3,
		steamWidth: 300,
		steamHeight: 200,
		$coffeeSteamBox: $('<div class="coffee-steam-box"></div>'),
		initialize: function(){
			this.setElement(this.el);
			if(!this.$el.length) return;
	        this.start();
		},
		events: {
			'click': 'isPlay'
		},
		isPlay: function(){
			this.toggleClass('z-play');
		},
		start: function(){
			this.$coffeeSteamBox.css({
	            height: this.steamHeight,
	            width: this.steamWidth,
	            left: 60,
	            top: -50,
	            position: "absolute",
	            overflow: "hidden",
	            "z-index": 0
	        }).appendTo(this.el);
	        var that = this;
			__time_val = setInterval(function() {
                that.steam();
            }, that.rand(that.steamInterval / 2, 2 * that.steamInterval));
            __time_wind = setInterval(function() {
                that.wind();
            }, that.rand(100, 1e3) + that.rand(1e3, 3e3));
		},
		steam: function(){
			var fontSize = this.rand();
		},
		randoms: function(length, chars){
			length = length || 1;
            var hash = "";
            var maxNum = chars.length - 1;
            var num = 0;
            for (i = 0; length > i; i++){
            	num = this.rand(0, maxNum - 1);
            	hash += chars.slice(num, num + 1);
            }  
            return hash;
		},
		rand: function(mi, ma){
			var range = ma - mi;
			var out = mi + Math.round(Math.random() * range);
            return parseInt(out);
		},
		rand02: function(mi, ma){
			var range = ma - mi;
			var out = mi + Math.random() * range;
            return parseFloat(out);
		},
		wind: function() {
            var left = this.rand(-10, 10);
            left += parseInt(this.$coffeeSteamBox.css("left"));
        	var rand = this.rand(1e3, 3e3);
            // left >= 54 ? left = 54 : 34 >= left && (left = 34);
            // this.$coffeeSteamBox.animate({left: left}, this.rand(1e3, 3e3), __flyFastSlow);
            this.$coffeeSteamBox.animate({left: left}, rand);
            console.log(left);
        },
        steam: function(){
        	var fontSize = this.rand(8, this.steamMaxSize);
        	var color = "#" + this.randoms(6, "0123456789ABCDEF");
        	var position = this.rand(0, 44);
    		var rotate = this.rand(-90, 89); 
    		var scale = this.rand02(.4, 1);
    		var transform = "transform";
    		transform = transform + ":rotate(" + rotate + "deg) scale(" + scale + ");";
    		var $fly = $('<span class="coffee-steam">test</span>');
    		var coffeeSteamBoxWidth = this.steamWidth;
            var left = this.rand(0, coffeeSteamBoxWidth - this.steamWidth - fontSize);
            if(left > position && (left = this.rand(0, position))){
            	$fly.css({
                    position: "absolute",
                    left: position,
                    top: this.steamHeight,
                    "font-size:": fontSize + "px",
                    color: color,
                    display: "block",
                    opacity: 1
                }).attr("style", $fly.attr("style") + transform).appendTo(this.$coffeeSteamBox).animate({
                    top: this.rand(this.steamHeight / 2, 0),
                    left: left,
                    opacity: 0
                }, rand(this.steamFlyTime / 2, 1.2 * this.steamFlyTime), __flyFastSlow, function() {
                    $fly.remove();
                    $fly = null;
                });
            }
        }
	});
	new k;
});