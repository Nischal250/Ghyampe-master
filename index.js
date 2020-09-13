

if ($(window).width() > 0) {
  $(window).scroll(function(){
     if ($(this).scrollTop() > 129) {
        $('#navbar_top').addClass("fixed-top");
        // add padding top to show content behind navbar
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      }else{
        $('#navbar_top').removeClass("fixed-top");
         // remove padding top from body
        $('body').css('padding-top', '0');
      }
  });
}


// $(window).scroll(function(){
//   if($(this).scrollTop()>650){
//
//     $(".g-celeb").addClass("alcohol");
//     $(".logos2").addClass("logos");
//
//   }
// })




// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
