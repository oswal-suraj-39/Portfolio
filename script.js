function projectsDataLoader(data) {
    const projectsSection = document.querySelector(".projectsSection");
    const projectsContainer = projectsSection.querySelector(".projectsContainer");
    data.projects.forEach(function (proj) {
        let div = document.createElement("div");
        div.classList = "projectCard";
        div.innerHTML = `
                    <img src="${proj.image}" class="pimg" />
                    <h3>${proj.name}</h3>
                    <p>${proj.info}</p>
                    <ul class="tech"></ul>
                    <div class="plink">
                        <a href="${proj.srcCode}">
                            <img src="${data.svgLoc.folder}" />
                            Code
                        </a>
                        <a href="${proj.liveLink}">
                            <img src="${data.svgLoc.live}" />
                            Live Demo
                        </a>
                    </div>
                </div>`;
        projectsContainer.appendChild(div);
    });
    let ul = projectsContainer.querySelectorAll(".tech");
    ul.forEach(function(u, index) {
        data.projects[index].techUsed.forEach(function (te) {
            const li = document.createElement("li");
            li.textContent = te;
            u.appendChild(li);
        });
    });
}

function skillsDataLoader(data) {
    const skillSection = document.querySelector(".skillSection");
    const [skillsti1, skillsti2, skillsti3] = skillSection.getElementsByTagName("h3");
    const [skillul1, skillul2, skillul3] = skillSection.getElementsByTagName("ul");
    skillsti1.textContent = data.skills[0].title;
    skillsti2.textContent = data.skills[1].title;
    skillsti3.textContent = data.skills[2].title;
    data.skills[0].skillArr.forEach(function (skill) {
        const li = document.createElement("li");
        li.textContent = skill;
        skillul1.appendChild(li);
    });
    data.skills[1].skillArr.forEach(function (skill) {
        const li = document.createElement("li");
        li.textContent = skill;
        skillul2.appendChild(li);
    });
    data.skills[2].skillArr.forEach(function (skill) {
        const li = document.createElement("li");
        li.textContent = skill;
        skillul3.appendChild(li);
    });
}

function aboutDataLoader(data) {
    const aboutSection = document.querySelector(".aboutSection");
    const [shortInfo, codingsvg, dataFlowsvg, dbmssvg] = aboutSection.querySelectorAll(".shortInfo, img");
    const [fati1, fati2, fati3] = aboutSection.querySelectorAll(".fati");
    const [fainfo1, fainfo2, fainfo3] = aboutSection.querySelectorAll(".fainfo");

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
    const [nameTitle, introText, profileCard] = document.querySelectorAll(".NameTitle, .introText, .profileCard");
    const [nt1, nt2] = nameTitle.querySelectorAll(".nt1, .nt2");
    const [myStatus1, tagLine] = introText.querySelectorAll(".myStatus1, .tagLine");
    const [pcdp1, pcdp2] = profileCard.querySelectorAll(".pcdp1, .pcdp2");
    const [pcd21, pcd22, pcd23] = profileCard.querySelectorAll(".pcdpa");
    const [profileImg, locsvg, mailsvg, calesvg, linkedinLink, githubLink] = profileCard.querySelectorAll(".profileImg, .locsvg, .mailsvg, .calesvg, .link");
    const [linkedinLogo, githubLogo] = profileCard.querySelectorAll(".logo")

    nt1.textContent = data.personalInfo.name;
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
        skillsDataLoader(data);
        projectsDataLoader(data);
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