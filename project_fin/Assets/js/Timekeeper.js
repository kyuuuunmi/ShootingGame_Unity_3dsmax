#pragma strict
var gameLength : float;
var skin : GUISkin;

private var elapsed : float;

function StartGame(){
	enabled = true;
}

function Start () {

}
function OnGUI(){

	GUI.skin = skin;
	var min : int;
	var sec : int;
	

	// 숫자 거꾸로 
	sec = (gameLength - elapsed) % 60;
	min = (gameLength - elapsed) / 60;
	
	var txt : String;
	
	if(min < 10)
		txt += "0"+min;
		else txt += min;
		
	txt += ":";
	
	if(sec < 10)
		txt += "0"+sec;
		else txt += sec;
	

	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	
	GUI.Label(Rect(sw*27/32,sh*4/5,sw/9, sh/6), txt , "TimeCounter");
}

function Update () {


	elapsed += Time.deltaTime;
	
	if(elapsed>= gameLength)
	{
	
		BroadcastMessage("TimeUp");
	//	GameObject.FindWithTag("MainCamera").SendMessage("TimeUp");
		enabled = false;
		
	
	}


}