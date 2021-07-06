class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }

      this.visibility = 225;
     
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      this.image=loadImage("block.png")
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      
      if(this.body.speed < 3) { // display image using image instruction// added line 19 and 20
        imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width, this.height);

      }
      
      else {
        World.remove(world, this.body);

        push();
        this.visibility = this.visibility - 5;
        tint(255, this.visibility)
        image(this.image, this.body.position.x, this.body.position.y,this.width, this.height)
        pop();
      }
    }
}
/*
class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.visiblity = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //add image
      this.image= loadImage("block.png")
      World.add(world, this.body);
      
    }
   
    display(){
      console.log(this.body.speed);
      var pos= this.body.position;
      // condition to display and remove the boxes
      if(this.body.speed <3){
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
      }
    else{
      World.remove(world, this.body);
      // to apply changes to a specific body
      push();
      // reduce the visibility by 5 everytime the display function gets called
      this.visiblity = this.visiblity - 5;
      tint(255,this.visiblity);
      image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
      pop();
    }
  }
}*/