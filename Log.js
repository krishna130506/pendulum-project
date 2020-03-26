class Log{
  constructor(x,y,height,width){
    var options={
      isStatic:true    
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y, this.width, this.height);
    fill("blue");
  }
}