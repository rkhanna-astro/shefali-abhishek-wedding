// Set the wedding date (YYYY, MM - 1, DD, HH, MM, SS)

function goToPage(destination, newBg) {
    // Save the new background image for the next page
    // sessionStorage.setItem("backgroundImage", newBg);

    // Add fade-out effect before switching pages
    // document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = destination;
    }, 600); // Wait for transition effect
}

window.onload = function() {
    let page = window.location.pathname;
    console.log("Current page:", page);

    if (page.includes("index.html")) {
        // sessionStorage.setItem("backgroundImage", "Black-white-image.jpg");
        document.body.style.backgroundImage = "url('new background (website).png')";
        document.body.style.backgroundSize = "cover";
        console.log("Background set to Black-white-image.jpg");
        // document.body.style.width = "100%";  // Set width of body to 100% of the viewport
        // document.body.style.height = "100%";
        // document.documentElement.style.overflowX = "hidden";
        // document.body.style.width = "1800px";  // Set width of body to 100% of the viewport
        // document.body.style.height = "1500px";
    
    } 
    // else {
    //     let savedBg = sessionStorage.getItem("backgroundImage");
    //     console.log("Saved background:", savedBg);
    //     if (savedBg) {
    //         document.body.style.backgroundImage = `url('${savedBg}')`;
    //         console.log("Background set to saved image");
    //     } else {
    //         console.log("No saved background image found");
    //     }

    // }

    if (page.includes("main_page.html")) {
        console.log("Main details page detected")
        document.body.style.backgroundImage = "url('main page (website).png')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";  // Center the image
        document.body.style.backgroundRepeat = "no-repeat";
        
        // document.body.style.width = "100%";  // Set width of body to 100% of the viewport
        // document.body.style.height = "100%";  // Set height of body to 100% of the viewport height
        
        // document.documentElement.style.overflowX = "hidden";  // For <html> element
        // document.body.style.overflowX = "hidden";  // For <body> element
        document.getElementById("mainContent").style.opacity = "1";
        document.getElementById("mainContent").style.visibility = "visible";
    }

    if (page.includes("wedding_details.html")) {
        console.log("Wedding details page detected"); // Debugging: Check if we're on the wedding details page
        document.body.style.backgroundImage = "url('details (1800 X 2100).png')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";  // Center the image
        document.body.style.backgroundRepeat = "no-repeat";

        document.body.style.width = "100%";  // Set width of body to 100% of the viewport
        document.body.style.height = "100%";  // Set height of body to 100% of the viewport height
        
        let weddingDetails = document.getElementById("weddingDetails");
        console.log("weddingDetails element found:", weddingDetails); // Debugging: Check if the element is found

        if (weddingDetails) {
            weddingDetails.style.opacity = "1";
            weddingDetails.style.visibility = "visible";
        } else {
            console.log("weddingDetails element not found");
        }
    }

    if (page.includes("shefali_abhishek.html")) {
        document.body.style.backgroundImage = "url('abhishek_and_shefali (website).jpeg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";  // Center the image
        document.body.style.backgroundRepeat = "no-repeat";
    
        // document.body.style.width = "100%";  // Set width of body to 100% of the viewport
        // document.body.style.height = "100%";  // Set height of body to 100% of the viewport height

        document.getElementById("snaDetails").style.opacity = "1";
        document.getElementById("snaDetails").style.visibility = "visible";
    }

    if (page.includes("location_details.html")) {
        document.body.style.backgroundImage = "url('location_detail.png')";

        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";  // Center the image
        document.body.style.backgroundRepeat = "no-repeat";
    
        // document.body.style.width = "100%";  // Set width of body to 100% of the viewport
        // document.body.style.height = "100%";  // Set height of body to 100% of the viewport height

        document.getElementById("locationDetails").style.opacity = "1";
        document.getElementById("locationDetails").style.visibility = "visible";
    }

    if (page.includes("haldi.html")) {
        document.body.style.backgroundImage = "url('haldi (website).png')";

        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";  // Center the image
        document.body.style.backgroundRepeat = "no-repeat";
    
        // document.body.style.width = "100%";  // Set width of body to 100% of the viewport
        // document.body.style.height = "100%";  // Set height of body to 100% of the viewport height

        document.getElementById("contentContainer").style.opacity = "1";
        document.getElementById("contentContainer").style.visibility = "visible";

        document.querySelectorAll(".wedding-content").forEach(content => {
            content.style.display = "none";
            content.style.opacity = "0";
            content.style.transform = "translateX(50px)"; // Reset position
        });
        
        // Show selected content smoothly
        let selectedContent = document.getElementById("content1");
        selectedContent.style.display = "block";
    }

    if (page.includes("shagna_di_raat.html")) {
        document.body.style.backgroundImage = "url('shagna-di-raat (website).png')";

        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";  // Center the image
        document.body.style.backgroundRepeat = "no-repeat";
    
        // document.body.style.width = "100%";  // Set width of body to 100% of the viewport
        // document.body.style.height = "100%";  // Set height of body to 100% of the viewport height

        document.getElementById("contentContainer").style.opacity = "1";
        document.getElementById("contentContainer").style.visibility = "visible";
    }

    if (page.includes("shadi.html")) {
        document.body.style.backgroundImage = "url('marriage (website).png')";

        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";  // Center the image
        document.body.style.backgroundRepeat = "no-repeat";
    
        // document.body.style.width = "100%";  // Set width of body to 100% of the viewport
        // document.body.style.height = "100%";  // Set height of body to 100% of the viewport height

        document.getElementById("contentContainer").style.opacity = "1";
        document.getElementById("contentContainer").style.visibility = "visible";
    }
};

// function enterSite() {
//     document.getElementById("welcome").style.opacity = "0";
//     setTimeout(() => {
//         document.getElementById("welcome").style.display = "none";
//         document.getElementById("mainContent").style.opacity = "1";
//         document.getElementById("mainContent").style.visibility = "visible";
//         // document.getElementById("mainContent").style.display = "block";
//         document.body.classList.add("background-transition");
//     }, 1000);
// }

// function weddingDetails() {
//     document.getElementById("mainContent").style.opacity = "0";
//     setTimeout(() => {
//         document.getElementById("mainContent").style.display = "none";
//         document.getElementById("weddingDetails").style.opacity = "1";
//         document.getElementById("weddingDetails").style.visibility = "visible";
//         // document.getElementById("mainContent").style.display = "block";
//         document.body.classList.add("background-transition-2");
//     }, 1000);
// }

// function snaDetails() {
//     document.getElementById("mainContent").style.opacity = "0";
//     setTimeout(() => {
//         document.getElementById("mainContent").style.display = "none";
//         document.getElementById("snaDetails").style.opacity = "1";
//         document.getElementById("snaDetails").style.visibility = "visible";
//         // document.getElementById("mainContent").style.display = "block";
//         document.body.classList.add("background-transition-4");
//     }, 1000);
// }

// function locationDetails() {
//     document.getElementById("mainContent").style.opacity = "0";
//     setTimeout(() => {
//         document.getElementById("mainContent").style.display = "none";
//         document.getElementById("locationDetails").style.opacity = "1";
//         document.getElementById("locationDetails").style.visibility = "visible";
//         // document.getElementById("mainContent").style.display = "block";
//         document.body.classList.add("background-transition-5");
//     }, 1000);
// }

// var scrollDownElement = document.getElementById("scrollDown");

// window.addEventListener("scroll", function() {
//   // If the user scrolls down, disable the scroll-down arrow
//   if (window.scrollY > 0) {
//     scrollDownElement.style.pointerEvents = "none"; // Disable interaction
//     scrollDownElement.style.opacity = "0.5"; // Make it look disabled
//   } else {
//     scrollDownElement.style.pointerEvents = "auto"; // Re-enable interaction
//     scrollDownElement.style.opacity = "1"; // Make it fully visible
//   }
// });
// });