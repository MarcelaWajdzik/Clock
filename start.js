function Time() {
    var Data = new Date();
    var Day = Data.getDate();
    //zwraca dzien miesiaca (0-31)
    if (Month < 10) Month = "0" + Month
    //Gdy wartosc zmiennej miesiac bedzie mniejsza niz 10 to  dodajz przodu 0 
    var Month = Data.getMonth() + 1;
    if (Month < 10) Month = "0" + Month
    var Year = Data.getFullYear();
    var Hours = Data.getHours();
    if (Hours < 10) Hours = "0" + Hours
    var Minutes = Data.getMinutes();
    if (Minutes < 10) Minutes = "0" + Minutes
    var Seconds = Data.getSeconds();
    if (Seconds < 10) Seconds = "0" + Seconds
    document.getElementById('time').innerHTML = Day + '/' + Month + '/' + Year + '|' + Hours + ':' + Minutes + ':' + Seconds;
    setTimeout('Time()', 1000);
    //co sekunde uruchamia sie funkcja Time


}