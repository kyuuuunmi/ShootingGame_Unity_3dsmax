#pragma strict


// ghost 수 제어 
var ghostMax : int;


function TimeUp(){
	enabled = false;
}

function Start () 
{

	var ghostGenerator : GameObject = GameObject.FindWithTag("GhostGenerator");
	ghostGenerator.SendMessage("SetMax",ghostMax);
	
	}

function Update () 
{
	
}

/*

function GhostClear(){
	// 끗ㄲ~
	
	yield WaitForSeconds(3.0);
	while(!Input.GetButtonDown("Fire1"))	yield;
	
	var stageLoader : GameObject = GameObject.FindWithTag("StageLoader");
	stageLoader.SendMessage("loadApp");
	
	//Application.LoadLevel("Stage02");
}


*/