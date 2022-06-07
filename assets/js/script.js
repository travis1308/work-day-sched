function GetTodayDate() {
    var date = moment().format("dddd, MMMM Do YYYY");
    return date;
};

// update the time ID with the current date in the HTML
$("#currentDay").text(GetTodayDate);

// save the data when clicking the save button
$(".saveBtn").on("click", function() {
    var textBox = $(this).siblings(".description").val();
    var timeSel = $(this).parent().attr("id");

    // save text to local storage
    localStorage.setItem(timeSel, textBox);
});

var timeBlockStatus = function() {
    var nowTime = moment().hour();
    
    // validate time against current time
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

        // loop through checking time against conditions
        if (timeBlock < nowTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (timeBlock === nowTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        };
    });
};

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

timeBlockStatus();