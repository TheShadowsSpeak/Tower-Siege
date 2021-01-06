class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        var randomNumber=random(0,255)
        var randomblue=random(15,255)
        var randomgreen=random(15,255)
        fill(randomNumber, randomblue,randomgreen);
        var pos=this.body.position;
        rect(pos.x, pos.y, this.width, this.height)
    }
}