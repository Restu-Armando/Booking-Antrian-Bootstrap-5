// datepicker
// var days = ["Senin", "Selasa", "Rebu", "Kamis", "Jumat", "Sabtu", "Minggu"];
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, "0");
// var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
// var yyyy = today.getFullYear();
// var dayName = days[today.getDay()];

$("#date").datepicker({
  autoclose: true,
  clearBtn: true,
  todayHighlight: true,
  format: "dd-mm-yyyy",
});

$(document).ready(function () {
  var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var dayName = days[today.getDay()];
  today = dd + "-" + mm + "-" + yyyy;
  $("#date").val(today);
  $("#date").focus(function () {
    $(this).blur();
  });
});

// close offcanvas bootstrap
const offcanvasExample = document.querySelector("#offcanvasDarkNavbar");
const offcanvasBtn = document.querySelector(".navbar-toggler");
const offcanvasCloseBtn = document.querySelector(".offcanvas .btn-close");

offcanvasBtn.addEventListener("click", () => {
  offcanvasExample.classList.toggle("show");
});

offcanvasCloseBtn.addEventListener("click", () => {
  offcanvasExample.classList.remove("show");
});

// navbar transparent after scroll
// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//       // adjust this value to your desired height
//       $(".navbar").addClass("navbar-transparent");
//       $(".navbar").removeClass("navbar-dark");
//     } else {
//       $(".navbar").removeClass("navbar-transparent");
//       $(".navbar").addClass("navbar-dark");
//     }
//   });
// });
