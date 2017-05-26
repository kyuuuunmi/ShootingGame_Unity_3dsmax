#pragma strict


function OnTriggerEnter(other: Collider)
{
	other.gameObject.SendMessage("ApplyDamage",1);
	Destroy(gameObject);

}

function Start () {



}

function Update () {

}