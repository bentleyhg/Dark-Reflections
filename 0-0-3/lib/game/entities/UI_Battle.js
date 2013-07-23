ig.module(
	'game.entities.UI_Battle'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityUI_Battle = ig.Entity.extend({
	
        faithMeter: null,
        FM_X: 520,
        FM_Y: 660,
        
	divinityMeter: null,
        DM_X: 520,
        DM_Y: 712,
        
        vHealthMeter: null,
        VHM_X: 0,
        VHM_Y: 618,
        
        spellbar: null,
        SPELL_X: 15,
        SPELL_Y: 670,
        SPELL_SPACING: 85,
        max_spells: 5,
        
	init: function(x, y, settings) {
            this.parent(x, y, settings);
            
            this.setFaithMeter();
	    this.setDivinityMeter();
            this.setVillageHealth();
            this.setSpellbar();
	},
        
        setFaithMeter: function() {
		// Initialize Faith Meter UI
		ig.game.spawnEntity( 'EntityUI_FaithMeter', this.FM_X, this.FM_Y );
		this.faithMeter = ig.game.getEntitiesByType( 'EntityUI_FaithMeter' ) [0];
                this.faithMeter.maxVal = ig.game.Player.Faith_Goal;
                this.faithMeter.currentVal = ig.game.Player.Faith_Current;
	},
	
	setDivinityMeter: function() {
		// Initialize Divinity Meter UI
		ig.game.spawnEntity( 'EntityUI_DivinityMeter', this.DM_X, this.DM_Y );
		this.divinityMeter = ig.game.getEntitiesByType( 'EntityUI_DivinityMeter' ) [0];
                this.divinityMeter.maxVal = ig.game.Player.Divinity_Max;
                this.divinityMeter.currentVal = ig.game.Player.Divinity_Current;
	},
        
        setVillageHealth: function(){
            // Initialize Village Health Meter UI
		ig.game.spawnEntity( 'EntityUI_VillageHealth', this.VHM_X, this.VHM_Y );
		this.vHealthMeter = ig.game.getEntitiesByType( 'EntityUI_VillageHealth' ) [0];
                this.vHealthMeter.maxVal = ig.game.Player.Village.max_health;
                this.vHealthMeter.currentVal = ig.game.Player.Village.health;
                
        },
        
        setSpellbar: function (){
            var player = ig.game.Player;
            
            for(var i = 0; i < this.max_spells; i++){
                var icon = new ig.AnimationSheet( 'media/Btn_Spell_Mk1.png', 75, 75 );
                if(i < player.spellbook.length){
                    // set the appropriate icon for the eqipped spell
                    icon = player.spellbook[i].myIcon;
                }
                var settings = {animSheet: icon};
                ig.game.spawnEntity("EntityBtn_Spell", this.SPELL_X + (i * this.SPELL_SPACING), this.SPELL_Y, settings);
            }
        }
});

});