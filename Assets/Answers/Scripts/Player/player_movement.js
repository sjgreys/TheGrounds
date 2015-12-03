//----------This Script Handles The Players Movement/Jumping----------//
#pragma strict
//---#pragma strict is useful in that it will tell you when even the smallest error
//occurs in a script (even if it isn't something that keeps the game from running

//---A quick not on Scripts. This Script is in the Java language, and is simply called
//Javascript. Unity also supports C#, and boo (a script desinged for unity). I prefer
//Java, though it and C# have their uses. Boo is not something I would use, as it
//is a bit more limited. You are free to use whatever you want, though sticking with
//Java makes it easier for us instead of having to translate back and forth.

//---Before all 'function[s]' is a good place to call your variables

//---Variables are important in that they define parameters for your script such as
//speed, health, magic, other object/scripts, sprites, etc.

var speed : float; //--Each variable must have a Definition. In this example, we use
//'float.' A float is simply a number that can contain a decimal place (1.2, 5.5, and even
//can be a whole number like just 8). The variable speed will be used to alter the speed
//at which our player moves

//---As you have probably noticed in all games they have the number of frames per second
//that they run, or 'FPS.' Such as: 60 fps, or like in Spark, 24 fps. This is essentially
//the number of times per second that the whole game loops through every line of code,
//draws every texture, and all other operations.

//---A 'function' defines a type of program essentially inside of the code. Each function
//carries a spefic type of activity within each Main Game Loop(the individual frames within
//the total 'fps' count).

//---The 'Start' function is ran only once when the Game Object is created. This is a good
//place to put code that you only need to run initially, such as defining variables that
//will remain static throughout the game. I will show an example within the function.

function Start () {
 //--- speed *= 2; ---THIS CODE SNIPPET IS COMMENTED OUT SO THAT IT DOESN'T ACTUALLY EFFECT THE VARIABLE
 // AND IS FOR DEMONSTRATION PURPOSES ONLY.
 
//---Here what we are doing (this isn't too typical) is multiplying our speed
//variable by 2. So say we set the speed to 2 withing the Unity editor, once the game is
//started it will jump to 4, and remain there until the game is stopped. If we did this same
//line within the Update function it would be multiplied every frame, and within the first
//second, if the game is running at 60fps, it will multiply itself exponentially, meaning
//2*2*2*2*2*2*....2 until it has ran 60 frames resulting in over a trillion. Unit will say
//say something like Speed = 5.76e+17 or some other variation meaning way over the limit.
//However, since we define it within the Start function, it is only called once at the creation
//of the object, and therfore the result is only multiplied once by 2, and we then continue
//to the 'Update' loop.
}

//---The 'Update' function is our main loop within this Script. It is where you would put
//any line that you wish to have ran every frame, such as Player Movement, button presses,
//tracking variables like health, or magic, and essentially all lines of code; however, there
//are other types of Update functions I will get into later.
function Update () {
//The first action we will get into is an 'if' loop. This is the most common loop within
//scripting. What it does is give a condition, or conditions to run the code within it's
//brackets. Brackets are these little symbols: '{' is our opening, and '}' is our closing.

//---In this line what we are doing is gathering our directional inputs: Left and Right and
//then, within each loop runing some code that allows us to move the Player.

//---The first if 'Statement' or line is for our Left movement represented by the 'Horizontal'
//Input. Unity, by default, has default Input Commands, two of which are Horizontal and Vertical
//which are mapped to the WASD keys, and the arrow keys, so using either set are allowed.
//These particular input are calculated by an 'Axis' instead of a 'Button' or 'Key' press.
//Imagine having a joystick and as you move it it rotates instead of being 'Pressed.'

	if(Input.GetAxis('Horizontal') < -0.1){
		//---The first part of the if Loop, which always must be encased by '()' directly after the if command
		//is 'Input.GetAxis.' Input tells unity we are about to check some sort of button or mouse press. It is the
		//standard calling command to check for an input. 'GetAxis' lets Unity know we are about to recieve an input
		//based on an Axis, which we will get into next, as opposed to a 'Key' or 'Button' press. 
		//We will get into 'Key' and 'Button' in the next few lessons.
		
		//---As you can see I used the 'Less Than' symbol followed by '-.01.' Axis type
		//Inputs are calculated from -1 to 1. The reason I used -0.1 isntead of just 0
		//is so that it gives room for error, since most joysticks don't sit perfectly at
		//0, guarateeing that the user is pressing the stick one way or the other.
		
		transform.position.x -= speed * Time.deltaTime; 
		//---This line has a few very import commands. The first is 'transform.' 
		//When used in this manner, as simply transform	 without and preceding definition, we are talking 
		//about the object that this script is attached to. There are two commands to talk about the Game 
		//Object this script is attached to, transform and gameObject (both case sensitive). transform is referring
		//to the attributes of the object such as it's scale, position, and rotation. When you
		//click on an Object in Unity and look to the right hand side of the screen where it displays
		//the Objects properties, transform is typically the first one. It contains all 3 of those attributes.
		//gameObject on the other hand deals with the object itself. transform can usually work for a lot of
		//the same commands as gameObject would, like when getting the name of the object.
		//(transform.name) or (gameObject.name) will give you the same results;---//
		
		//---So since we tell the code to focus on the transform of the Object, we then call the command 'position'
		//allowing us to alter the position of the Object, obviously. If you use gameObject.position it will still work
		//though Unity is then forced to run another line of code behind the scenes to add the 'transform' command afterwards
		//so that it can affect the transform, so to save some computing efforts defining transform is good practice.
		//We then have '.x' which essentially is only affecting the transform on the 'X' axis. 3D space is defined by
		//3 Axes: X, Y, and Z where X is left to right, Y is Up to Down, and Z is forward to Back. Since this game is
		//Primarily 2D we are only using the X and the Y axes.
		
		//---The definition of this line of code altogether, before the '-=' sign is allowing us to ultimately target
		//the Game Objects x position in the game world. The '-=' sign itself means that each time this code is ran
		//we are subtracting the following amount from the x position. 
		//You can also use transform.position.x = transform.position.x - speed * Time.deltaTime; though it is much
		//easier to put the '-' symbol before the '=' and perform the same operation. This is also true if you were to use
		// += (plus equals), *= (times equals), or /= (divided by equals). 
		//These symbols: +(plus), -(minus), *(times), /(divided by) are used in all cases through all scripts to do simple math
		//algorithms.
		
		//---Next is the 'speed * Time.deltaTime' portion. What this is doing is bascially creating an amount to move our object
		//by. We could use just '-= speed' however, depeding on the FPS the game is running at we will get varying amounts, since this
		//code snippet runs each frame. To make sure we have a uniform amount no matter the FPS we use the command 'Time.deltaTime'
		//which is a percentage that varies depending on the FPS and allows whatever is being multiplied to be the exact same amount
		//no matter the speed of the game. The exact number that this comman represents I am not sure, though it is obviously very
		//small, something like .01 (varying depending on the FPS) because it will make the speed variable appear to move only a fraction
		//of the speed. If we put 10 as our speed variable, we expect it to move 10 spaces in gamespace every frame, though it will
		//really only move maybe 1. You are able to play with the speed variable in real time with in the Unity Editor, within
		//the Object properties, though keep track of the number because once you stop running the game, it returns back to the
		//value it was before you hit play.
		
		//---So hopefully now you have a better understanding of what is happening within that single line of code (though
		//this description made it seem like a lot, it is actually quite simple as you will come to see), we can move on
		//to allowing our player to move to the right. It will be the same line essentially, except we alter a couple points
		//to allow for positive movement, or to the right.
		
		} //---Every loop must have a closing Bracket. This lets it know to only run the code within under these conditions.
		
		//---Now we get positive movement, or movement to the right.
		
		if(Input.GetAxis("Horizontal") > .01){
			transform.position.x += speed * Time.deltaTime;
			
			//---This code appears the same, and it is, except for a couple of points. Instead of the '<' (Less Than) Symbol, we are
			//using '>' (Greater Than). This give us the direction 'Right'. The command we use also affects the X position like the first
			//line; however, we use '+=' to add the next segment instead of subtracting it, giving us positive movement.
		}
	//---This concludes Lesson 1, and hopefully I have explained properly giving you some insight to how Game Loops work, as well as
	//our basic running functions: Start, and Update, and if loops. Feel free to ask away if you have any questions. 
	
	//---In the Next lesson we will cover Jumping, as well as introduce some more uses of the Start function to help us define
	//some aspects of the Game Object dealing with Physics!
}