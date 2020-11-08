class Constraints{
    
    constructor(bodyA,bodyB,offsetX,offsetY){
      this.offsetX=offsetX;
      this.offsetY=offsetY;
      this
        var option = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length:150
        }  
        this.constraint= Constraint.create(option);
        World.add(world,this.constraint);
      
    }

    display(){
        var pointA=this.constraint.bodyA.position;
        var pointB=this.constraint.bodyB.position;
            
  
        strokeWeight(3);
        fill("white")
        line (pointA.x,pointA.y,pointB.x,pointB.y);
       
    }
}