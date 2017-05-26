#pragma strict

var skin : GUISkin;
private var state : String;
private var loaderFlag : boolean;

function Start () {
	loaderFlag = false;

}

function TimeUp() {

	if(!loaderFlag){
	loaderFlag = true;
	
	state = "Time Up";
	yield WaitForSeconds(3.0);
	state = "";
	yield WaitForSeconds(0.5);
	state = "Exit";
	while(!Input.GetButtonDown("Fire1"))	yield;

	// Level you want to come back
	Application.LoadLevel("Stage00"); 
	}
}

function GameOver() {
	if(!loaderFlag){
	loaderFlag = true;
	
	state = "Game Over";
	yield WaitForSeconds(2.0);
	state = "";
	yield WaitForSeconds(0.5);
	state = "Exit";
	while(!Input.GetButtonDown("Fire1"))	yield;
	
	// Level you want to come back
	Application.LoadLevel("Stage00"); 
	}
}



function GhostClear() {
	if(!loaderFlag){
	loaderFlag = true;
	
	state = "Ghost Clear";
	yield WaitForSeconds(2.0);
	state = "";
	yield WaitForSeconds(0.5);
	state = "Go Next Stage";
	while(!Input.GetButtonDown("Fire1"))	yield;

	BroadcastMessage("loadApp");
	
	}
}

function StageClear(){
	if(!loaderFlag){
	loaderFlag = true;
	
	state = "Stage Clear";
	yield WaitForSeconds(2.0);
	state = "";
	yield WaitForSeconds(0.5);
	state = "One More Game";
	while(!Input.GetButtonDown("Fire1"))	yield;

	BroadcastMessage("loadApp");
	}
}

function OnGUI(){

	GUI.skin = skin;
	
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	if(state == "Time Up")
		GUI.Label(Rect(sw*2/5, sh*2/5, sw*1/4, sh/6), "", "TimeUp");
	else if(state == "Game Over"){
		GUI.Label(Rect(sw*2/5, sh*2/5, sw*1/4, sh/6), "Game Over!!!", "Timer");
	}
	else if(state == "Ghost Clear"){
		GUI.Label(Rect(sw*2/5, sh*2/5, sw*1/4, sh/6), "", "StageClear");
	}	
	else if(state == "Go Next Stage"){
		GUI.Label(Rect(sw*2/5, sh*2/5, sw*1/4, sh/6), "", "ClickToGoNext");
	}
	else if(state == "Stage Clear"){
	
		GUI.Label(Rect(sw*2/5, sh*1/3, sw/5, sh/3), "", "StageClear");		
	}
	else if(state == "One More Game"){
	
		GUI.Label(Rect(sw*2/5, sh*2/5, sw*1/4, sh/6), "Congratulation!! Try Again?", "TryAgain");		
	}
			
	else if(state == "Exit"){
	
		GUI.Label(Rect(sw*2/5, sh*2/5, sw*1/4, sh/6), "", "Retry");		
	}	

}

function Update(){

}