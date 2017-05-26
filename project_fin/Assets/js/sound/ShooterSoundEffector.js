#pragma strict

var freezeSE : AudioClip;
var damageSE : AudioClip;
var shooterDeathSE : AudioClip; 

function Start () {

}

function Update () {

}

function ApplyFreeze(amount : int)
{
	audio.PlayOneShot(freezeSE);

//	audio.Play();
}

function ApplyDamage(amount : int)
{
	audio.PlayOneShot(damageSE);
}

function ApplyShooterDeath(amount : int)
{
	audio.PlayOneShot(shooterDeathSE);
}

