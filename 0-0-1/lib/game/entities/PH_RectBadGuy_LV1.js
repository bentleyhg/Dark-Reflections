ig.module(
	'game.entities.PH_RectBadGuy_LV1'
)
.requires(
	'game.entities.enemy'
)
.defines(function(){

EntityPH_RectBadGuy_LV1 = EntityEnemy.extend({
	
	size: {x:200, y:50},
	
	animSheet: new ig.AnimationSheet( 'media/PH_RectBadGuy_LV1.png', 200, 50 ),
});

});