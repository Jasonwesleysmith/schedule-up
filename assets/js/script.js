var currentDate = moment().format("dddd LL");
$("#currentDate").append(currentDate);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

$(document).ready(function (){
    $(".saveBtn").on("click",function(){
        var value = $(this).siblings(".description").val() 
        var time = $(this).parent().attr("id")
        localStorage.setItem(time,value)
    })
    function hourUpdater() {
        var currentHour = moment().hours()
        $(".time-block").each(function (){
            var hourBlock = parseInt($(this).attr("id").split("-")[1])
            if (hourBlock < currentHour){
                $(this).addClass("past")
            }
            else if (hourBlock === currentHour){
                $(this).addClass("present")
                $(this).removeClass("past")
            }
            else {
                $(this).addClass("future")
                $(this).removeClass("present")

            }
        })
    }
    hourUpdater();
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-13 .description").val(localStorage.getItem("hour-13"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    $("#hour-15 .description").val(localStorage.getItem("hour-15"))
    $("#hour-16 .description").val(localStorage.getItem("hour-16"))
    $("#hour-17 .description").val(localStorage.getItem("hour-17"))
    
});




