var heartClicked = false;

function fillHeart() {
  var redHeart = document.getElementById('heart');
  if (heartClicked == false) {
    redHeart.classList.remove('fa-regular');
    redHeart.classList.add('fa-solid');
    redHeart.style.color = "red";
    redHeart.style.opacity = 1;
    const title = document.title; // Assuming the page title contains the desired title
    const description = "Your description goes here"; // Replace with your actual description

    // Create an object to hold the data
    const data = {
      title: title,
      description: description,
      // Add other relevant properties as needed
    };

    // Store the data in local storage
    localStorage.setItem('favoriteData', JSON.stringify(data));


    redHeart.style.textShadow = "-1px 0 #fffbfb, 0 1px #fff, 1px 0 #fff, 0 -1px #fff";
    heartClicked = true;
  } else {
    redHeart.classList.remove('fa-solid');
    redHeart.classList.add('fa-regular');
    redHeart.style.color = "";
    heartClicked = false;
    localStorage.removeItem('favoriteData');
  }
}



// // sticky header

// $(window).on("scroll touchmove", function() {

//     if ($(document).scrollTop() > $("#sticky-wrapper").position().top) {
//       $('.sticky-area').css('width', '100%');
//       $('.sticky-area').css('max-width', '1600px');
//       $('.sticky-area').css('margin', '0 auto');
//       $('.sticky-area').css('position', 'fixed');
//       $('.sticky-area').css('top', '0px');
//       $('.sticky-area').css('background', 'linear-gradient(to left, #4776e6, #8e54e9)');
//       $('.sticky-area').css('z-index', '1111');
//       $('.sticky-area').css('box-shadow', '0 3px 16px -2px #ebe8e8');
//       $('#sticky-wrapper').addClass('is-sticky');
  
//     }
//     else{
//     $('.sticky-area').removeAttr('style');
  
//     }
    
//   });