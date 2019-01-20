$(document).ready(function() {
  loadPeople(this)
})

function attachProjectListeners() {
  $('.app-directory-item').on('click', function(e){
    e.preventDefault()
    loadPerson(this)
  })
}

function loadPeople(element){
  $.ajax({
    method: 'GET', 
    dataType: 'json', 
    url: '/api/people', 
    success: function(resp, status, xhr){
      var allPeople = resp.people.map(x => x.name).sort()
      allPeople.forEach(function(x) {
        $('.app-directory-list').append("<div class='app-directory-item'>" + x + "</div>")
      })
      attachProjectListeners()
    }
  })
}

function loadPerson(element){
  $.ajax({
    method: 'GET', 
    dataType: 'json', 
    url: '/api/people', 
    success: function(resp, status, xhr){
      $('.person-name').html(JSON.stringify(resp.people[2].name).replace(/"/g,""))
    
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