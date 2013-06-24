ig.module(
	'game.entities.Btn_Spell'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityBtn_Spell = ig.Entity.extend({
	
	size: {x:75, y:75},
	
	animSheet: new ig.AnimationSheet( 'media/Btn_Spell_Mk1.png', 75, 75 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.addAnim( 'idle', 1, [0] );
	}
});

});