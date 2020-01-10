exports.seed = async (knex) => {
   await knex("recipes_ingredients").insert([
      {recipe_id: 1, ingredient_id: 10, quantity: 1.0, measure: "lb"},
      {recipe_id: 1, ingredient_id: 7, quantity: 1.0, measure: "medium"},
      {recipe_id: 1, ingredient_id: 5, quantity: 2, measure: "cloves"},
      {recipe_id: 1, ingredient_id: 6, quantity: 1, measure: "lb"},
      {recipe_id: 1, ingredient_id: 9, quantity: 0.5, measure: "lb"},
      {recipe_id: 1, ingredient_id: 9, quantity: 0.5, measure: "lb"},
      {recipe_id: 2, ingredient_id: 13, quantity: 3, measure: "Tbsp"},
      {recipe_id: 2, ingredient_id: 7, quantity: 1, measure: "medium"},
      {recipe_id: 2, ingredient_id: 5, quantity: 3, measure: "cloves"},
      {recipe_id: 2, ingredient_id: 6, quantity: 1, measure: "lb"},
      {recipe_id: 2, ingredient_id: 2, quantity: 6, measure: "oz"},
      {recipe_id: 2, ingredient_id: 15, quantity: 28.5, measure: "oz"},
      {recipe_id: 2, ingredient_id: 16, quantity: 0.25, measure: "tsp"},
      {recipe_id: 3, ingredient_id: 8, quantity: 2, measure: "Tbsp"},
      {recipe_id: 3, ingredient_id: 11, quantity: 2, measure: "Tbsp"},
      {recipe_id: 3, ingredient_id: 4, quantity: 2, measure: "Slices"},
      {recipe_id: 4, ingredient_id: 12, quantity: 1, measure: "Package"}
   ]);
}
