// adding the date function with moment
 // TODO: Add code to display the current date in the header of the page.
  // });

setInterval(function () {
  $("#currentDay").html(currentDate + ` `);
});

var currentDate =
  moment().format("dddd") + ` ` + moment().format(`MMMM DD YYYY`);

  // Displaying local storage
   // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

  $('.description').each( function (){
    $(this).html(localStorage.getItem($(this).parent().attr('id')));
  })  

 // TODO: Add a listener for click events on the save button. This code should
 // use the id in the containing time-block as a key to save the user input in
 // local storage. HINT: What does `this` reference in the click listener
 // function? How can DOM traversal be used to get the "hour-x" id of the
 // time-block containing the button that was clicked? How might the id be
 // useful when saving the description in local storage?
  
 function saveButton() {
  userTasks = $(this).siblings(`.col-8`).val().trim();
  eachHour = $(this).siblings(`.id`).text().trim();
  localStorage.setItem(eachHour, JSON.stringify(userTasks));
}

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    function colorAdjust() {
      var currentTime = moment().hours()

      $('.time-block').each((index, element) => {
          var filledTime = parseInt($(element).attr('id'))
              console.log(filledTime, currentTime)
      
          if (currentTime < filledTime) {
              $(this).addClass("past")
              $(this).removeClass("future")
              $(this).removeClass("present")

          } else if (filledTime === currentTime) {
              $(this).removeClass("past")
              $(this).addClass("present")
              $(this).removeClass("future")
              
          } else {
              $(this).removeClass("past")
              $(this).removeClass("present")
              $(this).addClass("future")
          }
        })
      }
   
  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. 

$(document).ready(function () {
  loadPage();
  backGround();
  $(`.saveBtn`).on(`click`, saveButton);
  $(`#clearBtn`).on(`click`, clearButton);
});

// clear button

function clearButton() {
  localStorage.clear();
  loadPage();
}