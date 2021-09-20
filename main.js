canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_images=["nasa1.png","nasa2.png" ,"nasa3.png" , "nasa4.png"];

random_number=Math.floor(Math.random()*4);
console.log (random_number)
rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

background_image = nasa_images[random_number];
rover_image = "rover.png";

function add(){

background_img = new Image();
background_img.onload=uploadbackground;
background_img.src=background_image;

rover_img = new Image();
rover_img.onload=uploadrover;
rover_img.src=rover_image;
}

function uploadbackground(){

ctx.drawImage(background_img , 0 , 0, canvas.width , canvas.height);
}

function uploadrover(){

    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
    }

    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){

        key_press = e.keyCode;
        console.log(key_press);

        if (key_press=="38"){

            up();
            console.log("up");
        }

        if (key_press=="40"){

            down();
            console.log("down");
        }
        if (key_press=="37"){

            left();
            console.log("left");
        }
        if (key_press=="39"){

            right();
            console.log("right");
        }

    }

    function up() {

if( rover_y >=0){

    rover_y=rover_y-10;

console.log("when the up arrow key is pressed,x="+ rover_x + "y=" + rover_y);
uploadbackground();
    uploadrover();

}
    }

    function down(){
if ( rover_y <=500){

    rover_y=rover_y+10;
    console.log("when the down arrow key is pressed,x=" + rover_x + "y=" + rover_y);
uploadbackground();
uploadrover();
}
}   

function left(){
    if ( rover_x >=0){
    
        rover_x=rover_x-10;
        console.log("when the left arrow key is pressed,x=" + rover_x + "y=" + rover_y);
    uploadbackground();
    uploadrover();
    }
    }   

    function right(){
        if ( rover_x <=700){
        
            rover_x=rover_x+10;
            console.log("when the down arrow key is pressed,x=" + rover_x + "y=" + rover_y);
        uploadbackground();
        uploadrover();
        }
        }   
    