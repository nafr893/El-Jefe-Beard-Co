function handleMutations(mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        if (document.getElementsByClassName('recurpay__widget').length > 0) {
          debugger;
         const container = document.querySelector('.shopify-product-form');
          if(container){
            const quantitySelector = container.querySelector('.quantity-selector');
            if(quantitySelector){
              container.querySelector("add-to-cart-component").appendChild(quantitySelector);
            }
          }
          handleRadioChange();
          recurpay_observer.disconnect();
          break;
        }
      }
    }
  }
  let recurpay_observer = new MutationObserver(handleMutations);
  recurpay_observer.observe(document.body, { childList: true, subtree: true });