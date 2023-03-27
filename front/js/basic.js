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

    $('.dropdown-content').hide();
    // When the user clicks the dropdown button
    $(".dropbtn").click(function() {
      $(".dropdown-content").toggle();
    });
  
    $(window).click(function(e) {
      if (!e.target.matches('.dropbtn')) {
        var dropdowns = $('.dropdown-content');
        dropdowns.each(function() {
          if ($(this).is(':visible')) {
            $(this).hide();
          }
        });
      }
    });

});