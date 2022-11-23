const menu = document.querySelector("#menu");
const menuList = [{
    name : 'Burger',
    description: `1 pound ground lean (7% fat) beef
    4 hamburger buns (4 in. wide), split
    About 1/4 cup mayonnaise
    About 1/4 cup ketchup
    4 iceberg lettuce leaves, rinsed and crisped
    1 firm-ripe tomato, cored and thinly sliced
    4 thin slices red onion`,
    price: "3.99$",
    img: "../images/burger.jpg"
}, 
{
    name : 'Pizza',
    description: `
    1 1/2 cups (355 ml) warm water (105°F-115°F)
1 package (2 1/4 teaspoons) active dry yeast
3 3/4 cups (490g) bread flour
2 tablespoons extra virgin olive oil (omit if cooking pizza in a wood-fired pizza oven)
2 teaspoons kosher salt
1 teaspoon sugar
    `,
    price: "10.99$",
    img: "../images/pizza.jpg"
},
{
    name : 'Salad',
    description: `Whisk by hand with a large whisk. Use a medium-sized bowl to allow for enough movement of the whisk. 
    Add the olive oil little by little.
    Add protein like hard boiled eggs, seared ahi tuna, or chopped chicken.
    Serve with a side like cornbread or artisan bread.
    `,
    price: "1.99$",
    img: "../images/salad.jpg"
},
{
    name : 'Donut',
    description: `
    1¼
cups milk
2¼
teaspoons (one package) active dry yeast
2
eggs
8
tablespoons (1 stick) butter, melted and cooled
¼
cup granulated sugar
1
teaspoon salt
4¼
cups all-purpose flour, plus more for rolling out the dough
2
quarts neutral oil, for frying, plus more for the bowl.
    `,
    price: "5.99$",
    img: "../images/donut.jpg"
},
{
    name : 'Ice Tea',
    description: `
    Brew the Tea: In a saucepan, bring half the water to boil and remove it from heat. Add in the tea bags and allow them to steep for 10 minutes. 
    Remove the Tea Bags: Remove the tea bags from the hot water. If you want sweet tea, add the sugar and whisk until it’s completely dissolved. 
    Add the Cold Water: Add the remaining cold water to the hot tea and whisk. Refrigerate for at least an hour, or until chilled. 
    Serve: Serve the tea over ice with lemon slices and fresh mint. 

    `,
    price: "3.99$",
    img: "../images/icetea.jpg"
},

];

menuList.map((i) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-card";
    menuItem.innerHTML = `
    <img src="${i.img}" alt="menu image"/>
<h1>${i.name}</h1>
<p>
    ${i.description}
</p>
<p class="last-item">
   <span>${i.price}</span>

   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
   <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
 </svg>
 
</p>
    
`;
    menu.appendChild(menuItem);
}
) 