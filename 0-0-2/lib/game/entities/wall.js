ig.module(
	'game.entities.wall'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityWall = ig.Entity.extend({
	
	size: {x:4, y:4},
	collides: ig.Entity.COLLIDES.ACTIVE,
	
	animSheet: new ig.AnimationSheet( 'media/Wall_Mk1.png', 4, 4 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.addAnim( 'idle', 1, [0] );
	}
});

});