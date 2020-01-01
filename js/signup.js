
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
    
    var name     = document.getElementById("login-nam").value;
    var password = document.getElementById("login-password").value;
    console.log(name,password);
    var details=JSON.parse(localStorage.getItem("account"));
    console.log(details.User_name);
    let flag=true;
    details.forEach(elem =>
        {
    if(name === elem.User_name && password === elem.Pwd){
        console.log("OK");
        details.signin = 1;
        alert("Logged in Successfully");
        redirect()
        
        flag=false
    }
    if(flag) {
    console.log("OK");
        details.signin = 0;
        alert("Invalid UserName or Password");
        //window.location.href = "file:///home/nandhini/Desktop/npm/html/index.html";
    }
});

}
function redirect()
{
    window.location.href = "file:///home/nandhini/Desktop/npm/html/index.html";
}

function validateForm() {
    var x = document.forms["myForm"]["Name"].value;
    if (x == " ") {
      alert("Name must be filled out");
      return false;
    }
  }