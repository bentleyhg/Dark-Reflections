ig.module(
	'game.entities.PH_RectBadGuy_LV2'
)
.requires(
	'game.entities.enemy'
)
.defines(function(){

EntityPH_RectBadGuy_LV2 = EntityEnemy.extend({
	
	size: {x:200, y:50},
        health: 3,
	
	animSheet: new ig.AnimationSheet( 'media/PH_RectBadGuy_LV2.png', 200, 50 ),
});

});