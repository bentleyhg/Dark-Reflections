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
	deathTimer:0,
	FP_Reward: 0,
	
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
	
	kill: function() {
		// Spawn Floaty Text displaying exp reward if this enemy has been defeated
		ig.game.spawnEntity( 'EntityText_Floating',  this.pos.x , this.pos.y + 50);
		var myFloater = ig.game.entities[ig.game.entities.length -1];
		myFloater.currentFont = myFloater.font_green;
		myFloater.displayTxt = "+" + this.FP_Reward.toString() + " FP";
		
		this.parent();
	},
	
	collideWith: function( other, axis ) {
            if( other instanceof EntityBall ){
		
		this.receiveDamage(other.dmg);
		
		// Spawn Floaty Text displaying damage done
		ig.game.spawnEntity( 'EntityText_Floating',  this.pos.x , this.pos.y);
		var myFloater = ig.game.entities[ig.game.entities.length -1];
		myFloater.displayTxt = other.dmg.toString();
		
		// set damage animation
		this.currentAnim = this.anims.damage.rewind();
		this.dmgAnim = 10;
		
		ig.game.checkVictory();
            }
        }
});

});