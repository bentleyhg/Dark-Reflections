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
	
	animSheet: new ig.AnimationSheet( 'media/Ball_Mk2.png', 30, 30 ),
	
	bounciness: 1,
	base_vel: 300,
	dmg: 1,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
                this.addAnim( 'idle', 1, [0] );
		
                this.maxVel.x = 500;
                this.maxVel.y = 500;
                
                this.vel.x = this.base_vel;
		this.vel.y = this.base_vel;
	},
	
	update: function() {
		this.parent();
		
		this.vel.x += (this.vel.x * 0.001);
		this.vel.y += (this.vel.y * 0.001);
	}
});

});