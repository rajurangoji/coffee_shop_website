import React from 'react'
import './Menu.css'
import coffee from '../assets/coffeee.avif'
const menuItems = [
    {
        itemName: "Iced Caramel Macchiato",
        price: 4.99,
        img: coffee,
        ingredients: ["Espresso", "Milk", "Caramel syrup", "Ice"]
    },
    {
        itemName: "Chocolate Croissant",
        price: 3.49,
        img: "https://images.unsplash.com/photo-1631129023315-7ef0e76faaed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: ["Butter croissant", "Chocolate filling"]
    },
    {
        itemName: "Tiramisu",
        price: 5.99,
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: ["Ladyfingers", "Mascarpone cheese", "Espresso", "Cocoa powder"]
    },
    {
        itemName: "Cinnamon Roll",
        price: 2.99,
        img: "https://plus.unsplash.com/premium_photo-1668143358351-b20146dbcc02?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: ["Sweet dough", "Cinnamon", "Sugar", "Icing"]
    },
    {
        itemName: "Vanilla Latte",
        price: 4.49,
        img: "https://plus.unsplash.com/premium_photo-1668143358351-b20146dbcc02?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: ["Espresso", "Milk", "Vanilla syrup"]
    },
    {
        itemName: "Blueberry Muffin",
        price: 2.99,
        img: "https://images.unsplash.com/photo-1631129023315-7ef0e76faaed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: ["Blueberries", "Flour", "Sugar", "Butter"]
    },
    {
        itemName: "Cheesecake",
        price: 5.49,
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: ["Cream cheese", "Sugar", "Eggs", "Graham cracker crust"]
    },
    {
        itemName: "Cappuccino",
        price: 3.99,
        img: "https://plus.unsplash.com/premium_photo-1668143358351-b20146dbcc02?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: ["Espresso", "Steamed milk", "Foamed milk"]
    },
    {
        itemName: "Almond Croissant",
        price: 4.49,
        img: "https://images.unsplash.com/photo-1631129023315-7ef0e76faaed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: ["Butter croissant", "Almond paste", "Sliced almonds"]
    },
    {
        itemName: "Red Velvet Cake",
        price: 6.99,
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: ["Cake flour", "Cocoa powder", "Buttermilk", "Cream cheese frosting"]
    },
    {
        itemName: "Iced Mocha",
        price: 4.99,
        img: "https://images.unsplash.com/photo-1631129023315-7ef0e76faaed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: ["Espresso", "Milk", "Chocolate syrup", "Ice"]
    },
    {
        itemName: "Apple Pie",
        price: 4.49,
        img: "https://plus.unsplash.com/premium_photo-1668143358351-b20146dbcc02?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: ["Apples", "Cinnamon", "Sugar", "Pie crust"]
    },
    {
        itemName: "Matcha Latte",
        price: 5.49,
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: ["Matcha powder", "Milk", "Sweetener"]
    },
    {
        itemName: "Chocolate Chip Cookie",
        price: 1.99,
        img: "https://images.unsplash.com/photo-1631129023315-7ef0e76faaed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: ["Flour", "Butter", "Chocolate chips", "Sugar"]
    },
    {
        itemName: "Pecan Pie",
        price: 5.99,
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: ["Pecans", "Maple syrup", "Eggs", "Pie crust"]
    }
];

function MenuItems() {
    return (
        <div className='items'>
            {menuItems.map((item, index) => (
                <div className='each-item' key={index}>
                    <img src={item.img} alt={item.itemName} />
                    <div className='item-name'>
                        <h2>{item.itemName}</h2>
                        <p>{item.ingredients.join(", ")}</p>
                    </div>
                    <h2>$ {item.price}</h2>
                </div>
            ))}


        </div>
    )
}

export default MenuItems
