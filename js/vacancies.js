const vacancies = document.querySelector('#vacancies');
const vacanciesList =[
    {
        name: "Waiter or Waitress",
        description: `
        • Proven work experience as a Waiter or Waitress
        • Hands-on experience with cash register and ordering information system (e.g. Revel POS or Toast POS)
        • Basic math skills
        • Attentiveness and patience for customers
        • Excellent presentation skills
        • Strong organizational and multitasking skills, with the ability to perform well in a fast-paced environment
        • Active listening and effective communication skills
        • Team spirit
        • Flexibility to work in shifts
        `,
        salary: "600$"
    },
    {
        name: "Deliveryman",
        description: `
        • Proven working experience as a Delivery Driver
        • Valid professional driver’s license
        • Ability to operate forklifts and tractors in a variety of weather and traffic conditions
        • Excellent organizational and time management skills
        • Good driving record with no traffic violations
        `,
        salary: "500$"
    },
    {
        name: "Customer role support",
        description: `
        • Track record of over-achieving quota
        • Strong phone and verbal communication skills along with active listening
        • Familiarity with CRM systems and practices
        • Customer focus and adaptability to different personality types
        • Ability to multi-task, set priorities and manage time effectively
        `,
        salary: "700$"
    }
]

vacanciesList.map((i) => {
    const vacancyCard = document.createElement('div')
    vacancyCard.className = 'vacancy-card'
    vacancyCard.innerHTML = `
        <h1>${i.name}</h1>
        <p>
                ${i.description}
            </p>
        <span style="margin-bottom: 15px">${i.salary}</span>
        <button class="btn">Apply</button>
    `

    vacancies.appendChild(vacancyCard)
})