ig.module(
	'game.entities.PH_TriBadGuy_LV1'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPH_TriBadGuy_LV1 = ig.Entity.extend({
	
	size: {x:50, y:50},
        health: 1,
        collides: ig.Entity.COLLIDES.FIXED,
	
	animSheet: new ig.AnimationSheet( 'media/PH_TriBadGuy_LV1.png', 50, 50 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.addAnim( 'idle', 1, [0] );
	},
        
        collideWith: function( other, axis ) {
            if( other instanceof EntityBall ){
                this.receiveDamage(1);
            }
        }
});

});