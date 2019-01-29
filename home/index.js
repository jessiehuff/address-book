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
      $('.person-name').html(resp.person.name)
      $('.app-person-profile-department').html(resp.person.title)
      $('.app-person-profile-phone-number').html(resp.person.phone)
      $('.app-person-profile-email').html(resp.person.email)
      resp.person.education.forEach(function(edu){
        $('.education-date').remove() 
        $('.education-institution').remove()
        $('.education-degree').remove()
      })
      resp.person.workExperience.forEach(function(work){
        $('.work-date').remove()
        $('.app-history-item-corp').remove() 
        $('.app-history-item-title').remove()
      })
      resp.person.education.forEach(function(edu) {
        if (edu.endYear !== undefined) {
          $('.wrapper').append("<div class='education-date'>" + edu.startYear + ' - ' + edu.endYear + "</div>")
        } else { 
          $('.wrapper').append("<div class='education-date'>" + edu.startYear + ' - Present' + "</div>")
        }
        $('.wrapper').append("<div class='education-institution'>" + edu.institution + "</div> <div class='education-degree'>" + edu.degree + "</div>")
      })
      resp.person.workExperience.forEach(function(work) {
        if (work.endYear !== undefined) {
          $('.work-wrapper').append("<div class='work-date'>" + work.startYear + ' - ' + work.endYear + "</div>")
        } else { 
          $('.work-wrapper').append("<div class='work-date'>" + work.startYear + ' - Present' + "</div>")
        }
        $('.work-wrapper').append("<div class='app-history-item-corp'>" + work.institution + "</div><span class='app-history-item-title'>" + work.title + "</div>")
      })
    }
  }) 
}
