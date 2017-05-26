#pragma strict
var colorName : String;
var explosionPrefab : GameObject;


private var hit : boolean;
private var killTimer : float;

function Start () {

	hit = false;
}

function YouAreHit(){


	if(!hit){
		hit = true;
		killTimer = 0.4;
		
		rigidbody.AddForce(Vector3.up *15.0, ForceMode.Impulse);
	}	

}

function Update () {

	if(!hit)
		return;

	killTimer -= Time.deltaTime;
	
	if(killTimer <= 0.0)
	{
		var gameController : GameObject = GameObject.FindWithTag("GameController");
		gameController.SendMessage("OnDestroyBox", colorName);
		Instantiate(explosionPrefab, transform.position, transform.rotation);
		Destroy(gameObject);
	}


}

