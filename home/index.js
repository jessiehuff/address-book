$(document).ready(function() {
  loadPeople(this)
  loadPerson(0)
})

function attachProjectListeners() {
  $('.app-directory-item').on('click', function(e){
    var selection = $(e.target).data('id')
    e.preventDefault()
    loadPerson(selection)
  })
}

function loadPeople(element){
  $.ajax({
    method: 'GET', 
    dataType: 'json', 
    url: '/api/people', 
    success: function(resp, status, xhr){
      var allPeople = resp.people.sort(function (a,b) {
        if(a.name < b.name) return -1; 
        else if (a.name > b.name) return 1; 
        else return 0; 
      }); 
      var letterHeading = null 
      allPeople.forEach(function(x) {
        if (x.name.charAt(0) !== letterHeading){
          letterHeading = x.name.charAt(0) 
          $('.app-directory-list').append("<div class='app-directory-separator'>" + letterHeading + "</div>")
        }
        $('.app-directory-list').append("<div class='app-directory-item' data-id=" + x.id +">" + x.name + "</div>")
      })
      attachProjectListeners()
    }
  })
}

function loadPerson(id){
  $.ajax({
    method: 'GET', 
    dataType: 'json', 
    url: '/api/people/'+ id, 
    success: function(resp, status, xhr){
      console.log(resp)
      $('.person-name').html(resp.person.name.replace(/"/g,""))
    }
  }) 
}