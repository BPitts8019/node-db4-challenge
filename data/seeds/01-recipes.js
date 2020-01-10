exports.seed = async (knex) => {
   await knex("recipes").insert([
      {name: "Noodle Surprise"},
      {name: "Spaghetti Sauce"},
      {name: "Meat Loaf"},
      {name: "Apple Pie"}
   ]);
}
