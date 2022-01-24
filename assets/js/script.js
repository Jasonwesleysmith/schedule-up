new Date()


$(document).ready(function (){
    $(".saveBtn").on("click",function(){
        var value = $(this).siblings(".description").val() //put description, 2 variables 1 for time, 1 for value(value is description)
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

            }
        })
    }
    hourUpdater();
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
});




//color change??? function to return that value?? $(.past) $(.present) $(.future)