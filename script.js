function aboutDataLoader(data) {
    const aboutSection = document.querySelector(".aboutSection");
    const shortInfo = aboutSection.querySelector(".shortInfo");
    const codingsvg = aboutSection.querySelector(".codingsvg");
    const dataFlowsvg = aboutSection.querySelector(".dataFlowsvg");
    const dbmssvg = aboutSection.querySelector(".dbmssvg");
    const fati1 = aboutSection.querySelector(".fati1");
    const fati2 = aboutSection.querySelector(".fati2");
    const fati3 = aboutSection.querySelector(".fati3");
    const fainfo1 = aboutSection.querySelector(".fainfo1");
    const fainfo2 = aboutSection.querySelector(".fainfo2");
    const fainfo3 = aboutSection.querySelector(".fainfo3");
    shortInfo.textContent = data.shortBio;
    codingsvg.src = data.svgLoc.codingBrowser;
    dataFlowsvg.src = data.svgLoc.dataFlow;
    dbmssvg.src = data.svgLoc.dbms;
    fati1.textContent = data.focusDetails[0].title;
    fati2.textContent = data.focusDetails[1].title;
    fati3.textContent = data.focusDetails[2].title;
    fainfo1.textContent = data.focusDetails[0].description;
    fainfo2.textContent = data.focusDetails[1].description;
    fainfo3.textContent = data.focusDetails[2].description;
}

function homeDataLoader(data) {
    const nameTitle = document.querySelector(".NameTitle");
    const introText = document.querySelector(".introText");
    const profileCard = document.querySelector(".profileCard");
    const nt1 = nameTitle.querySelector(".nt1");
    const nt2 = nameTitle.querySelector(".nt2");
    const myStatus1 = introText.querySelector(".myStatus1");
    const tagLine = introText.querySelector(".tagLine");
    const pcdp1 = profileCard.querySelector(".pcdp1");
    const pcdp2 = profileCard.querySelector(".pcdp2");
    const pcd21 = profileCard.querySelector(".pcd21");
    const pcd22 = profileCard.querySelector(".pcd22");
    const pcd23 = profileCard.querySelector(".pcd23");
    const profileImg = profileCard.querySelector(".profileImg");
    const locsvg = profileCard.querySelector(".locsvg");
    const mailsvg = profileCard.querySelector(".mailsvg");
    const calesvg = profileCard.querySelector(".calesvg");
    const linkedinLink = profileCard.querySelector(".linkedinLink");
    const githubLink = profileCard.querySelector(".githubLink");
    const linkedinLogo = profileCard.querySelector(".linkedinLogo");
    const githubLogo = profileCard.querySelector(".githubLogo"); nt1.textContent = data.personalInfo.name;
    nt2.textContent = data.personalInfo.role;
    myStatus1.textContent = data.currentStatus;
    tagLine.innerHTML = `Hi, I'm Suraj!<br>
                    ${data.shortTagline}`;
    pcdp1.textContent = data.personalInfo.role;
    pcdp2.textContent = data.personalInfo.experience;
    locsvg.src = data.svgLoc.location;
    pcd21.textContent = data.personalInfo.address;
    mailsvg.src = data.svgLoc.mail;
    pcd22.textContent = data.personalInfo.email;
    calesvg.src = data.svgLoc.calendar;
    pcd23.textContent = data.personalInfo.availability;
    profileImg.src = data.personalInfo.profilePic;
    linkedinLink.href = data.personalInfo.linkedin;
    githubLink.href = data.personalInfo.github;
    linkedinLogo.src = data.svgLoc.linkedin;
    githubLogo.src = data.svgLoc.github;
}

async function fetchData() {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        console.log(data);
        homeDataLoader(data);
        aboutDataLoader(data);
    } catch (error) {
        console.error("Error fetching data: ", error);
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
    fetchData();
}

mainProgram();