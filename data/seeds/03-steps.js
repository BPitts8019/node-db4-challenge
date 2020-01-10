exports.seed = async (knex) => {
   await knex("steps").insert([
      {step_number: 1, instructions: "Boil noodles in a 3qt pot until done, and drain", recipe_id: 1},
      {step_number: 2, instructions: "Cook Onions and Garlic together until onions are translucent", recipe_id: 1},
      {step_number: 3, instructions: "Add ground beef and cook until done. Drain the fat", recipe_id: 1},
      {step_number: 4, instructions: "Combine all ingredients into one pot. Then, add the tomato juice.", recipe_id: 1},
      {step_number: 1, instructions: "Dice Onions. Add Oil to a pan on medium-high heat. Cook until nearly translucent. Add crushed garlic cloves and cook for about 30 seconds.", recipe_id: 2},
      {step_number: 2, instructions: "Add ground beef to pan and cook until done. Drain the fat", recipe_id: 2},
      {step_number: 3, instructions: "Add tomato paste and crushed tomatoes. Add herbs and spices", recipe_id: 2},
      {step_number: 4, instructions: "Simmer sauce until amazing!", recipe_id: 2},
      {step_number: 1, instructions: "Put Peanut Butter on left slice of bread", recipe_id: 3},
      {step_number: 2, instructions: "Put Jelly on right slice of bread", recipe_id: 3},
      {step_number: 3, instructions: "Combine the two slices into a sandwich", recipe_id: 3},
      {step_number: 1, instructions: "Preheat oven to 350°F", recipe_id: 4},
      {step_number: 2, instructions: "Remove frozen pie from its packaging", recipe_id: 4},
      {step_number: 3, instructions: "Place the pie on the cookie sheet", recipe_id: 4},
      {step_number: 4, instructions: "Cook as directed on the packaging", recipe_id: 4},
   ]);
}
