function validate( )
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="Shanmugam"&& password=="Revishni")
    {
        alert("Login Successful");
        open("billing page/frontend.html")
        close("login.html")
        return false;
    }
    else
    {
        alert("Login Failed")
    }
}