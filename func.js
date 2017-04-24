function valid(e)
{
	var code=e.charCode;
	if(code >= 65 && code <= 90 || code>=97 && code<=122)
		return true;
	
	else
		return false;
	
};
function val1(e)
{
	var code=e.charCode;
	if(code >= 48 && code <= 57 || code==43)
		return true;
	else
		return false;
	
};

function change(){
	var city=document.getElementById("city");
	var check=0;
	switch(city.value)
		{
			case "rawalpindi":
			check=1;
			break;
			case "lahore":
			check=2;
			break;
			case "dgkhan":
			check=3;
			break;
			case "multan":
			check=4;
			break;
			case "other":
			check=5;
			break;
			
		}
};

function passcheck()
{   
 var mess=document.getElementById("message");
 var pass=document.getElementById("pass1");
 
	
    	if(pass.value.length<7)
		{
			
			mess.innerHTML="Weak";
			
		}
		else
		{mess.innerHTML="Strong";}
};
function  valpass()
{   
 var mess=document.getElementById("mess");
 var pass1=document.getElementById("pass1");
 var pass2=document.getElementById("pass2");
 
	
    	if(pass1.value==pass2.value)
		{
			
			mess.innerHTML="Password Match";
			
		}
		else
		{mess.innerHTML="Password not Match";}
};
