var letter = function(let){
	this.charac = let;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};

module.exports = letter;