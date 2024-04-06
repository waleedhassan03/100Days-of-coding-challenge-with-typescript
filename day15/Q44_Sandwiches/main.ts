// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function makeSandwich(...sandwichItems: string[]){

    console.log(`Enjoy your sandwich with: ${sandwichItems.join(", ")}`);
    

}

makeSandwich("Meat", "Cheese");
makeSandwich("Beaf", "Chicken", "Letuce", "Cucumber");
makeSandwich("Olives", "Jalapinos", "Spinach", "Roasted BBQ");
makeSandwich("Mushrooms", "Egg", "Letuce");