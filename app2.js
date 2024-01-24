document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('productList');
    const cartItems = document.getElementById('cartItems');
    const cartSection = document.getElementById('cart');

    // Simulated product data
    const products = [
        { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 29.99, image: 'product2.jpg' },
        // Add more products as needed
    ];

    // Simulated cart data
    const cart = [];

    // Display products on the page
    function displayProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    // Add product to the cart
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push({ ...product, quantity: 1 });
            updateCart();
        }
    }

    // Update the cart display
    function updateCart() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
                <p>${item.quantity} x $${item.price.toFixed(2)}</p>
                <p>Total: $${(item.quantity * item.price).toFixed(2)}</p>
            `;
            cartItems.appendChild(cartItemDiv);
        });

        if (cart.length > 0) {
            cartSection.classList.remove('hidden');
        } else {
            cartSection.classList.add('hidden');
        }
    }

    // Show the cart
    function showCart() {
        updateCart();
        cartSection.classList.remove('hidden');
    }

    // Checkout (simulated)
    function checkout() {
        alert('Checkout functionality is simulated in this example.');
        cart.length = 0;
        updateCart();
    }

    // Initial display of products
    displayProducts();
});
