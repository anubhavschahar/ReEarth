// 1. Show/Hide "Scroll to Top" button based on scroll position
const scrollTopBtn = document.getElementById("scrollTop");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// 2. Smooth scroll to top functionality
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 3. Simple Alert for Pricing Buttons
const planButtons = document.querySelectorAll(".select-plan");
planButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for your interest! Our team will contact you to finalize your EPR plan.");
    });
});

// 4. Contact Button Alert
document.getElementById("contactBtn").addEventListener("click", () => {
    alert("Contacting support... Please wait.");
});
