//form validation fun
function myFun(){
	var x=document.getElementById("email");
	var pat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!pat.test(x.value)){
		alert("invalid");
		return false;
	}

}