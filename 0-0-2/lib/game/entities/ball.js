ig.module(
	'game.entities.ball'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityBall = ig.Entity.extend({
	
	size: {x:30, y:30},
	collides: ig.Entity.COLLIDES.ACTIVE,
	
	animSheet: new ig.AnimationSheet( 'media/Ball_Fire1_Mk1.png', 30, 30 ),
	
	bounciness: 1,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.addAnim( 'idle', 0.05, [0, 1, 2, 3] );
                
                this.maxVel.x = 500;
                this.maxVel.y = 500;
                
                this.vel.x = 300;
		this.vel.y = 300;
	}
});

});