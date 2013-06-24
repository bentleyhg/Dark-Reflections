ig.module(
	'game.entities.UI_Meter'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityUI_Meter = ig.Entity.extend({
	
	size: {x:1024, y:40},
	collides: ig.Entity.COLLIDES.NONE,
	meterImg: new ig.Image( 'media/UI_VillageHealth_iPad_1px.png' ),
	containerImg: new ig.Image( 'media/UI_VillageHealth_iPad_Container.png' ),
	maxVal: 100,
	currentVal: 100,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
	},
	
	draw:  function(){
		// Draw the whole image
		
		var increment = Math.ceil(this.size.x / this.maxVal); 
		var i;
		var j;
		
		
		for (i = 0; i < this.currentVal; i++){
			var x_start = increment * i;
			for (j = 0; j < increment; j++){
				this.meterImg.draw( j + x_start + this.pos.x, this.pos.y);
			}
		}
		
		this.containerImg.draw(this.pos.x, this.pos.y);
	},
});

});