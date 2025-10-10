function handleMutations(mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      if (document.getElementsByClassName('recurpay__widget').length > 0) {
        const container = document.querySelector('.shopify-product-form');
        if (container) {
          const quantitySelector = container.querySelector('.quantity-selector');
          const addToCartButton = container.querySelector('.add-to-cart-button');
          // Only proceed if both elements exist and are not already wrapped
          if (quantitySelector && addToCartButton && !quantitySelector.parentElement.classList.contains('quantity-cart-btn-wrapper')) {
            // Create wrapper
            const wrapperDiv = document.createElement('div');
            wrapperDiv.className = 'quantity-cart-btn-wrapper';
            // Insert wrapper before quantitySelector
            container.insertBefore(wrapperDiv, quantitySelector);
            wrapperDiv.appendChild(quantitySelector);
            wrapperDiv.appendChild(addToCartButton);
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
