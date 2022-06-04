function GetTodayDate() {
    var date = moment().format("dddd, MMMM Do");
    return date;
};

document.getElementById("currentDay").innerHTML = GetTodayDate();