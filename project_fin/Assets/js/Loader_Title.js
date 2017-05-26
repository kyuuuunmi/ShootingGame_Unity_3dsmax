#pragma strict

var skin : GUISkin;
private var timer : float;
function Start () {

	timer = 10;
}


function Update () {

	if(Input.GetButtonDown("Jump"))
	{
		Application.LoadLevel("Stage01");
	}
}



function OnGUI(){

	timer -= Time.deltaTime;
	
	if(timer<1){
	

	GUI.skin = skin;
	
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	

		if(timer>=0)
			GUI.color = Color(1,1,1,Mathf.CeilToInt(timer)-timer);
	
	GUI.Label(Rect(sw*5/7,sh*4/5,sw*1/4,sh*1/8), "", "HitSpace");

	}
}