ig.module(
	'game.entities.UI_DivinityMeter'
)
.requires(
	'game.entities.UI_Meter'
)
.defines(function(){

EntityUI_DivinityMeter = EntityUI_Meter.extend({
	size: {x:500, y:50},
	meterImg: new ig.Image( 'media/UI_DivinityMeter_iPad_1px.png' ),
	containerImg: new ig.Image( 'media/UI_FaithMeter_iPad_Container.png' ),
	
	maxVal: 5,
	currentVal: 5,
	
});

});