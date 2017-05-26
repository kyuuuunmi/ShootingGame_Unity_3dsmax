#pragma strict
var skin : GUISkin;

function Start () {

}

function Update () {

}

function loadApp(){
		Application.LoadLevel("Stage02");
}

function OnGUI()
{
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	GUI.Label(Rect(0, 0, sw, sh/4), "Stage01", "UpperLeftt");
}