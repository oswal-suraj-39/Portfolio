function mainProgram() {
    let body = document.querySelector("body");
    body.addEventListener("click", function (event) {
        let link = event.target.closest("a");
        if (link) {
            link.classList.add("tabActive");
            let othersLink = link.parentElement.querySelectorAll("a");
            othersLink.forEach(function (otherLink) {
                if (otherLink.classList.contains("tabActive") && otherLink !== link) {
                    otherLink.classList.remove("tabActive");
                }
            });
        }
    });
}

mainProgram();