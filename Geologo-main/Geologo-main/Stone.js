class Stone{
	constructor(x,y){
	    var options = {
			'restitution':0.8,	
			'friction': 0.9,
			'density': 12
		}
		this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = 45;
		this.height = 25;
		
        World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			var angle = this.body.angle;
            push();
			translate(stonepos.x, stonepos.y);
			rotate(angle);
            rectMode(CENTER)
            stroke(4);
			stroke("red");
			fill("darkgreen");
            rect(0, 0, this.width, this.height); 
			pop();
	}

}