// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  //alert('Calculating subtotal, yey!' ) ;
  /*console.log('Calculating subtotal, yey!' );
  console.log(price);
  console.log(quantity);
  console.log(subtotal);*/
  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

   /*const singleProduct = document.querySelector('.product');
 updateSubtotal(singleProduct);*/

  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  for(let i= 0; i < products.length; i++){
    updateSubtotal(products[i]);
  }


  // ITERATION 3
  const productes = document.querySelectorAll('.product')
  const total = document.querySelector('#total-value > span');
  let totalPrice = 0;
  productes.forEach(product => {
    totalPrice += updateSubtotal(product)
  })
  total.innerHTML = totalPrice;
  //... your code goes here
}

// ITERATION 4
const productes = document.querySelectorAll('.product')
function removeProduct(event) {
  const target = event.currentTarget;
  let singleProduct = target.parentNode.parentNode;
  singleProduct.parentNode.removeChild(singleProduct);
  calculateAll();
  console.log('The target in remove is:', target);

  //... your code goes here
}

// ITERATION 5

function createProduct() {
 
  console.log("Entra a método crear nuevo producto");
  const newName = document.querySelector('.create-product input[type="text"]').value;
  const newPrice = document.querySelector('.create-product input[type="number"]').value;
  const parent = document.getElementsByTagName('tbody')[0];
  const newNameProductRow = document.createElement("tr");
  newNameProductRow.className = 'product';

  const rowTemplate = `<td class="name">
  <span>${newName}</span>
  </td>
  <td class="price">$<span>${newPrice}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`

  parent.appendChild(newNameProductRow);
  newNameProductRow.innerHTML = rowTemplate;
  const removeEl = document.getElementsByClassName('btn-remove');
  for(let i=0; i<removeEl.length; i++){
    removeEl[i].addEventListener('click', removeProduct);
  }
  
  document.querySelector('.create-product input[type="text"]').value = "";
  document.querySelector('.create-product input[type="number"]').value = 0;

  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
 
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeEl = document.getElementsByClassName('btn-remove');
  for(let i=0; i<removeEl.length; i++){
    removeEl[i].addEventListener('click', removeProduct);
  }

  const addSingleProduct = document.getElementById('create');
  addSingleProduct.addEventListener('click', createProduct);


  //... your code goes here
});
