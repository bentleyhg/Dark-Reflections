ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	
	'game.entities.paddle',
	'game.entities.ball',
	'game.entities.enemy',
	
	'game.levels.main',
	'game.levels.test'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	font_victory: new ig.Font( 'media/04b03.font.png' ),
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		
		ig.input.initMouse();
		//this.loadLevel( LevelMain );
		this.loadLevel( LevelTest );
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
		var balls = ig.game.getEntitiesByType( 'EntityBall' );
		var numBalls = balls.length;
		
		var paddle = ig.game.getEntitiesByType( EntityPaddle )[0];
		
		if (numBalls < 1 && !this.victory){
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
		this.font.draw( "Hello World", 0, 400);
		
		if (this.victory) {
			this.font_victory.draw( "victory", 500, 500, ig.Font.ALIGN.RIGHT );
		}
		
	},
	
	checkVictory: function() {
		var enemies = ig.game.getEntitiesByType( 'EntityEnemy' );
		var numEnemies = enemies.length;
		
		var paddle = ig.game.getEntitiesByType( EntityPaddle )[0];
		var ball = ig.game.getEntitiesByType( EntityBall )[0];
		
		if (enemies <= 0) {
			var font_x = paddle.pos.x;
			var font_y = paddle.pos.y;
			
			paddle.kill();
			ball.vel.x = 0;
			ball.vel.y = 0;
			
			ball.kill();
			this.victory = true;
		}
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 1
ig.main( '#canvas', MyGame, 60, 1024, 768, 1 );

});
