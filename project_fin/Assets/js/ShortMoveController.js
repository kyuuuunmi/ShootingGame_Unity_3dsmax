#pragma strict

var velocity : float = 8.0;
var moveDelay : float = 0.1;

private var dieTimer : float = 8.0;

function Start () {

	yield WaitForSeconds(moveDelay);
	
	var player : GameObject = GameObject.FindWithTag("you");

	if (player != null){
		var direction : Vector3 = (player.transform.position - transform.position).normalized;
		rigidbody.AddForce(direction * velocity, ForceMode.VelocityChange);
	}
	

	
}

function Update () {
	dieTimer -= Time.deltaTime;
	
	if(dieTimer <= 0.0f)
		Destroy(gameObject);

	


}