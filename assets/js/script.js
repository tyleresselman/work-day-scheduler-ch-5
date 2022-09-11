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

// Below is a version of the save button mechanism that I tried based on work with Poornima in office hours

saveBtn = document.querySelector(".saveBtn");
notesToSave = document.querySelectorAll("textArea").values;

saveBtn.addEventListener("click", function(event) {
    if (event.target.matches(".saveBtn")) {
        var timeInfo = event.target.parentElement.value; 
        // I had an issure here traversing the domain in the proper way to label this dataset correctly
        var noteContent = event.target.parentElement.children[1].children[0].value;
    localStorage.setItem("time-"+ timeInfo, noteContent);
    }
})

// $('.saveBtn').on('click'), function() {
//     var toBeSaved
//     var storedData = JSON.parse(localStorage.getItem('schedule-data'))

//     console.log('You got clicked', $(this).attr('name'));

//     var dataToBegin = {
//         9:'',
//         10:'',
//         11:'',
//         12:'',
//         1:'',
//         2:'',
//         3:'',
//         4:'',
//         5:''
//     }

//     if (storedData){
//         toBeSaved = storedData
//     } else {
//         toBeSaved = dataToBegin
//     }
//     toBeSaved[$(this).attr('name')] = $('#input-' + $(this).attr('name')).val()

//     var storeData = JSON.stringify(toBeSaved)

//     localStorage.setItem('schedule-data', storeData)
// }






