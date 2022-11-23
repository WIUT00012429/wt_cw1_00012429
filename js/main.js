const navbar = document.querySelector('.navbar');
const navbarMenuList = document.querySelector('.navbar-menu-list');
const toggleMenu = document.querySelector('#toggleMenu');
if (window.location.pathname === "/index.html") {
    navbar.style.position = "absolute";
}
else {
    navbar.style.position = "sticky";
}
if (window.screen.width > 892) {
    navbarMenuList.classList.remove("navbar-active")
    navbarMenuList.classList.add("list")
}

if (toggleMenu) {
    toggleMenu.addEventListener("click", function () {
        navbarMenuList.classList.toggle("navbar-active")
    })
}
switch (window.location.pathname) {
    case "/index.html":
        document.querySelector("li>a").classList.add("active-link");
        break;
    case "/about.html":
        document.querySelector("li:nth-child(2)>a").classList.add("active-link");
        break;
    case "/menu.html":
        document.querySelector("li:nth-child(3)>a").classList.add("active-link");
        break;
    case "/contacts.html":
        document.querySelector("li:nth-child(4)>a").classList.add("active-link");
        break;
    case "/vacancies.html":
        document.querySelector("li:nth-child(5)>a").classList.add("active-link");
        break;
    case "/customers.html":
        document.querySelector("li:nth-child(6)>a").classList.add("active-link");
        break;
    default:
        break;
}

const footer = document.createElement("footer")
footer.innerHTML = `
    <div class="footer">
        <div class="footer-content">
            Copyright 2022 &copy; All Rights Reserved
        </div>
    </div>
`
document.body.append(footer)