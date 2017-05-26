#pragma strict


var explosionPrefab : GameObject;

var ghostDeathSE : AudioClip;

private var hit : boolean;
private var killTimer : float;


function GhostAreHit(){


	if(!hit){
		hit = true;
		killTimer = 0.4;
		
		rigidbody.AddForce(transform.forward*-1 *10.0, ForceMode.Impulse);
		
		var timer : float = 1.0f;
		while(timer>0) timer-=Time.deltaTime;
		ApplyGhostDeath(1);
	}	

}

function ApplyGhostDeath(amount : int)
{
	audio.PlayOneShot(ghostDeathSE);
}

function Start () {
	hit = false;

}

function Update () {
	if(!hit)
		return;

	killTimer -= Time.deltaTime;
	
	if(killTimer <= 0.0)
	{
		var ghostGenerator : GameObject = GameObject.FindWithTag("GhostGenerator");
		ghostGenerator.SendMessage("OnDestroyGhost");
		Instantiate(explosionPrefab, transform.position, transform.rotation);
		Destroy(gameObject);
	}

}