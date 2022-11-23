const vacancies = document.querySelector('#vacancies');
const vacanciesList = ['Call center Operator', 'Waiter', 'Deliveryman']

for (let i = 0; i < vacanciesList.length; i++) {
    const vacancyCard = document.createElement('div')
    vacancyCard.className = 'vacancy-card'
    vacancyCard.innerHTML = `
        <h1>${vacanciesList[i]}</h1>
        <ul>
            <li>
            no experience is required, we will teach you everything;
            </li>
            <li>
            we provide a comfortable working environment;
            </li>
            <li>
            culture and literacy of speech (knowledge of Uzbek, Russian and communication etiquette languages);
            </li>
            <li>
            punctuality and responsibility;
            </li>
            <li>
            the ability to work in a team;
            </li>
            <li>
            the ability to work under pressure;
            </li>
        </ul>
        <button class="btn">Apply</button>
    `

    vacancies.appendChild(vacancyCard)
}