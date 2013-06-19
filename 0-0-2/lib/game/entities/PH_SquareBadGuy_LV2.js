ig.module(
	'game.entities.PH_SquareBadGuy_LV2'
)
.requires(
	'game.entities.enemy'
)
.defines(function(){

EntityPH_SquareBadGuy_LV2 = EntityEnemy.extend({
	
	size: {x:50, y:50},
	health: 3,
	FP_Reward: 5,
	
	animSheet: new ig.AnimationSheet( 'media/PH_SquareBadGuy_LV2.png', 50, 50 ),
	
});

});