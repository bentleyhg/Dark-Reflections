ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	
	'game.entities.paddle',
	
	'game.levels.main'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		
		ig.input.initMouse();
		this.loadLevel( LevelMain );
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
		var balls = ig.game.getEntitiesByType( 'EntityBall' );
		var numBalls = balls.length;
		
		var paddle = ig.game.getEntitiesByType( EntityPaddle )[0];
		
		if (numBalls < 1){
			this.spawnEntity( 'EntityBall',  paddle.pos.x, paddle.pos.y - 50)
		}else{
			for (var i = 0; i < numBalls; i++){
				var ball = ig.game.getEntitiesByType( EntityBall )[i];
				
				if (ball.pos.y + ball.size.y/2 > 550 ){
					ball.kill();
				}	
			}
		}
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 1
ig.main( '#canvas', MyGame, 60, 1024, 768, 1 );

});
