ig.module(
	'game.entities.Text_Floating'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityText_Floating = ig.Entity.extend({
	
	size: {x:170, y:30},
	font: new ig.Font( 'media/CrystalWarriors.font.png' ),
	collides: ig.Entity.COLLIDES.NEVER,
	start_y: 0,
	lifespan: 50,
	displayTxt: "999",
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.start_y = y;
                this.maxVel.y = 300;
		this.vel.y = -50;
	},
	
	update: function() {
		this.parent();
		this.distanceMoved();
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		this.font.draw( this.displayTxt, this.pos.x, this.pos.y);
	},
	
	distanceMoved: function(){
		if (this.pos.y < (this.start_y - this.lifespan)){
			this.kill();
		}
	}
});

});