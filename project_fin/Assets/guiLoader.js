#pragma strict

private var timer : float;

function Start () {

	timer = 3.0;
	enabled = false;

}

function Update () {

	timer -= Time.deltaTime;

	if(timer< 0){
		
			enabled = true;	
	
	}

}

