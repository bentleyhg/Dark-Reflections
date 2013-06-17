ig.module(
	'game.entities.UI_DivinityMeter'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityUI_DivinityMeter = ig.Entity.extend({
	
	size: {x:500, y:50},
	
	animSheet: new ig.AnimationSheet( 'media/UI_DivinityMeter_iPad_Mk1.png', 500, 50 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.addAnim( 'idle', 1, [0] );
	}
});

});