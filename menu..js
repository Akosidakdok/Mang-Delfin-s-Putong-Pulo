// Script to open modal with item details
const products = document.querySelectorAll('.product-card');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const modalName = document.querySelector('.modal-name');
const modalDesc = document.querySelector('.modal-desc');
const modalPrice = document.querySelector('.modal-price');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.modal-close');

// Sample product details (can be improved using data-* attributes or API)
const productDetails = {
  "Kutsinta": {
    description: "Sticky, brown rice cake with a chewy texture, topped with grated coconut.",
    price: "₱125.00"
  },
  "Putong Polo Brown": {
    description: "Traditional steamed rice cake made with brown sugar for a richer flavor, topped with grated coconut.",
    price: "₱125.00"
  },
  "Putong Polo White": {
    description: "Traditional steamed rice cake, soft and fluffy, topped with grated coconut.",
    price: "₱125.00"
  },
  "Putong Polo Bilao Assorted": {
    description: "A delightful mix of kutsinta, and classic white and brown Putong Polo. One day advance order required.",
    price: "₱1,580.00"
  },
  "Cassava Cake": {
    description: "Moist and dense cake made from grated cassava, coconut milk, and creamy topping.",
    price: "₱120.00"
  },
  "Pichi-Pichi": {
    description: "Soft, gelatinous cassava dessert rolled in grated coconut, mildly sweet and chewy.",
    price: "₱120.00"
  },
  "Pancit Malabon Solo": {
    description: "Savory noodle dish topped with shrimp, egg, vegetables, and flavorful seafood sauce.",
    price: "₱85.00"
  },
  "Pancit Malabon for 5inch": {
    description: "Good for 5 persons. Savory noodle dish topped with shrimp, egg, vegetables, and flavorful seafood sauce.",
    price: "₱425.00"
  },
  "Pancit Malabon for 7inch": {
    description: "Good for 7 persons. Savory noodle dish topped with shrimp, egg, vegetables, and flavorful seafood sauce.",
    price: "₱535.00"
  },
  "Pancit Malabon for 11inch": {
    description: "Good for 11 persons. Savory noodle dish topped with shrimp, egg, vegetables, and flavorful seafood sauce.",
    price: "₱710.00"
  },
  "Pancit Malabon for 16inch": {
    description: "Good for 16 persons. Savory noodle dish topped with shrimp, egg, vegetables, and flavorful seafood sauce.",
    price: "₱1010.00"
  },
  "Pancit Malabon for 21inch": {
    description: "Good for 21 persons. Savory noodle dish topped with shrimp, egg, vegetables, and flavorful seafood sauce.",
    price: "₱1270.00"
  },
  "Suman sa Lihia": {
    description: "Sticky rice delicacy infused with lye, wrapped in banana leaves and best paired with sugar or latik.",
    price: "₱40.00"
  },
  "Relyenong Bangus": {
    description: "Deboned milkfish stuffed with seasoned vegetables and spices, then fried to perfection.",
    price: "₱300.00"
  },
  "Tokneneng": {
    description: "A crispy battered chicken or duck egg snack that's perfect with spiced vinegar.",
    price: "₱15.00"
  },
  "Kwek-Kwek": {
    description: "Deep-fried quail eggs coated in orange batter, best enjoyed with a flavorful dipping sauce.",
    price: "₱6.25"
  },
  "Sapin-Sapin Solo":{
    description: "Vibrant, chewy, and delicious — a sweet Filipino classic in every bite!",
    price: "₱50.00"
  },
  "Sapin-Sapin Box":{
    description: "Vibrant, chewy, and delicious — a sweet Filipino classic in every bite!",
    price: "₱175.00"
  },
  
  
};


products.forEach(product => {
  product.addEventListener('click', () => {
    const img = product.querySelector('img').src;
    const name = product.querySelector('.product-name').textContent;
    
    modalImg.src = img;
    modalName.textContent = name;
    modalDesc.textContent = productDetails[name]?.description || "No description available.";
    modalPrice.textContent = productDetails[name]?.price || "";

    modal.classList.add('show');
    overlay.classList.add('show');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  overlay.classList.remove('show');
});
