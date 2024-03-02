async function fetchAndDisplayData() {
    try {
      let res = await fetch('https://fakestoreapi.com/products');
      let products = await res.json();
  
      const productListElement = document.querySelector('.all');
      console.log(productListElement)
      products.forEach(
(product)=>{
let card=document.createElement('div');
card.classList.add('card');

let tit=document.createElement('div');
tit.innerText=product.title;
tit.classList.add('title');
card.appendChild(tit);

let pric=document.createElement('div');
pric.innerText=`price = ${product.price}`;
pric.classList.add('price');
card.appendChild(pric);

let cate=document.createElement('div');
cate.innerText=   `Category :${product.category}`;
cate.classList.add('category');
card.appendChild(cate);

let img=document.createElement('div');
img.classList.add('image');

let newimg=document.createElement('img');
newimg.src=product.image;
img.appendChild(newimg);

card.appendChild(img);

// let pric=document.createElement('div');
// pric.innerText="price is "+product.price;
// price.classList.add("price");
// card.appendChild(pric);

// console.log(tit.innerText);
productListElement.appendChild(card);


}
      )
  
    //   products.forEach((product) => {
    //     const listItem = document.createElement('li');
    //     listItem.classList.add("rice");
    //     listItem.textContent = product.title;
    //     productListElement.appendChild(listItem);
    //   });
  
      console.log(products);
      return products;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
//   fetchAndDisplayData();
  
  // Call the function when the page has loaded
  document.addEventListener('DOMContentLoaded', fetchAndDisplayData);
  