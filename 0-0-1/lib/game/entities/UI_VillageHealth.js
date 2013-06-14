ig.module(
	'game.entities.UI_VillageHealth'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityUI_VillageHealth = ig.Entity.extend({
	
	size: {x:1024, y:40},
	
	animSheet: new ig.AnimationSheet( 'media/UI_VillageHealth_iPad_Mk1.png', 1024, 40 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.addAnim( 'idle', 1, [0] );
	}
});

});