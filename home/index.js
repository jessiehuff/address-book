// if (jQuery) {
//   alert("jquery is loaded"); 
// } else {
//   alert("Not loaded"); 
// }

$(document).ready(function() {
  attachProjectListeners()
})

function attachProjectListeners() {
  console.log("First")
  $('.app-directory-item').on('click', function(e){
    e.preventDefault()
    console.log(this)
    console.log("Here")
    loadPeople(this)
    console.log("Now Here")
  })
}

function loadPeople(element){
  $.ajax({
    method: 'GET', 
    dataType: 'json', 
    url: '/api/people', 
    success: function(resp, status, xhr){
    console.log(element) 
    }
    // if (people.length === 0) {
    //   let $header = $('.app-directory-item')
    //   $header.html('No people')
    // } else {
    //   let $header = $('.app-directory-item')
    //   $header.html('People')
    //   peopleforEach(people => {
    //     let 
      // })
  }) 
}

// function People(people) {
//   this.id = people.id 
//   this.name = people.name 
//   this.title 
//   this.phone 
//   this.email
//   this.education
// }