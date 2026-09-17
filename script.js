document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const domain = urlParams.get('domain') || 'kpop';       // 'kpop' or 'skincare'
    const condition = urlParams.get('condition') || 'treatment'; // 'control' or 'treatment'

    const logo = document.getElementById('store-logo');
    const banner = document.getElementById('framing-banner');
    const artwork = document.getElementById('product-artwork');
    const title = document.getElementById('prod-title');
    const subtitle = document.getElementById('prod-subtitle');
    const price = document.getElementById('prod-price');
    const selectorContainer = document.getElementById('selector-container');
    const modeSelect = document.getElementById('purchase-mode');
    const addBtn = document.getElementById('add-to-cart-btn');
    const toast = document.getElementById('cart-toast');
    const footer = document.getElementById('footer-text');

    if (domain === 'skincare') {
        logo.innerText = "APHRODITE GLOW";
        artwork.src = "https://univemanagement.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_... (or your direct image URL)"; // Put your skincare image URL here
        title.innerText = "Vitamin C Serum";
        subtitle.innerText = "Brightening facial serum | 30 ml";
        price.innerText = "€10.90";
        footer.innerText = "Dermatologist tested. Suitable for everyday skincare routine.";

        if (condition === 'control') {
            banner.style.display = 'none';
            addBtn.style.background = "#111111";
            addBtn.innerText = "ADD TO CART";
            selectorContainer.innerHTML = `<label>PRODUCT FORMAT:</label><p style="font-size:11px; color:#555;">Standard 30ml dropper bottle.</p>`;
            modeSelect.innerHTML = `<option value="1">Buy 1 Bottle (€10.90)</option>`;
        } else {
            banner.style.display = 'block';
            banner.innerHTML = "COMPLETE YOUR ROUTINE: You already have 4 of 5 products. Add the serum to complete it.";
            addBtn.style.background = "#8e24aa";
            addBtn.innerText = "COMPLETE MY RITUAL";
            selectorContainer.innerHTML = `<label>ROUTINE STATUS:</label><p style="font-size:11px; color:#4a148c; font-weight:bold;">Step 3 of 5 (1 product remaining)</p>`;
            modeSelect.innerHTML = `
                <option value="single">Buy Final Serum (€10.90)</option>
                <option value="bundle">Buy Full 5-Step Routine (€54.50)</option>
            `;
        }
    } else {
        // K-POP DOMAIN
        logo.innerText = "K-RECORDS";
        // Paste your K-Pop image URL here:
        artwork.src = "YOUR_KPOP_IMAGE_URL_HERE"; 
        title.innerText = "DNE - 1st Mini Album";
        subtitle.innerText = "Official Member Version | Limited Edition Set";
        price.innerText = "€25.99";
        footer.innerText = "All sales count towards Hanteo and Circle charts. Pre-order benefits are limited.";

        if (condition === 'control') {
            banner.style.display = 'none';
            addBtn.style.background = "#111111";
            addBtn.innerText = "ADD TO CART";
            selectorContainer.innerHTML = `
                <label>SELECT MEMBER VERSION:</label>
                <div class="version-grid">
                    <button class="ver-btn" style="border:1px solid #ccc; background:#f9f9f9;">Version A</button>
                    <button class="ver-btn" style="border:1px solid #ccc; background:#f9f9f9;">Version B</button>
                    <button class="ver-btn" style="border:1px solid #ccc; background:#f9f9f9;">Version C</button>
                    <button class="ver-btn" style="border:1px solid #ccc; background:#f9f9f9;">Version D</button>
                    <button class="ver-btn" style="border:1px solid #ccc; background:#f9f9f9;">Version E</button>
                    <button class="ver-btn" style="border:2px solid #111; background:#e0e0e0; font-weight:bold;">Version F</button>
                </div>
            `;
            modeSelect.innerHTML = `<option value="1">Buy 1 Album (€25.99)</option>`;
        } else {
            banner.style.display = 'block';
            banner.innerHTML = "COMPLETE YOUR COLLECTION: You already have 5 of 6 versions. Add Member F to complete it.";
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
            modeSelect.innerHTML = `
                <option value="single">Complete Set: Buy Final Version F (€25.99)</option>
                <option value="bundle">Buy Full 6-Member Box Set (€155.94)</option>
            `;
        }
    }

    // Button click action
    addBtn.addEventListener('click', function(e) {
        e.preventDefault();
        toast.innerText = `✓ Successfully added to cart!`;
        toast.style.display = 'block';
        setTimeout(() => toast.style.display = 'none', 3000);
    });
});
