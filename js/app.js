document.querySelectorAll(".experience>header").forEach(e => {
    e.addEventListener("click", (event) => {
        const content = event.target.parentElement.querySelector(".content");
        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        }
        else {
            content.classList.add("hidden");
        }
    })
})