#pragma strict

var fadeTexture:Texture; // 임의의 이미지를 드래그하여 설정
internal var startColor:Color = Color(0,0,0,1);
internal var endColor:Color = Color(0,0,0,0);
internal var currentColor:Color;
internal var duration:float = 3.0;

function Start () {
	currentColor = startColor;
	Destroy(gameObject, duration+1);
}

function OnGUI() {
	GUI.depth = -10; //숫자가 낮을수록 나중에 출력되므로 가장 앞에 출력된다
	GUI.color = currentColor; // 아래의 텍스쳐가 그려질 때 투명도를 조정한다
	GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height), fadeTexture);
}

function FixedUpdate () {
	// 점차 투명하게
	currentColor = Color.Lerp(startColor, endColor, Time.time/duration);
}


function Update () {

}