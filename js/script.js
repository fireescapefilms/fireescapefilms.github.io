const prompt = `
Hello my friend! If you are interested in helping developing the website,
Please contact us at fetechdirector@gmail.com. Thank you!
This website is developped by Yuanjian Liu.
The Github Repo for this website is https://github.com/fireescapefilms/fireescapefilms.github.io
`
console.log(prompt);
const h1 = document.querySelector(".heading-primary");

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", async (e) => {
    
    const href = link.getAttribute("href");
    e.preventDefault();
    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } 
    // Scroll to other links
    else if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    } else if(href.startsWith("https://uchicago.webcheckout.net/")) {
      const newTab = window.open(href, '_blank');
      await new Promise(resolve => setTimeout(resolve, 3000));
      newTab.location.href = href;
    }
    else if(href.startsWith("http")) {
      window.open(href, "_blank")
    } else {
      window.open(href, "_self")
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".top-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/


const devices = document.querySelectorAll('.meal');
const popup = document.getElementById('popup');

const popupTitle = document.getElementById('popupTitle');
const popupDescription = document.getElementById('popupDescription');
const popupPatronButton = document.getElementById('popupPatronButton');
const popupImage = document.getElementById('popupImage');

function updatePopupInfo(title, description, patronURL, popupImageSrc) {
  popupTitle.textContent = title;
  popupDescription.textContent = description;
  popupPatronButton.href = patronURL;
  popupImage.src = popupImageSrc;
}

const close = document.querySelector('.close');

const onCloseModal = () => {
  popup.style.display = 'none';
};

// Open the pop-up when clicking on the product image
devices.forEach((device) => {
  device.addEventListener('click', () => {
    const title = device.dataset.title;
    const description = device.dataset.description;
    const patronURL = device.dataset.patronurl;
    const imagesrc = device.dataset.imagesrc;
    updatePopupInfo(title, description, patronURL, imagesrc);
    popup.style.display = 'block';
    // Close the pop-up when clicking on the close button
    close.addEventListener('click', onCloseModal);
  });
});



// Close the pop-up when clicking outside of the popup-content
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    close.removeEventListener('click', onCloseModal);
    popup.style.display = 'none';
  }
});