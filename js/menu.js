const menu = document.querySelector("#menu");
const menuList = ['Burger', 'Pizza', 'Pasta', 'Salad', 'Dessert', 'Drinks'];

for (let i = 0; i < 3; i++) {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-card";
    menuItem.innerHTML = `
    <img src="../images/burger.jpg" alt="menu image"/>
<h1>${menuList[i]}</h1>
<p>
    Our menu is the best in the world. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quam placeat, tenetur laboriosam quos fugiat qui deserunt
</p>
<p class="last-item">
   <span>3.99$</span>

   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
   <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
 </svg>
 
</p>
    
`;
    menu.appendChild(menuItem);
}