class Polygon{
    constructor(x,y,r){
        var options={
            isStatic:false
        }
        
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r*2, options)
        this.image=loadImage("polygon.png")
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.x,this.y, this.r,this.r);
       
 
        
    }
}