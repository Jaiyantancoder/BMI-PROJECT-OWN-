var heightinput,weightinput;
var weightval,heightval;
var heightwe;
var bmi,bmitxt;

function setup(){
canvas = createCanvas(1000,800);   

//Creating inputs
weightinput = createInput("Weight (in kgs)");
heightinput = createInput("Height (in m)");

}

function draw(){
    
background(89,81,124); 

//If statement to display bmi
if(bmi >1&& bmi<100000){

push ();
textSize(20);
stroke (200,1000,700);
text ("Your BMI : "+bmi,440,487);
pop ();

}

//Positioning the inputs
heightinput.position(446,297);
weightinput.position(446,398);

//Storing the data from the userinput
weightval = weightinput.value();
heightval = heightinput.value();

//BMI FORMULA
heightwe = heightval*heightval;
bmi = weightval/heightwe;

//Text for heading
textSize(30);
stroke (281,19,10);
text("BMI CALCULATOR",400,101);

drawSprites();

}   

