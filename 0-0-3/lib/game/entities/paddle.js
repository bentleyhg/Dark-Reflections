ig.module(
    'game.entities.paddle'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPaddle = ig.Entity.extend({
	
	size: {x:200, y:30},
	collides: ig.Entity.COLLIDES.FIXED,
	
	animSheet: new ig.AnimationSheet( 'media/Paddle_Mk1.png', 200, 30 ),
        
	init: function( x, y, settings ) {
		this.parent( x, y, settings )
		
		this.addAnim( 'idle', 1, [0] );
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		this.pos.x = ig.input.mouse.x - (this.size.x / 2);
		
		// Check to see if the paddle has moved off the screen, and shift back
		// accordingly
		if (this.pos.x < (this.size.x / 2)){
			this.pos.x = 4;
		}
		
		if (this.pos.x > ig.system.width - (this.size.x) - 6){
			this.pos.x = ig.system.width - (this.size.x ) - 4;
		}
	},
	
	collideWith:  function(other, axis) {
		if( other instanceof EntityBall ){
			
			// -------------------------------------------------------------
			// Basic calculation based on distance between paddle center and
			// ball center
			// -------------------------------------------------------------
			var distance = (this.pos.x + (this.size.x / 2)) - (other.pos.x + (other.size.x /2));
			var sign = -1;
			
			if (distance < 0) {
				sign = 1;
				distance *=-1;
			}
			
			// Figure out which direction has the highest velocity to set the baseline
			
			if (Math.abs(other.vel.x) > Math.abs(other.vel.y)){
				var baseline_vel = Math.abs(other.vel.x);
			}else{
				baseline_vel = Math.abs(other.vel.y);
			}
			
			if (baseline_vel < other.base_vel){
				baseline_vel = other.base_vel;
			}
						
			if (distance > 0 && distance < 10){
				// bounce at 5 degrees
				// 1 in  11.43 Ratio
				
				other.vel.y = baseline_vel *-1;
				other.vel.x = (baseline_vel / 11.43) * sign;
			}
			
			if (distance > 10 && distance < 20){
				// bounce at 10 degrees
				// 1 in  5.6713 Ratio
				
				other.vel.y = baseline_vel *-1;
				other.vel.x = (baseline_vel / 5.6713) * sign;
			}
			
			if (distance > 20 && distance < 30){
				// bounce at 20 degrees
				// 1 in  2.7475 Ratio
				
				other.vel.y = baseline_vel *-1;
				other.vel.x = (baseline_vel / 2.7475) * sign;
			}
			
			if (distance > 30 && distance < 40){
				// bounce at 30 degrees
				//  1 in  1.7321 Ratio
				
				other.vel.y = baseline_vel *-1;
				other.vel.x = (baseline_vel / 1.7321) * sign;
			}
			
			if (distance > 40 && distance < 50){
				// bounce at 40 degrees
				//  1 in  1.1918
				
				other.vel.y = baseline_vel *-1;
				other.vel.x = (baseline_vel / 1.1918) * sign;
			}
			
			if (distance > 50 && distance < 60){
				// bounce at 50 degrees
				// 1 in  0.8391 Ratio
				
				other.vel.y = (baseline_vel * 0.8391) * -1;
				other.vel.x = baseline_vel * sign;
			}
			
			if (distance > 50 && distance < 60){
				// bounce at 60 degrees
				// 1 in  0.57735 Ratio
				
				other.vel.y = (baseline_vel * 0.57735) * -1;
				other.vel.x = baseline_vel * sign;
			}
			
			if (distance > 60 && distance < 70){
				// bounce at 70 degrees
				// 1 in  0.36397 Ratio
				
				other.vel.y = (baseline_vel * 0.36397) * -1;
				other.vel.x = baseline_vel * sign;
			}
			
			if (distance > 70){
				// bounce at 75 degrees
				// 1 in  0.26795 Ratio
				
				other.vel.y = (baseline_vel * 0.26795) * -1;
				other.vel.x = baseline_vel * sign;
			}
			
			// -------------------------------------------------------------
			// Advanced calculation based on angle between paddle and ball
			// ----- Still Researching
			// -------------------------------------------------------------
			
			/*
			// calculate bounce angle
			var run = (this.pos.x + (this.size.x / 2)) - other.pos.x;
			var rise = (this.pos.y + (this.size.y / 2)) +  - other.pos.y;
			
			var angle = Math.atan(rise/run);
			angle = angle * (180 / Math.PI);
			
			
			other.vel.y = 300 / (1 / Math.tan(angle));
			if(other.vel.y > 0){
				other.vel.y *= -1;
			}
			//alert("Vel y =" + other.vel.y);
			*/
		}
	}
});

});