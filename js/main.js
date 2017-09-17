$(document).ready(function() {
  $(".nav-tabs").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  })
  $(".nav-tabs .active")[0].click()
  $(".nav-tabs .active")[0].click()
  $("#contact-form").submit(function(e) {
    e.preventDefault();
    $.post("https://formspree.io/teamghosties@gmail.com", $(this).serialize());
    $("#contact-form").slideUp(function() {
      $(this).remove();
      $("#contact-container").html("<h4>Thank you for contacting us</h4>")
    });
  })
})
