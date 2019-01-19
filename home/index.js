if (jQuery) {
  alert("jquery is loaded"); 
} else {
  alert("Not loaded"); 
}

// $(document).ready(function() {
//   attachProjectListeners()
// })

function attachProjectListeners() {
  $('a.app-directory-item').on('click', function(e){
    e.preventDefault()
    loadPeople(this,id)
  })
}

function loadPeople(element,id){
  $.ajax({
    method: 'GET', 
    dataType: 'json', 
    url: '/home', 
  }).success(function(people){
    if (people.length === 0) {
      let $header = $('.app-directory-item')
      $header.html('No people')
    } else {
      let $header = $('.app-directory-item')
      $header.html('People')
      peopleforEach(people => {
        let 
      })
      })
    }
  })
}