ig.module(
	'game.entities.ball_Spell_Fire1'
)
.requires(
	'game.entities.ball'
)
.defines(function(){

EntityBall_Spell_Fire1 = EntityBall.extend({
	
	animSheet: new ig.AnimationSheet( 'media/Ball_Fire1_Mk1.png', 30, 30 ),

	base_vel: 350,
	dmg: 2,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.currentAnim = null;
		this.addAnim( 'idle', 0.01, [0, 1 , 2, 3] );
                
                this.maxVel.x = 600;
                this.maxVel.y = 600;
                
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