const foodItems = {
    pizza: [
        { id: 1, name: 'Margherita Pizza', price: 300, calories: 300, protein: 12, fats: 10, image: '../img/pizza.jpg', type: 'veg', restaurant: 'Pizza Place' },
        { id: 2, name: 'Pepperoni Pizza', price: 390, calories: 350, protein: 15, fats: 14, image: '../img/pepperoni.jpg', type: 'nonveg', restaurant: 'Pizza Place' },
        { id: 3, name: 'BBQ Chicken Pizza', price: 700, calories: 400, protein: 20, fats: 18, image: '../img/bbq-chicken.jpg', type: 'nonveg', restaurant: 'BBQ Bistro' },
        { id: 4, name: 'Vegetarian Pizza', price: 200, calories: 250, protein: 10, fats: 8, image: '../img/veg-pizza.jpg', type: 'veg', restaurant: 'Pizza Place' },
        { id: 5, name: 'Hawaiian Pizza', price: 450, calories: 350, protein: 14, fats: 15, image: '../img/hawaiian.jpg', type: 'nonveg', restaurant: 'Tropical Pizza' },
        { id: 6, name: 'Four Cheese Pizza', price: 500, calories: 400, protein: 18, fats: 22, image: '../img/four-cheese.jpg', type: 'veg', restaurant: 'Cheesy Delights' },
        { id: 7, name: 'Indian Chicken Pizza', price: 550, calories: 420, protein: 22, fats: 20, image: '../img/indian-chicken.jpg', type: 'nonveg', restaurant: 'Indian Fusion' },
        { id: 8, name: 'Seafood Pizza', price: 650, calories: 450, protein: 25, fats: 22, image: '../img/seafood.jpg', type: 'nonveg', restaurant: 'Ocean Delicacies' }
    ],
    drinks: [
        { id: 9, name: 'Coca Cola', price: 20, calories: 140, protein: 0, fats: 0, image: '../img/coke.jpg', type: 'veg', restaurant: 'Beverage Bar' },
        { id: 10, name: 'Orange Juice', price: 45, calories: 120, protein: 2, fats: 0, image: '../img/orange-juice.jpg', type: 'veg', restaurant: 'Fresh Squeeze' },
        { id: 11, name: 'Lemonade', price: 15, calories: 100, protein: 1, fats: 0, image: '../img/lemonade.jpg', type: 'veg', restaurant: 'Summer Drinks' },
        { id: 12, name: 'Iced Tea', price: 50, calories: 80, protein: 1, fats: 0, image: '../img/iced-tea.jpg', type: 'veg', restaurant: 'Beverage Bar' },
        { id: 13, name: 'Smoothie', price: 60, calories: 200, protein: 2, fats: 1, image: '../img/smoothie.jpg', type: 'veg', restaurant: 'Smoothie Spot' },
        { id: 14, name: 'Milkshake', price: 70, calories: 300, protein: 5, fats: 10, image: '../img/milkshake.jpg', type: 'veg', restaurant: 'Milkshake Mania' },
        { id: 15, name: 'Water', price: 10, calories: 0, protein: 0, fats: 0, image: '../img/water.jpg', type: 'veg', restaurant: 'Beverage Bar' },
        { id: 16, name: 'Sparkling Water', price: 30, calories: 0, protein: 0, fats: 0, image: '../img/sparkling-water.jpg', type: 'veg', restaurant: 'Beverage Bar' }
    ],
    biryani: [
        { id: 17, name: 'Chicken Biryani', price: 250, calories: 600, protein: 25, fats: 20, image: '../img/chicken-biryani.jpg', type: 'nonveg', restaurant: 'Biryani House' },
        { id: 18, name: 'Vegetable Biryani', price: 130, calories: 450, protein: 10, fats: 15, image: '../img/veg-biryani.jpg', type: 'veg', restaurant: 'Veggie Delight' },
        { id: 19, name: 'Mutton Biryani', price: 400, calories: 700, protein: 30, fats: 25, image: '../img/mutton-biryani.jpg', type: 'nonveg', restaurant: 'Biryani House' },
        { id: 20, name: 'Egg Biryani', price: 200, calories: 500, protein: 15, fats: 12, image: '../img/egg-biryani.jpg', type: 'nonveg', restaurant: 'Biryani House' },
        { id: 21, name: 'Shrimp Biryani', price: 350, calories: 650, protein: 28, fats: 22, image: '../img/shrimp-biryani.jpg', type: 'nonveg', restaurant: 'Seafood Palace' },
        { id: 22, name: 'GIET Biryani', price: 380, calories: 700, protein: 27, fats: 25, image: '../img/giet-biryani.jpg', type: 'nonveg', restaurant: 'Biryani House' },
        { id: 23, name: 'Paneer Biryani', price: 220, calories: 550, protein: 18, fats: 18, image: '../img/paneer-biryani.jpg', type: 'veg', restaurant: 'Veggie Delight' },
        { id: 24, name: 'Kashmiri Biryani', price: 300, calories: 600, protein: 20, fats: 20, image: '../img/kashmiri-biryani.jpg', type: 'veg', restaurant: 'Biryani House' }
    ],
    desserts: [
        { id: 25, name: 'Chocolate Cake', price: 300, calories: 400, protein: 5, fats: 25, image: '../img/chocolate-cake.jpg', type: 'veg', restaurant: 'Dessert Haven' },
        { id: 26, name: 'Ice Cream', price: 50, calories: 250, protein: 4, fats: 15, image: '../img/ice-cream.jpg', type: 'veg', restaurant: 'Ice Cream World' },
        { id: 27, name: 'Brownie', price: 190, calories: 350, protein: 4, fats: 20, image: '../img/brownie.jpg', type: 'veg', restaurant: 'Dessert Haven' },
        { id: 28, name: 'Fruit Salad', price: 150, calories: 150, protein: 2, fats: 0, image: '../img/fruit-salad.jpg', type: 'veg', restaurant: 'Fresh Fruits' },
        { id: 29, name: 'Cheesecake', price: 320, calories: 450, protein: 7, fats: 30, image: '../img/cheesecake.jpg', type: 'veg', restaurant: 'Dessert Haven' },
        { id: 30, name: 'Tiramisu', price: 280, calories: 400, protein: 6, fats: 18, image: '../img/tiramisu.jpg', type: 'veg', restaurant: 'Italian Sweets' },
        { id: 31, name: 'Panna Cotta', price: 270, calories: 350, protein: 5, fats: 15, image: '../img/panna-cotta.jpg', type: 'veg', restaurant: 'Italian Sweets' },
        { id: 32, name: 'Mango Mousse', price: 200, calories: 300, protein: 4, fats: 10, image: '../img/mango-mousse.jpg', type: 'veg', restaurant: 'Dessert Haven' }
    ]
};


  


let cart = [];

window.onload = function() {
    // Check if the user is logged in
    const loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
        document.getElementById('account-icon').style.display = 'block';
        document.getElementById('account-name').innerText = loggedInUser;
    }

    // Load food items
    Object.keys(foodItems).forEach(category => {
        const container = document.querySelector(`#${category} .food-container`);
        foodItems[category].forEach(item => {
            const foodElement = document.createElement('div');
            foodElement.className = 'food-item';
            foodElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>₹${item.price.toFixed(2)}</p>
                <p>Calories: ${item.calories} kcal</p>
                <p>Protein: ${item.protein} g</p>
                <p>Fats: ${item.fats} g</p>
                <button onclick="addToCart(${item.id}, '${category}')">Add to Cart</button>
            `;
            container.appendChild(foodElement);
        });
    });

    updateCart();
};

function logout() {
    localStorage.removeItem('username');
    window.location.href = 'home.html';
}

function addToCart(id, category) {
    const item = foodItems[category].find(item => item.id === id);
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartTotalCalories = document.getElementById('cart-total-calories');
    const cartTotalProtein = document.getElementById('cart-total-protein');
    const cartTotalFats = document.getElementById('cart-total-fats');

    cartItemsContainer.innerHTML = ''; // Clear existing cart items
    let total = 0;
    let totalCalories = 0;
    let totalProtein = 0;
    let totalFats = 0;

    cart.forEach((item) => {
        total += item.price;
        totalCalories += item.calories;
        totalProtein += item.protein;
        totalFats += item.fats;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>₹${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${item.id})" style="background-color: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartCount.innerText = cart.length;
    cartTotalPrice.innerText = `${total.toFixed(2)}`;
    cartTotalCalories.innerText = totalCalories;
    cartTotalProtein.innerText = totalProtein;
    cartTotalFats.innerText = totalFats;
}

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    const isActive = cartSidebar.classList.toggle('active');
    overlay.style.display = isActive ? 'block' : 'none';
}

function closeCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    cartSidebar.classList.remove('active');
    overlay.style.display = 'none';
}

function handleCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add some items before checking out.");
        return;
    }

    // Show loading
    document.getElementById('loading-screen').style.display = 'flex';

    localStorage.setItem('cart', JSON.stringify(cart));

    cart = [];
    updateCart();

    setTimeout(() => {
        window.location.href = 'invoice.html';
    }, 3000); 
}

function removeFromCart(id) {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}



function handleCheckout() {
  if (cart.length === 0) {
      alert("Your cart is empty. Please add some items before checking out.");
      return;
  }

  // Show loading
  document.getElementById('loading-screen').style.display = 'flex';


  localStorage.setItem('cart', JSON.stringify(cart));


  cart = [];
  updateCart();


  setTimeout(() => {
      window.location.href = 'invoice.html';
  }, 3000); 
}




//new function

document.getElementById('veg-filter').addEventListener('click', function() {
    filterItems('veg');
});

document.getElementById('nonveg-filter').addEventListener('click', function() {
    filterItems('nonveg');
});

document.getElementById('all-filter').addEventListener('click', function() {
    filterItems('all');
});






// 2
function filterItems(type) {
    Object.keys(foodItems).forEach(category => {
        const container = document.querySelector(`#${category} .food-container`);
        container.innerHTML = ''; // Clear the existing items

        // Filter items based on type (veg/non-veg/all)
        foodItems[category].forEach(item => {
            if (type === 'all' || item.type === type) {
                const foodElement = document.createElement('div');
                foodElement.className = 'food-item';
                foodElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>₹${item.price.toFixed(2)}</p>
                    <p>Calories: ${item.calories} kcal</p>
                    <p>Protein: ${item.protein} g</p>
                    <p>Fats: ${item.fats} g</p>
                    <button onclick="addToCart(${item.id}, '${category}')">Add to Cart</button>
                `;
                container.appendChild(foodElement);
            }
        });
    });
}


// onload
window.onload = function() {
    // Check if the user is logged in
    const loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
        document.getElementById('account-icon').style.display = 'block';
        document.getElementById('account-name').innerText = loggedInUser;
    }

    // Initially show all items
    filterItems('all');
};









document.getElementById('restaurant-filter').addEventListener('change', function() {
    filterItemsByRestaurant(this.value);
});

function filterItemsByRestaurant(restaurant) {
    Object.keys(foodItems).forEach(category => {
        const container = document.querySelector(`#${category} .food-container`);
        container.innerHTML = ''; // Clear existing items

        foodItems[category].forEach(item => {
            if (restaurant === 'all' || item.restaurant === restaurant) {
                const foodElement = document.createElement('div');
                foodElement.className = 'food-item';
                foodElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>₹${item.price.toFixed(2)}</p>
                    <p>Calories: ${item.calories} kcal</p>
                    <p>Protein: ${item.protein} g</p>
                    <p>Fats: ${item.fats} g</p>
                    <button onclick="addToCart(${item.id}, '${category}')">Add to Cart</button>
                `;
                container.appendChild(foodElement);
            }
        });
    });
}

// Initialize by showing all items
window.onload = function() {
    const loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
        document.getElementById('account-icon').style.display = 'block';
        document.getElementById('account-name').innerText = loggedInUser;
    }

    // Initially show all items
    filterItemsByRestaurant('all');
};








// Toggle the bot visibility when clicking the bot icon
document.getElementById('bot-icon').addEventListener('click', function() {
    const calculator = document.getElementById('calorie-calculator');
    calculator.classList.toggle('hidden'); // Show or hide the bot
});

// Display suggested items when "Calculate Calories" is clicked
document.getElementById('calculate-calories').addEventListener('click', function() {
    const inputCalories = parseInt(document.getElementById('calorie-input').value);
    
    if (isNaN(inputCalories) || inputCalories <= 0) {
        document.getElementById('calorie-result').innerText = "Please enter a valid calorie number!";
        return;
    }

    const selectedCategories = Array.from(document.querySelectorAll('input[name="food-category"]:checked'))
                                    .map(checkbox => checkbox.value);
    
    // Gather all items from the selected categories
    let allItems = [];
    selectedCategories.forEach(category => {
        allItems = allItems.concat(foodItems[category]);
    });

    // Sort the items by calories in ascending order
    allItems.sort((a, b) => a.calories - b.calories);

    let suggestedItems = [];
    let totalCalories = 0;

    // Find items that sum up to the total calorie input or as close as possible
    for (let item of allItems) {
        if (totalCalories + item.calories <= inputCalories) {
            suggestedItems.push(item);
            totalCalories += item.calories;
        }
    }

    if (suggestedItems.length === 0) {
        document.getElementById('calorie-result').innerText = "No items found within the calorie limit.";
        return;
    }

    // Display the suggested items and total calories
    let resultHTML = `<p>Suggested Items (Total: ${totalCalories} kcal):</p>`;
    resultHTML += '<ul>';
    suggestedItems.forEach(item => {
        resultHTML += `<li>${item.name} - ${item.calories} kcal</li>`;
    });
    resultHTML += '</ul>';

    document.getElementById('calorie-result').innerHTML = resultHTML;
});







// Add all suggested items to the cart when "Proceed to Order" is clicked
document.getElementById('proceed-order').addEventListener('click', function() {
    const inputCalories = parseInt(document.getElementById('calorie-input').value);
    
    if (isNaN(inputCalories) || inputCalories <= 0) {
        alert("Please enter a valid calorie number!");
        return;
    }

    // Fetch selected categories
    const selectedCategories = Array.from(document.querySelectorAll('input[name="food-category"]:checked'))
                                    .map(checkbox => checkbox.value);

    // Collect all items from the selected categories
    let allItems = [];
    selectedCategories.forEach(category => {
        allItems = allItems.concat(foodItems[category]); // Assume foodItems[category] holds items for that category
    });

    // Sort items by their calories in ascending order
    allItems.sort((a, b) => a.calories - b.calories);

    let suggestedItems = [];
    let totalCalories = 0;

    // Add items until the total calorie limit is reached
    for (let item of allItems) {
        if (totalCalories + item.calories <= inputCalories) {
            suggestedItems.push(item);
            totalCalories += item.calories;
        } else {
            break; // Stop if adding the next item exceeds the calorie limit
        }
    }

    if (suggestedItems.length === 0) {
        alert("No items found within the calorie limit.");
        return;
    }

    // Add each suggested item to the cart
    suggestedItems.forEach(item => {
        cart.push(item); // Assuming 'cart' is your array for cart items
    });

    updateCart(); // Update the cart UI
    alert(`${suggestedItems.length} items have been added to the cart! Total Calories: ${totalCalories} kcal`);

    // Clear the result and hide the calorie calculator after proceeding
    document.getElementById('calorie-result').innerHTML = '';
    document.getElementById('calorie-input').value = ''; // Clear input
    document.querySelectorAll('input[name="food-category"]:checked').forEach(checkbox => {
        checkbox.checked = false; // Uncheck all checkboxes
    });
    document.getElementById('calorie-calculator').classList.add('hidden');
});
















