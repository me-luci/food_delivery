window.onload = function() {
    const cart = JSON.parse(localStorage.getItem('cart'));

    document.getElementById('invoice-number').innerText = generateInvoiceNumber();
    document.getElementById('invoice-date').innerText = new Date().toLocaleDateString();

    const invoiceDetails = document.getElementById('invoice-details');

    let total = 0;
    let totalCalories = 0;
    let totalProtein = 0;
    let totalFats = 0;
    let gstRate = 0.18;

    if (cart && cart.length > 0) {
        cart.forEach(item => {
            total += item.price;
            totalCalories += item.calories;
            totalProtein += item.protein;
            totalFats += item.fats;

            const itemElement = document.createElement('div');
            itemElement.className = 'invoice-item';
            itemElement.innerHTML = `
                <p>${item.name}</p>
                <p>₹${item.price.toFixed(2)}</p>
                <p>${item.calories} kcal</p>
                <p>Protein: ${item.protein} g</p>
                <p>Fats: ${item.fats} g</p>
            `;
            invoiceDetails.appendChild(itemElement);
        });

        const gstAmount = total * gstRate;
        const totalWithGst = total + gstAmount;

        const gstDetails = document.getElementById('gst-details');
        gstDetails.innerHTML = `
            <p>Subtotal: ₹${total.toFixed(2)}</p>
            <p>GST (18%): ₹${gstAmount.toFixed(2)}</p>
        `;

        const totalElement = document.getElementById('invoice-total');
        totalElement.innerHTML = `
            <p>Total (including GST): ₹${totalWithGst.toFixed(2)}</p>
            <p>Total Calories: ${totalCalories} kcal</p>
            <p>Total Protein: ${totalProtein} g</p>
            <p>Total Fats: ${totalFats} g</p>
        `;
    } else {
        invoiceDetails.innerHTML = '<p>Your cart is empty.</p>';
    }
};

function generateInvoiceNumber() {
    return 'INV' + Math.floor(Math.random() * 1000000);
}

function printInvoice() {
    window.print();
}



function handlePayment() {
    const address = document.getElementById('address').value;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked');

    if (!address) {
        alert("Please enter your address.");
        return;
    }

    if (!paymentMethod) {
        alert("Please select a payment method.");
        return;
    }

    // Show loading screen
    document.getElementById('loading-screen').style.display = 'flex';

    // Mock processing time
    setTimeout(() => {
        if (paymentMethod.value === 'online') {
            alert("Online payment processed successfully. Thank you for your order!");
        } else {
            alert("Order placed with Cash on Delivery. Thank you for your order!");
        }

        // Hide loading screen
        document.getElementById('loading-screen').style.display = 'none';

        // Redirect to a thank you page or back to the main menu
        window.location.href = 'thankyou.html'; // You should create a 'thankyou.html' page
    }, 3000); // 3 seconds delay to simulate processing time
}






















function handlePayment() {
    const address = document.getElementById('address').value;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked');

    if (!address) {
        alert("Please enter your address.");
        return;
    }

    if (!paymentMethod) {
        alert("Please select a payment method.");
        return;
    }

    // Simulate a loading screen or processing
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'block';

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        alert("Thank you for your order! You will now be redirected.");

        // Redirect to thank you page
        window.location.href = 'thankyou.html';
    }, 2000); // 2-second delay for demonstration
}












