ig.module(
	'game.entities.deity'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityDeity = ig.Entity.extend({
	
	size: {x:10, y:10},
	
	Deity_Level: 1,
	
	// Faith System
	Faith_Total: 0,
	Faith_Current: 0,
	Faith_Goal: 50,
	
	// Divinity System
	Divinity_Max: 5,
	Divinity_Current: 5,
	faithMeter: null,
	divinityMeter: null,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.setFaithMeter();
		this.setDivinityMeter();
		
		
	},
	
	setFaithMeter: function() {
		// Initialize Faith Meter UI
		this.faithMeter = ig.game.spawnEntity( 'EntityUI_FaithMeter', 524, 664 );
		this.faithMeter = ig.game.getEntitiesByType( 'EntityUI_FaithMeter' ) [0];
		this.faithMeter.maxVal = this.Faith_Goal;
		this.faithMeter.currentVal = this.Faith_Current;
	},
	
	setDivinityMeter: function() {
		// Initialize Divinity Meter UI
		this.divinityMeter = ig.game.spawnEntity( 'EntityUI_DivinityMeter', 524, 716 );
		this.divinityMeter = ig.game.getEntitiesByType( 'EntityUI_DivinityMeter' ) [0];
		this.divinityMeter.maxVal = this.Divinity_Max;
		this.divinityMeter.currentVal = this.Divinity_Current;
	}
});

});