var name = '';
function submitform () {
    name = document.forms ["myform"]["name"].value;
    if(name =="") {
        alert("Name must be filled");
        return false;
    }
    var dob = document.getElementById("dob").value;
    var mobileno = document.getElementById("Mobile").value;
    var email = document.getElementById("email").value;
    //var maritalstatus = document.getElementById("Single").value;
    //var maritalstatus = document.getElementById("Married").value;
    var status = document.getElementById('Married').checked?"Married":"Single";
    var img = document.getElementById("image").files;
    
    /*var userdetails = {
        name : document.getElementById("Name").value,
        mobileno : [{ primary : document.getElementById("Mobile").value, 
                      secondary : document.getElementById("Mobile").value }],
        email :  document.getElementById("email").value     
    }
    sessionStorage.setItem("userDetails",userdetails);
    console.log(key);*/
    var url ="http://127.0.0.1:5501/html/result.html?name="+name+"&DOB="+dob+"&Mobileno="+mobileno+"&Email="+email+"&Maritalstatus"+status+"&Image"+img;
    //window.location.href=url;
    window.open(url, "", "width:100px", "height:100px"); 

    //var details = userdetails.name + "," + userdetails.mobileno[0].primary + "," + userdetails.mobileno[0].secondary + "," + userdetails.email;
    //document.write(details);
    
}


