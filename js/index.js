var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

function day() {
    var d= parseInt(document.getElementById("DD").value);
    var month = parseInt(document.getElementById("MM").value);
    var year = parseInt(document.getElementById("YY").value);
    var centuary = parseInt(year.slice(0, 2));
    var YY = parseInt(year.slice(2, 4));

    alert("d")
}