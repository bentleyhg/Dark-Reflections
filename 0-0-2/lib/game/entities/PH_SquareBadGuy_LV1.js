ig.module(
	'game.entities.PH_SquareBadGuy_LV1'
)
.requires(
	'game.entities.enemy'
)
.defines(function(){

EntityPH_SquareBadGuy_LV1 = EntityEnemy.extend({
	
	size: {x:50, y:50},
	FP_Reward: 2,
	
	animSheet: new ig.AnimationSheet( 'media/PH_SquareBadGuy_LV1.png', 50, 50 ),
});

});