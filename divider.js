class Divider{

    constructor(x, y,width,height) {
        var options = {
           
            isStatic:true
        }

this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
World.add(world,this.body)






    } 

display(){
   

    for(var i= 10;i<1150;i=i+100){
    rectMode(CENTER)
 
    rect(i,this.body.position.y ,this.width,this.height);

    }
}








    
}