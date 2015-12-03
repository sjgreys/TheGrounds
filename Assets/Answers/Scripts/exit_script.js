#pragma strict

function OnTriggerStay(col : Collider){
if(col.transform.tag == "Player"){
	col.transform.GetComponent(Rigidbody).AddForce(0, 15, 0);
	Destroy(col.gameObject, 2);
}
}

function Start () {

}

function Update () {

}