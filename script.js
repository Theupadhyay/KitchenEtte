// Click functionalities
$("nav #nav_bar_options #home").click(function () {
  $(document).scrollTop(0);
});

$("nav img").click(function () {
  $(document).scrollTop(0);
});

$("nav #nav_bar_options #menu").click(function () {
  $(document).scrollTop(800);
});

$("nav #nav_bar_options #about-us").click(function () {
  $(document).scrollTop(1550);
});

$("nav #nav_bar_options #cart").click(function () {
  $(document).scrollTop(2400);
});

$("section#home #container button").click(function () {
  $(document).scrollTop(800);
});

// hover functionalities
// $("nav #nav_bar_options .opts").mouseenter(function () {
//   $(this).stop().animate({ fontSize: "20px" });
// });

// $("nav #nav_bar_options .opts").mouseleave(function () {
//     $(this).stop().animate({ fontSize: "17px" });
//   });

//   $("nav #nav_bar_options .opts svg").mouseenter(function () {
//     $(this).stop().animate({ width: "50" },{height:"50"});
//   });

//   $("nav #nav_bar_options .opts svg").mouseleave(function () {
//     $(this).stop().animate({ width: "50" },{height:"50"});
//   });

// menu functionalities
$(
  "section#menu .menu-container .item-box .items .item .button-area #special-thali-btn1"
).click(function () {
  let element_text = $(
    "section#menu .menu-container .item-box .items .button-area #special-thali"
  ).text();
  element_text++;
  $(
    "section#menu .menu-container .item-box .items .button-area #special-thali"
  ).text(element_text);
});

$(
  "section#menu .menu-container .item-box .items .item .button-area #special-thali-btn2"
).click(function () {
  let element_text = $(
    "section#menu .menu-container .item-box .items .button-area #special-thali"
  ).text();
  element_text--;
  if (element_text < 0) element_text = 0;
  $(
    "section#menu .menu-container .item-box .items .button-area #special-thali"
  ).text(element_text);
});
