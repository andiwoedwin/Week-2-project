function getDay(){
       event.preventDefault();
       var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                       //  0         1           2           3           4           5           6
       var maleAkanName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
                       //      0       1           2       3       4       5       6
       var femaleAkanName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
                       //       0         1       2       3       4       5       6
       var day = parseInt(document.getElementById("dd").value);
       var month = parseInt(document.getElementById("mm").value);
       var year = document.getElementById("yy").value;
       var gender = document.getElementById("gender").value;
       var date = new Date(year +"/" + month + "/"+day);
       var actualBirthDay = date.getDay();
       var akanDay = dayOfWeek[actualBirthDay];
       var invalidMonth = ( month<1 || month>12 || ((document.getElementById("mm").value)=="") );
       var invalidDay = ( day<1 || day>31 || ((document.getElementById("dd").value)=="") );
       var invalidYear = (  year<1900 || (year>( new Date().getFullYear() ) ) || ((document.getElementById("yy").value)=="") );
       var invalidGender = ( (gender=="selectdefault") );
       var invalidAll = ((invalidDay==true)&&(invalidMonth==true)&&(invalidYear==true)&&(invalidGender==true));
       var validFemale = ((invalidDay==false)&&(invalidMonth==false)&&(invalidYear==false)&&(gender==="Female"));
       var validMale = ((invalidDay==false)&&(invalidMonth==false)&&(invalidYear==false)&&(gender==="Male"));
       var febDates = ( ((month===2)&&(day==30)) || ((month===2)&&(day==31)) );
       var aprJune =  ( ((month===4)&&(day==31)) || ((month===6)&&(day==31)) );
       var septOct =  ( ((month===9)&&(day==31)) || ((month===11)&&(day==31)) );
       if ( invalidAll==true ) {
        document.getElementById('result').textContent = "*Enter details";
        document.getElementById("result").style.color = "red";
        document.getElementById("resultintro").style.display = "none";
       }
      else if( invalidDay==true) {
        document.getElementById("result").textContent = "*Ooops try again";
        document.getElementById("result").style.color = "red";
        document.getElementById("results").style.display = "none";
      }
      else if ( invalidMonth==true ) {
        document.getElementById('result').textContent = "*Not a valid month";
        document.getElementById("result").style.color = "red";
        document.getElementById("results").style.display = "none";
       }
      else if ( invalidYear==true ) {
        document.getElementById('result').textContent = "*You are too old for this App";
        document.getElementById("result").style.color = "red";
        document.getElementById("results").style.display = "none";
       }
      else if ( invalidGender==true ) {
        document.getElementById('result').textContent = "*Select your gender";
        document.getElementById("result").style.color = "red";
        document.getElementById("results").style.display = "none";
        }
      else if ( (febDates==true) || (aprJune==true) ||(septOct==true) ) {
        document.getElementById('result').textContent = "*Be serious.";
        document.getElementById("result").style.color = "red";
        document.getElementById("results").style.display = "none";
        }
      else if ( validFemale==true ) {
        document.getElementById('result').textContent = "You birthday was on "+ akanDay+ " and your Akan name is " +femaleAkanName[actualBirthDay];
        document.getElementById("result").style.color = "grey";
        document.getElementById("results").style.display = "none";
       }
      else if ( validMale==true) {
        document.getElementById('result').textContent = "You were born on "+ akanDay+ " and your Akan name is " +maleAkanName[actualBirthDay];
        document.getElementById("result").style.color = "grey";
        document.getElementById("results").style.display = "none";
       }
      else {
        alert("Dont joke");
       }
     }