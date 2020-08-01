$(document).ready(function () {
  $("div").height($(window).height());
  $(window).resize(function () {
    $("div").height($(window).height());
  });
  handleClick = function () {
    $("#start-text").addClass("fade-out");
    $("#Truck").attr("transform", "");
    $("#Box").attr("transform", "translate(-300)");
    setTimeout(() => {
      $("#top-door").attr("transform", "");
      $("#bottom-door").attr("transform", "");
    }, 1500);
    setTimeout(() => {
      $("#top-door").attr("transform", "");
      $("#bottom-door").attr("transform", "");
      $("#Box").attr("transform", "translate(300)");
    }, 2000);
    setTimeout(() => {
      $("#top-door").attr("transform", "rotate(-90 237 71.97)");
      $("#bottom-door").attr("transform", "rotate(90 237 472.97)");
    }, 3500);
    setTimeout(() => {
      $("#lights").addClass("lights-on");
      $(".road").addClass("show");
    }, 3600);
    setTimeout(() => {
      $("#Truck").attr("transform", "translate(1000)");
      $("#Box").attr("transform", "translate(1300)");
    }, 4200);
    setTimeout(() => {
      $("#Truck").attr("transform", "translate(-800)");
      $("#Box").attr("transform", "translate(-200)");
    }, 6200);
    setTimeout(() => {
      $("#Truck").attr("transform", "translate(3000)");
      $("#Box").attr("transform", "translate(3200)");
    }, 7600);
    setTimeout(() => {
      //you can use it for async calls!
      $(".road").addClass("hide");
      $(".road").addClass("moving-road");
    }, 8200);
    setTimeout(() => {
      $("#end-text").addClass("fade-in");
    }, 9100);
    setTimeout(() => {
      //reset every thing? i didnt add it! you can do it yourself if you need to ^_^
      $(".road").removeClass("moving-road");
    }, 9700);
  };
});
