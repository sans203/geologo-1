class Hirron{
	constructor(x,y){
	    var options = {
			'restitution':0.8,	
			'friction': 3,
			'density': 30
		}
		this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = 45;
		this.height = 25;
		
        World.add(world, this.body);

	}
	display()
	{
			var hirronpos=this.body.position;		
			var angle = this.body.angle;
            push();
			translate(hirronpos.x, hirronpos.y);
			rotate(angle);
            rectMode(CENTER)
            stroke(4);
			stroke("grey");
			fill("white");
            rect(0, 0, this.width, this.height); 
			pop();
	}

}