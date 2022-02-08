function ShowHideDiv()
 {
   var chkYes = document.getElementById("chkYes");
   var  card= document.getElementById("card");
   card.style.display = chkYes.checked ? "block" : "none";
 }
function Hide()
 {
   var checkyes=document.getElementById("checkyes");
   var delivery=document.getElementById("delivery");
   delivery.style.display=checkyes.checked ? "block" : "none"; 
 }
function myFunction()// without using submit button to submit the form //
 { 
  var name = document.forms["myForm"]["firstname"];
  var email = document.forms["myForm"]["email"];
  var phone=document.forms["myForm"]["phone"];
    if (name.value == "")                                  
        { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
        }
	
    if(email.value=="")
        {
        window.alert("please enter the email:");
        email.focus();
        return false;
        }
    if(phone.value=="")
        {
        window.alert("please enter mobile number");
        phone.focus();
        return false;
        }
    else
	{
	document.getElementById("myForm").submit();
	alert("Your order has been Submitted");
	}

 }


