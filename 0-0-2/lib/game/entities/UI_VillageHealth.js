ig.module(
	'game.entities.UI_VillageHealth'
)
.requires(
	'game.entities.UI_Meter'
)
.defines(function(){

EntityUI_VillageHealth = EntityUI_Meter.extend({
	maxVal: 5,
	currentVal: 5,
	
});

});