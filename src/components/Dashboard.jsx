import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import bg from "./dashboardbg.jpg";

const Dashboard = () => {

  const [query,setQuery] = useState("");
  const [recipes,setRecipes] = useState([]);
  const [selected,setSelected] = useState(null);
  const [loading,setLoading] = useState(false);
  const [logout,setLogout] = useState(false);

  const [favorites,setFavorites] = useState([]);
  const [showFavorites,setShowFavorites] = useState(false);
/* LOAD SAVED FAVORITES */

useEffect(()=>{

  const savedFavorites = localStorage.getItem("favorites");
  
  if(savedFavorites){
  setFavorites(JSON.parse(savedFavorites));
  }
  
  },[]);
  const toggleFavorite = (recipe)=>{

    let updatedFavorites;
    
    const exists = favorites.find((f)=>f.title===recipe.title);
    
    if(exists){
    updatedFavorites = favorites.filter((f)=>f.title!==recipe.title);
    }else{
    updatedFavorites = [...favorites,recipe];
    }
    
    setFavorites(updatedFavorites);
    
    /* SAVE FAVORITES */
    localStorage.setItem("favorites",JSON.stringify(updatedFavorites));
    
    };

  if(logout){
    window.location.reload();
  }

  const staticRecipes = {

   "Chicken Biryani":{
      image:"https://www.ruchiskitchen.com/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1-480x270.jpg",
      ingredients:[
        "Chicken 500g",
        "Rice 2 cups",
        "Onions 2",
        "Tomatoes 2",
        "Yogurt",
        "Biryani Masala",
        "Mint",
        "Salt"
      ],
      instructions:
      "1. Marinate chicken with spices.\n2. Cook rice separately.\n3. Cook chicken masala.\n4. Mix rice and chicken.\n5. Cook on low flame 10 minutes."
    },

    "Paneer Butter Masala":{
      image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala.webp",
      ingredients:[
        "Paneer 250g",
        "Butter",
        "Tomatoes",
        "Onions",
        "Cream",
        "Garam Masala",
        "Salt"
      ],
      instructions:
      "1. Fry onions and tomatoes.\n2. Add spices.\n3. Add paneer cubes.\n4. Add cream.\n5. Cook 5 minutes."
    },

    "Fried Rice":{
      image:"https://shwetainthekitchen.com/wp-content/uploads/2023/06/veg-fried-rice.jpg",
      ingredients:[
        "Rice",
        "Carrot",
        "Beans",
        "Capsicum",
        "Soy Sauce",
        "Salt"
      ],
      instructions:
      "1. Heat oil.\n2. Fry vegetables.\n3. Add rice.\n4. Add sauces.\n5. Mix well."
    },

    "Pizza":{
      image:"https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
      ingredients:[
        "Pizza Base",
        "Cheese",
        "Tomato Sauce",
        "Onion",
        "Capsicum"
      ],
      instructions:
      "1. Spread sauce.\n2. Add vegetables.\n3. Add cheese.\n4. Bake for 10 minutes."
    },

    "Burger":{
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlNQ2KlqoI-Y1pziuCN5uhV7SvxLuX5nSdFQ&s",
      ingredients:[
        "Burger Buns",
        "Patty",
        "Onion",
        "Tomato",
        "Sauce"
      ],
      instructions:
      "1. Cook patty.\n2. Toast buns.\n3. Add vegetables.\n4. Add patty.\n5. Serve."
    },

    "Pasta":{
      image:"https://smithakalluraya.com/wp-content/uploads/2024/07/white-sauce-pasta.jpg",
      ingredients:[
        "Pasta",
        "Garlic",
        "Tomato Sauce",
        "Cheese",
        "Salt"
      ],
      instructions:
      "1. Boil pasta.\n2. Prepare sauce.\n3. Mix pasta with sauce.\n4. Add cheese.\n5. Serve hot."
    },

    "Masala Dosa":{
      image:"https://tse2.mm.bing.net/th/id/OIP.n1_yfqMogrzJFp2-7hvQGwHaEC?pid=Api&P=0&h=180",
      ingredients:[
        "Dosa Batter",
        "Potatoes",
        "Onion",
        "Mustard Seeds",
        "Curry Leaves"
      ],
      instructions:
      "1. Prepare potato masala.\n2. Spread dosa batter.\n3. Cook until crisp.\n4. Add masala.\n5. Fold dosa and serve."
    },

    "Idli Sambar":{
      image:"https://pipingpotcurry.com/wp-content/uploads/2017/03/Instant-Pot-Sambhar-Piping-Pot-Curry-.jpg",
      ingredients:[
        "Idli Batter",
        "Toor Dal",
        "Vegetables",
        "Sambar Powder",
        "Tamarind"
      ],
      instructions:
      "1. Steam idlis.\n2. Cook dal.\n3. Add vegetables and spices.\n4. Prepare sambar.\n5. Serve hot with idli."
    },

    "Chicken Curry":{
      image:"https://tse2.mm.bing.net/th/id/OIP.LlBmOA_u5VhNf2aTlvNhMwAAAA?pid=Api&P=0&h=180",
      ingredients:[
        "Chicken",
        "Onions",
        "Tomatoes",
        "Ginger Garlic",
        "Spices"
      ],
      instructions:
      "1. Fry onions.\n2. Add ginger garlic.\n3. Add chicken.\n4. Add spices and cook.\n5. Simmer 20 minutes."
    },

    "Veg Pulao":{
      image:"https://tse1.mm.bing.net/th/id/OIP.h0I91owPYMfvM-TIIuXmCQHaEK?pid=Api&P=0&h=180",
      ingredients:[
        "Rice",
        "Mixed Vegetables",
        "Whole Spices",
        "Ghee",
        "Salt"
      ],
      instructions:
      "1. Heat ghee.\n2. Add spices.\n3. Add vegetables.\n4. Add rice and water.\n5. Cook until done."
    },

    "Chocolate Cake":{
      image:"https://tse4.mm.bing.net/th/id/OIP.ZUIi2qLoksGrYAKAGOvh5AHaLH?pid=Api&P=0&h=180",
      ingredients:[
        "Flour",
        "Cocoa Powder",
        "Sugar",
        "Eggs",
        "Butter"
      ],
      instructions:
      "1. Mix dry ingredients.\n2. Add eggs and butter.\n3. Make batter.\n4. Bake at 180°C for 30 minutes."
    },
    "Samosa":{
      image:"https://tse1.mm.bing.net/th/id/OIP.QQm2lkBbxcgSIMVgvZQ6qAHaGE?pid=Api&P=0&h=180",
      ingredients:[
        "Maida",
        "Potatoes",
        "Green Peas",
        "Spices",
        "Oil"
      ],
    instructions:
    "1. Boil and mash the potatoes.\n2. Cook onions, peas, and spices in a pan and mix with the mashed potatoes.\n3. Prepare dough with maida and roll into small sheets.\n4. Fill with the potato mixture and shape into samosas.\n5. Deep fry until golden brown and crispy. Serve hot."
    },

  };

  /* ===== SEARCH ===== */

  const searchRecipes = async ()=>{

    if(!query) return;

    if(staticRecipes[query]){

      setSelected({
        title:query,
        ...staticRecipes[query]
      });

      return;
    }

    setLoading(true);

    try{

      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + query
      );

      const data = await res.json();

      setRecipes(data.meals || []);

    }
    catch(err){
      console.log(err);
    }

    setLoading(false);

  };
  const getRecipeDetails = async(id)=>{

    setLoading(true);

    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
    );

    const data = await res.json();

    const meal = data.meals[0];

    let ingredients=[];

    for(let i=1;i<=20;i++){

      if(meal["strIngredient"+i]){

        ingredients.push(
          meal["strIngredient"+i]+" - "+meal["strMeasure"+i]
        );

      }

    }

    setSelected({

      title:meal.strMeal,
      image:meal.strMealThumb,
      ingredients:ingredients,
      instructions:meal.strInstructions

    });

    setLoading(false);

  };

  return (

<div className="dashboard"
style={{
backgroundImage:`url(${bg})`,
backgroundSize:"cover",
backgroundPosition:"center",
minHeight:"98vh"
}}
>

<div className="header">

<h1>Recipe Finder</h1>

<button
className="logout"
onClick={()=>setLogout(true)}
>
Logout
</button>

</div>

<div className="welcome">
<p>
Discover delicious recipes instantly. Search any dish or explore the recipes below.
</p>
</div>

<form
className="search-box"
onSubmit={(e)=>{
e.preventDefault();
searchRecipes();
}}
>

<input
type="text"
placeholder="Search Recipe"
value={query}
onChange={(e)=>setQuery(e.target.value)}
/>

<button type="submit">
Search
</button>

<button
type="button"
className="fav-toggle"
onClick={()=>setShowFavorites(!showFavorites)}
>
❤
</button>

</form>

<h2 className="section-title">
{showFavorites ? "Favorite Recipes" : "Popular Recipes"}
</h2>

<div className="recipe-grid">

{showFavorites && favorites.map((f,index)=>(

<div
key={index}
className="card"
onClick={()=>setSelected(f)}
>

<img src={f.image} alt=""/>

<h4>{f.title}</h4>

</div>

))}

{!showFavorites && recipes.length === 0 && !selected && (

Object.keys(staticRecipes).map((name,index)=>(

<div
key={index}
className="card"
onClick={()=>setSelected({
title:name,
...staticRecipes[name]
})}
>

<img src={staticRecipes[name].image} alt=""/>

<h4>{name}</h4>

</div>

))

)}

{!showFavorites && recipes.map((r)=>(

<div
key={r.idMeal}
className="card"
onClick={()=>getRecipeDetails(r.idMeal)}
>

<img src={r.strMealThumb} alt=""/>

<h4>{r.strMeal}</h4>

</div>

))}

</div>

{loading && <div className="loader"></div>}

{selected && (

<div className="popup-overlay">

<div className="popup">

<button
className="close"
onClick={()=>{
setSelected(null);
setRecipes([]);
setQuery("");
}}
>
✖
</button>

<img src={selected.image} alt=""/>

<div
className={`heart ${
favorites.find(f=>f.title===selected.title) ? "active" : ""
}`}
onClick={()=>toggleFavorite(selected)}
>
❤
</div>

<h2>{selected.title}</h2>

<h3>Ingredients</h3>

<ul>
{selected.ingredients.map((i,index)=>(
<li key={index}>{i}</li>
))}
</ul>

<h3>Recipe</h3>

<p style={{whiteSpace:"pre-line"}}>
{selected.instructions}
</p>

<p style={{
marginTop:"10px",
fontWeight:"600",
textAlign:"center"
}}>
"Enjoy The Food."🍽
</p>

</div>

</div>

)}

<div className="footer">
<p style={{textAlign:"center"}}>
© 2026 Recipe Finder • Built with React
</p>
</div>

</div>

  );

};

export default Dashboard;