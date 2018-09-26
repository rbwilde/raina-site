$(document).ready(function() {

// DESKTOP

  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function() {
      scrolling = false;
    }, animTime);
  };

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  };


  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else { 
      navigateDown();
    }
  });

  $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });

  // $(document).on("click", function(e) {
  //   if (curPage === 2 || curPage === 4) {
  //     $(".skw-page__detail--" + curPage).toggle("slide");
  //     console.log(curPage);
  //   } else if (curPage === 3) {
  //     $(".skw-page__detail--left").toggle("slide");
  //   } else if (curPage ===5) {
  //     console.log("don't expand me");
  //   } else {
  //     console.log("don't expand me");
  //   }
  // })

// MOBILE
// Need to removed selected if another slice is selected
// Add hide and show affect

  // $("button").on("click", function() {
  //   console.log("click!")
  // })
  $(".skw-mobile__slice-container").hide();

  $(".skw-mobile__slice").click(function(){
  $(this).toggleClass("selected");
  $(this).find(".skw-mobile__slice-container").toggle();
  if($('.skw-mobile__slice').index(this) == 1){
    $(".skw-mobile").toggleClass("second-selected");
  }
  else if($('.skw-mobile__slice').index(this) == 2){
    $(".skw-mobile").toggleClass("third-selected");
  }
  else if($('.skw-mobile__slice').index(this) == 3){
    $(".skw-mobile").toggleClass("fourth-selected");
  }
});

});