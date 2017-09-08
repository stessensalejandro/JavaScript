<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var day;
switch (new date().getDay()) {
    case 0:
    case 6:
        day = "Fin de Semana";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
       
  
}
document.getElementById("demo").innerHTML = "Today is " + day;
</script>

</body>
</html>
