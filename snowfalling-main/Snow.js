class Snow {
    constructor(x,y){
        var options = {
            friction:0.1,
            restitution:0.1,
        }
        this.snow = Bodies.circle(x,y,20,options);
        this.image=loadImage("snow4.webp");
        this.radius = 20;
        World.add(world,this.snow);
    }

    update(){
        if(this.snow.position.y>height){
            Matter.Body.setPosition(this.snow,{x:random(0,1000),y:random(0,1000)})
        }
    }

    display(){
        fill(0,0,255);
        imageMode(CENTER);
        image(this.image, this.snow.position.x, this.snow.position.y, this.radius, this.radius);
    }

}