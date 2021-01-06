class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:17,
            stiffness:0.04
        }
        this.sling=Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
       this.sling.bodyA=null;
    }
    display(){
        var posA=this.sling.bodyA.position;
        var posB=this.sling.pointB;
        stroke("white")
        strokeWeight(5)
        line(posA.x,posA.y,posB.x,posB.y);
        //console.log(this.body)


    }
}