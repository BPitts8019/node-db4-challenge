const dbRecipeBook = require("../data/dbRecipeBook");

const getRecipes = () => {
   return dbRecipeBook("recipes");
};
const getShoppingList = recipe_id => {
   const RI = "recipe_ingredients";
   const I = "ingredients";
   
   return dbRecipeBook
      .select(`${RI}.quantity`, `${RI}.measure`, `${I}.name`)
      .from(RI)
      .join(I, `${I}.id`, `${RI}.ingredient_id`)
      .where({recipe_id});
};
const getInstructions = recipe_id => {
   const STEP_NUMBER = "step_number";

   return dbRecipeBook
      .select(STEP_NUMBER, "instructions")
      .from("steps")
      .where({recipe_id})
      .orderBy(STEP_NUMBER)
};

module.exports = {
   getRecipes,
   getShoppingList,
   getInstructions
};