#pragma strict
@script RequireComponent(UISlider)

var shootSE : AudioClip;

private var MINIMUM : float;
private var MAXIMUM : float;

var arrowPrefab : GameObject;
private	var arrow : GameObject;
private var pivot : GameObject;
private var mainCamera : GameObject;
var gaugeBar : UISlider;


private var haveArrow : boolean;
private var btnUp : boolean;
private var pressedTime : float;
private var waitTime : float;
private var direction : Vector3;
private var stop : boolean;


var initialVelocity : float;


function TimeUp(){
	enabled = false;
}

function Start () {

	animation.Play("Shoot");

	mainCamera = GameObject.FindGameObjectWithTag("MainCamera");
	pivot = GameObject.FindGameObjectWithTag("pivotCube");
	MINIMUM = 0.3;
	MAXIMUM = 1;

	btnUp = false;
	haveArrow = false;
	stop = false;
	
	//gaugeBar = GetComponent(UISlider) as UISlider;

	//gaugeBar= GameObject.FindWithTag("gaugerBar");
	//gaugeBar = GetComponent(Gauger) as Gauger;

}

function Update () 
{

	
	
	if(!stop){
		
		if(!haveArrow){
		
			var posCube : Vector3;
			posCube = pivot.gameObject.transform.position;
	//		posCube.y += 0.05;
		
		
			arrow = Instantiate(arrowPrefab, posCube, pivot.transform.rotation);
			// arrow의 parent 설정 
			arrow.transform.parent = pivot.transform;		

			haveArrow = true;
	
		}
		
	
	}
	else {
		waitTime += Time.deltaTime;
	
			if(waitTime >= 0.3){
				stop=false;
				waitTime = 0;
			}
	
	
	}
	
	if(btnUp){
		// 버튼이 눌렸으면 게이지 채우기 위해 pressedTime++
		pressedTime += Time.deltaTime;
		//gaugeBar.SendMessage("setVal");
		
		gaugeBar.sliderValue += Time.deltaTime;
	
		
		
	}	
	
	if(haveArrow){ 
	
		// Arrow를 가지고 있을 경우 
	
		if(Input.GetMouseButtonDown(0)){
			
			// 마우스를 누르면 -> anni 변화 & 시간 재기 위해 btnUp = true
			btnUp = true;
			animation.CrossFade("Pull");

			// 경로예측 & force 예측 			
			rayCasting();
	
		}
	
		else if(Input.GetMouseButtonUp(0)){
		
			btnUp = false;
			haveArrow = false;
			
			
		
			if( pressedTime <= MINIMUM )
				pressedTime = MINIMUM;
			else if(pressedTime >= MAXIMUM)
			  	pressedTime = MAXIMUM;
			  	
			 
			 if( arrow != null){
			 
			// 부모 해제   	 	
			arrow.transform.parent = null;
			
			// 애니메이션 변화 
			animation.CrossFade("Shoot");

			// arrow 앞으로 나가기
			arrow.SendMessage("Go");
	
			var gaugeVal = gaugeBar.sliderValue;
			gaugeVal *= 10;
			//var gaugeVal = 5;
			

			arrow.rigidbody.velocity = mainCamera.transform.forward * initialVelocity * pressedTime * gaugeVal;
			arrow.rigidbody.AddForce(arrow.transform.forward*10.0, ForceMode.Force);
			}
			gaugeBar.sliderValue = 0;
			
			
			pressedTime = 0;
			stop = true;
	
	
			audio.PlayOneShot(shootSE);
		}
	
	
	
	}
	
}

function rayCasting(){
	var hitObj : RaycastHit;
	
	// 나중에 origin은 활의 위치로 변경 ㄱㄱ 
	if(Physics.Raycast(transform.position, mainCamera.transform.forward, hitObj, Mathf.Infinity)){
	/*
		if(hitObj.collider.tag=="Box"){
			
			var 
			
			
			Debug.Log();
			
			
			}*/
		Debug.Log(hitObj.collider.name);		
		
	//	}
	
	
	}

}
	
	
	/* 
	if(Input.GetButtonDown("Fire1"))
	{
		var bullet : GameObject = Instantiate(bulletPrefab,transform.position, transform.rotation);

		var screenPoint = Input.mousePosition;
		screenPoint.z = 10.0;
		var worldPoint = camera.ScreenToWorldPoint(screenPoint);
		var direction = (worldPoint - transform.position).normalized;

		bullet.rigidbody.velocity = direction * initialVelocity;
	}*/

