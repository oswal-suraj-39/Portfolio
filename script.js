async function fetchHomeData() {
    try {
        const nameTitle = document.querySelector(".NameTitle");
        const nt1 = nameTitle.querySelector(".nt1");
        const nt2 = nameTitle.querySelector(".nt2");
        const introText = document.querySelector(".introText");
        const myStatus = introText.querySelector(".myStatus1");
        const tagLine = introText.querySelector(".tagLine");
        const profileCard = document.querySelector(".profileCard");
        const pcdp1 = profileCard.querySelector(".pcdp1");
        const pcdp2 = profileCard.querySelector(".pcdp2");
        const pcd21 = profileCard.querySelector(".pcd21");
        const pcd22 = profileCard.querySelector(".pcd22");
        const pcd23 = profileCard.querySelector(".pcd23");

        const response = await fetch('./data.json');

        const data = await response.json();
        
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

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
    fetchHomeData();
}

mainProgram();