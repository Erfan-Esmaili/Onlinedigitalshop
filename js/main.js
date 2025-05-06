import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import {Products} from "../components/products.js"
import { ProductOffcanvas } from "../components/productoffcanvas.js";
import * as utils from "../js/utils/productUtils.js";


window.customElements.define('site-header' , Header)
window.customElements.define('site-footer' , Footer)
window.customElements.define('site-product' , Products)
window.customElements.define("product-offcanvas", ProductOffcanvas);

let $ = document;
const siteHeader = $.querySelector('site-header')
const siteProduct = $.querySelectorAll('site-product')



window.addEventListener("DOMContentLoaded", () => {
  const productBody = utils.getProductBody();
  const priceSum = utils.getPriceSum();
  const siteHeader = utils.getSiteHeader();
  const badgeBasket = utils.getBadgeBasket();
  const productTag = utils.getProductTags();

  console.log(priceSum);
  console.log(siteHeader);
  console.log(badgeBasket);
  console.log(productTag);
  

    //?? clikc on product and forward to product page
    siteProduct.forEach((product)=>{
    let imgContentProduct= product.shadowRoot.querySelector('.carousel-inner')
        imgContentProduct.addEventListener('click' , ()=>{
              const img1 = product.getAttribute('img-slider1')
              const img2 = product.getAttribute('img-slider2')
              const img3 = product.getAttribute('img-slider3')
              const nameProduct = product.querySelector('p[slot="name-product"]').textContent.trim()
              const price = product.querySelector('#price').textContent.trim()
              
              let productData = {
                img1,
                img2,
                img3,
                nameProduct,
                price
              }
                localStorage.setItem('product' , JSON.stringify(productData))
              console.log(productData);
              window.location.href='selectProduct.html'    
              

        })
    })
    
  // add to basket


  utils.handleProductTag(
    productTag,
    siteHeader,
    productBody,
    priceSum,
    badgeBasket
  );

  utils.handleProductBody;
  
  
  //?? viewShoppingCart & send product to basketpage

  utils.handleViewCartButton();


});




