#pragma strict
var intervalMin : float= 5;
var intervalMax : float = 8;
private var freezeRate : float = 0.3;
var freezePrefab : GameObject;
var spikeBallPrefab : GameObject;

function Start () {
	while(true){
		yield WaitForSeconds(Random.Range(intervalMin, intervalMax));
		
		var prefab : GameObject = Random.value < freezeRate ? freezePrefab : spikeBallPrefab;
				
		var position : Vector3;
		position.y = transform.position.y + 1.5;
		position.x = transform.position.x;
		position.z = transform.position.z + 2;
				
		Instantiate(prefab, position, Quaternion.identity);
	}
}

function Update () {

}