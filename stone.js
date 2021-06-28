class Stone{
  constructor(x,y,r){
	  
var options={
  restitution: 0.8,
  friction:0.9,
  density:12 };
	
 this.body = Bodies.rectangle(x, y, 70, 50, options);
    this.width = 150;
    this.height = 70;
    World.add(world, this.body);

  }	
 display(){
	
var pos = this.body.position;
  

    push();
    translate(pos.x, pos.y);
   strokeWeight(3);
    stroke('black')
    fill('brown')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
	}

}
