#pragma strict
@script RequireComponent(UISlider)


var slider : UISlider;
var timer : float;


function Start () {

	//slider = GetComponent(UISlider) as UISlider;
}

function Update () {


	timer+=Time.deltaTime;
	if(timer>=3.0f){
		slider.sliderValue += 0.5;
		timer = 0;
	}
	//Debug.Log(slider.sliderValue+"");
}