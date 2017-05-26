#pragma strict



function OnTriggerEnter(other: Collider)
{
	other.gameObject.SendMessage("ApplyFreeze",1);
	Destroy(gameObject);

}
function Start () {

}

function Update () {

}