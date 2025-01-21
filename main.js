const navbarToggle = document.querySelector(".navbar-toggle");
const navbar = document.querySelector(".navbar");

navbarToggle.addEventListener("click", () => {
  navbar.classList.toggle("navbar--visible");
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // hero-intro section
      const title = document.querySelector(".title");
      const titleSpan = document.querySelector(".title-span");
      const intro = document.querySelector(".intro");
      title.textContent = `${data.hero.title}`;
      titleSpan.textContent = `${data.hero.title_span}`;
      intro.textContent = `${data.hero.intro}`;

      // body section
      const bodyOsTitle = document.querySelector(".what-is-os");
      const osDesc = document.querySelector(".os-desc");
      const osExample = document.querySelector(".os-ex");
      bodyOsTitle.textContent = `${data.body.osTitle}`;
      osDesc.textContent = `${data.body.osDesc}`;
      osExample.textContent = `${data.body.osExample}`;
      osExample.innerHTML = `${data.body.osExample.replace(/\n/g, "<br>")}`;

      const rolOsTitle = document.querySelector(".role-os-title");
      const rolOsDesc = document.querySelector(".role-os-desc");
      rolOsTitle.textContent = `${data.body.rolOSTitle}`;
      rolOsDesc.textContent = `${data.body.rolOSdesc}`;
      rolOsDesc.innerHTML = `${data.body.rolOSdesc.replace(/\n/g, "<br>")}`;

      const utilTitle1 = document.querySelector(".util-title1");
      const utilDesc1 = document.querySelector(".util-desc1")
      utilTitle1.textContent = `${data.body.utilTitle1}`;
      utilDesc1.textContent = `${data.body.utilDesc1}`;
      utilDesc1.innerHTML = `${data.body.utilDesc1.replace(/\n/g, "<br>")}`;

      const utilTitle2 = document.querySelector(".util-title2");
      const utilDesc2 = document.querySelector(".util-desc2")
      utilTitle2.textContent = `${data.body.utilTitle2}`;
      utilDesc2.textContent = `${data.body.utilDesc2}`;
      utilDesc2.innerHTML = `${data.body.utilDesc2.replace(/\n/g, "<br>")}`;

      // conclusion 
      const concTitle = document.querySelector('.conc-title')
      const concDesc = document.querySelector('.conc-desc')
      concTitle.textContent = `${data.conc.concTitle}`
      concDesc.textContent = `${data.conc.concDesc}`
      
    })
    .catch((error) => console.error("Error fetching JSON data:", error));
});
