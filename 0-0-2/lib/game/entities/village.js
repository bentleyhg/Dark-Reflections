ig.module(
	'game.entities.village'
)
.requires(
	'impact.entity',
	'game.entities.Btn_Spell'
)
.defines(function(){

EntityVillage = ig.Entity.extend({
	
	size: {x:1024, y:95},
	collides: ig.Entity.COLLIDES.FIXED,
	health: 5,
	animSheet: new ig.AnimationSheet( 'media/PH_Village_Mk1.png', 1024, 95),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.addAnim( 'idle', 1, [0] );
		
		
		//this.spawnHuts();
		
	},
	
	collideWith: function( other, axis ) {
            if( other instanceof EntityBall ){
                this.receiveDamage(1);
		other.kill();
            }
        },
	
	kill: function() {
		ig.game.setDefeat();
		this.parent();
	},
	
	spawnHuts: function(){
		// Spawn huts
		for (var i = 0; i < 20; i++){		
			ig.game.spawnEntity( 'EntityBtn_Spell',  this.pos.x + (i * 50), this.pos.y);
			ig.game.sortEntities();
		}
	}
});

});