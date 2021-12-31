//variável
var box;
var edges;

function setup() {
  createCanvas(400, 400);
  box = createSprite(200, 200, 30, 30);
  box.shapeColor = 'purple';
  edges = createEdgeSprites();
}

function draw() {
  background('orange');

  if(keyIsDown(RIGHT_ARROW)||keyDown("D")){
    box.position.x = box.position.x +5;
  }
  if(keyIsDown(LEFT_ARROW)||keyDown("A")){
    box.position.x = box.position.x -5;
  }
  if(keyIsDown(UP_ARROW)||keyDown("W")){
    box.position.y = box.position.y -5;
  }
  if(keyIsDown(DOWN_ARROW)||keyDown("S")){
    box.position.y = box.position.y +5;
  }
  box.collide(edges[0]);
  box.collide(edges[1]);
  box.collide(edges[2]);
  box.collide(edges[3]);
  drawSprites();
}




