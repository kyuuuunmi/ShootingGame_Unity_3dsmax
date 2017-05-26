#pragma strict
var skin : GUISkin;

private var timer : float;


function Start () {

	timer = 5.0;

}

function Update () {


	timer -= Time.deltaTime;
	if(timer <= 0.0){
		BroadcastMessage("StartGame");
		enabled = false;
	}

}

function OnGUI(){
	GUI.skin = skin;
	
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	if( timer<= 2.0 && timer > 0.0){
		if(timer<=1.0)
			GUI.color = Color(1,1,1,timer - Mathf.FloorToInt(timer));
		GUI.Label(Rect(sw*2/5, sh*2/5, sw*1/4, sh/6),"", "GameStart");
	}
	else if(timer <= 3.0 || timer > 0.0){
	var text : String = Mathf.CeilToInt(timer-2).ToString();
	GUI.color = Color(1,1,1,timer - Mathf.FloorToInt(timer));
	GUI.Label(Rect(0,sh/4,sw, sh/2),text, "Timer");
	}
	else if(timer > 5.0 || timer < 0.0)	return;
	

}