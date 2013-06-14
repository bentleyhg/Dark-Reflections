ig.module(
	'game.entities.enemy'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityEnemy= ig.Entity.extend({
	
	health: 1,
        collides: ig.Entity.COLLIDES.FIXED,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.addAnim( 'idle', 1, [0] );
	},
	
	collideWith: function( other, axis ) {
            if( other instanceof EntityBall ){
                this.receiveDamage(1);
		ig.game.checkVictory();
            }
        }
});

});