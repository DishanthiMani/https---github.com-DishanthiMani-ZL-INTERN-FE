function display(){
    console.log('inside display')
    var urlparam = window.location.search;
    console.log(urlparam);
    var param = new URLSearchParams(urlparam);
    console.log(param);
    // for(const[key,value]of param){
    //     document.write(key+":"+value+"<br>");
    // }
    var name =param.get("name");
    // document.getElementById('displayValue').innerHTML('disha');
    document.write(name+"<br>");
    var DOB = param.get("DOB");
    document.write(DOB+"<br>");
    var Mobileno = param.get("Mobileno");
    document.write(Mobileno+"<br>");
    var Email = param.get("Email");
    document.write(Email+"<br>");
    var Maritalstatus = param.get("Maritalstatus");
    document.write(Maritalstatus+"<br>");
    var Image = param.get("Image");
    document.write(Image+"<br>");
    //setTimeout(function() {window.close()}, 3000);
}
display();
