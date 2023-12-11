// Get references to HTML elements
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");

// API URL for fetching meal data
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// https://www.themealdb.com/api.php link to APi Documentation

// Event listener for the search button
searchBtn.addEventListener("click", () => {
  // Get user input
  let userInp = document.getElementById("user-inp").value;

  // Check if the input field is empty
  if (userInp.length == 0) {
    result.innerHTML = `<h3>Input Field Cannot Be Empty</h3>`;
  } else {
    // Fetch meal data  API
    fetch(url + userInp)
      .then((response) => response.json())
      .then((data) => {
        let myMeal = data.meals[0];

        // Log meal information
        console.log(myMeal);
        console.log(myMeal.strMealThumb);
        console.log(myMeal.strMeal);
        console.log(myMeal.strArea);
        console.log(myMeal.strInstructions);

        // Process and display meal information
        let count = 1;
        let ingredients = [];
        for (let i in myMeal) {
          let ingredient = "";
          let measure = "";
          if (i.startsWith("strIngredient") && myMeal[i]) {
            ingredient = myMeal[i];
            measure = myMeal[`strMeasure` + count];
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
          }
        }

        // Log the processed ingredients
        console.log(ingredients);

        // Display meal result
        result.innerHTML = `
          <img src=${myMeal.strMealThumb}>
          <div class="details">
              <h2>${myMeal.strMeal}</h2>
              <h4>${myMeal.strArea}</h4>
          </div>
          <div id="ingredient-con"></div>
          <div id="recipe">
              <button id="hide-recipe">X</button>
              <pre id="instructions">${myMeal.strInstructions}</pre>
          </div>
          <button id="show-recipe">View Recipe</button>
        `;

        // Display the ingredients
        let ingredientCon = document.getElementById("ingredient-con");
        let parent = document.createElement("ul");
        let recipe = document.getElementById("recipe");
        let hideRecipe = document.getElementById("hide-recipe");
        let showRecipe = document.getElementById("show-recipe");

        ingredients.forEach((i) => {
          let child = document.createElement("li");
          child.innerText = i;
          parent.appendChild(child);
          ingredientCon.appendChild(parent);
        });

        // Add event listeners  showing the recipe
        hideRecipe.addEventListener("click", () => {
          recipe.style.display = "none";
        });
        showRecipe.addEventListener("click", () => {
          recipe.style.display = "block";
        });
      })
      .catch(() => {
        result.innerHTML = `<h3>Invalid Input</h3>`;
      });
  }
});
// code that add student number and name
document.addEventListener("DOMContentLoaded", function () {
  const studentId = "200520835"; // my student id
  const studentName = "Vishal Chavda"; // nmy name

  // using p tag id
  const studentInfo = document.createElement("p");
  studentInfo.textContent = `Student ID: ${studentId} | Name: ${studentName}`;

  // Append the student information
  document.body.appendChild(studentInfo);
});
