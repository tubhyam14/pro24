class Rubber{
  constructor(x,y,r){
	  
var options={
  restitution: 0.3,
  friction:5,
  density:1 };
	
 this.x=x;
 this.y=y;
 this.r=r
 this.body=Bodies.circle(this.x, this.y,this.r, options);
 World.add(world, this.body);

  }	
 display(){
	
var rubberpos=this.body.position;

	 
	 
push()
translate(rubberpos.x, rubberpos.y);
strokeWeight(4);
stroke("black");
fill(green);
			
ellipseMode (RADIUS)
ellipse(0,0,this.r)
pop()
	}

}
