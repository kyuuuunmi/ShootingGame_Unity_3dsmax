#pragma strict
@script RequireComponent(UISlider)
@script RequireComponent(ShooterSoundEffector)


private var life : int = 10;
private var freeze : int = 0;
private var die : boolean; 
private var freezeFlag : boolean;
private var freezeTimer : float = 2.0f;

var hpBar : UISlider;
var shooterSoundEffector : ShooterSoundEffector;
var coinParticlePrefab : GameObject;
var damageParticlePrefab : GameObject;
var deadParticlePrefab : GameObject;
var skin : GUISkin;


function ApplyFreeze(amount : int)
{
	var ArrowShooter : GameObject = GameObject.FindWithTag("you");
	var pos : Vector3 = ArrowShooter.transform.position;

	
	Instantiate(coinParticlePrefab, pos, transform.rotation);
	freeze += amount;

	freezeTimer = 2.0f;	
	freezeFlag = true;
	BroadcastMessage("FreezeState");
}

function ApplyDamage(amount : int)
{	
	
	if(!die){
		life -= amount;
		Instantiate(damageParticlePrefab, transform.position, transform.rotation);
				
			if(life <= 0)
			{
				Instantiate(deadParticlePrefab, transform.position, transform.rotation);
				//Destroy(transform.parent.gameObject);
				var gameController : GameObject = GameObject.FindWithTag("GameController");
				gameController.SendMessage("GameOver");
				
				shooterSoundEffector.ApplyShooterDeath(1);
				
				enabled = false;
				die = true;

			}
	
		hpBar.sliderValue = life*0.1;
		
	}
}
function OnGUI(){

	GUI.skin = skin;
	
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	// freeze 되는 시간동안만 GUI 출력
	
	if(freezeFlag){
	
		freezeTimer -= Time.deltaTime;
		
		GUI.Label(Rect(sw*2/5, sh*2/5, sw*1/4, sh/6), "", "Freeze");
		
		if(freezeTimer<0)
			freezeFlag = false;
		
	}
}



function Start () {
	die = false;
	freezeFlag = false;
}


function Update () {

}