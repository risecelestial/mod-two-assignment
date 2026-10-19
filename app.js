

// Find all of the Show more buttons.
const detailButtons = document.querySelectorAll(".details-button");

// Give every button its own click behavior.
detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Find the extra information inside this card.
        const cardContent = button.closest(".card-content");
        const extraDetails = cardContent.querySelector(".extra-details");

        // Check whether the details are currently visible.
        const isExpanded =
            button.getAttribute("aria-expanded") === "true";

        // Hide the details if open, or show them if closed.
        extraDetails.hidden = isExpanded;

        // Update the accessibility state of the button.
        button.setAttribute("aria-expanded", String(!isExpanded));

        // Change button label.
        button.textContent = isExpanded ? "Show more" : "Show less";
    });
});
