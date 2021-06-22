//Create variables here
dog, happyDog, database, foodS, foodStock; 

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png"); 
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  console.log(database);  
  foodStock= database.ref('/Food');
  foodStock.on("value",readStock);
  
 dog = createSprite(200,200,30,20);
 dog.addImage(dog);
 dog.scale = 0.5;
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  //add styles here

//Print foodStock from the database 
textSize (50); 
fill ("black"); 

function realStock(data){
  foodS=data.val();
}
//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
}



