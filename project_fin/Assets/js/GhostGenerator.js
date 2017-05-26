#pragma strict


var interval : float;
var ghostPrefab : GameObject;

var ghostNum : int;
private var ghostMax : int;

private var init : boolean;
private var generator :boolean;


private var ghostKilled : int;

private var timer : float;

function Start () {

	timer = interval;
	
	// ghost 초기화 // generator 중지 
	generator = false;
	init = true;
	ghostKilled = 0;
	
}

function Update () {

	if(init){
		var i : int = 0;
		
		while(ghostNum>i){
			makeGhost();
			i++;
		}		
		
		// ghost 초기화 종료  // generator 시작 
		generator = true;
		init = false;
		
	}


	if(generator){

		timer -= Time.deltaTime;

		if(timer<0.0)
		{
			makeGhost();
			AddGhost();
			
			timer = interval;	
		}
			
	}
	
}


function AddGhost(){
	
	ghostNum++;
	if(ghostMax <= ghostNum){
		generator = false;
	}
	
	

}

function makeGhost(){


			var offsx : float = Random.Range(-60.0, 60.0);
			var offsz : float = Random.Range(-20.0, 20.0);
			var position : Vector3 = transform.position + Vector3(offsx,0,offsz);
		
			var prefab : GameObject = ghostPrefab;
		
			Instantiate(prefab, position, Random.rotation);
}

function OnDestroyGhost()
{
	ghostKilled++;
	
	Debug.Log(ghostNum+"DestN");
	Debug.Log(ghostKilled+"DestK");

	if(ghostKilled==ghostMax){
	
		// scene 클리어 
		var referee : GameObject = GameObject.FindWithTag("GameController");

		if(Application.loadedLevelName=="Stage03"){
			referee.SendMessage("StageClear"); 
		}
		else{
			referee.SendMessage("GhostClear"); 
		}
		
	}
}
function StartGame(){	enabled = true; }


function TimeUp(){	enabled = false;}


function SetMax( Max : int){ghostMax = Max; }


