ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	
	'game.entities.player',
	'game.entities.paddle',
	'game.entities.ball',
	'game.entities.ball_Spell_Fire1',
	'game.entities.enemy',
	'game.entities.Text_Floating',
	'game.levels.main',
	'game.levels.test'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	Player: null,
	
	font1: new ig.Font( 'media/04b03.font.png' ),
	font2: new ig.Font( 'media/04b03.font.png' ),
	font3: new ig.Font( 'media/04b03.font.png' ),
	font_victory: new ig.Font( 'media/04b03.font.png' ),
	defeat: false,
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		ig.input.bind( ig.KEY._1, 'Spell_1' );
		
		ig.input.initMouse();
		this.loadLevel( LevelMain );
		//this.loadLevel( LevelTest );
		
		// Initialize Player Entity
		this.Player = this.spawnEntity("EntityPlayer", -50, 0);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		var paddle = ig.game.getEntitiesByType( EntityPaddle )[0];
		
		// Launch a Fireball spell if player presses the Spell_1 button
		if( ig.input.pressed('Spell_1') ) {
			if (this.Player.Divinity_Current > 0){
				this.spawnEntity( 'EntityBall_Spell_Fire1',  paddle.pos.x + (paddle.size.x /2), paddle.pos.y - 50);
				this.Player.Divinity_Current -= 1;
			}
			
		}
		
		// Check to make sure there is at least one ball in play, spawn a new one if not
		var balls = ig.game.getEntitiesByType( 'EntityBall' );
		var numBalls = balls.length;
		
		if (numBalls < 1 && !this.victory && !this.defeat){
			this.spawnEntity( 'EntityBall',  paddle.pos.x + (paddle.size.x /2), paddle.pos.y - 50);
			var newBall = this.entities[this.entities.length -1];
			
			if (newBall.pos.x < 0){
				newBall.pos.x += 50;
			}
			
			if (newBall.pos.x > ig.system.width - 50) {
				newBall.pos.x -= 100;
			}
		}
		
		// Update Meters
		var p = this.Player
		p.faithMeter.currentVal = p.Faith_Current;
		p.divinityMeter.currentVal = p.Divinity_Current;
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		if (this.victory) {
			this.font_victory.draw( "victory", 500, 500, ig.Font.ALIGN.RIGHT );
		}
		
		if (this.defeat) {
			this.font_victory.draw( "You have been defeated", 500, 500, ig.Font.ALIGN.RIGHT );
		}
	},
	
	checkVictory: function() {
		var enemies = ig.game.getEntitiesByType( 'EntityEnemy' );
		var numEnemies = enemies.length;
		
		if (enemies <= 0) {
			var paddle = this.getEntitiesByType( 'EntityPaddle' ) [0];
			var balls = this.getEntitiesByType( 'EntityBall' );
		
			paddle.kill();
			for (var i = 0; i < balls.length; i++){
				balls[i].kill();
			}	
			this.victory = true;
		}
		
		
	},
	
	setDefeat: function() {
		var paddle = this.getEntitiesByType( 'EntityPaddle' ) [0];
		var balls = this.getEntitiesByType( 'EntityBall' );
		
		paddle.kill();
		for (var i = 0; i < balls.length; i++){
			balls[i].kill();
		}
		this.defeat = true;
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 1
ig.main( '#canvas', MyGame, 60, 1024, 768, 1 );

});
