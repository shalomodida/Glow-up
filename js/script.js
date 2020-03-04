$(document).ready(function () {
  $(".container img").click(function () {
    $(this).hide();
  });


  $(".eve1").hover(function () {
    $(".para1").slideToggle(1000);
    $("#img1").slideToggle(1000);
    $(".para1").show();
  });
