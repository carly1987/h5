
(function() {

	var AP = Array.prototype;
	var OP = Object.prototype;
	var SP = String.prototype;
	var FP = Function.prototype;

	if (!AP.filter) {
		AP.filter = function(fn, sc) {
			var r = [];
			for(var i = 0, l = this.length; i < l; i++) {
				if((i in this) && fn.call(sc, this[i], i, this)) {
					r.push(this[i]);
				}
			}
			return r;
		};
	}

	if (!AP.forEach) {
		AP.forEach = function(fn, sc) {
			for(var i = 0, l = this.length; i < l; i++) {
				if (i in this) {
					fn.call(sc, this[i], i, this);
				}
			}
		};
	}

	if (!AP.map) {
		AP.map = function(fn, sc) {
			for(var i = 0, l = this.length, copy = new Array(l); i < l; i++) {
				if (i in this) {
					copy[i] = fn.call(sc, this[i], i, this);
				}
			}
			return copy;
		};
	}

	if (!AP.indexOf) {
		AP.indexOf = function(elt, from){
			var l = this.length;
			from = parseInt(from) || 0;
			if (from < 0) {
				from += l;
			}
			for (; from < l; from++) {
				if (from in this && this[from] === elt) {
					return from;
				}
			}
			return -1;
		};
	}

	if(!SP.trim) {
		SP.trim = function() {
			return $.trim(this);
		};
	}

	Array.isArray || (Array.isArray = function(obj) {
		return OP.toString.call(obj) === '[object Array]';
	});

	Date.now || (Date.now = function () {
		return +new Date;
	});

	Object.keys || (Object.keys = function(o) {
		var ret=[],p;
		for(p in o) {
			if (OP.hasOwnProperty.call(o,p)) {
				ret.push(p);
			}
		}
		return ret;
	});

	Object.create || (Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	});

	FP.bind || (FP.bind = function(oThis) {
		var fSlice = AP.slice;
		var aArgs = fSlice.call(arguments, 1);
		var fToBind = this;
		var fNOP = function () {};

		var fBound = function () {
			return fToBind.apply(this instanceof fNOP
								? this
								: oThis || window,
								aArgs.concat(fSlice.call(arguments)));
		};

		fNOP.prototype = this.prototype;
		fBound.prototype = new fNOP();

		return fBound;
	});

})();
