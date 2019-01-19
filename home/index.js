$(document).ready(function() {
  attachProjectListeners()
})

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
    
  })
}