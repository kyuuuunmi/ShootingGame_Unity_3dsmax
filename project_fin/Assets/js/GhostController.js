#pragma strict
private var speedX : float;
private var speedZ : float;
private var speedY : float; 


//private var timer : float;

function start(){


	SetGhost();
	
}

function Update () {

	
	// ghost random translate 
	var moveX = Random.Range(50f,70f)*Time.deltaTime;
	var moveZ = Random.Range(50f,70f)*Time.deltaTime;
	var moveY = Random.Range(50f,70f)*Time.deltaTime;

	// distance between ghost and player
	var you : GameObject = GameObject.FindWithTag("you");
	var pos : float = Vector3.Distance(you.transform.position, gameObject.transform.position);
	

	//transform.Translate(Vector3(moveX, 0, moveZ), Space.World);
	if( pos  < 1000 ){
		transform.forward = (you.transform.position - gameObject.transform.position).normalized;
		transform.Translate(transform.forward * 1.0f * Time.deltaTime);
		
	}else{
		transform.Translate(Vector3(moveX, 0 , moveZ), Space.World);
	}
	
	
}

function SetGhost(){

	//ghost speed
	speedX=Random.Range(50f,70f);
	speedZ=Random.Range(50f,70f);
	speedY=Random.Range(50f,70f);
	
	//ghost initial position
	var posX = Random.Range(-10f,10f);
	var posZ = Random.Range(-10f,10f);
		
	transform.position+=Vector3(posX,1,posZ);
	
}