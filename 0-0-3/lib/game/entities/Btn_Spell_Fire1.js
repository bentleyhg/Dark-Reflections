ig.module(
	'game.entities.Btn_Spell_Fire1'
)
.requires(
	'game.entities.Btn_Spell'
)
.defines(function(){

EntityBtn_Spell_Fire1 = EntityBtn_Spell.extend({
	
	animSheet: new ig.AnimationSheet( 'media/Btn_Fire1_Mk1.png', 75, 75 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
	}
});

});