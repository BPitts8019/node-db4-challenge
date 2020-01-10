const RECIPES = "recipes";
const STEPS = "steps";
const INGREDIENTS = "ingredients";
const RECIPES_INGREDIENTS = "recipes_ingredients";

exports.up = async (knex) => {
   await knex.schema.createTable(RECIPES, table => {
      table.increments("id");
      table.string("name")
         .notNullable();
   });

   await knex.schema.createTable(INGREDIENTS, table => {
      table.increments("id");
      table.string("name")
         .unique()
         .notNullable()
   });

   await knex.schema.createTable(STEPS, table => {
      table.increments();
      table.integer("step_number")
         .unsigned()
         .notNullable();
      table.text("instructions")
         .notNullable();
      table.integer("recipe_id")
         .unsigned()
         .notNullable()
         .references("id").inTable(RECIPES)
         .onDelete("CASCADE")
         .onUpdate("CASCADE");
   });

   await knex.schema.createTable(RECIPES_INGREDIENTS, (table) => {
      const RECIPE_ID = "recipe_id";
      const INGREDIENT_ID = "ingredient_id";

      table.integer(RECIPE_ID)
         .unsigned()
         .notNullable()
         .references("id").inTable(RECIPES)
         .onDelete("CASCADE")
         .onUpdate("CASCADE");
      table.integer(INGREDIENT_ID)
         .unsigned()
         .notNullable()
         .references("id").inTable(INGREDIENTS)
         .onDelete("CASCADE")
         .onUpdate("CASCADE");
      table.decimal("quantity", 4)
         .notNullable();
      table.string("measure")
         .notNullable();
      table.primary([RECIPE_ID, INGREDIENT_ID])
   });
};

exports.down = async function (knex) {
   await knex.schema.dropTableIfExists(RECIPES_INGREDIENTS);
   await knex.schema.dropTableIfExists(STEPS);
   await knex.schema.dropTableIfExists(INGREDIENTS);
   await knex.schema.dropTableIfExists(RECIPES);
};
