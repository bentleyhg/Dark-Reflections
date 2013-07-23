ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	
	'game.entities.deity',
	'game.entities.paddle',
	'game.entities.UI_Battle',
	'game.entities.ball',
	'game.entities.ball_Spell_Fire1',
	'game.entities.Btn_Spell',
	'game.entities.button',
	'game.entities.enemy',
	'game.entities.village',
	'game.entities.Text_Floating',
	'game.levels.main',
	'game.levels.test'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	Player: null,
	Paddle: null,
	UI: null,
	
	font1: new ig.Font( 'media/04b03.font.png' ),
	font2: new ig.Font( 'media/04b03.font.png' ),
	font3: new ig.Font( 'media/04b03.font.png' ),
	font_victory: new ig.Font( 'media/04b03.font.png' ),
	Btn_Reset: null,
	defeat: false,
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		ig.input.bind( ig.KEY._1, 'Spell_1' );
		ig.input.bind( ig.KEY._2, 'Spell_2' );
		
		ig.input.bind(ig.KEY.MOUSE1, 'checkClick');
		
		ig.input.initMouse();
		
		this.initLevel();
	},
	
	initLevel: function() {
		this.loadLevel( LevelMain );
		//this.loadLevel( LevelTest );
		
		this.Player = this.spawnEntity("EntityDeity", -50, 0);
		this.UI = new EntityUI_Battle;
		this.Paddle = this.spawnEntity("EntityPaddle", 400, 450);
		this.defeat = false;
		this.victory = false;
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Respond to numbered keys for casting spells
		if( ig.input.pressed('Spell_1') ) {
			this.Player.spellbook[0].cast();
		}
		
		if( ig.input.pressed('Spell_2') ) {
			this.Player.spellbook[1].cast();
		}
		
		var buttons = ig.game.getEntitiesByType( 'EntityButton');
		
		if( ig.input.pressed('checkClick')) {
			for(var i = 0; i < buttons.length; i++){
				buttons[i].wasClicked();
			}
		}
		
		// Check to make sure there is at least one ball in play, spawn a new one if not
		var balls = ig.game.getEntitiesByType( 'EntityBall' );
		var numBalls = balls.length;
		var p = this.Paddle;
		if (numBalls < 1 && !this.victory && !this.defeat){
			this.spawnEntity( 'EntityBall',  p.pos.x + (p.size.x /2), p.pos.y - 50);
			var newBall = this.entities[this.entities.length -1];
			
			if (newBall.pos.x < 0){
				newBall.pos.x += 50;
			}
			
			if (newBall.pos.x > ig.system.width - 50) {
				newBall.pos.x -= 100;
			}
		}
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		if (this.victory) {
			this.font_victory.draw( "victory", 400, 500, ig.Font.ALIGN.RIGHT );
			
		}
		
		if (this.defeat) {
			this.font_victory.draw( "You have been defeated", 400, 500, ig.Font.ALIGN.RIGHT );
		}
	},
	
	checkVictory: function() {
		var enemies = ig.game.getEntitiesByType( 'EntityEnemy' );
		var numEnemies = enemies.length;
		
		if (enemies <= 0) {
			this.victory = true;
			this.endLevel();
		}
	},
	
	
	
	setDefeat: function() {
		this.defeat = true;
		this.endLevel();
	},
	
	endLevel: function() {
		
		// clear away the paddle and ball
		var paddle = this.getEntitiesByType( 'EntityPaddle' ) [0];
		var balls = this.getEntitiesByType( 'EntityBall' );
	
		paddle.kill();
		for (var i = 0; i < balls.length; i++){
			balls[i].kill();
		}
		
		// reinitialize the player entity
		this.Player.kill();
		
		this.Btn_Reset = this.spawnEntity( 'EntityButton',  550, 450);
		this.Btn_Reset.displayTxt = "Reset";
		this.Btn_Reset.btnAction = function(){
			ig.game.initLevel();
		};
	},
	
	changeDivinity: function(change){
		var p = this.Player
		p.Divinity_Current += change;
		this.UI.divinityMeter.currentVal += change;
		
		if(p.Divinity_Current >p.Divinity_Max){
			p.Divinity_Current = p.Divinity_Max;
			this.UI.divinityMeter.currentVal = p.Divinity_Current;
		}
	},
	
	changeFaith: function(change){
		this.Player.Faith_Current += change;
		this.UI.faithMeter.currentVal += change;
		this.Player.checkEXP();
	},
	
	changeVillageHealth: function(change){
		var v = this.Player.Village;
		this.Player.Village.receiveDamage(change);
		this.UI.vHealthMeter.currentVal -= change;
		
		if(v.health > v.max_health){
			v.health = v.max_health;
			this.UI.vHealthMeter.currentVal = v.health;
		}
		
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 1
ig.main( '#canvas', MyGame, 60, 1024, 768, 1 );

});
