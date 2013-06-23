ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity',
	'game.entities.UI_Meter'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({
	
	size: {x:10, y:10},
	
	FaithLevel: 1,
	Faith_Goal: 50,
	Faith_Current: 0,
	Divinity_Max: 5,
	Divinity_Current: 5,
	faithMeter: null,
	divinityMeter: null,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		// Initialize Faith Meter UI
		this.faithMeter = ig.game.spawnEntity( 'EntityUI_FaithMeter', 524, 664 );
		this.faithMeter = ig.game.getEntitiesByType( 'EntityUI_FaithMeter' ) [0];
		this.faithMeter.maxVal = this.Faith_Goal;
		this.faithMeter.currentVal = this.Faith_Current;
		
		
		// Initialize Divinity Meter UI
		this.divinityMeter = ig.game.spawnEntity( 'EntityUI_DivinityMeter', 524, 716 );
		this.divinityMeter = ig.game.getEntitiesByType( 'EntityUI_DivinityMeter' ) [0];
		this.divinityMeter.maxVal = this.Divinity_Max;
		this.divinityMeter.currentVal = this.Divinity_Current;
	},
	
	update: function() {
	}
});

});