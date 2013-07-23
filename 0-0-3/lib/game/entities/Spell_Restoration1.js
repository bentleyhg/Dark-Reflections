ig.module(
	'game.entities.Spell_Restoration1'
)
.requires(
	'game.entities.spell'
)
.defines(function(){

EntitySpell_Restoration1 = EntitySpell.extend({
	cost: 3,
	healValue: 0,
	myIcon: new ig.AnimationSheet( 'media/Btn_Restoration1_Mk3.png', 75, 75 ),
	
	init: function() {
		
	},
	
	cast: function(){
		
		var g = ig.game;
		var p = g.Paddle;
		
		if (!this.checkCost(this.cost)){
			return false;
		}else{
			this.healValue = Math.floor((Math.random()*3)+3);
			g.changeVillageHealth(this.healValue * -1);
			return true;
		}
	}
});

});