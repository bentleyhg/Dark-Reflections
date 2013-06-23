ig.module(
	'game.entities.village'
)
.requires(
	'impact.entity',
	'game.entities.UI_Meter'
)
.defines(function(){

EntityVillage = ig.Entity.extend({
	
	size: {x:1024, y:95},
	collides: ig.Entity.COLLIDES.FIXED,
	health: 5,
	animSheet: new ig.AnimationSheet( 'media/PH_Village_Mk1.png', 1024, 95),
	myMeter: null,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.addAnim( 'idle', 1, [0] );
		
		
		//find the Village Health meter at load time and take ownership of it
		
		this.myMeter = ig.game.spawnEntity( 'EntityUI_VillageHealth', 0, 620 );
		this.myMeter = ig.game.getEntitiesByType( 'EntityUI_VillageHealth' ) [0];
		this.myMeter.maxVal = this.health;
		this.myMeter.currentVal = this.health;
		
	},
	
	collideWith: function( other, axis ) {
            if( other instanceof EntityBall ){
                // Spawn Floaty Text displaying damage taken
		
		ig.game.spawnEntity( 'EntityText_Floating',  other.pos.x, other.pos.y -20);
		var myFloater = ig.game.entities[ig.game.entities.length -1];
		myFloater.displayTxt = other.dmg.toString();
		
		this.receiveDamage(other.dmg);
		this.myMeter.currentVal = this.health;
		other.kill();
            }
        },
	
	kill: function() {
		ig.game.setDefeat();
		this.parent();
	},
});

});