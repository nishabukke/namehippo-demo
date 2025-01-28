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

  var heartClicked = false;

  function fillHeart() {
    var redHeart = document.getElementById('heart');
    if (heartClicked == false) {
      redHeart.classList.remove('fa-regular');
      redHeart.classList.add('fa-solid');
      redHeart.style.color = "#e90c0c";
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