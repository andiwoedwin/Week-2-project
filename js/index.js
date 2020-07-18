var daysOfWeek = ["sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
var male = ["Kwasi", "kwado", "kwabena", "kwaku", "Yaw", "Kofi", "Kwame"];
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function day(){
    var d = document.getElementById("d").value;
    var m = document.getElementById("m").value;
    var y = document.getElementById("yy").value;
    var CC =year.slice(0, 2));
    var yy =year.slice(2, 4));
    var gender =document.getElementById("y").value;
    
    

    (d) = ( ( (CC/4) -2*CC-1) + ((5*yy/4) ) + ((26*(m+1)/10)) + d ) %7
    alert(d)
    if(d<1 || d>31){
        alert("invalid date");
    }
    if(m<1 || m>12){

    }
}
function getName(){
    if()
}