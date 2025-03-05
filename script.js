const navBar = document.getElementById('navBar')

function openSidebar(){
    navBar.classList.add('show');
}

function closeSidebar(){
    navBar.classList.remove('show');
}


// Get modal and its elements
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalLink = document.getElementById("modalLink");
const closeBtn = document.querySelector(".close");

// Add click event to each image in the gallery
const images = document.querySelectorAll(".listings img");
images.forEach(img => {
    img.addEventListener("click", () => {
        // Retrieve data attributes from the clicked image
        const altImage = img.getAttribute("data-alt");
        const description = img.getAttribute("data-description");
        const price = img.getAttribute("data-price");
        const link = img.getAttribute("data-link");

        // Populate the modal with the retrieved content
        modalImg.src = altImage;
        modalImg.alt = img.alt;
        modalDescription.textContent = description;
        modalPrice.textContent = price;
        modalLink.href = link;

        // Display the modal
        modal.style.display = "block";
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Optionally, close the modal when clicking outside the modal content
window.addEventListener("click", event => {
    if (event.target === modal) {
    modal.style.display = "none";
    }
});
