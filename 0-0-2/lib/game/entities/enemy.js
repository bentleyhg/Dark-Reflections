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
	dmgAnim: 0,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.addAnim( 'idle', 1, [0] );
		this.addAnim( 'damage', 0.1, [0, 2, 1, 3] );
	},
	
	update: function() {
		if (this.dmgAnim > 0){
			this.currentAnim = this.anims.damage;
			this.dmgAnim--;
		}else{
			this.currentAnim = this.anims.idle;
		}
		
		this.parent();
	},
	
	collideWith: function( other, axis ) {
            if( other instanceof EntityBall ){
                this.receiveDamage(1);
		this.currentAnim = this.anims.damage.rewind();
		this.dmgAnim = 10;
		ig.game.checkVictory();
		
            }
        }
});

});