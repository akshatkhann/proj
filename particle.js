class Particle{

  
    
        constructor(x, y,radius) {
           
            var options = {
               isStatic:false,
               
            'density':1.0
            }
 
    this.body=Bodies.circle(x,y,radius,options)
    this.radius=radius
   this.color=color(random(0,255),random(0,255),random(0,255))

    World.add(world,this.body)
    
    
    
    
        } 
    
    display(){
       
        push()
       
        fill(this.color)
        translate(this.body.position.x,this.body.position.y)
      
        rotate(this.body.angle) 
       ellipseMode(RADIUS)
            ellipse(0, 0, this.radius,this.radius);
    
       pop()
      
        
       }
    }
    
    
    
    
    
    
    
    
        
    







    
