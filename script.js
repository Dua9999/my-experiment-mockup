document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const domain = urlParams.get('domain') || 'kpop';       
    const condition = urlParams.get('condition') || 'treatment'; 

    const bodyTheme = document.getElementById('body-theme');
    const screenTheme = document.getElementById('phone-screen-theme');
    const headerTheme = document.getElementById('header-theme');
    const logo = document.getElementById('store-logo');
    const banner = document.getElementById('framing-banner');
    const progressFill = document.getElementById('progress-fill-bar');
    const artwork = document.getElementById('product-artwork');
    const title = document.getElementById('prod-title');
    const subtitle = document.getElementById('prod-subtitle');
    const price = document.getElementById('prod-price');
    const selectorContainer = document.getElementById('selector-container');
    const addBtn = document.getElementById('add-to-cart-btn');
    const toast = document.getElementById('cart-toast');
    const footer = document.getElementById('footer-text');
    const cartCount = document.getElementById('cart-count');
    const cartTrigger = document.getElementById('cart-trigger');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeModal = document.getElementById('close-modal');
    const finalizeOrder = document.getElementById('finalize-order');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalSection = document.getElementById('cart-total-section');
    const accordionToggle = document.getElementById('accordion-toggle');
    const accordionContent = document.getElementById('accordion-content');
    const detailsText = document.getElementById('details-text');

    const zoomTrigger = document.getElementById('zoom-trigger');
    const zoomModal = document.getElementById('zoom-modal');
    const zoomedImg = document.getElementById('zoomed-img');
    const closeZoom = document.getElementById('close-zoom');

    let cart = []; // Array to hold cart items dynamically

    zoomTrigger.addEventListener('click', () => {
        zoomedImg.src = artwork.src;
        zoomModal.style.display = 'flex';
    });
    closeZoom.addEventListener('click', () => {
        zoomModal.style.display = 'none';
    });
    zoomModal.addEventListener('click', (e) => {
        if(e.target === zoomModal) zoomModal.style.display = 'none';
    });

    accordionToggle.addEventListener('click', function() {
        if (accordionContent.style.display === "none") {
            accordionContent.style.display = "block";
            accordionToggle.innerText = "▲ Hide Product Details & Info";
        } else {
            accordionContent.style.display = "none";
            accordionToggle.innerText = "▼ View Product Details & Info";
        }
    });

    // Function to render cart contents and remove buttons
    function updateCartDisplay() {
        cartCount.innerText = cart.length;
        cartItemsList.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsList.innerHTML = '<p style="color:#777; text-align:center;">Your cart is empty.</p>';
            cartTotalSection.innerText = 'Total: €0.00';
            return;
        }

        let total = 0;
        cart.forEach((item, index) => {
            total += item.price;
            const row = document.createElement('div');
            row.className = 'cart-item-row';
            row.innerHTML = `
                <span>${item.name}</span>
                <span>€${item.price.toFixed(2)} <button class="remove-item-btn" data-index="${index}">Remove</button></span>
            `;
            cartItemsList.appendChild(row);
        });

        cartTotalSection.innerText = `Total (${cart.length} items): €${total.toFixed(2)}`;

        // Attach event listeners to remove buttons
        document.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const idx = parseInt(this.getAttribute('data-index'));
                cart.splice(idx, 1);
                updateCartDisplay();
            });
        });
    }

    cartTrigger.addEventListener('click', () => {
        updateCartDisplay();
        checkoutModal.style.display = 'flex';
    });
    closeModal.addEventListener('click', () => {
        checkoutModal.style.display = 'none';
    });
    finalizeOrder.addEventListener('click', () => {
        alert("Order simulated successfully! Recorded for study data.");
        checkoutModal.style.display = 'none';
    });

    let itemPrice = 10.90;
    let itemName = "Vitamin C Serum (30ml)";

    if (domain === 'skincare') {
        bodyTheme.className = "theme-skincare";
        screenTheme.style.background = "#fffbf7"; 
        headerTheme.style.background = "#f7f2ec";

        logo.innerText = "APHRODITE GLOW";
        artwork.src = "https://univemanagement.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_yWZy4n4v6gkVSHX"; 
        title.innerText = "Vitamin C Serum";
        subtitle.innerText = "Brightening facial serum | 30 ml";
        price.innerText = "€10.90";
        itemPrice = 10.90;
        itemName = "Vitamin C Serum";
        footer.innerText = "Dermatologist tested. Suitable for everyday skincare routine.";
        detailsText.innerHTML = "<strong>Ingredients:</strong> L-ascorbic acid, Hyaluronic acid, Botanical extracts.<br><strong>Directions:</strong> Apply 3-4 drops daily to clean skin before moisturizing.";

        if (condition === 'control') {
            cart = []; // Empty cart for control
            banner.style.display = 'none';
            addBtn.style.background = "#111111";
            addBtn.innerText = "ADD TO CART";
            selectorContainer.innerHTML = `<label>PRODUCT FORMAT:</label><p style="font-size:10px; color:#555;">Standard 30ml dropper bottle.</p>`;
        } else {
            // Pre-fill 4 items representing the ritual already secured
            cart = [
                { name: "Cleanser", price: 12.00 },
                { name: "Toner", price: 15.00 },
                { name: "Eye Cream", price: 18.00 },
                { name: "Moisturizer", price: 22.00 }
            ];
            banner.style.display = 'block';
            banner.innerHTML = "You're almost there. 4 of 5 products in your skincare ritual are already selected. Add this serum to complete your ritual.";
            progressFill.style.width = "80%"; 
            addBtn.style.background = "#5c4033"; 
            addBtn.innerText = "COMPLETE MY RITUAL";
            selectorContainer.innerHTML = `<label>ROUTINE STATUS:</label><p class="status-highlight">Step 5 of 5 (1 product remaining)</p>`;
        }
    } else {
        // K-Pop Domain
        bodyTheme.className = "theme-kpop";
        screenTheme.style.background = "#faf9fc"; 
        headerTheme.style.background = "#f3eff8";

        logo.innerText = "K-RECORDS";
        artwork.src = "https://univemanagement.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_4xBCFwpuRUQAzf4"; 
        title.innerText = "DNE - 1st Mini Album";
        subtitle.innerText = "Official Member Version | Limited Edition Set";
        price.innerText = "€25.99";
        itemPrice = 25.99;
        itemName = "DNE Mini Album (Version F)";
        footer.innerText = "All sales count towards Hanteo and Circle charts.";
        detailsText.innerHTML = "<strong>Album Tracklist:</strong><br>01. Somebody New<br>02. One More Chance<br>03. Lost Dream<br>04. Island<br><br><strong>Inclusions:</strong> CD, Photobook (80p), Lyric Booklet, 1 Random Photocard.";

        if (condition === 'control') {
            cart = []; // Empty cart for control
            banner.style.display = 'none';
            addBtn.style.background = "#111111";
            addBtn.innerText = "ADD TO CART";
            selectorContainer.innerHTML = `
                <label>SELECT MEMBER VERSION:</label>
                <div class="version-grid" id="kpop-versions">
                    <button class="ver-btn" data-v="A">Version A</button>
                    <button class="ver-btn" data-v="B">Version B</button>
                    <button class="ver-btn" data-v="C">Version C</button>
                    <button class="ver-btn" data-v="D">Version D</button>
                    <button class="ver-btn" data-v="E">Version E</button>
                    <button class="ver-btn selected" data-v="F">Version F</button>
                </div>
            `;
            setTimeout(() => {
                document.querySelectorAll('#kpop-versions .ver-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        document.querySelectorAll('#kpop-versions .ver-btn').forEach(b => b.classList.remove('selected'));
                        this.classList.add('selected');
                    });
                });
            }, 100);

        } else {
            // Pre-fill 5 items representing versions A through E already collected
            cart = [
                { name: "Album - Version A", price: 25.99 },
                { name: "Album - Version B", price: 25.99 },
                { name: "Album - Version C", price: 25.99 },
                { name: "Album - Version D", price: 25.99 },
                { name: "Album - Version E", price: 25.99 }
            ];
            banner.style.display = 'block';
            banner.innerHTML = "Only one version remains. 5 of 6 versions have already been collected. Add the final version to complete the collection.";
            progressFill.style.width = "83.3%"; 
            addBtn.style.background = "#8e24aa"; 
            addBtn.innerText = "COMPLETE MY COLLECTION";
            selectorContainer.innerHTML = `
                <label>COLLECTION STATUS (5/6 SECURED):</label>
                <div class="version-grid">
                    <button class="ver-btn secured" disabled>A ✓</button>
                    <button class="ver-btn secured" disabled>B ✓</button>
                    <button class="ver-btn secured" disabled>C ✓</button>
                    <button class="ver-btn secured" disabled>D ✓</button>
                    <button class="ver-btn secured" disabled>E ✓</button>
                    <button class="ver-btn target">F (Missing)</button>
                </div>
            `;
        }
    }

    cartCount.innerText = cart.length;

    // Add to cart pushes the item into the live cart array
    addBtn.addEventListener('click', function(e) {
        e.preventDefault();
        cart.push({ name: itemName, price: itemPrice });
        cartCount.innerText = cart.length;
        toast.innerText = `✓ Successfully added to cart!`;
        toast.style.display = 'block';
        setTimeout(() => toast.style.display = 'none', 2500);
    });
});
