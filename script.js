document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const domain = urlParams.get('domain') || 'kpop';       
    const condition = urlParams.get('condition') || 'treatment'; 

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
    const accordionToggle = document.getElementById('accordion-toggle');
    const accordionContent = document.getElementById('accordion-content');
    const detailsText = document.getElementById('details-text');

    let cartItems = 0;

    // Accordion Toggle
    accordionToggle.addEventListener('click', function() {
        if (accordionContent.style.display === "none") {
            accordionContent.style.display = "block";
            accordionToggle.innerText = "▲ Hide Product Details & Info";
        } else {
            accordionContent.style.display = "none";
            accordionToggle.innerText = "▼ View Product Details & Info";
        }
    });

    // Cart Modal Trigger
    cartTrigger.addEventListener('click', () => {
        checkoutModal.style.display = 'flex';
    });
    closeModal.addEventListener('click', () => {
        checkoutModal.style.display = 'none';
    });
    finalizeOrder.addEventListener('click', () => {
        alert("Order simulated successfully! Recorded for study data.");
        checkoutModal.style.display = 'none';
    });

    if (domain === 'skincare') {
        logo.innerText = "APHRODITE GLOW";
        artwork.src = "https://univemanagement.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_HLnEaeAhgqayhWU";
        title.innerText = "Vitamin C Serum";
        subtitle.innerText = "Brightening facial serum | 30 ml";
        price.innerText = "€10.90";
        footer.innerText = "Dermatologist tested. Suitable for everyday skincare routine.";
        detailsText.innerHTML = "<strong>Ingredients:</strong> L-ascorbic acid, Hyaluronic acid, Botanical extracts.<br><strong>Directions:</strong> Apply 3-4 drops daily to clean skin before moisturizing.";

        if (condition === 'control') {
            banner.style.display = 'none';
            addBtn.style.background = "#111111";
            addBtn.innerText = "ADD TO CART";
            selectorContainer.innerHTML = `<label>PRODUCT FORMAT:</label><p style="font-size:10px; color:#555;">Standard 30ml dropper bottle.</p>`;
        } else {
            banner.style.display = 'block';
            banner.innerHTML = "COMPLETE YOUR ROUTINE: You already have 4 of 5 products. Add the serum to complete it.";
            progressFill.style.width = "80%"; // 4 of 5 complete
            addBtn.style.background = "#8e24aa";
            addBtn.innerText = "COMPLETE MY RITUAL";
            selectorContainer.innerHTML = `<label>ROUTINE STATUS:</label><p style="font-size:10px; color:#4a148c; font-weight:bold;">Step 5 of 5 (1 product remaining)</p>`;
        }
    } else {
        // K-POP DOMAIN
        logo.innerText = "K-RECORDS";
        artwork.src = "https://univemanagement.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_4xBCFwpuRUQAzf4";
        title.innerText = "DNE - 1st Mini Album";
        subtitle.innerText = "Official Member Version | Limited Edition Set";
        price.innerText = "€25.99";
        footer.innerText = "All sales count towards Hanteo and Circle charts.";
        detailsText.innerHTML = "<strong>Album Tracklist:</strong><br>01. Somebody New<br>02. One More Chance<br>03. Lost Dream<br>04. Island<br><br><strong>Inclusions:</strong> CD, Photobook (80p), Lyric Booklet, 1 Random Photocard.";

        if (condition === 'control') {
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
            banner.style.display = 'block';
            banner.innerHTML = "COMPLETE YOUR COLLECTION: You already have 5 of 6 versions. Add Member F to complete it.";
            progressFill.style.width = "83.3%"; // 5 of 6 complete
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

    // Add to Cart action increments live cart counter
    addBtn.addEventListener('click', function(e) {
        e.preventDefault();
        cartItems++;
        cartCount.innerText = cartItems;
        toast.innerText = `✓ Added to cart! (Cart items: ${cartItems})`;
        toast.style.display = 'block';
        setTimeout(() => toast.style.display = 'none', 2500);
    });
});
