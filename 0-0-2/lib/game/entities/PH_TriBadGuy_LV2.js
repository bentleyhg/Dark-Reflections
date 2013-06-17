ig.module(
	'game.entities.PH_TriBadGuy_LV2'
)
.requires(
	'game.entities.enemy'
)
.defines(function(){

EntityPH_TriBadGuy_LV2 = EntityEnemy.extend({
	
	size: {x:50, y:50},
        health: 3,
	
	animSheet: new ig.AnimationSheet( 'media/PH_TriBadGuy_LV2.png', 50, 50 ),
});

});