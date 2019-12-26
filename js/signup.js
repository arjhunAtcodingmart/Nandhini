
function getDetails()
{ 
    var name = document.getElementById("login-name").value;
    var email= document.getElementById("login-mail").value;
    var username= document.getElementById("login-user").value;
    var pwd=document.getElementById("login-pwd").value;
    var profile=document.getElementById("login-profile").value;
    var account_array=[];
    account_details= {
        Name:name,
        Mail:email,
        User_name:username,
        Pwd:pwd,
        Profile:profile,
        signin :0
    }
    localStorage.setItem("account_details",JSON.stringify(account_details));
    account_array.push(account_details);
  // window.location.href="file:///home/nandhini/Desktop/npm/html/index.html"; 
}
function userDetails()
{
    // console.log(details);
    
    var name= document.getElementById("login-nam").value;
    var password = document.getElementById("login-password").value;
    console.log(name,password);
    details=JSON.parse(localStorage.getItem("account_details"));
    console.log(details);
    if(name === details.User_name && password===details.Pwd){
        console.log("OK");
        details.signin = 1;
   // window.location.href = "file:///home/nandhini/Desktop/npm/html/index.html?";
    }
    else 
    {
        details.signin = 0;
        alert("Invalid username or password");
    }
}

function validateForm() {
    var x = document.forms["myForm"]["Name"].value;
    if (x == " ") {
      alert("Name must be filled out");
      return false;
    }
  }