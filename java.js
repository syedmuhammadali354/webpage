
function match(){
var pass=document.getElementById("pass");
var repass=document.getElementById("repass");
var error=document.getElementById("lbl_error");
var p_status=document.getElementById("lbl_status");

//for password match
if(pass.value==repass.value)
{
error.innerHTML="* Password Matched";
error.style.color="green";
}
else{
error.innerHTML="* Password Mismatched";
error.style.color="red";
}

var n=0;
var a=0;
var s=0;
for(i=0;i < pass.value.length;i++)
{
	code=pass.value.charCodeAt(i);
	if(code>=48&&code<=57)
	{
		n++;
	}
	else if(code>=97&&code<=122)
	{
		a++;
	}
	else 
	{
		s++;
	}
}
	if(n==0&&s==0&&a>0&&pass.value.length<=6)
	{
		p_status.style.color="red";
		p_status.innerHTML="* Password strength is Weak";
	}
	if(n==0&&s==0&&a>0&&pass.value.length>=6)
	{
		p_status.style.color="red";
		p_status.innerHTML="* Password only conatin characters";
	}
	else if(n>0&&s==0&&a>0 )
	{
		p_status.style.color="blue";
		p_status.innerHTML="* Password strength is Normal";
	}
	else if(n>0&&s>0&&a>0)
	{
		p_status.style.color="green";
		p_status.innerHTML="* Password strength is Strong";
	}
};
function validate(){
    var error=document.getElementById("lbl_error");
	if(error.innerHTML=="* Password Matched")
	{
		return true;
	}
	else{
	return false;
	}
};
function changecolor(){
    var selectedcolor=document.getElementById("colour").value;
	var allElements=document.getElementsByClassName("color");
	for(i=0;i<allElements.length;i++)
	{
		allElements[i].style.color=selectedcolor;
	}
};

function validate(e){
	var code=e.charCode;
	if(code >= 65 && code <= 90 || code >= 97 && code <= 122){
		return true;
	}
	else{
		return false;
	}
};
function validatenumber(e){
	var code=e.charCode;
	if(code >= 48 && code <= 57 ){
		return true;
	}
	else{
		return false;
	}
};

function validatemail() {

    var email = document.getElementById("userEmail");
    var valid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!valid.test(userEmail.value)) {
    alert(' email address is not valid');
    return false;
    
 	}

};