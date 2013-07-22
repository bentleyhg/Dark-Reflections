ig.module(
	'game.entities.button'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityButton = ig.Entity.extend({
	
	size: {x:75, y:75},
	font_default: new ig.Font( 'media/CrystalWarriors.font.png' ),
	displayTxt: "999",
	currentFont: this.font_default,
	collides: ig.Entity.COLLIDES.NONE,
	
	animSheet: new ig.AnimationSheet( 'media/Btn_Default_Mk1.png', 75, 75),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
                this.addAnim( 'idle', 1, [0] );
		this.currentFont = this.font_default;
	},
	
	update: function() {
		this.parent();
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		this.currentFont.draw( this.displayTxt, (this.pos.x + 20), (this.pos.y + 20));
	},
	
	wasClicked: function() {
		if(ig.input.mouse.x > this.pos.x && ig.input.mouse.y > this.pos.y){
			if(ig.input.mouse.x < (this.pos.x + this.size.x) && ig.input.mouse.y < (this.pos.y + this.size.y)){
				this.btnAction();
			}
		}
	},
	
	btnAction: function(){
		console.log("button clicked!");
	}
});

});