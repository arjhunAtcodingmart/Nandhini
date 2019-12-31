
var account_array=[];
var user_account=[];

function getDetails()
{ 
    event.preventDefault();
    var name = document.getElementById("login-name").value;
    var email= document.getElementById("login-mail").value;
    var username= document.getElementById("login-user").value;
    var pwd=document.getElementById("login-pwd").value;
    var profile=document.getElementById("login-profile").value;
   
  var account_details= {
        Name:name,
        Mail:email,
        User_name:username,
        Pwd:pwd,
        Profile:profile,
        signin :0
    }
    account_array.push(account_details);
    localStorage.setItem("account",JSON.stringify(account_array));
    user_acc=JSON.parse(localStorage.getItem("account_details"));
    console.log(user_acc);
    user_account.push(user_acc);
    localStorage.setItem("user_account",JSON.stringify(user_account));
    console.log(user_account);
    window.location.href="file:///home/nandhini/Desktop/npm/html/index.html"; 
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