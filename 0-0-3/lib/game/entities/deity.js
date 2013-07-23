ig.module(
	'game.entities.deity'
)
.requires(
	'impact.entity',
	'game.entities.Spell_Fire1',
	'game.entities.Spell_Restoration1'
	
)
.defines(function(){

EntityDeity = ig.Entity.extend({
	Deity_Level: 1,
	
	// Faith System
	Faith_Total: 0,
	Faith_Current: 0,
	Faith_Goal: 50,
	Faith_LevelGoals: [
		50, 100, 125, 175, 200,
		225, 275, 320, 360, 410,
		500, 615, 750, 885, 1010,
		1270
	],
	
	// Divinity System
	Divinity_Max: 5,
	Divinity_Current: 5,
	Divinity_Regen: 0,
	Divinity_RegenVal: 1,
	Divinity_RegenTime: 60 * 3,
	
	//spellbook
	spellbook: null,
	
	//village
	Village: null,
	
	init: function() {
		this.spellbook = [];
		this.setSpell(new EntitySpell_Fire1());
		this.setSpell(new EntitySpell_Restoration1());
		
		this.Village = ig.game.spawnEntity("EntityVillage", 0, 520);
		
	},
	
	update: function(){
		this.parent();
		this.Divinity_Regen++;
		if (this.Divinity_Regen >= this.Divinity_RegenTime){
			ig.game.changeDivinity(this.Divinity_RegenVal);
			console.log("Divinity Regen");
			this.Divinity_Regen = 0;
		}
		
	},
	
	setSpell: function(spell) {
		this.spellbook.push(spell);
	},
	
	checkEXP: function() {
		if (this.Faith_Current >= this.Faith_Goal){
			this.levelUp();
		}
	},
	
	levelUp: function() {
		this.Faith_Total += this.Faith_Current;
		this.Faith_Current -= this.Faith_Goal;
		this.Deity_Level++;
		this.Faith_Goal = this.Faith_LevelGoals[this.Deity_Level - 1];
		
		var fm = ig.game.UI.faithMeter;
		fm.maxVal = this.Faith_Goal;
                fm.currentVal = this.Faith_Current;
		
	}
});

});