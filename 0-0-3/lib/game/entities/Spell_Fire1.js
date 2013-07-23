ig.module(
	'game.entities.Spell_Fire1'
)
.requires(
	'game.entities.spell'
)
.defines(function(){

EntitySpell_Fire1 = EntitySpell.extend({
	cost: 1,
	myIcon: new ig.AnimationSheet( 'media/Btn_Fire1_Mk1.png', 75, 75 ),
	
	init: function() {
		
	},
	
	cast: function(){
		
		var g = ig.game;
		var p = g.Paddle;
		
		if (!this.checkCost(this.cost)){
			return false;
		}else{
			g.spawnEntity( 'EntityBall_Spell_Fire1',  p.pos.x + (p.size.x /2), p.pos.y - 50);
			return true;
		}
	}
});

});