#pragma strict


private var timer : float;


function Start () {

	timer = 2.0f;
}

function Update () {

	timer -= Time.deltaTime;
	
	if(timer < 0.0){
		Destroy(gameObject);
	
	}



}