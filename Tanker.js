class TankerHead {
  constructor(x, y, width, height) {
      var options = {
        isStatic:true,
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;

     World.add(world,this.body);
    }
    display(){

      var angle = this.body.angle;
      var pos = this.body.position;

      angleMode(DEGREES);
      console.log(this.body.angle);

      if(keyIsDown(LEFT_ARROW) && angle > -28 && angle  <= 1){
        angle -= 1
        Matter.Body.setAngle(this.body,angle);
      }
      

      if(keyIsDown(RIGHT_ARROW) && angle >= -28 && angle  < 1){
        angle += 1
        Matter.Body.setAngle(this.body,angle);
      }

      var pos = this.body.position;

      push()
      translate(pos.x,pos.y)
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0,0,this.width,this.height);
      pop()
    };
}

class TankerBody {
  constructor(x, y,radius) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.circle(x,y,radius,options);
     this.radius = radius;

     World.add(world,this.body);
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      var pos = this.body.position
      fill("blue");
      ellipse(pos.x,pos.y,this.radius);
    };
}

class TankerBase {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;

     World.add(world,this.body);
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      var pos = this.body.position
      rectMode(CENTER);
      fill("brown");
      rect(pos.x,pos.y,this.width,this.height);
    };
}
