
const categories = [
  {name: "Main Course", items: mainCourse},
  {name: "Side Dish", items: sideDishes},
  {name: "Starters", items: starters}
];
const favoritList = document.querySelector(".dish-row");

categories.forEach((category, index) =>{
const container = document.createElement("div");
container.style.display = "inline-block";
container.style.textAlign = "center";
container.style.margin = "10px";

const title = document.createElement("div");
title.innerHTML = `<strong>${category.name}</strong>`
title.style.marginBottom = "8px";

  const firstItem = category.items[0];
  const img = document.createElement("img");
  img.src = firstItem.image;
  img.alt = category.name;
 
  img.style.cursor = "pointer"
  img.style.margin = "10px";
  img.onclick = () => myChoice(index);

  container.appendChild(title);
  favoritList.appendChild(container)
  container.appendChild(img);
});








const categoryView = document.getElementById("categoryView")
 function myChoice(index){
  const category = categories[index];
  categoryView.innerHTML=`<h2>${category.name}</h2>`;
 
  category.items.forEach(item => {
    const container = document.createElement("div");
    container.style.marginBottom = "20px";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.style.width = "150px";
    img.style.marginRight = "10px";
    

const info = document.createElement("div");
info.innerHTML = `<strong>${item.name} </strong><br>
Ingredients: ${item.ingredients}<br>,
Price: ${item.price.toFixed(2)}`;

container.appendChild(img);
container.appendChild(info);
categoryView.appendChild(container);
  }
 )}