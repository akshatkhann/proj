

class Plinoko{

  
    
    constructor(x, y,radius) {
       
        var options = {
           isStatic:true
           
        }

this.body=Bodies.circle(x,y,radius,options)
this.radius=radius

World.add(world,this.body)





    } 

display(){
   for(var i= 10;i<1150;i=i+100){
    push()

    fill("blue")
    translate(i,this.body.position.y)
    rotate(this.body.angle) 
   ellipseMode(RADIUS)
        ellipse(0,0, this.radius,this.radius);

   pop()
   }
}








    
}












