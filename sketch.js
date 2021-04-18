const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {

    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)  {
        background(backgroundImg);
        }

    Engine.update(engine);

    // write code to display time in correct format here

}

async function getBackgroundImg(){

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON=await response.json();
    console.log(responseJSON);
    var dateTime=responseJSON.datetime;
    var hour=dateTime.slice(11,13);
    if(hour>=06&&hour<=8)    {
        bg="sunrise1.png";
    }
    else if(hour>=8&&hour<=10)  {
        bg="sunrise2.png";
    }
    else if(hour>=10&&hour<=12)  {
        bg="sunrise3.png";
    }
    else if(hour>=12&&hour<=14)  {
        bg="sunrise4.png";
    }
    else if(hour>=14&&hour<=16)  {
        bg="sunrise5.png";
    }
    else if(hour>=16&&hour<=18)  {
        bg="sunrise6.png";
    }
    else if(hour>=18&&hour<=20)  {
        bg="sunset7.png";
    }
    else if(hour>=20&&hour<=22)  {
        bg="sunset8.png";
    }
    else if(hour>=22&&hour<=00)  {
        bg="sunset9.png";
    }
    else if(hour>=00&&hour<=02)  {
        bg="sunset10.png";
    }
    else if(hour>=02&&hour<=04)  {
        bg="sunset11.png";
    }
    else{
        bg="sunset12.png";
    }
    backgroundImg=loadImage(bg);
}
