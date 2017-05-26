#pragma strict


private var shoot : boolean;
private var pivot : GameObject;

private var timer : float;
function Go(){


	shoot = true;
}


function Start () {

	pivot = GameObject.FindGameObjectWithTag("pivotCube");

	shoot = false;
	timer = 0;

}

function Update () {

	if(!shoot){
		transform.position = pivot.transform.position;
	
	}
	
	timer += Time.deltaTime;
	if( timer> 5.0 )
		Destroy(gameObject);
	
	
	
}

function OnCollisionEnter(collisionInfo : Collision){

	if(collisionInfo.gameObject.tag =="ghost")
	{
		collisionInfo.gameObject.SendMessage("GhostAreHit");
		Destroy(gameObject);
	}
	

}