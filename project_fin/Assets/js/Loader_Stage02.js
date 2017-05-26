#pragma strict
var skin : GUISkin;

function Start () {

}

function Update () {

}


function loadApp(){
		Application.LoadLevel("Stage03");
}
function OnGUI()
{
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	GUI.Label(Rect(0, 0, sw, sh/4), "Stage02", "UpperLeftt");
}