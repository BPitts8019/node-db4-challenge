exports.seed = async (knex) => {
   await knex("ingredients").insert([
      {name: "Chicken Broth"},
      {name: "Tomato Paste"},
      {name: "Flour"},
      {name: "Bread"},
      {name: "Garlic"},
      {name: "Ground Beef"},
      {name: "Onion"},
      {name: "Peanut Butter"},
      {name: "Mushrooms"},
      {name: "Elbow Noodles"},
      {name: "Raspberry Jelly"},
      {name: "Frozen Apple Pie"},
      {name: "Olive Oil"},
      {name: "Tomato Juice"},
      {name: "Crushed Tomatoes"},
      {name: "Herbs and Spices"},
   ]);
}