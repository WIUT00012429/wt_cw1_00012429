const bannerContent = document.querySelector('#banner-content');
const data = [
    {
        name: "Beloved Customer",
        img: "./images/customer1.jpg",
    },
    {
        name: "Beloved Customer",
        img: "./images/customer2.jpg",
    },
    {
        name: "Beloved Customer",
        img: "./images/customer1.jpg",
    },
    {
        name: "Beloved Customer",
        img: "./images/customer2.jpg",
    }
]

const customer = document.createElement("div")
customer.className = "customer"
customer.innerHTML = `
${data.map(item => `
<div class="customer-item">
                    <img src="${item.img}" alt="${item.name}"/>
                    <h3>${item.name}</h3>
                </div>
`).join("")}
`

bannerContent.append(customer)