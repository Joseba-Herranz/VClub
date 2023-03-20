$(document).ready(function() {
    //Home
    $("#base").mouseover(function() {
      $(this).attr("class", "bi bi-house-door-fill");
    });
    $("#base").mouseout(function() {
      $(this).attr("class", "bi bi-house-door");
    });
    
    //Profile
    $("#profile").mouseover(function() {
      $(this).attr("class", "bi bi-person-fill");
    });
    $("#profile").mouseout(function() {
      $(this).attr("class", "bi bi-person");
    });
});