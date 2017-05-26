#pragma strict

var coinSE : AudioClip;
var damageSE : AudioClip;

function Start () {

}

function Update () {

}

function CatchCoin(amount : int)
{
	audio.PlayOneShot(coinSE);
}

function ApplyDamage(amount : int)
{
	audio.PlayOneShot(damageSE);
}