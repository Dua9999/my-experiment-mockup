document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById('add-to-cart-btn');
    const modeSelect = document.getElementById('purchase-mode');
    const toast = document.getElementById('cart-toast');

    let interactionLog = {
        clickedCart: false,
        selectedMode: 'single',
        timestamp: null
    };

    addBtn.addEventListener('click', function(e) {
        e.preventDefault();
        interactionLog.clickedCart = true;
        interactionLog.selectedMode = modeSelect.value;
        interactionLog.timestamp = new Date().toISOString();

        if (interactionLog.selectedMode === "single") {
            toast.innerText = '✓ Final Version F Added to Cart ($25.99)! Collection Complete!';
        } else {
            toast.innerText = '✓ Full 6-Member Box Set Added to Cart ($155.94)!';
        }
        
        toast.style.display = 'block';

        // Optional: Send data back to Qualtrics parent window if embedded via iframe
        if (window.parent && window.parent !== window) {
            window.parent.postMessage(interactionLog, "*");
        }
    });
});
