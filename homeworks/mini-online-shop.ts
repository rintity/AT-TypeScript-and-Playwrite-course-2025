//We are going to build a small TypeScript program that describes a mini online shop. The goal is to represent a customer, their shopping cart, and calculate the total price. 

//Steps 
//1.Create an interface Product with the following fields: 
//name: string  
//price: number  
//category: "food" | "clothes" | "electronics" 
//2.Create a type Category with the possible categories (food, clothes, electronics) 
//3.Create an interface Customer with the following fields: 
//name: string   
//email: string 
//cart: Product[] — an array containing the products in the customer’s cart 
//4. Create two example products (e.g., an apple and a T-shirt). 
//5. Create one customer who has both products

type Category = "food" | "clothes" | "electronics";

interface Product {
    name: string;
    price: number;
    category: Category;
}


interface Customer {
    name: string;
    email: string;
    cart: Product[];
}

const apple: Product = { name: "Apple", price: 5, category: "food", }
const tShirt: Product = { name: "T-shirt", price: 50, category: "clothes", }
const speaker: Product = { name: "Speaker", price: 43, category: "electronics" }
const iron: Product = { name: "Iron", price: 100, category: "electronics" }
// add more products especially for electronics
const headphones: Product = { name: "Headphones", price: 75, category: "electronics" };
const jeans: Product = { name: "Jeans", price: 80, category: "clothes" };
const cake: Product = { name: "Cake", price: 35, category: "food" };
const strawberry: Product = { name: "Strawberry", price: 10, category: "food" };

const products: Product[] = [apple, tShirt]

const customer: Customer = { name: "Mladen Petrov", email: "mladenp@gmail.com", cart: products, };
// add second customer 
const secondCustomer: Customer = { name: "Petar Petrov", email: "petrov@mail.com", cart: [tShirt, iron, speaker], }
const thirdCustomer: Customer = { name: "Ivan Ivanov", email: "iivanov@mail.com", cart: [tShirt, iron, jeans, headphones], }

// add function  displayCart - display cart customer name and products
function displayCart(customer: Customer): string {
    let productList =
        customer.cart.map(product => `${product.name} - ${product.price}$`
        ).join(";");
    return `${customer.name} has the following products in the cart: ${productList}`;
}
console.log(displayCart(customer));
console.log(displayCart(secondCustomer));
console.log(displayCart(thirdCustomer));



// add function filterByCategory - receive products and category as parameters and filter the products by given category 
const allProducts: Product[] = [apple, tShirt, speaker, iron, headphones, jeans, cake, stawberry]
function filterByCategory(products: Product[], category: Category): Product[] {
    return products.filter((product) => product.category === category);
}
console.log(filterByCategory(allProducts, "food"));
console.log(filterByCategory(allProducts, "clothes"));
console.log(filterByCategory(allProducts, "electronics"));

// add function calculateTotalPrice - receive customer data and combine all product price
// customer.cart[0].price
// customer.cart[1].price
//...
// total...

function calculateTotalPrice(customer: Customer): number {
    let total = 0;
    for (let i = 0; i < customer.cart.length; i++) {
        const product = customer.cart[i];
        if (product) {
            total = total + product.price;
        }
    }
    return total;
}
console.log(`${customer.name}'s cart total price is: ${calculateTotalPrice(customer)}$`);
console.log(`${secondCustomer.name}'s cart total price is: ${calculateTotalPrice(secondCustomer)}$`);
console.log(`${thirdCustomer.name}'s cart total price is: ${calculateTotalPrice(thirdCustomer)}$`);



export { }; // at the bottom  import{} is used at the top