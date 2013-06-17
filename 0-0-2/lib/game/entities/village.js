ig.module(
	'game.entities.village'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityVillage = ig.Entity.extend({
	
	size: {x:1024, y:40},
	collides: ig.Entity.COLLIDES.FIXED,
	health: 5,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.addAnim( 'idle', 1, [1] );
	},
	
	collideWith: function( other, axis ) {
            if( other instanceof EntityBall ){
                this.receiveDamage(1);
		ig.game.checkDefeat();
            }
        }
});

});