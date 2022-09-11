// This variable sets the current time and date at the top of the page in the Jumbotron.

var dateAndtime = moment().format('LLLL');

$('#currentDay').text(dateAndtime);

// console.log(dateAndtime);

// This variable makes the connection between moment.js and our CSS so that on any given day the hours ahead are labelled green, the present hour is red, and past hours in the day are gray.

var colorCodehour = function() {
    var currentHour = moment().hour()

    for ( var i = 9; i < 18; i++) {
       var textArea = $('#text-' + i)

       if (currentHour > i) {
        $(textArea).addClass("past");
       } else if (currentHour === i) {
        $(textArea).addClass("present");
       } else {
        $(textArea).addClass("future");
       }
        
    }
    
}

colorCodehour();



saveBtn = document.querySelector(".saveBtn");
// notesToSave = document.querySelectorAll("textArea").values;

saveBtn.addEventListener("click", function(event) {
    if (event.target.matches(".saveBtn")) {
        var timeInfo = event.target.parentElement.value; 
        // I had an issue here traversing the dom in the proper way to label this dataset correctly.
        var noteContent = event.target.parentElement.children[1].children[0].value;
    localStorage.setItem("time-"+ timeInfo, noteContent);
    }
})

// You will notice I was only able to get the text input to be saved for the first line.
// My next step will be to establish the function I wrote for local storage on the first line to save it for every line, with the proper labels. Followed by a step to make sure the locally stored data is presented on the screen after refresh.







