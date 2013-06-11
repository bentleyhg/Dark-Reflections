ig.module(
    'game.entities.paddle'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPaddle = ig.Entity.extend({
	
	size: {x:200, y:30},
	collides: ig.Entity.COLLIDES.FIXED,
	
	animSheet: new ig.AnimationSheet( 'media/Paddle_Mk1.png', 200, 30 ),
        
	init: function( x, y, settings ) {
		this.parent( x, y, settings )
		
		this.addAnim( 'idle', 1, [0] );
		
		this.maxVel.x = 500;
                this.maxVel.y = 500;
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		if( ig.input.state('left') ) {
			this.vel.x = -400;
		}
		else if( ig.input.state('right') ) {
			this.vel.x = 400;
		}
		else {
			this.vel.x = 0
		}
		
		this.pos.x = ig.input.mouse.x;
	}
});

});