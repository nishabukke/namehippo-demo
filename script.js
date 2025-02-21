
// Get elements
const searchIcon = document.getElementById("searchIcon");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Show popup
searchIcon.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Close popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});






// var heartClicked = false;

// function fillHeart() {
//   var redHeart = document.getElementById('heart');
//   if (heartClicked == false) {
//     redHeart.classList.remove('fa-regular');
//     redHeart.classList.add('fa-solid');
//     redHeart.style.color = "#e90c0c";
//     redHeart.style.opacity = 1;
//     const title = document.title; // Assuming the page title contains the desired title
//     const description = "Your description goes here"; // Replace with your actual description

//     // Create an object to hold the data
//     const data = {
//       title: title,
//       description: description,
//       // Add other relevant properties as needed
//     };

//     // Store the data in local storage
//     localStorage.setItem('favoriteData', JSON.stringify(data));


//     redHeart.style.textShadow = "-1px 0 #fffbfb, 0 1px #fff, 1px 0 #fff, 0 -1px #fff";
//     heartClicked = true;
//   } else {
//     redHeart.classList.remove('fa-solid');
//     redHeart.classList.add('fa-regular');
//     redHeart.style.color = "";
//     heartClicked = false;
//     localStorage.removeItem('favoriteData');
//   }
// }

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




  // by industry page js 

  document.addEventListener("DOMContentLoaded", function () {
    // Toggle categories
    document.querySelectorAll(".category-label").forEach(label => {
        label.addEventListener("click", function () {
            let subcategory = this.nextElementSibling;
            if (subcategory.style.display === "block") {
                subcategory.style.display = "none";
                this.querySelector(".toggle-btn").textContent = "+";
            } else {
                subcategory.style.display = "block";
                this.querySelector(".toggle-btn").textContent = "-";
            }
        });
    });

    // Search functionality
    document.getElementById("search").addEventListener("input", function () {
        let filter = this.value.toLowerCase();
        document.querySelectorAll(".premium-domain-item").forEach(item => {
            let domainName = item.querySelector("h4").textContent.toLowerCase();
            item.style.display = domainName.includes(filter) ? "block" : "none";
        });
    });

    // Sort functionality
    document.getElementById("sort").addEventListener("change", function () {
        let sortBy = this.value;
        let domainList = document.querySelector(".right-by-industry");
        let items = Array.from(domainList.querySelectorAll(".premium-domain-item"));

        items.sort((a, b) => {
            let nameA = a.querySelector("h4").textContent.toLowerCase();
            let nameB = b.querySelector("h4").textContent.toLowerCase();
            let priceA = parseInt(a.querySelector(".price span").textContent.replace("$", ""));
            let priceB = parseInt(b.querySelector(".price span").textContent.replace("$", ""));

            if (sortBy === "name") return nameA.localeCompare(nameB);
            if (sortBy === "price-low") return priceA - priceB;
            if (sortBy === "price-high") return priceB - priceA;
        });

        items.forEach(item => domainList.appendChild(item));
    });
});


function activeTab(evt, id) {
           
  // Get all elements with class="tablinks" and remove the class "active"
   let tabactive = document.getElementsByClassName("TabButtonSelected");
   tabactive[0].className = tabactive[0].className.replace(" TabButtonSelected", "");

   document.getElementById(id).style.display = "block";
   evt.currentTarget.className += " TabButtonSelected";

   displaySection(evt,id)
}

function displaySection(evt, id) {

   let tabactive = document.getElementsByClassName("tab-section");
   tabactive[0].className = tabactive[0].className.replace(" d-chart-show", "d-chart-n");
   // add below line of codes
   [...document.querySelectorAll('div.tab-section')].forEach(item => item.style.display='none')
   document.getElementById("Section" + id).style.display = "block";
   evt.currentTarget.className += " d-chart-show";

}
