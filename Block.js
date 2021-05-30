class Block{
  constructor(x, y, width, height) {
    this.image= loadImage("Tower-Siege-2-Template-main/block.png")
      var options = {
        
          restitution :0,
          friction :0.0,
          density:0.2
      }
     
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
         //console.log(this.body.speed);
   
    var pos= this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width, this.height);
  
  }
}