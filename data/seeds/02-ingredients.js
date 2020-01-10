exports.seed = async (knex) => {
   await knex("ingredients").insert([
      {name: "Chicken Broth"},
      {name: "Tomato Paste"},
      {name: "Flour"},
      {name: "Egg"},
      {name: "Garlic"},
      {name: "Ground Beef"},
      {name: "Onion"},
      {name: "Celery"},
      {name: "Mushrooms"},
      {name: "Spaghetti"},
      {name: "Avocado"},
      {name: "Vegetable Oil"},
      {name: "Olive Oil"}
   ]);
}