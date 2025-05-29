function handleMutations(mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      if (document.getElementsByClassName('recurpay__widget').length > 0) {
        const container = document.querySelector('.shopify-product-form');
        if (container) {
          const quantitySelector = container.querySelector('.quantity-selector');
          if (quantitySelector) {
            const addToCart = container.querySelector("add-to-cart-component");

            const customDiv = document.createElement('div');
            customDiv.className = 'quantity-cart-wrapper';
            // customDiv.textContent = 'This is a custom div';

            addToCart.insertBefore(customDiv, quantitySelector);
            addToCart.appendChild(quantitySelector);
          }
        }
        recurpay_observer.disconnect();
        break;
      }
    }
  }
}

let recurpay_observer = new MutationObserver(handleMutations);
recurpay_observer.observe(document.body, { childList: true, subtree: true });
