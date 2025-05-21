
// Get elements
const searchIcon = document.getElementById("searchIcon");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const focusableElements = popup.querySelectorAll("a, button, input, textarea, select");
let lastFocusedElement = null;

// Function to open popup and trap focus
function openPopup() {
  lastFocusedElement = document.activeElement; // Store last focused element
  popup.style.display = "flex";
  document.body.setAttribute("tabindex", "-1");
  document.body.setAttribute("aria-hidden", "true");

  // Move focus to the first focusable element inside the popup
  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }
}

// Function to close popup and restore focus
function closePopupHandler() {
  popup.style.display = "none";
  document.body.removeAttribute("tabindex");
  document.body.setAttribute("aria-hidden", "false");

  // Restore focus to the previously focused element
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

// Handle search icon click
searchIcon.addEventListener("click", openPopup);

// Handle Enter keypress on search icon
searchIcon.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    openPopup();
  }
});

// Handle close button click
closePopup.addEventListener("click", closePopupHandler);

// Handle Escape keypress to close popup
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePopupHandler();
  }
});

// Trap focus inside popup
popup.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      // If Shift + Tab is pressed, focus should go to the last element
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // If Tab is pressed, focus should go to the first element
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }
});


// mobile menu

$( document ).ready(function() {

  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".canva_expander" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".canva_expander" ).hide();
  $( ".cross" ).show();
  });
  });
  
  $( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".cross" ).hide();
  $( ".canva_expander" ).show();
  });
  });
  
  });

 // Close out sub menu
 $('.sub__close').click(function(e) {
  e.preventDefault();
  
  $(this).parent().parent().removeClass('is-active');
});

// Trigger sub menu
$('.menu ul .nav__submenu').click(function(e) {
  e.preventDefault();
  
  $(this).siblings().addClass('is-active');
});


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
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("search").addEventListener("input", function () {
        let filter = this.value.toLowerCase();
        document.querySelectorAll(".premium-domain-item").forEach(item => {
            let domainName = item.querySelector("h4").textContent.toLowerCase();
            item.style.display = domainName.includes(filter) ? "block" : "none";
        });
    });
    });
    

    // Sort functionality
    // document.getElementById("sort").addEventListener("change", function () {
    //     let sortBy = this.value;
    //     let domainList = document.querySelector(".right-by-industry");
    //     let items = Array.from(domainList.querySelectorAll(".premium-domain-item"));

    //     items.sort((a, b) => {
    //         let nameA = a.querySelector("h4").textContent.toLowerCase();
    //         let nameB = b.querySelector("h4").textContent.toLowerCase();
    //         let priceA = parseInt(a.querySelector(".price span").textContent.replace("$", ""));
    //         let priceB = parseInt(b.querySelector(".price span").textContent.replace("$", ""));

    //         if (sortBy === "name") return nameA.localeCompare(nameB);
    //         if (sortBy === "price-low") return priceA - priceB;
    //         if (sortBy === "price-high") return priceB - priceA;
    //     });

    //     items.forEach(item => domainList.appendChild(item));
    // });
});


function activeTab(evt, id) {
  // Remove "TabButtonSelected" class from the currently selected tab
  let currentActiveTab = document.querySelector(".TabButtonSelected");
  if (currentActiveTab) {
      currentActiveTab.classList.remove("TabButtonSelected");
  }

  // Show the clicked tab's content
  document.getElementById(id).style.display = "block";
  evt.currentTarget.classList.add("TabButtonSelected");

  // Update the displayed section
  displaySection(id);
}

function displaySection(id) {
  // Hide all tab sections
  document.querySelectorAll(".tab-section").forEach(section => {
      section.classList.remove("d-chart-show");
      section.classList.add("d-chart-n");
      section.style.display = "none";
  });

  // Show the selected tab section
  let activeSection = document.getElementById("Section" + id);
  if (activeSection) {
      activeSection.style.display = "block";
      activeSection.classList.add("d-chart-show");
  }
}

// Add keyboard accessibility: Listen for Enter and Space key presses
document.querySelectorAll(".TabButton").forEach(tab => {
  tab.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
          event.preventDefault(); // Prevent scrolling when Space is pressed
          activeTab(event, this.id);
      }
  });
});

