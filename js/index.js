const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let navLinks = document.querySelectorAll('a')
navLinks.forEach((link, i) => link.textContent = siteContent['nav'][`nav-item-${i+1}`])

let nav = document.querySelector('nav')
let newNav1 = document.createElement('a')
let newNav2 = document.createElement('a')
newNav1.textContent = 'Home'
newNav2.textContent = 'Careers'
nav.prepend(newNav1)
nav.appendChild(newNav2)

let newNavLinks = document.querySelectorAll('a')

newNavLinks.forEach(item => item.style.color = 'green')

let mainHeader = document.querySelector("h1");
mainHeader.textContent = siteContent['cta']['h1']; // Why is cta-text not same as original

let ctaButton = document.querySelector('button')
ctaButton.textContent = "Get Started";

let topContent = document.querySelectorAll('.top-content .text-content')
let topContentHeader1 = siteContent['main-content']['features-h4']
let topContentPara1 = siteContent['main-content']['features-content']
let topContentHeader2 = siteContent['main-content']['about-h4']
let topContentPara2 = siteContent['main-content']['about-content']
topContent[0].firstElementChild.textContent = topContentHeader1
topContent[0].lastElementChild.textContent = topContentPara1
topContent[1].firstElementChild.textContent = topContentHeader2
topContent[1].lastElementChild.textContent = topContentPara2

let bottomContent = document.querySelectorAll('.bottom-content .text-content')
let bottomContentHeader1 = siteContent['main-content']['services-h4']
let bottomContentPara1 = siteContent['main-content']['services-content']
let bottomContentHeader2 = siteContent['main-content']['product-h4']
let bottomContentPara2 = siteContent['main-content']['product-content']
let bottomContentHeader3 = siteContent['main-content']['vision-h4']
let bottomContentPara3 = siteContent['main-content']['vision-content']
bottomContent[0].firstElementChild.textContent = bottomContentHeader1
bottomContent[0].lastElementChild.textContent = bottomContentPara1
bottomContent[1].firstElementChild.textContent = bottomContentHeader2
bottomContent[1].lastElementChild.textContent = bottomContentPara2
bottomContent[2].firstElementChild.textContent = bottomContentHeader3
bottomContent[2].lastElementChild.textContent = bottomContentPara3

let contactHeader = document.querySelector('.contact h4')
contactHeader.textContent = siteContent['contact']['contact-h4']

let contactInfo = document.querySelectorAll('.contact p')
contactInfo[0].textContent = siteContent['contact']['address']
contactInfo[1].textContent = siteContent['contact']['phone']
contactInfo[2].textContent = siteContent['contact']['email']

let copyright = document.querySelector('footer p')
copyright.textContent = siteContent['footer']['copyright']