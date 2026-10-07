/* ================================
   MAGIC CARD EFFECT
================================ */

const magicCards = document.querySelectorAll(".service-card");

magicCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        card.classList.add("magic-active");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("magic-active");

    });

});