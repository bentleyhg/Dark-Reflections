ig.module(
	'game.entities.spell'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntitySpell = ig.Entity.extend({
        
	init: function() {
            
	},
        
        checkCost: function(c){
            if(ig.game.Player.Divinity_Current >= c){
                this.handleCost(c);
                return true;
            }
            return false;
        },
        
        handleCost: function(c){
            ig.game.changeDivinity(-c);
        }
        
        
});

});