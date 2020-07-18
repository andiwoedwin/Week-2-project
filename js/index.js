var daysOfWeek = ["sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
var male = ["Kwasi", "kwado", "kwabena", "kwaku", "Yaw", "Kofi", "Kwame"];
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function day(){
    var d = parseInt(document.getElementById("d").value);
    var m = parseInt(document.getElementById("m").value);
    var y = parseInt(document.getElementById("y").value);
    var CC = parseInt(year.slice(0, 2));
    var yy = parseInt(year.slice(2, 4));

    (d) = ( ( (CC/4) -2*CC-1) + ((5*y/4) ) + ((26*(m+1)/10)) + d ) %7
    alert(d)
}